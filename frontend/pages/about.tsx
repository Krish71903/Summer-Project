import React from 'react';
import Head from 'next/head';
import BackButton from '../components/BackButton';

const values = [
  {
    title: 'Innovation',
    description: 'We continuously push the boundaries of AI technology to provide the most advanced resume analysis tools.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'User Success',
    description: "Your career success is our success. We're committed to helping you achieve your professional goals.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Data Privacy',
    description: 'We take data security seriously. Your information is encrypted and protected with industry-leading security measures.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-founder',
    image: '/team/sarah.jpg',
    bio: 'Former HR executive with 15 years of experience in talent acquisition and career development.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-founder',
    image: '/team/michael.jpg',
    bio: 'AI expert with a PhD in Machine Learning and experience at leading tech companies.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    image: '/team/emily.jpg',
    bio: 'Product leader with a passion for creating user-centric solutions that make a real impact.',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>About Us - Your Company</title>
        <meta name="description" content="Learn about our mission to revolutionize resume analysis and career development" />
      </Head>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <BackButton />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Revolutionizing the way people approach their careers through AI-powered resume analysis
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-500">
            <p>
              Founded in 2023, we set out to solve a common problem: the disconnect between job seekers and their dream careers. 
              We noticed that even highly qualified candidates were struggling to get noticed, often due to resume optimization issues 
              rather than their actual capabilities.
            </p>
            <p className="mt-4">
              Our team of AI experts and career development professionals came together to create a solution that would level the 
              playing field. By combining cutting-edge AI technology with deep insights into hiring practices, we've developed a 
              platform that helps job seekers present their best selves to potential employers.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-indigo-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover w-full h-48"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 mb-2">{member.role}</p>
                  <p className="text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Be part of the future of career development
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 