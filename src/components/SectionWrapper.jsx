import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function SectionWrapper({ children, className = '' }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={`section-container ${className}`}
    >
      {children}
    </motion.section>
  )
}
