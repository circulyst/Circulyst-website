import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Setup - Circulyst",
  description: "Technical SEO setup and configuration for Circulyst website",
  alternates: {
    canonical: 'https://circulyst.in/seo_setup/',
  },
}

export default function SEOSetupPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            SEO Setup & Configuration
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Technical SEO Implementation
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Implemented Features:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>✅ Canonical URLs configured</li>
                <li>✅ Meta tags optimized</li>
                <li>✅ Open Graph tags for social sharing</li>
                <li>✅ Twitter Card metadata</li>
                <li>✅ Robots.txt configured</li>
                <li>✅ Sitemap.xml generated</li>
                <li>✅ Web App Manifest for PWA</li>
                <li>✅ Google Analytics 4 integration</li>
                <li>✅ Google Tag Manager setup</li>
                <li>✅ Structured data ready</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">SEO Configuration Details:</h3>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Canonical URLs:</h4>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                https://circulyst.in/
              </code>
              <br />
              <code className="bg-gray-100 px-2 py-1 rounded text-sm mt-2">
                https://circulyst.in/seo_setup/
              </code>
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Status: ✅ SEO Optimized</h4>
              <p className="text-green-700">
                Your website is fully configured for search engine optimization with all modern SEO best practices implemented.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
