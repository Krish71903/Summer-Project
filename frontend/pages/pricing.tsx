import { useState } from 'react';
import Head from 'next/head';
import BackButton from '../components/BackButton';

const tiers = [
  {
    name: 'Basic',
    price: { monthly: 9, annually: 90 },
    features: [
      'Basic resume analysis',
      'Up to 5 resume versions',
      'Basic job matching',
      '1GB storage',
      'Email support',
      'Basic resume templates',
      'Job search tips',
    ],
    cta: 'Start with Basic',
    description: 'Perfect for job seekers just starting their career journey',
  },
  {
    name: 'Pro',
    price: { monthly: 29, annually: 290 },
    features: [
      'Advanced resume analysis',
      'Unlimited resume versions',
      'AI-powered job matching',
      '10GB storage',
      'Priority email & chat support',
      'Premium resume templates',
      'Interview preparation guides',
      'Career path recommendations',
      'LinkedIn profile optimization',
    ],
    cta: 'Get Pro',
    description: 'Ideal for professionals looking to advance their career',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 99, annually: 990 },
    features: [
      'Everything in Pro',
      'Unlimited storage',
      '24/7 dedicated support',
      'Custom integrations',
      'Dedicated career coach',
      'Team collaboration tools',
      'Advanced security features',
      'Custom branding',
      'API access',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    description: 'For organizations and teams seeking comprehensive career solutions',
  },
];

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.',
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Pricing - ResuMatch</title>
        <meta name="description" content="Choose the perfect plan for your career journey" />
      </Head>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <BackButton />
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that's right for your career goals
          </p>
          
          {/* Toggle */}
          <div className="mt-6 flex justify-center">
            <div className="relative bg-white rounded-lg p-1 flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`${
                  !isAnnual
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700'
                } relative py-2 px-6 rounded-md text-sm font-medium transition-colors`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`${
                  isAnnual
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700'
                } relative py-2 px-6 rounded-md text-sm font-medium transition-colors`}
              >
                Annually
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 border ${
                tier.popular ? 'border-indigo-500 border-2' : 'border-gray-200'
              } transition-colors duration-150 ease-in-out hover:border-indigo-500 hover:border-2 relative`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${isAnnual ? tier.price.annually : tier.price.monthly}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </p>
                <button
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                    tier.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  className="w-full py-6 text-left focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <svg
                      className={`h-6 w-6 transform ${
                        activeFaq === index ? 'rotate-180' : ''
                      } transition-transform duration-200`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {activeFaq === index && (
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to advance your career?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of professionals who have transformed their careers with ResuMatch
          </p>
          <div className="mt-8">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 