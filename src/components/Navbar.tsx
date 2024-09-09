"use client"

import {useState} from 'react'
import {Menu, X} from 'lucide-react'

const navItems = [
  {name: 'Home', href: '#'},
  {name: 'About', href: '#'},
  {name: 'Services', href: '#'},
  {name: 'Portfolio', href: '#'},
  {name: 'Contact', href: '#'},
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
`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <style>{styles}</style>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-gray-800 text-2xl font-bold">Logo</a>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out relative group"
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none transition-transform duration-300 ease-in-out"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={24} className="animate-rotate-180"/>
              ) : (
                <Menu size={24} className="animate-rotate-180"/>
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
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}