import { motion } from 'framer-motion'
import Heading from './Heading'
import TextBlock from './TextBlock'

/**
 * Card Component
 * Reusable card for consistent styling across the application
 */

export default function Card({
  title,
  description,
  icon,
  backgroundColor = 'white',
  textColor = '#16216A',
  descriptionColor = '#666666',
  className = '',
  onClick,
  hoverEffect = true,
  borderless = false,
  animation = true,
  children,
}) {
  const cardContent = (
    <div
      className={`p-4 sm:p-5 md:p-6 lg:p-8 h-full flex flex-col ${className}`.trim()}
      style={{
        backgroundColor,
        border: borderless ? 'none' : '1px solid #e5e7eb',
        borderRadius: '4px',
      }}
    >
      {icon && (
        <div
          className="text-3xl sm:text-4xl mb-3 sm:mb-4 md:mb-4"
          style={{
            fontFamily: '"Work Sans", sans-serif',
          }}
        >
          {icon}
        </div>
      )}

      {title && (
        <Heading
          variant="h4"
          color={textColor}
          className="mb-2 sm:mb-3 md:mb-3"
        >
          {title}
        </Heading>
      )}

      {description && (
        <TextBlock
          variant="bodySmall"
          color={descriptionColor}
          className="flex-grow"
        >
          {description}
        </TextBlock>
      )}

      {children}
    </div>
  )

  if (!animation) {
    return <div className={hoverEffect ? 'hover:shadow-lg transition-shadow' : ''}>{cardContent}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' } : {}}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {cardContent}
    </motion.div>
  )
}

/**
 * Card Grid Component
 * Display multiple cards in responsive grid
 */

export function CardGrid({
  cards = [],
  columns = 3,
  className = '',
  ...cardProps
}) {
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${gridColsClass} gap-6 md:gap-8 ${className}`.trim()}>
      {cards.map((card, index) => (
        <Card
          key={index}
          {...cardProps}
          {...card}
          className={card.className || ''}
        />
      ))}
    </div>
  )
}
