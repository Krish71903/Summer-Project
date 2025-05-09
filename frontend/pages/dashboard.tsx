import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file || !jobDescription) return;

    setIsAnalyzing(true);
    try {
      // TODO: Implement resume analysis API call
      // Mock response for now
      setAnalysis({
        matchScore: 85,
        suggestions: [
          'Add more technical skills',
          'Quantify your achievements',
          'Include relevant certifications'
        ]
      });
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Resume Analysis Dashboard</h1>
        
        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
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
            <div>
              <h3 className="font-medium mb-2">Suggestions:</h3>
              <ul className="list-disc pl-5">
                {analysis.suggestions.map((suggestion: string, index: number) => (
                  <li key={index} className="text-gray-700">{suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 