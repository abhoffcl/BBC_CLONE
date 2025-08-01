import Link from 'next/link'

const Footer = () => {
  const mainNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Sport', href: '/sport' },
    { name: 'Business', href: '/business' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Culture', href: '/culture' },
    { name: 'Arts', href: '/arts' },
    { name: 'Travel', href: '/travel' },
    { name: 'Earth', href: '/earth' },
    { name: 'Audio', href: '/audio' },
    { name: 'Video', href: '/video' },
    { name: 'Live', href: '/live' },
    { name: 'Weather', href: '/weather' },
    { name: 'BBC Shop', href: '/shop' },
    { name: 'BritBox', href: '/britbox' },
  ]

  const socialLinks = [
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com/BBC',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/bbc',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/bbc',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@bbc',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/bbc',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/user/bbcnews',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ]

  const footerLinks = [
    'Terms of Use',
    'About the BBC',
    'Privacy Policy',
    'Cookies',
    'Accessibility Help',
    'Contact the BBC',
    'Advertise with us',
    'Do not share or sell my info',
    'Contact technical support'
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* BBC Logo */}
        <div className="flex justify-start mb-6">
          <Link href="/" className="flex items-center">
            <div className="flex space-x-1">
              <div className="bg-black text-white px-2 py-1 font-bold text-lg tracking-tight">B</div>
              <div className="bg-black text-white px-2 py-1 font-bold text-lg tracking-tight">B</div>
              <div className="bg-black text-white px-2 py-1 font-bold text-lg tracking-tight">C</div>
            </div>
          </Link>
        </div>

        {/* Main navigation */}
        <nav className="flex flex-wrap items-center gap-6 mb-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black hover:underline text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BBC in other languages dropdown */}
        <div className="flex justify-start mb-6">
          <button className="flex items-center space-x-2 text-black hover:underline text-sm border border-gray-300 px-3 py-1">
            <span>BBC in other languages</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Follow BBC on */}
        <div className="mb-6">
          <p className="text-sm text-black mb-3 font-medium">Follow BBC on:</p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-6">
          {footerLinks.map((link) => (
            <Link key={link} href="#" className="hover:underline">
              {link}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          <p className="mb-1">
            Copyright © 2025 BBC. All rights reserved. The BBC is not responsible for the content of external sites.{' '}
            <Link href="/external-links" className="underline">
              Read about our approach to external linking.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer