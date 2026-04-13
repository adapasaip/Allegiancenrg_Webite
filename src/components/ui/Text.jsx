/**
 * Text Component
 * Flexible text element with consistent typography styling
 * Supports multiple variants and styling options
 */

export default function Text({
  children,
  variant = 'body', // Typography style: h1, h2, h3, h4, body, small, or caption
  color = 'text-gray-700',
  className = '',
  weight = 'normal', // Font weight: light, normal, semibold, or bold
  centered = false,
  asChild = null, // Render as: div, span, or other HTML element
}) {
  const Element = asChild || 'p'

  const variantClasses = {
    h1: 'text-5xl md:text-6xl font-serif font-semibold leading-tight',
    h2: 'text-3xl md:text-4xl font-serif font-semibold leading-snug',
    h3: 'text-xl md:text-2xl font-serif leading-snug',
    h4: 'text-lg md:text-xl font-sans font-semibold',
    body: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm leading-relaxed',
    caption: 'text-xs md:text-sm',
  }[variant] || 'text-base leading-relaxed'

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }[weight] || 'font-normal'

  const combinedClasses = `
    ${variantClasses}
    ${weightClasses}
    ${color}
    ${centered ? 'text-center' : ''}
    ${className}
  `.trim()

  return (
    <Element className={combinedClasses}>
      {children}
    </Element>
  )
}
