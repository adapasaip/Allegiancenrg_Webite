import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebook, FaTimes, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  const languages = ['EN', 'ES', 'FR', 'DE']

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const isTeamPage = location.pathname === '/team'
  const hamburgerColor = isTeamPage ? '#000000' : (isScrolled && !isMobileMenuOpen ? '#000000' : '#FFFFFF')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const aboutUsItems = [
    { label: 'Who We Are', id: 'about' },
    { label: 'Our Mission', id: 'mission' },
    { label: 'Meet the Team', path: '/team' },
    { label: 'Guiding Principles', id: 'principles' },
    { label: 'Our Commitment', id: 'mission' },
    { label: 'Core Values', id: 'principles' },
    { label: 'Contact Us', id: 'contact' },
  ]

  const servicesItems = [
    { label: 'Strategic Investments', id: 'services' },
    { label: 'Energy Markets', id: 'services' },
    { label: 'LNG Terminals', id: 'services' },
    { label: 'Oil Derivatives', id: 'services' },
    { label: 'Infrastructure', id: 'services' },
    { label: 'Why Choose Us', id: 'why-choose' },
  ]

  const getUniqueKey = (item, index) => `${item.label}-${index}`

  return (
    <nav
      className="fixed w-full top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isMobileMenuOpen ? '#184061' : 'transparent',
        transform: isNavbarVisible || isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="w-full px-4 md:px-6 py-2 md:py-4 flex items-center justify-between">
        <button
          onClick={() => {
            navigate('/')
            window.scrollTo(0, 0)
          }}
          className="flex items-center gap-3 hover:opacity-80 z-50 bg-none border-none cursor-pointer"
        >
          <img
            src="/images/2026-04-12_21-25-26_LOGO.jpg-removebg-preview.png"
            alt="AllegianceNRG Logo"
            className="h-5 sm:h-8 md:h-12 w-auto"
          />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 ml-auto">
          <div className="relative" style={{ zIndex: 50 }}>
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="flex items-center gap-0.5 md:gap-1 px-1 sm:px-2 md:px-4 py-0.5 md:py-2 z-50 flex-shrink-0"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '3px',
              backgroundColor: 'transparent',
              color: isMobileMenuOpen ? '#FFFFFF' : hamburgerColor,
              fontFamily: '"Work Sans", sans-serif',
              fontSize: 'clamp(9px, 2vw, 14px)',
              fontWeight: 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {selectedLanguage}
            <span style={{ fontSize: '10px' }}>▼</span>
          </button>

          {isLanguageDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full right-0 mt-2 rounded-sm"
              style={{ 
                minWidth: '100px', 
                zIndex: 51,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '4px',
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang)
                    setIsLanguageDropdownOpen(false)
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '6px 12px',
                    textAlign: 'left',
                    border: 'none',
                    backgroundColor: selectedLanguage === lang ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    color: '#FFFFFF',
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    borderRadius: '3px',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = selectedLanguage === lang ? 'rgba(255, 255, 255, 0.2)' : 'transparent')}
                >
                  {lang}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen)
            setIsLanguageDropdownOpen(false)
          }}
          className="flex flex-col gap-1 sm:gap-1.5 p-1.5 sm:p-2 z-50 flex-shrink-0"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '3px',
            backgroundColor: 'transparent',
            minWidth: '36px',
            minHeight: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <span
            className={`transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
            style={{ 
              backgroundColor: isMobileMenuOpen ? '#FFFFFF' : hamburgerColor,
              width: '20px',
              height: '1.5px',
            }}
          ></span>
          <span
            className={`transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
            style={{ 
              backgroundColor: hamburgerColor,
              width: '20px',
              height: '1.5px',
              margin: '3px 0',
            }}
          ></span>
          <span
            className={`transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
            style={{ 
              backgroundColor: isMobileMenuOpen ? '#FFFFFF' : hamburgerColor,
              width: '20px',
              height: '1.5px',
            }}
          ></span>
        </button>
      </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed w-full left-0 right-0 top-0 min-h-screen overflow-y-auto flex flex-col"
            style={{ backgroundColor: '#184061', zIndex: 51 }}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <img
                src="/images/2026-04-12_21-25-26_LOGO.jpg.jpeg"
                alt="AllegianceNRG Logo"
                className="h-8 sm:h-10 md:h-14 w-auto"
              />
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      fontWeight: 500,
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {selectedLanguage}
                    <span style={{ fontSize: '10px' }}>▼</span>
                  </button>

                  {isLanguageDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full right-0 mt-2 rounded-sm"
                      style={{ 
                        minWidth: '100px', 
                        zIndex: 52,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        padding: '4px',
                      }}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLanguage(lang)
                            setIsLanguageDropdownOpen(false)
                          }}
                          style={{
                            display: 'block',
                            width: '100%',
                            padding: '6px 12px',
                            textAlign: 'left',
                            border: 'none',
                            backgroundColor: selectedLanguage === lang ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                            color: '#FFFFFF',
                            fontFamily: '"Work Sans", sans-serif',
                            fontSize: '12px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            borderRadius: '3px',
                          }}
                          onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
                          onMouseLeave={(e) => (e.target.style.backgroundColor = selectedLanguage === lang ? 'rgba(255, 255, 255, 0.2)' : 'transparent')}
                        >
                          {lang}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsLanguageDropdownOpen(false)
                  }}
                  className="flex items-center justify-center w-8 h-8 hover:opacity-70"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '20px',
                    color: 'white',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Main menu links */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8 md:py-12">
              <div className="w-full max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-center md:text-left">
                  {/* About Us Section */}
                  <div>
                    <h3
                      className="mb-6 md:mb-10 text-white"
                      style={{
                        fontFamily: '"Inria Serif", serif',
                        fontSize: 'clamp(20px, 5vw, 32px)',
                        fontWeight: 400,
                        letterSpacing: '-0.5px',
                      }}
                    >
                      About Us
                    </h3>
                    <ul className="space-y-2 md:space-y-4">
                      {aboutUsItems.map((item) => (
                        <li key={item.label}>
                          {item.path ? (
                            <Link
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="transition-colors hover:text-white"
                              style={{
                                fontFamily: '"Work Sans", sans-serif',
                                fontSize: 'clamp(14px, 3vw, 16px)',
                                fontWeight: 400,
                                color: '#d3d9ff',
                                textDecoration: 'none',
                                display: 'block',
                                transition: 'all 0.3s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.color = '#FFFFFF';
                                e.target.style.letterSpacing = '0.5px';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.color = '#d3d9ff';
                                e.target.style.letterSpacing = '0';
                              }}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className="transition-colors hover:text-white bg-none border-none cursor-pointer"
                              style={{
                                fontFamily: '"Work Sans", sans-serif',
                                fontSize: 'clamp(14px, 3vw, 16px)',
                                fontWeight: 400,
                                color: '#d3d9ff',
                                width: '100%',
                                textAlign: 'inherit',
                                transition: 'all 0.3s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.color = '#FFFFFF';
                                e.target.style.letterSpacing = '0.5px';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.color = '#d3d9ff';
                                e.target.style.letterSpacing = '0';
                              }}
                            >
                              {item.label}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services Section */}
                  <div>
                    <h3
                      className="mb-6 md:mb-10 text-white"
                      style={{
                        fontFamily: '"Inria Serif", serif',
                        fontSize: 'clamp(20px, 5vw, 32px)',
                        fontWeight: 400,
                        letterSpacing: '-0.5px',
                      }}
                    >
                      Services
                    </h3>
                    <ul className="space-y-2 md:space-y-4">
                      {servicesItems.map((item, index) => (
                        <li key={getUniqueKey(item, index)}>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className="transition-colors hover:text-white bg-none border-none cursor-pointer"
                            style={{
                              fontFamily: '"Work Sans", sans-serif',
                              fontSize: 'clamp(14px, 3vw, 16px)',
                              fontWeight: 400,
                              color: '#d3d9ff',
                              width: '100%',
                              textAlign: 'inherit',
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.color = '#FFFFFF';
                              e.target.style.letterSpacing = '0.5px';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = '#d3d9ff';
                              e.target.style.letterSpacing = '0';
                            }}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu footer */}
            <div className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="px-4 sm:px-8 py-6 md:py-8 flex flex-col items-center gap-4 md:gap-6">
                {/* Copyright and Links */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center">
                  <p
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      color: 'rgba(211, 217, 255, 0.7)',
                    }}
                  >
                    Copyright © 2026 AllegianceNRG. All Rights Reserved
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                    <a
                      href="#"
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: 'clamp(10px, 2vw, 12px)',
                        color: 'rgba(211, 217, 255, 0.7)',
                        textDecoration: 'none',
                      }}
                      className="hover:text-white"
                    >
                      Terms and Conditions
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: 'clamp(10px, 2vw, 12px)',
                        color: 'rgba(211, 217, 255, 0.7)',
                        textDecoration: 'none',
                      }}
                      className="hover:text-white"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: 'clamp(10px, 2vw, 12px)',
                        color: 'rgba(211, 217, 255, 0.7)',
                        textDecoration: 'none',
                      }}
                      className="hover:text-white"
                    >
                      Cookie Policy
                    </a>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 justify-center">
                  <motion.a
                    href="#"
                    title="Facebook"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 border rounded transition-all hover:bg-white hover:text-blue-600"
                    style={{
                      borderColor: 'rgba(211, 217, 255, 0.5)',
                      color: 'rgba(211, 217, 255, 0.9)',
                    }}
                  >
                    <FaFacebook size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    title="X"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 border rounded transition-all hover:bg-white hover:text-black"
                    style={{
                      borderColor: 'rgba(211, 217, 255, 0.5)',
                      color: 'rgba(211, 217, 255, 0.9)',
                    }}
                  >
                    <FaTimes size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    title="LinkedIn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 border rounded transition-all hover:bg-white hover:text-blue-700"
                    style={{
                      borderColor: 'rgba(211, 217, 255, 0.5)',
                      color: 'rgba(211, 217, 255, 0.9)',
                    }}
                  >
                    <FaLinkedinIn size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    title="Instagram"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 border rounded transition-all hover:bg-white"
                    style={{
                      borderColor: 'rgba(211, 217, 255, 0.5)',
                      color: 'rgba(211, 217, 255, 0.9)',
                    }}
                  >
                    <FaInstagram size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  )
}


