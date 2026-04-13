/**
 * Typography System - Premium design with consistent sizing and styling
 * Mobile-first responsive font scales using CSS clamp() for fluid typography
 */

export const typography = {
  // Font definitions
  fonts: {
    serif: '"Inria Serif", serif',
    sans: '"Work Sans", sans-serif',
  },

  // Responsive heading sizes - Mobile-first approach
  h1: {
    fontSize: 'clamp(20px, 6vw, 66px)',
    lineHeight: '1.1',
    fontWeight: 400,
    fontFamily: '"Inria Serif", serif',
    letterSpacing: '0.5px',
  },

  h2: {
    fontSize: 'clamp(18px, 5vw, 56px)',
    lineHeight: '1.2',
    fontWeight: 400,
    fontFamily: '"Inria Serif", serif',
    letterSpacing: '0.5px',
  },

  h3: {
    fontSize: 'clamp(16px, 4.5vw, 44px)',
    lineHeight: '1.2',
    fontWeight: 400,
    fontFamily: '"Inria Serif", serif',
    letterSpacing: '0.3px',
  },

  h4: {
    fontSize: 'clamp(16px, 3vw, 24px)',
    lineHeight: '1.3',
    fontWeight: 600,
    fontFamily: '"Work Sans", sans-serif',
    letterSpacing: '0.2px',
  },

  // Paragraph and text styles
  body: {
    fontSize: 'clamp(14px, 2.5vw, 18px)',
    lineHeight: '1.8',
    fontWeight: 400,
    fontFamily: '"Work Sans", sans-serif',
    color: '#666666',
  },

  bodyLarge: {
    fontSize: 'clamp(15px, 2.8vw, 20px)',
    lineHeight: '1.8',
    fontWeight: 400,
    fontFamily: '"Work Sans", sans-serif',
    color: '#666666',
  },

  bodySmall: {
    fontSize: 'clamp(12px, 2vw, 14px)',
    lineHeight: '1.6',
    fontWeight: 400,
    fontFamily: '"Work Sans", sans-serif',
    color: '#999999',
  },

  // Small and meta text
  label: {
    fontSize: 'clamp(11px, 1.8vw, 12px)',
    lineHeight: '1.5',
    fontWeight: 700,
    fontFamily: '"Work Sans", sans-serif',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    color: '#666666',
  },

  // Button styling
  button: {
    fontSize: '15px',
    lineHeight: '1.5',
    fontWeight: 600,
    fontFamily: '"Work Sans", sans-serif',
    letterSpacing: '0.5px',
  },

  // Helper methods
  getResponsiveSize: (mobile, tablet, desktop) => ({
    '@media (max-width: 640px)': { fontSize: mobile },
    '@media (min-width: 641px) and (max-width: 1024px)': { fontSize: tablet },
    '@media (min-width: 1025px)': { fontSize: desktop },
  }),
};

// Apply typography styles to elements
export const applyTypography = (variant) => {
  return typography[variant] || typography.body;
};

// Tailwind CSS classes for typography
export const typographyClasses = {
  h1: 'text-5xl md:text-6xl font-serif font-semibold',
  h2: 'text-4xl md:text-5xl font-serif font-Normal',
  h3: 'text-2xl md:text-3xl font-serif',
  h4: 'text-lg md:text-xl font-sans font-semibold',
  body: 'text-base md:text-lg leading-relaxed text-gray-600',
  bodySmall: 'text-sm leading-relaxed text-gray-500',
  label: 'text-xs uppercase tracking-wider font-semibold text-gray-700',
};
