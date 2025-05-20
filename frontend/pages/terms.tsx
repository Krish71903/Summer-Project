import React from 'react';
import Head from 'next/head';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service</title>
        <meta name="description" content="Terms of Service for our platform" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this website.
            </p>
            <p className="text-gray-600">
              These Terms of Service constitute a legally binding agreement between you and our company regarding your use of our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. User Accounts</h2>
            <p className="text-gray-600 mb-4">
              To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
            <p className="text-gray-600 mb-4">
              You agree to provide accurate and complete information when creating your account and to update such information to keep it accurate and current.
            </p>
            <p className="text-gray-600">
              We reserve the right to suspend or terminate your account if any information provided during the registration process or thereafter proves to be inaccurate, false, or misleading.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="text-gray-600 mb-4">
              Under this license, you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Content Ownership and Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content, features, and functionality of our website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of our company or its content suppliers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-600">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Privacy and Data Protection</h2>
            <p className="text-gray-600 mb-4">
              Your use of our website is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
            </p>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-600">
              We do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitations</h2>
            <p className="text-gray-600 mb-4">
              In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
            <p className="text-gray-600">
              Our total liability to you for any claims arising out of or related to these Terms of Service shall not exceed the amount paid by you, if any, for accessing our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. User Conduct</h2>
            <p className="text-gray-600 mb-4">
              You agree not to use our website to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Post or transmit any material that is unlawful, threatening, abusive, defamatory, or invasive of privacy</li>
              <li>Upload or transmit viruses or any other malicious code</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Modifications</h2>
            <p className="text-gray-600 mb-4">
              We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
            <p className="text-gray-600">
              We encourage you to review these Terms of Service periodically for any changes. Your continued use of the website following the posting of revised Terms of Service means that you accept and agree to the changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            <p className="text-gray-600">
              Any dispute arising from these Terms of Service shall be resolved exclusively in the courts of [Your Jurisdiction], and you consent to the personal jurisdiction of such courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at [Your Contact Information].
            </p>
          </section>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService; 