import { motion } from 'framer-motion'

export default function ImageTextSection({
  imagePosition = 'left',
  image,
  heading,
  content,
  backgroundColor = '#ffffff',
}) {
  const imageContent = (
    <motion.div
      className="w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-96"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src={image}
        alt={heading}
        className="w-full h-full object-cover"
      />
    </motion.div>
  )

  const textContent = (
    <motion.div
      className="flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16"
      initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2
        style={{
          fontFamily: '"Inria Serif", serif',
          fontSize: 'clamp(20px, 5vw, 56px)',
          fontWeight: 400,
          color: '#16216A',
          marginBottom: 'clamp(16px, 4vw, 24px)',
          lineHeight: '1.2',
        }}
      >
        {heading}
      </h2>
      <p
        style={{
          fontFamily: '"Work Sans", sans-serif',
          fontSize: 'clamp(14px, 2.5vw, 18px)',
          fontWeight: 400,
          color: '#666666',
          lineHeight: '1.7',
          marginBottom: '16px',
        }}
      >
        {content}
      </p>
    </motion.div>
  )

  return (
    <section style={{ backgroundColor }} className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-64 md:min-h-96">
        {imagePosition === 'left' ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </section>
  )
}
