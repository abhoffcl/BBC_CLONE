import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-bbc-dark mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-bbc-grey mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block bg-bbc-red text-white px-6 py-3 rounded hover:bg-red-700 transition-colors duration-200 font-semibold"
          >
            Go to Homepage
          </Link>
          <Link
            href="/world"
            className="inline-block border-2 border-bbc-red text-bbc-red px-6 py-3 rounded hover:bg-bbc-red hover:text-white transition-colors duration-200 font-semibold"
          >
            Browse World News
          </Link>
        </div>
      </div>
    </div>
  )
}