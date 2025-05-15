from fastapi import APIRouter, UploadFile, File, HTTPException
from PyPDF2 import PdfReader, PdfWriter
import io
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
import base64
from pydantic import BaseModel

router = APIRouter()

class PDFGenerateRequest(BaseModel):
    tailored_text: str
    original_pdf_base64: str

@router.post("/parse")
async def parse_pdf(file: UploadFile = File(...)):
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400, detail="File must be a PDF")
    
    try:
        # Read the uploaded file
        contents = await file.read()
        pdf_file = io.BytesIO(contents)
        
        # Parse the PDF
        pdf_reader = PdfReader(pdf_file)
        text = ""
        
        # Extract text from each page
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
        
        # Convert the original PDF to base64 for later use
        pdf_file.seek(0)
        pdf_base64 = base64.b64encode(pdf_file.getvalue()).decode()
        
        return {
            "filename": file.filename,
            "text": text,
            "pages": len(pdf_reader.pages),
            "original_pdf_base64": pdf_base64
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing PDF: {str(e)}")
    finally:
        await file.close()

@router.post("/generate")
async def generate_pdf(request: PDFGenerateRequest):
    try:
        # Decode the original PDF
        original_pdf_bytes = base64.b64decode(request.original_pdf_base64)
        original_pdf = io.BytesIO(original_pdf_bytes)
        
        # Read the original PDF
        pdf_reader = PdfReader(original_pdf)
        pdf_writer = PdfWriter()
        
        # Create a new PDF with the tailored text
        packet = io.BytesIO()
        c = canvas.Canvas(packet, pagesize=letter)
        
        # Set up text properties
        c.setFont("Helvetica", 11)  # Default font and size
        c.setFillColor(colors.black)
        
        # Split the text into sections
        sections = request.tailored_text.split('\n\n')
        
        # Starting position (top of the page)
        y_position = letter[1] - 72  # Start from top margin
        
        # Write each section
        for section in sections:
            if section.strip():
                # Check if it's a heading
                if section.isupper() or section.strip().endswith(':'):
                    c.setFont("Helvetica-Bold", 14)
                else:
                    c.setFont("Helvetica", 11)
                
                # Split into lines and write each line
                lines = section.split('\n')
                for line in lines:
                    if line.strip():
                        # Check if we need a new page
                        if y_position < 72:  # Bottom margin
                            c.showPage()
                            y_position = letter[1] - 72
                        
                        # Write the line
                        c.drawString(72, y_position, line.strip())
                        y_position -= 14  # Line spacing
                
                # Add extra space after section
                y_position -= 10
        
        c.save()
        
        # Move to the beginning of the StringIO buffer
        packet.seek(0)
        
        # Create a new PDF with ReportLab
        new_pdf = PdfReader(packet)
        
        # Merge the original PDF with the new text
        for i in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[i]
            if i < len(new_pdf.pages):
                page.merge_page(new_pdf.pages[i])
            pdf_writer.add_page(page)
        
        # Write the output
        output = io.BytesIO()
        pdf_writer.write(output)
        output.seek(0)
        
        # Convert to base64
        pdf_base64 = base64.b64encode(output.getvalue()).decode()
        
        return {
            "pdf_base64": pdf_base64,
            "filename": "tailored_resume.pdf"
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating PDF: {str(e)}")
    finally:
        if 'original_pdf' in locals():
            original_pdf.close()
        if 'packet' in locals():
            packet.close()
        if 'output' in locals():
            output.close() 