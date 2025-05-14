from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import openai
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

# Initialize OpenAI client
openai.api_key = os.getenv("OPENAI_API_KEY")

class AnalysisRequest(BaseModel):
    resume_text: str
    job_description: str

class AnalysisResponse(BaseModel):
    match_score: int
    suggestions: List[str]
    tailored_resume: str

@router.post("/analyze", response_model=AnalysisResponse)
async def analyze_resume(request: AnalysisRequest):
    try:
        # Check if API key is set
        if not openai.api_key:
            raise HTTPException(
                status_code=500,
                detail="OpenAI API key not found. Please set OPENAI_API_KEY in .env file"
            )

        # Create the prompt for GPT
        prompt = f"""Analyze this resume against the job description and provide:
1. A match score (0-100)
2. Specific suggestions to improve the resume
3. A tailored version of the resume that better matches the job description only change the text not the format

Resume:
{request.resume_text}

Job Description:
{request.job_description}

Provide the analysis in the following format:
MATCH_SCORE: [number]
SUGGESTIONS:
- [suggestion 1]
- [suggestion 2]
- [suggestion 3]
TAILORED_RESUME:
[tailored version of the resume]"""

        # Call OpenAI API
        try:
            response = await openai.ChatCompletion.acreate(
                model="gpt-3.5-turbo",  # Using the cheapest available model
                messages=[
                    {"role": "system", "content": "You are an expert resume analyzer and career coach."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=2000
            )
        except Exception as api_error:
            raise HTTPException(
                status_code=500,
                detail=f"OpenAI API error: {str(api_error)}"
            )

        # Parse the response
        analysis_text = response.choices[0].message.content

        try:
            # Extract match score
            match_score_line = [line for line in analysis_text.split('\n') if line.startswith('MATCH_SCORE:')][0]
            match_score = int(match_score_line.split(':')[1].strip())

            # Extract suggestions
            suggestions_start = analysis_text.find('SUGGESTIONS:')
            tailored_start = analysis_text.find('TAILORED_RESUME:')
            suggestions_text = analysis_text[suggestions_start:tailored_start].strip()
            suggestions = [s.strip('- ') for s in suggestions_text.split('\n') if s.strip().startswith('-')]

            # Extract tailored resume
            tailored_resume = analysis_text[tailored_start:].split(':', 1)[1].strip()

            return AnalysisResponse(
                match_score=match_score,
                suggestions=suggestions,
                tailored_resume=tailored_resume
            )
        except Exception as parse_error:
            raise HTTPException(
                status_code=500,
                detail=f"Error parsing AI response: {str(parse_error)}. Raw response: {analysis_text}"
            )

    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unexpected error: {str(e)}"
        ) 