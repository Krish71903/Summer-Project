import React from 'react';
import Head from 'next/head';
import BackButton from '../components/BackButton';

const features = [
  {
    title: 'AI-Powered Resume Analysis',
    description: 'Get detailed insights into how well your resume matches job descriptions with our advanced AI-powered analysis.',
    subFeatures: [
      'Keyword optimization',
      'ATS compatibility check',
      'Format and structure analysis',
      'Content quality assessment',
      'Industry-specific recommendations'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Smart Job Matching',
    description: 'Our AI algorithm analyzes your skills and experience to find the best job matches for your profile.',
    subFeatures: [
      'Real-time job matching',
      'Skill gap analysis',
      'Career path suggestions',
      'Salary range insights',
      'Company culture matching'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Real-time Feedback',
    description: 'Receive instant feedback on your resume with actionable suggestions to improve your chances of landing interviews.',
    subFeatures: [
      'Instant improvement suggestions',
      'Grammar and spelling check',
      'Impact scoring',
      'Competitor analysis',
      'Industry benchmark comparison'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Career Insights',
    description: 'Get valuable insights into industry trends and salary expectations to make informed career decisions.',
    subFeatures: [
      'Industry trend analysis',
      'Salary benchmarking',
      'Skill demand tracking',
      'Career growth predictions',
      'Market opportunity alerts'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Security',
    description: 'Your data is protected with enterprise-grade security and privacy measures.',
    subFeatures: [
      'End-to-end encryption',
      'GDPR compliance',
      'Regular security audits',
      'Data backup and recovery',
      'Access control management'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: '24/7 Expert Support',
    description: 'Get help whenever you need it with our dedicated support team.',
    subFeatures: [
      'Live chat support',
      'Email assistance',
      'Video consultations',
      'Knowledge base access',
      'Community forums'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    content: "ResuMatch helped me land my dream job at a top tech company. The AI analysis was spot on!",
    author: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Corp"
  },
  {
    content: "The career insights feature gave me the confidence to negotiate a 30% salary increase.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "Innovate Inc"
  },
  {
    content: "I've never seen such detailed resume feedback. It's like having a career coach in your pocket.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Growth Co"
  }
];

const comparisons = [
  {
    feature: "Resume Analysis",
    resumatch: "AI-powered, instant feedback",
    traditional: "Manual review, days to weeks"
  },
  {
    feature: "Job Matching",
    resumatch: "Smart algorithm, real-time matches",
    traditional: "Manual search, time-consuming"
  },
  {
    feature: "Career Guidance",
    resumatch: "Data-driven insights",
    traditional: "Generic advice"
  },
  {
    feature: "Support",
    resumatch: "24/7 AI + human support",
    traditional: "Limited hours, human only"
  }
];

const Features: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Features - ResuMatch</title>
        <meta name="description" content="Discover how ResuMatch's AI-powered features can transform your career journey with advanced resume analysis, smart job matching, and real-time feedback." />
      </Head>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <BackButton />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Transform Your Career with AI
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Experience the future of career development with our cutting-edge features
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  AI-Powered Resume Analysis
                </h2>
                <p className="text-gray-600 mb-6">
                  Our advanced AI analyzes your resume in real-time, providing detailed feedback and suggestions to help you stand out to employers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Instant feedback on resume content
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ATS compatibility check
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Industry-specific recommendations
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-indigo-50 p-8 flex items-center justify-center">
                <img
                  src="/images/resume-analysis-demo.png"
                  alt="Resume Analysis Demo"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.subFeatures.map((subFeature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {subFeature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose ResuMatch?
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ResuMatch</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional Methods</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comparisons.map((comparison, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{comparison.feature}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comparison.resumatch}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comparison.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to transform your career?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join thousands of professionals who have already improved their careers with ResuMatch
          </p>
          <div className="mt-8">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get Started Free
            </a>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 