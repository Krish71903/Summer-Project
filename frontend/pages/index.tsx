import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Match Your Resume with
              <span className="text-blue-600"> AI-Powered</span> Precision
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get personalized insights and suggestions to optimize your resume for your dream job.
              Our AI analyzes your resume and matches it with job descriptions in real-time.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/signup"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Get Started Free
              </Link>
              <Link 
                href="/demo"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium border border-blue-600"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose ResuMatch AI?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our platform offers powerful features to help you land your dream job
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Resume Analysis</h3>
              <p className="text-gray-600">
                Get detailed insights about your resume's strengths and areas for improvement
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Job Matching</h3>
              <p className="text-gray-600">
                Find the perfect job matches based on your skills and experience
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Suggestions</h3>
              <p className="text-gray-600">
                Receive personalized recommendations to improve your resume
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Resume?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of job seekers who have improved their chances of landing their dream job
            </p>
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 