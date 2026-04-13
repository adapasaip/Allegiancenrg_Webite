import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebook, FaTimes, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import siteContent from '../content/siteContent.json'

export default function Footer() {
  const navigate = useNavigate()

  const scrollToSection = (sectionId, path = '/') => {
    if (path !== '/' && window.location.pathname !== path) {
      navigate(path)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const aboutUsItems = siteContent.footer.sections.about
  const servicesItems = siteContent.footer.sections.services
  const partnerLogos = siteContent.footer.partners


  const socialIcons = [
    { name: 'Facebook', url: '#', Icon: FaFacebook },
    { name: 'X', url: '#', Icon: FaTimes },
    { name: 'LinkedIn', url: '#', Icon: FaLinkedinIn },
    { name: 'Instagram', url: '#', Icon: FaInstagram },
  ]

  return (
    <footer style={{ backgroundColor: '#184061' }}>
      <div className="w-full" style={{ paddingTop: 'clamp(16px, 4vw, 20px)', paddingBottom: 'clamp(16px, 4vw, 20px)', paddingLeft: 'clamp(16px, 4vw, 24px)', paddingRight: 'clamp(16px, 4vw, 24px)' }}>
        <div className="w-full flex justify-start">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 md:mb-8">
              
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/images/2026-04-12_21-25-26_LOGO.jpg.jpeg"
                    alt="AllegianceNRG Logo"
                    style={{
                      maxWidth: '200px',
                      maxHeight: '80px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      marginBottom: '8px',
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: 'clamp(15px, 3vw, 18px)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '1.7',
                    marginTop: '12px',
                    letterSpacing: '0.3px',
                  }}
                >
                  {siteContent.footer.companyDescription}
                </p>
              </div>
              
              <div>
                <h4
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '16px',
                  }}
                >
                  Contact Us
                </h4>
                <div className="space-y-4">
                  <div>
                    <p
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: 'clamp(12px, 2.6vw, 14px)',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '4px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      New York Office Address:
                    </p>
                    <p
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: 'clamp(13px, 2.6vw, 15px)',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        lineHeight: '1.7',
                        marginBottom: '8px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      AllegianceNRG<br />
                      New York, USA
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: 'clamp(12px, 2.6vw, 14px)',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '4px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      Email:{' '}
                      <a
                        href={`mailto:${siteContent.footer.contactInfo.email}`}
                        style={{
                          color: '#FFFFFF',
                          textDecoration: 'none',
                          fontWeight: 400,
                          fontSize: 'clamp(12px, 2.4vw, 14px)',
                          letterSpacing: '0.2px',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.opacity = '0.8';
                          e.target.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.opacity = '1';
                          e.target.style.textDecoration = 'none';
                        }}
                        className="hover:text-white"
                      >
                        {siteContent.footer.contactInfo.email}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: 'clamp(12px, 2.6vw, 14px)',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '4px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      Phone:{' '}
                      <a
                        href={`tel:${siteContent.footer.contactInfo.phone.replace(/[\s-]/g, '')}`}
                        style={{
                          color: '#FFFFFF',
                          textDecoration: 'none',
                          fontWeight: 400,
                          fontSize: 'clamp(12px, 2.4vw, 14px)',
                          letterSpacing: '0.2px',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.opacity = '0.8';
                          e.target.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.opacity = '1';
                          e.target.style.textDecoration = 'none';
                        }}
                        className="hover:text-white"
                      >
                        {siteContent.footer.contactInfo.phone}
                      </a>
                    </p>
                  </div>
                  <div className="flex gap-3 md:gap-4 pt-3 md:pt-4">
                    {socialIcons.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url}
                        title={social.name}
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          border: '1.5px solid #FFFFFF',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '4px',
                          color: '#FFFFFF',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#FFFFFF';
                          e.target.style.color = '#184061';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#FFFFFF';
                        }}
                      >
                        <social.Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '16px',
                  }}
                >
                  About Us
                </h4>
                <ul className="space-y-2 md:space-y-2.5">
                  {aboutUsItems.map((item) => (
                    <li key={item.label}>
                      <button
                        onClick={() => scrollToSection(item.id, item.path)}
                        style={{
                          fontFamily: '"Work Sans", sans-serif',
                          color: 'rgb(255, 255, 255)',
                          textDecoration: 'none',
                          fontSize: '18px',
                          fontWeight: 400,
                          lineHeight: '30.6px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          textAlign: 'left',
                          letterSpacing: '0.2px',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.letterSpacing = '0.4px';
                          e.target.style.opacity = '0.85';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.letterSpacing = '0.2px';
                          e.target.style.opacity = '1';
                        }}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '16px',
                  }}
                >
                  Services
                </h4>
                <ul className="space-y-2 md:space-y-2.5">
                  {servicesItems.map((item) => (
                    <li key={item.label}>
                      <button
                        onClick={() => scrollToSection(item.id, item.path)}
                        style={{
                          fontFamily: '"Work Sans", sans-serif',
                          color: 'rgb(255, 255, 255)',
                          textDecoration: 'none',
                          fontSize: '18px',
                          fontWeight: 400,
                          lineHeight: '30.6px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          textAlign: 'left',
                          letterSpacing: '0.2px',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.letterSpacing = '0.4px';
                          e.target.style.opacity = '0.85';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.letterSpacing = '0.2px';
                          e.target.style.opacity = '1';
                        }}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-2 md:mb-4" style={{ marginTop: '6px', backgroundColor: 'rgba(101, 113, 160, 0.15)', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '16px', paddingRight: '16px', marginLeft: '-24px', marginRight: '-24px' }}>
              <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-4 sm:gap-6 lg:gap-12 lg:gap-20 items-start sm:items-center justify-between overflow-hidden">
                <h3
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '0',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  OUR PARTNERS
                </h3>
                <div className="flex flex-nowrap gap-8 md:gap-12 lg:gap-16 lg:gap-24 items-center justify-end">
                  {partnerLogos.map((partner, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center justify-center flex-shrink-0" 
                      style={{ flex: '0 0 auto' }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={partner.src}
                        alt={partner.name}
                        style={{
                          width: 'clamp(100px, 20vw, 140px)',
                          height: 'auto',
                          maxHeight: '60px',
                          objectFit: 'contain',
                          opacity: 0.9,
                          transition: 'opacity 0.3s ease',
                        }}
                        className="hover:opacity-100"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          backgroundColor: 'transparent',
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div className="w-full flex justify-start">
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              <p
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: 'clamp(15px, 2.8vw, 18px)',
                  color: '#F0F0F0',
                  textDecoration: 'none',
                  fontWeight: 500,
                  letterSpacing: '0.2px',
                }}
              >
                {siteContent.footer.copyright}
              </p>
              <div className="flex flex-nowrap gap-2 md:gap-3 justify-center" style={{ fontSize: '16px' }}>
                <a
                  href="#"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    color: '#F0F0F0',
                    textDecoration: 'underline',
                    fontSize: 'clamp(14px, 2.6vw, 16px)',
                    letterSpacing: '0.2px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.letterSpacing = '0.4px';
                    e.target.style.opacity = '0.85';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.letterSpacing = '0.2px';
                    e.target.style.opacity = '1';
                  }}
                  className="hover:text-white"
                >
                  Terms and Conditions
                </a>
                <span style={{ color: '#F0F0F0' }}>|</span>
                <a
                  href="#"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    color: '#F0F0F0',
                    textDecoration: 'underline',
                    fontSize: 'clamp(14px, 2.6vw, 16px)',
                    letterSpacing: '0.2px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.letterSpacing = '0.4px';
                    e.target.style.opacity = '0.85';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.letterSpacing = '0.2px';
                    e.target.style.opacity = '1';
                  }}
                  className="hover:text-white"
                >
                  Privacy Policy
                </a>
                <span style={{ color: '#8992B8' }}>|</span>
                <a
                  href="#"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    color: '#F0F0F0',
                    textDecoration: 'underline',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.letterSpacing = '0.4px';
                    e.target.style.opacity = '0.85';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.letterSpacing = '0';
                    e.target.style.opacity = '1';
                  }}
                  className="hover:text-white"
                >
                  Cookie Policy
                </a>
                <span style={{ color: '#F0F0F0' }}>|</span>
                <a
                  href="#"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    color: '#F0F0F0',
                    textDecoration: 'underline',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.letterSpacing = '0.4px';
                    e.target.style.opacity = '0.85';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.letterSpacing = '0';
                    e.target.style.opacity = '1';
                  }}
                  className="hover:text-white"
                >
                  Data protection
                </a>
                <span style={{ color: '#F0F0F0' }}>|</span>
                <a
                  href="#"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    color: '#F0F0F0',
                    textDecoration: 'underline',
                  }}
                  className="hover:text-white"
                >
                  Disclaimer
                </a>
                <span style={{ color: '#F0F0F0' }}>|</span>
                <a
                  href="#"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    color: '#F0F0F0',
                    textDecoration: 'underline',
                  }}
                  className="hover:text-white"
                >
                  FinSA Client information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


