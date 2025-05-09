import { useState } from 'react';
import Head from 'next/head';
import BackButton from '../components/BackButton';

const tiers = [
  {
    name: 'Basic',
    price: { monthly: 9, annually: 90 },
    features: [
      'Basic analytics',
      'Up to 5 projects',
      'Basic support',
      '1GB storage',
      'Basic integrations',
    ],
    cta: 'Start with Basic',
  },
  {
    name: 'Pro',
    price: { monthly: 29, annually: 290 },
    features: [
      'Advanced analytics',
      'Unlimited projects',
      'Priority support',
      '10GB storage',
      'Advanced integrations',
      'Custom reports',
      'Team collaboration',
    ],
    cta: 'Get Pro',
  },
  {
    name: 'Enterprise',
    price: { monthly: 99, annually: 990 },
    features: [
      'Everything in Pro',
      'Unlimited storage',
      '24/7 support',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'Advanced security',
    ],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Pricing - Your Company</title>
        <meta name="description" content="Choose the perfect plan for your needs" />
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
            Choose the plan that's right for you
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
              className="rounded-lg shadow-lg divide-y divide-gray-200 border border-gray-200 transition-colors duration-150 ease-in-out hover:border-indigo-500 hover:border-2"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${isAnnual ? tier.price.annually : tier.price.monthly}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </p>
                <button
                  className="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
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
      </div>
    </div>
  );
} 