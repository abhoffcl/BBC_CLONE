'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to the console for debugging
    console.error('Application error:', error)
    
    // Check for specific manifest errors
    if (error.message.includes('middleware-manifest.json')) {
      console.error('⚠️  Middleware manifest error detected!')
      console.error('   This usually means the build artifacts are incomplete.')
      console.error('   Try running: npm run clean-build')
    }
    
    if (error.message.includes('prerender-manifest.json')) {
      console.error('🚨 CRITICAL: Prerender manifest error detected!')
      console.error('   This is the most common cause of route 500 errors.')
      console.error('   Try running: npm run clean-build')
      console.error('   Emergency fix: npm run check-prerender --fix')
    }
    
    // Generic manifest file errors
    if (error.message.includes('manifest') || error.message.includes('Cannot find module')) {
      console.error('⚠️  Build manifest error detected!')
      console.error('   Run: npm run clean-build to fix build artifacts')
    }
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-bbc-red mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-bbc-dark mb-4">
            Something went wrong!
          </h2>
          <p className="text-bbc-grey leading-relaxed">
            We encountered an unexpected error. This might be due to a temporary issue 
            with our services.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-bbc-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Try again
          </button>
          
          <a
            href="/"
            className="block w-full bg-white text-bbc-dark border-2 border-bbc-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Go to Homepage
          </a>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-sm">
              Debug Information (Development Only)
            </summary>
            <pre className="mt-2 text-xs text-gray-700 whitespace-pre-wrap break-words">
              {error.message}
              {error.stack && '\n\nStack trace:\n' + error.stack}
            </pre>
            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Possible solutions:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Run <code className="bg-gray-200 px-1 rounded">npm run build:clean</code> to regenerate build artifacts</li>
                <li>Check if all server manifest files exist in <code className="bg-gray-200 px-1 rounded">.next/server/</code></li>
                <li>Restart the development server</li>
                <li>Clear browser cache and cookies</li>
              </ul>
            </div>
          </details>
        )}
      </div>
    </div>
  )
}