'use client';

import Link from 'next/link';
import { useState } from 'react';
import { placeHref, siteConfig } from '@/lib/site.config';

// Primary navigation. The order separates "what the programs do" (What We Do,
// The Village) from "come and do the work" (Come and Serve); Home is the logo.
const navItems = [
  { name: 'What We Do', href: '/services/' },
  { name: siteConfig.place.navLabel, href: placeHref() },
  { name: 'Come and Serve', href: '/serve/' },
  { name: 'Hiring', href: '/hiring/' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a0b2e] via-[#1a0b2e]/80 to-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition">
              The Technology Monastery
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-300 focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/90 hover:text-white transition font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              {/* Interim FFC campaign; a project-specific campaign will replace it later. */}
              <a
                href={siteConfig.integrations.zeffyDonationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition font-medium shadow-lg shadow-purple-500/50"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-black/50 backdrop-blur-md rounded-lg p-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-white hover:text-purple-300 transition font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                {/* Interim FFC campaign; a project-specific campaign will replace it later. */}
                <a
                  href={siteConfig.integrations.zeffyDonationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
