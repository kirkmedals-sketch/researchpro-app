import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">ResearchPro</h1>
          <div className="space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Your Academic Writing Partner
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional academic writing services for students and researchers.
            Get expert assistance with essays, research papers, theses, and more.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 text-lg font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50 shadow-lg border border-gray-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div id="services" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-indigo-600 mb-4">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Essay Writing</h3>
            <p className="text-gray-600">
              Professional assistance with all types of academic essays, from argumentative to narrative.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-indigo-600 mb-4">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Papers</h3>
            <p className="text-gray-600">
              Expert support for comprehensive research papers with proper citations and formatting.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-indigo-600 mb-4">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Editing & Proofreading</h3>
            <p className="text-gray-600">
              Thorough editing and proofreading services to polish your academic work.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose ResearchPro?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900">Expert Writers</h4>
                <p className="text-gray-600">PhD-qualified writers across all academic disciplines</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900">Plagiarism-Free</h4>
                <p className="text-gray-600">100% original content with plagiarism reports</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900">On-Time Delivery</h4>
                <p className="text-gray-600">Meet your deadlines with our timely service</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                <p className="text-gray-600">Round-the-clock customer support for your queries</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students achieving academic excellence with ResearchPro
          </p>
          <Link
            href="/register"
            className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">ResearchPro</h4>
              <p className="text-gray-600 text-sm">
                Professional academic writing services for students worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/register" className="text-gray-600 hover:text-indigo-600">Get Started</Link></li>
                <li><Link href="/login" className="text-gray-600 hover:text-indigo-600">Login</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-indigo-600">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <p className="text-gray-600 text-sm">
                Email: support@researchpro.com<br />
                Available 24/7
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            &copy; 2024 ResearchPro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
