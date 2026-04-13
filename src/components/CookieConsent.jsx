import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleMoreDetails = () => {
    // Navigate to cookie policy page or open in new tab
    window.open('/cookie-policy', '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-2 md:bottom-6 right-2 md:right-6 left-2 md:left-auto z-40 max-w-xs md:max-w-lg"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            padding: '10px 12px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: 'none',
              border: 'none',
              color: '#999999',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '2px 4px',
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#184061'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#999999'
            }}
            title="Close"
          >
            ✕
          </button>

          <div className="flex flex-col gap-1.5 md:gap-3 items-stretch md:items-center md:flex-row pr-4 md:pr-0">
            <div className="flex-1 min-w-0">
              <p
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: 'clamp(9px, 2vw, 13px)',
                  fontWeight: 400,
                  color: '#333333',
                  lineHeight: '1.35',
                  margin: 0,
                }}
              >
                This Website uses Cookies to improve the usability. By using this Website you declare
                your consent for cookies to be used as well with the data protection declaration where
                you can find more information on Cookies.{' '}
                <button
                  onClick={handleMoreDetails}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#184061',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: 'clamp(9px, 2vw, 13px)',
                    fontWeight: 400,
                    padding: '0 1px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.8'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1'
                  }}
                >
                  More details
                </button>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAccept}
              className="w-full md:w-auto"
              style={{
                fontFamily: '"Work Sans", sans-serif',
                fontSize: 'clamp(9px, 2vw, 12px)',
                fontWeight: 600,
                color: '#184061',
                backgroundColor: 'transparent',
                border: '1.5px solid #184061',
                padding: '5px 10px',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#184061'
                e.target.style.color = 'white'
                e.target.style.boxShadow = '0 8px 16px rgba(22, 33, 106, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
                e.target.style.color = '#184061'
                e.target.style.boxShadow = 'none'
              }}
            >
              Accept
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}



