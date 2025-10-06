'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="S.INNOVATION Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              {/* Company Name */}
              <span className={`font-bold text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                S.INNOVATION
              </span>
              {/* Tagline */}
              <div className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                isScrolled ? 'text-secondary-600' : 'text-secondary-300'
              }`}>
                Smart - Solutions - Sustainable
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className={`transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-left"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-left"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full text-center"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}