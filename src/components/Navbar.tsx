"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from "next/link";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

const styles = `
  @keyframes rotate-180 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  
  .animate-rotate-180 {
    animation: rotate-180 0.3s ease-in-out;
  }

  .link-underline {
    position: relative;
    overflow: hidden;
  }

  .link-underline::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  .link-underline:hover::after {
    transform: scaleX(1);
  }

  .link-underline:not(:hover)::after {
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
    transform: scaleX(0);
  }
`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <style>{styles}</style>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-gray-900'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="#" className="text-xl font-bold font-mono text-white">{'Michael Bui'}</Link>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out group link-underline"
                >
                  {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                  <span className="text-gray-500 font-mono mr-1 pr-2">//</span>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-transform duration-300 ease-in-out"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={24} className="animate-rotate-180" />
              ) : (
                <Menu size={24} className="animate-rotate-180" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out group link-underline"
                onClick={() => setIsOpen(false)}
              >
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <span className="text-gray-500 font-mono mr-1">//</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from going under the navbar */}
      <div className="h-16"></div>
    </div>
  )
}