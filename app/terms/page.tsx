import Link from 'next/link';

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>

          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using ResearchPro's services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Use of Services</h2>
            <p className="text-gray-700 mb-4">
              ResearchPro provides academic writing assistance services. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not misuse or abuse our platform</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-gray-700 mb-4">
              You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Academic Integrity</h2>
            <p className="text-gray-700 mb-4">
              Our services are designed to assist students in their learning process. Materials provided should be used as:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Research and reference materials</li>
              <li>Study aids and learning tools</li>
              <li>Samples for proper formatting and citation</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You are responsible for ensuring that your use of our services complies with your institution's academic integrity policies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The service and its original content, features, and functionality are owned by ResearchPro and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Payment and Refunds</h2>
            <p className="text-gray-700 mb-4">
              Payment terms and refund policies will be clearly communicated before you engage our services. All fees are non-refundable unless otherwise stated or required by law.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              ResearchPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use the service will immediately cease.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes. Your continued use of the service after changes become effective constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
              Email: legal@researchpro.com
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
