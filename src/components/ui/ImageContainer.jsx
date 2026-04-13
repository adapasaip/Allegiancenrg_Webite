/**
 * ImageContainer Component
 * Ensures consistent image sizing and aspect ratios
 * Prevents image distortion and improves layout consistency
 */

export default function ImageContainer({
  src,
  alt,
  aspectRatio = '16/9', // Image ratio: 16/9, 4/3, 1/1, or auto
  className = '',
  objectFit = 'cover',
  priority = false,
  fallbackColor = '#b0b8c8',
  minHeight = '400px',
  animation = true,
}) {
  const aspectRatioClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-square', // Approximate 4:3 ratio
    '1/1': 'aspect-square',
    auto: '',
  }[aspectRatio] || ''

  const animationClass = animation ? 'transition-opacity duration-600' : ''

  return (
    <div
      className={`overflow-hidden ${aspectRatioClass} ${className}`.trim()}
      style={{
        backgroundColor: fallbackColor,
        backgroundImage: `linear-gradient(135deg, ${fallbackColor} 0%, #9ca5b8 100%)`,
        minHeight: !aspectRatioClass ? minHeight : 'auto',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={`w-full h-full ${animationClass}`.trim()}
        style={{
          objectFit,
          objectPosition: 'center',
        }}
      />
    </div>
  )
}

/**
 * Image Grid Component
 * Displays multiple images in consistent grid with proper aspect ratios
 */

export function ImageGrid({
  images = [],
  columns = 3,
  aspectRatio = '4/3',
  gap = 'gap-6',
  className = '',
}) {
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${gridColsClass} ${gap} ${className}`.trim()}>
      {images.map((image, index) => (
        <ImageContainer
          key={index}
          src={image.src}
          alt={image.alt}
          aspectRatio={aspectRatio}
        />
      ))}
    </div>
  )
}
