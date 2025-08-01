'use client'

import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const mainNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'World', href: '/world' },
    { name: 'UK', href: '/uk' },
    { name: 'Sport', href: '/sport' },
    { name: 'Business', href: '/business' },
    { name: 'Politics', href: '/politics' },
    { name: 'Tech', href: '/technology' },
    { name: 'Health', href: '/health' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Culture', href: '/culture' },
    { name: 'Arts', href: '/arts' },
    { name: 'Travel', href: '/travel' },
    { name: 'Earth', href: '/earth' },
    { name: 'Video', href: '/video' },
    { name: 'Live', href: '/live' },
  ]

  const topicsLinks = [
    { name: 'World News', href: '/world' },
    { name: 'UK News', href: '/uk' },
    { name: 'Business', href: '/business' },
    { name: 'Technology', href: '/technology' },
    { name: 'Health', href: '/health' },
    { name: 'Sport', href: '/sport' },
    { name: 'Culture', href: '/culture' },
    { name: 'Arts', href: '/arts' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Travel', href: '/travel' },
    { name: 'Earth', href: '/earth' },
    { name: 'Live', href: '/live' },
    { name: 'Video', href: '/video' }
  ]

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top bar with hamburger, BBC logo, and sign in */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Left side - Hamburger menu */}
            <button
              className="text-black hover:text-gray-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Center - BBC Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex space-x-1">
                <div className="bg-black text-white px-2 py-1 font-bold text-lg tracking-tight">B</div>
                <div className="bg-black text-white px-2 py-1 font-bold text-lg tracking-tight">B</div>
                <div className="bg-black text-white px-2 py-1 font-bold text-lg tracking-tight">C</div>
              </div>
            </Link>

            {/* Right side - Register/Sign in */}
            <div className="flex items-center space-x-3">
              <Link
                href="/register"
                className="text-white hover:text-gray-300 transition-colors duration-200 text-xs bg-black px-3 py-1 font-medium"
              >
                Register
              </Link>
              <Link
                href="/signin"
                className="text-black hover:text-gray-600 transition-colors duration-200 text-xs bg-white border border-gray-300 px-3 py-1 font-medium"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation links */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-8 h-10 overflow-x-auto">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black hover:text-blue-600 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Topics navigation bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-6 h-8 overflow-x-auto">
            {topicsLinks.map((topic) => (
              <Link
                key={topic.name}
                href={topic.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-xs whitespace-nowrap"
              >
                {topic.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-blue-600 transition-colors duration-200 py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-200 my-2" />
              {topicsLinks.map((topic) => (
                <Link
                  key={topic.name}
                  href={topic.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {topic.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header