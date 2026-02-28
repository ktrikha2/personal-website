'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig, navLinks } from '@/data/site';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-sharp-border h-[72px]">
      <nav className="max-w-full mx-auto px-8 md:px-16 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[32px] font-bold font-primary text-sharp-black hover:text-sharp-primary transition-colors duration-fast"
        >
          K.
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-small font-medium font-secondary text-sharp-text-secondary hover:text-sharp-black transition-colors duration-normal"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.links.resume}
            download
            className="px-6 py-3 bg-sharp-black text-white font-medium font-secondary text-small hover:bg-sharp-primary transition-colors duration-fast"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-sharp-text-secondary hover:text-sharp-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
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
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-sharp-border">
          <div className="px-8 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-sharp-text-secondary hover:text-sharp-black transition-colors font-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.links.resume}
              download
              className="block w-full mt-4 px-6 py-3 bg-sharp-black text-white font-medium font-secondary text-small text-center hover:bg-sharp-primary transition-colors duration-fast"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
