import { typography } from '../../styles/typography'

/**
 * TextBlock Component
 * Consistent text rendering with proper typography
 */

export default function TextBlock({
  children,
  variant = 'body',
  color = '#666666',
  className = '',
  centered = false,
}) {
  const typographyStyle = typography[variant]

  return (
    <p
      className={`leading-relaxed ${centered ? 'text-center' : ''} ${className}`.trim()}
      style={{
        ...typographyStyle,
        color,
      }}
    >
      {children}
    </p>
  )
}
