import { motion } from 'framer-motion'

export default function HeroSection({ title, subtitle, backgroundImage, children, showInfoBoxes }) {

  return (
    <section
      className="relative w-full min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: backgroundImage ? 'transparent' : '#0a0a0a',
        minHeight: 'max(100vh, 500px)',
      }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 container mx-auto px-4 sm:px-6 md:px-6 max-w-5xl text-center py-12 sm:py-16 md:py-20"
      >
        {title && (
          <h1
            className="mb-4 sm:mb-6 text-white leading-tight"
            style={{
              fontFamily: '"Inria Serif", Arial, sans-serif',
              fontSize: 'clamp(20px, 8vw, 84px)',
              fontWeight: 400,
              lineHeight: '1.2',
              color: 'rgb(255, 255, 255)',
              letterSpacing: '-0.5px',
            }}
          >
            {title}
          </h1>
        )}

        {subtitle && (
          <p
            className="text-white"
            style={{
              fontFamily: '"Inria Serif", Arial, sans-serif',
              fontSize: 'clamp(14px, 3.5vw, 24px)',
              fontWeight: 400,
              lineHeight: '1.6',
              color: 'rgb(255, 255, 255)',
              maxWidth: '800px',
              margin: '0 auto 24px md:32px auto',
              paddingLeft: '12px',
              paddingRight: '12px',
            }}
          >
            {subtitle}
          </p>
        )}

        {showInfoBoxes && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full mt-6 md:mt-8 flex justify-center"
            style={{
              fontFamily: '"Inria Serif", Arial, sans-serif',
              fontSize: 'clamp(13px, 2.5vw, 22px)',
              fontWeight: 600,
              lineHeight: '1.7 md:1.9',
              color: '#FFFFFF',
              maxWidth: '1200px',
              margin: '24px md:32px auto 0 auto',
              letterSpacing: '0.3px',
              paddingLeft: '12px',
              paddingRight: '12px',
            }}
          >
            Investments in oil fields, refineries, and LNG terminals ensure a reliable energy supply and efficient distribution. These infrastructures support market demand while improving operational performance. Overall, they create long-term value and expand energy access.
          </motion.p>
        )}

        {children}
      </motion.div>
    </section>
  )
}
