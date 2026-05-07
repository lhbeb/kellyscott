'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Promotional Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 min-h-10 sm:min-h-8 bg-primary text-white flex items-center justify-center px-3 py-1">
        <span className="text-xs sm:text-sm text-center leading-snug">
          Questions?{' '}
          <a href="mailto:marouanndoumm12@outlook.com" className="underline underline-offset-2 hover:opacity-80 transition-opacity font-semibold">
            marouanndoumm12@outlook.com
          </a>
        </span>
      </div>

      <header className="fixed top-10 sm:top-8 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="Ballard Kelly Scott Logo"
                width={240}
                height={70}
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Products
              </Link>
              <Link href="/listings" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Contact
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 gradient-primary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/listings"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 gradient-primary text-white rounded-full font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
