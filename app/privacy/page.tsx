import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">
            ResearchPro
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Register for an account (name, email, institution, field of study)</li>
              <li>Use our services</li>
              <li>Contact our support team</li>
              <li>Submit projects or documents</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
              <li>With service providers who assist in our operations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your password is stored using industry-standard encryption.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date."
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
              Email: privacy@researchpro.com
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
