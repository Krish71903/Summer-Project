import React, { useState } from 'react';
import Head from 'next/head';
import BackButton from '../components/BackButton';

const faqs = [
  {
    question: 'How does the resume analysis work?',
    answer: 'Our AI-powered system analyzes your resume against job descriptions to identify key matches and gaps. It evaluates your skills, experience, and qualifications to provide actionable feedback for improvement.'
  },
  {
    question: 'What file formats are supported for resume upload?',
    answer: 'We currently support PDF, DOC, and DOCX file formats. For best results, we recommend using PDF format as it maintains the most consistent formatting.'
  },
  {
    question: 'How accurate is the resume analysis?',
    answer: 'Our analysis is powered by advanced AI algorithms that have been trained on millions of successful resumes and job descriptions. While it provides highly accurate insights, we recommend using it as a guide alongside professional advice.'
  },
  {
    question: 'Is my resume data secure?',
    answer: 'Yes, we take data security very seriously. All uploaded resumes are encrypted, stored securely, and never shared with third parties. We comply with industry-standard security protocols and data protection regulations.'
  },
  {
    question: 'How long does the analysis take?',
    answer: 'The analysis typically takes less than a minute to complete. You\'ll receive detailed feedback and suggestions immediately after uploading your resume and job description.'
  },
  {
    question: 'Can I analyze my resume against multiple job descriptions?',
    answer: 'Yes, you can analyze your resume against multiple job descriptions. This helps you tailor your resume for different positions and industries.'
  },
  {
    question: 'What kind of feedback will I receive?',
    answer: 'You\'ll receive comprehensive feedback including: skill match analysis, keyword optimization suggestions, formatting recommendations, and specific improvements to increase your chances of getting interviews.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service. Contact our support team to process your refund request.'
  },
  {
    question: 'How much does the resume analysis service cost?',
    answer: 'Our basic resume analysis is free. For advanced features and detailed feedback, we offer premium plans starting at $9.99/month. Check our pricing page for more details.'
  },
  {
    question: 'How do I create an account?',
    answer: 'You can create an account by clicking the "Sign Up" button on our homepage. Follow the prompts to enter your email, create a password, and verify your account.'
  },
  {
    question: 'What should I do if I encounter an error during analysis?',
    answer: 'If you encounter an error, please try refreshing the page or clearing your browser cache. If the issue persists, contact our support team with details of the error for assistance.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>FAQ - Your Company</title>
        <meta name="description" content="Frequently asked questions about our resume analysis service" />
      </Head>

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <BackButton />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to know about our resume analysis service
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'pb-4' : 'h-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Still have questions?
          </h2>
          <p className="mt-4 text-gray-500">
            Our support team is here to help you
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 