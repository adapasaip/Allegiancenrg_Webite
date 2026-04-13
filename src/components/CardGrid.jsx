import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

export default function CardGrid({ cards, columns = 3 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
  }

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 ${gridColsClass[columns]} gap-3 sm:gap-4 md:gap-6 lg:gap-8`}
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="card-hover p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 rounded-sm hover:border-gray-300"
        >
          {card.icon && (
            <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-4">{card.icon}</div>
          )}
          <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900">
            {card.title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            {card.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
