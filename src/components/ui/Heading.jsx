import { createElement } from 'react'
import { typography } from '../../styles/typography'

/**
 * Heading Component
 * Provides consistent heading styles across the application
 * Supports h1, h2, h3, h4 variants
 */

export default function Heading({
  variant = 'h2',
  children,
  className = '',
  color = '#16216A',
  withBorder = false,
  centered = false,
}) {
  const typographyStyle = typography[variant]
  const headingTag = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : 'h4'
  const headingClasses = `${centered ? 'text-center' : ''} ${className}`.trim()

  return (
    <div className={headingClasses}>
      {createElement(
        headingTag,
        {
          style: {
            ...typographyStyle,
            color,
            borderLeft: withBorder ? '4px solid #16216A' : 'none',
            paddingLeft: withBorder ? '16px' : '0',
          },
        },
        children
      )}
    </div>
  )
}
