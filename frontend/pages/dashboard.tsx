import React, { useState } from 'react';
import Head from 'next/head';
import BackButton from '../components/BackButton';

const Dashboard: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null); // Clear any previous errors
    }
  };

  const handleAnalyze = async () => {
    if (!file || !jobDescription) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      // First, parse the PDF
      const formData = new FormData();
      formData.append('file', file);

      const parseResponse = await fetch('http://localhost:8000/pdf/parse', {
        method: 'POST',
        body: formData,
      });

      if (!parseResponse.ok) {
        throw new Error('Failed to parse PDF');
      }

      const parsedData = await parseResponse.json();
      const resumeText = parsedData.text;

      // Send to AI analysis endpoint
      const analysisResponse = await fetch('http://localhost:8000/ai/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resume_text: resumeText,
          job_description: jobDescription,
        }),
      });

      if (!analysisResponse.ok) {
        throw new Error('Failed to analyze resume');
      }

      const analysisData = await analysisResponse.json();

      // Generate PDF from tailored text
      const pdfResponse = await fetch('http://localhost:8000/pdf/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tailored_text: analysisData.tailored_resume,
          original_pdf_base64: parsedData.original_pdf_base64
        }),
      });

      if (!pdfResponse.ok) {
        throw new Error('Failed to generate PDF');
      }

      const pdfData = await pdfResponse.json();

      setAnalysis({
        matchScore: analysisData.match_score,
        suggestions: analysisData.suggestions,
        parsedText: resumeText,
        tailoredResume: analysisData.tailored_resume,
        pdfBase64: pdfData.pdf_base64,
        pdfFilename: pdfData.filename
      });
    } catch (error) {
      console.error('Analysis failed:', error);
      setError(error instanceof Error ? error.message : 'An error occurred during analysis');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const downloadPDF = () => {
    if (!analysis?.pdfBase64) return;

    // Convert base64 to blob
    const byteCharacters = atob(analysis.pdfBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });

    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = analysis.pdfFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Dashboard - Your Company</title>
      </Head>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <BackButton />
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Resume Analysis Dashboard</h1>
          
          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          {/* Job Description Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full h-40 p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Analysis Button */}
          <button
            onClick={handleAnalyze}
            disabled={!file || !jobDescription || isAnalyzing}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
          </button>

          {/* Results Section */}
          {analysis && (
            <div className="bg-white rounded-lg shadow p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
              <div className="mb-4">
                <span className="text-lg font-medium">Match Score: </span>
                <span className="text-2xl font-bold text-blue-600">{analysis.matchScore}%</span>
              </div>
              <div className="mb-6">
                <h3 className="font-medium mb-2">Suggestions:</h3>
                <ul className="list-disc pl-5">
                  {analysis.suggestions.map((suggestion: string, index: number) => (
                    <li key={index} className="text-gray-700">{suggestion}</li>
                  ))}
                </ul>
              </div>
              
              {/* Download Button */}
              <div className="mb-6">
                <button
                  onClick={downloadPDF}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                >
                  Download Tailored Resume (PDF)
                </button>
              </div>
              
              {/* Parsed Text Section */}
              <div className="mt-6 border-t pt-6">
                <h3 className="font-medium mb-2">Original Resume Text:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                    {analysis.parsedText}
                  </pre>
                </div>
              </div>

              {/* Tailored Resume Section */}
              <div className="mt-6 border-t pt-6">
                <h3 className="font-medium mb-2">Tailored Resume:</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                    {analysis.tailoredResume}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 