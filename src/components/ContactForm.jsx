import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm({ variant = 'default' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacyPolicy: false,
  })
  const [formStatus, setFormStatus] = useState(null) // Tracks form submission: success, error, or idle
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Stop form from being submitted twice
    if (isSubmitting) {
      return
    }
    
    // Check required fields
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your name' })
      return
    }
    if (!formData.phone.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your phone number' })
      return
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your email' })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address' })
      return
    }
    if (!formData.privacyPolicy) {
      setFormStatus({ type: 'error', message: 'Please accept the privacy policy' })
      return
    }
    
    try {
      setIsSubmitting(true)
      
      // Submit form to email service
      const response = await fetch('https://formsubmit.co/"company_mail_id"', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          '_subject': `New Contact Form Submission from ${formData.name}`
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }
      
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you for reaching out! We will get back to you soon.' 
      })
      
      console.log('✅ Form submitted successfully:', formData)
      
      // Clear form after 2 seconds delay
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          privacyPolicy: false,
        })
        setFormStatus(null)
        setIsSubmitting(false)
      }, 2000)
    } catch (error) {
      console.error('❌ Form submission error:', error)
      setFormStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again later.' 
      })
      setIsSubmitting(false)
    }
  }

  if (variant === 'minimal') {
    // Short form for secondary pages
    return (
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto space-y-4 w-full"
        style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}
      >
        {formStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 sm:p-4 rounded-sm mb-4"
            style={{
              backgroundColor: formStatus.type === 'success' ? '#d1fae5' : '#fee2e2',
              color: formStatus.type === 'success' ? '#065f46' : '#991b1b',
              border: `1px solid ${formStatus.type === 'success' ? '#6ee7b7' : '#fca5a5'}`,
              fontFamily: '"Inria Serif", Arial, sans-serif',
              fontSize: 'clamp(12px, 2.5vw, 16px)',
            }}
          >
            {formStatus.message}
          </motion.div>
        )}

        <input
          type="text"
          name="name"
          placeholder="First and Last Name*"
          value={formData.name}
          onChange={handleInputChange}
          autoComplete="off"
          style={{
            fontFamily: '"Inria Serif", Arial, sans-serif',
            width: '100%',
            padding: 'clamp(10px, 2.5vw, 14px) clamp(12px, 2.5vw, 16px)',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            fontSize: 'clamp(13px, 2.5vw, 16px)',
            color: '#184061',
            backgroundColor: '#FFFFFF',
            boxSizing: 'border-box',
            cursor: 'text',
            outline: 'none',
            pointerEvents: 'auto',
            zIndex: 10,
          }}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleInputChange}
            autoComplete="off"
            style={{
              fontFamily: '"Inria Serif", Arial, sans-serif',
              width: '100%',
              padding: 'clamp(10px, 2.5vw, 14px) clamp(12px, 2.5vw, 16px)',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: 'clamp(13px, 2.5vw, 16px)',
              color: '#184061',
              backgroundColor: '#FFFFFF',
              boxSizing: 'border-box',
              cursor: 'text',
              outline: 'none',
              pointerEvents: 'auto',
              zIndex: 10,
            }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="off"
            style={{
              fontFamily: '"Inria Serif", Arial, sans-serif',
              width: '100%',
              padding: 'clamp(10px, 2.5vw, 14px) clamp(12px, 2.5vw, 16px)',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: 'clamp(13px, 2.5vw, 16px)',
              color: '#184061',
              backgroundColor: '#FFFFFF',
              boxSizing: 'border-box',
              cursor: 'text',
              outline: 'none',
              pointerEvents: 'auto',
              zIndex: 10,
            }}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          autoComplete="off"
          style={{
            fontFamily: '"Inria Serif", Arial, sans-serif',
            width: '100%',
            padding: 'clamp(10px, 2.5vw, 14px) clamp(12px, 2.5vw, 16px)',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            fontSize: 'clamp(13px, 2.5vw, 16px)',
            color: '#184061',
            backgroundColor: '#FFFFFF',
            boxSizing: 'border-box',
            resize: 'vertical',
            minHeight: '100px',
            cursor: 'text',
            outline: 'none',
            pointerEvents: 'auto',
            zIndex: 10,
          }}
        />

        <div className="flex items-start sm:items-center gap-2">
          <input
            type="checkbox"
            id="privacy-policy"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleInputChange}
            style={{
              width: '16px',
              height: '16px',
              minWidth: '16px',
              minHeight: '16px',
              cursor: 'pointer',
              accentColor: '#184061',
              pointerEvents: 'auto',
              zIndex: 10,
            }}
            required
          />
          <label
            htmlFor="privacy-policy"
            style={{
              fontFamily: '"Inria Serif", Arial, sans-serif',
              fontSize: 'clamp(12px, 2.2vw, 14px)',
              color: '#666666',
              cursor: 'pointer',
              pointerEvents: 'auto',
              zIndex: 10,
              marginTop: '2px',
            }}
          >
            I have read and confirm the{' '}
            <a
              href="#"
              style={{
                color: '#184061',
                textDecoration: 'underline',
                fontWeight: 500,
              }}
            >
              privacy policy
            </a>
            *
          </label>
        </div>

        <motion.button
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-sm transition-all mt-6 sm:mt-8"
          style={{
            fontFamily: '"Inria Serif", Arial, sans-serif',
            fontSize: 'clamp(12px, 2.2vw, 16px)',
            fontWeight: 600,
            color: isSubmitting ? '#ccc' : '#184061',
            border: '2px solid #184061',
            backgroundColor: 'transparent',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            letterSpacing: '0.5px',
            padding: 'clamp(12px, 2.5vw, 20px) clamp(24px, 6vw, 48px)',
            opacity: isSubmitting ? 0.7 : 1,
            pointerEvents: 'auto',
            zIndex: 10,
            minHeight: '44px',
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = '#184061';
              e.target.style.color = 'white';
              e.target.style.boxShadow = '0 12px 24px rgba(24, 64, 97, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#184061';
              e.target.style.boxShadow = 'none';
            }
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </motion.form>
    )
  }

  // Full form for main pages
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto space-y-3 sm:space-y-4"
    >
      <div>
        <label className="block font-medium text-gray-700 mb-2" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          autoComplete="off"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 transition-colors"
          placeholder="Your name"
          style={{ fontSize: 'clamp(13px, 2.5vw, 16px)' }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
        <div>
          <label className="block font-medium text-gray-700 mb-2" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete="off"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 transition-colors"
            placeholder="your@email.com"
            style={{ fontSize: 'clamp(13px, 2.5vw, 16px)' }}
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-2" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            autoComplete="off"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 transition-colors"
            placeholder="+1 (555) 123-4567"
            style={{ fontSize: 'clamp(13px, 2.5vw, 16px)' }}
          />
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-2" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="5"
          autoComplete="off"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 transition-colors resize-none"
          placeholder="Your message..."
          style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', minHeight: '120px' }}
        ></textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        style={{
          width: '100%',
          minHeight: '44px',
          padding: 'clamp(12px, 2.5vw, 20px) clamp(24px, 6vw, 48px)',
          backgroundColor: 'transparent',
          color: isSubmitting ? '#ccc' : '#184061',
          fontWeight: 600,
          borderRadius: '4px',
          border: '2px solid #184061',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease',
          fontFamily: '"Inria Serif", Arial, sans-serif',
          fontSize: 'clamp(12px, 2.2vw, 16px)',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          opacity: isSubmitting ? 0.7 : 1,
          pointerEvents: 'auto',
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            e.target.style.backgroundColor = '#184061';
            e.target.style.color = 'white';
            e.target.style.boxShadow = '0 12px 24px rgba(24, 64, 97, 0.3)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isSubmitting) {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#184061';
            e.target.style.boxShadow = 'none';
          }
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </motion.form>
  )
}



