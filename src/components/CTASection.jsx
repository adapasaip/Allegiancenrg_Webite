import { motion } from 'framer-motion'

export default function CTASection({ title, description, buttonText }) {
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12 sm:py-16 md:py-24 lg:py-28 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-6 max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 md:mb-8">
          {title}
        </h2>
        <p className="text-gray-300 mb-8 sm:mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
          {description}
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            minHeight: '44px',
            padding: 'clamp(12px, 3vw, 20px) clamp(24px, 6vw, 56px)',
            backgroundColor: 'transparent',
            color: '#184061',
            fontWeight: 600,
            border: '2px solid #184061',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: '"Inria Serif", Arial, sans-serif',
            fontSize: 'clamp(13px, 2.2vw, 16px)',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#184061';
            e.target.style.color = 'white';
            e.target.style.boxShadow = '0 12px 24px rgba(24, 64, 97, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#184061';
            e.target.style.boxShadow = 'none';
          }}
        >
          {buttonText || 'Get Started'}
        </motion.button>
      </div>
    </motion.section>
}



