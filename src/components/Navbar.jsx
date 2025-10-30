import React, { useState, useEffect } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Recursos', href: '#features' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center"
          >
            <img 
              src="/LogoBranco.png" 
              alt="Lore In Play" 
              className={`max-h-8 w-auto transition-all ${isScrolled ? 'brightness-0' : 'brightness-100'}`}
              style={{ imageRendering: 'crisp-edges' }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="text-white px-6 py-2 rounded-full hover:opacity-90 transition-all shadow-lg" style={{background: 'linear-gradient(to right, #db2777, #2a013c)'}}>
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 font-medium hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="text-white px-6 py-2 rounded-full hover:opacity-90 transition-all w-full shadow-lg" style={{background: 'linear-gradient(to right, #db2777, #2a013c)'}}>
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

