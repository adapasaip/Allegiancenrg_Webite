import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import SectionWrapper from '../components/SectionWrapper'
import { Heading, TextBlock, ImageContainer, CardGrid } from '../components/ui'
import siteContent from '../content/siteContent.json'

/**
 * Refactored Home Page
 * Uses centralized JSON content and reusable UI components
 * Follows production-ready best practices
 */

export default function Home() {
  const {
    hero,
    heroInfoBoxes,
    whoWeAre,
    missionVision,
    guidingPrinciples,
    whyChooseUs,
    howWeDiffer,
  } = siteContent

  return (
    <div>
      {/* Main hero banner */}
      <section id="home">
        <HeroSection
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
          showInfoBoxes={true}
          infoBoxes={heroInfoBoxes}
        />
      </section>

      {/* About company section */}
      <section id="about">
        <SectionWrapper className="bg-white p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageContainer
                src={whoWeAre.image}
                alt="Who We Are"
                aspectRatio="16/9"
                minHeight="400px"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-12 md:p-20 flex flex-col justify-center bg-white"
            >
              <Heading variant="h3" withBorder color="#16216A" className="mb-6">
                {whoWeAre.title}
              </Heading>

              <div className="space-y-4 mb-6">
                {whoWeAre.paragraphs.map((para, idx) => (
                  <TextBlock key={idx} variant="body" color="#666666">
                    {para}
                  </TextBlock>
                ))}
              </div>

              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="px-8 py-3 rounded-sm transition-opacity w-fit"
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#16216A',
                  border: '2px solid #16216A',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                {whoWeAre.cta}
              </motion.button>
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      {/* Mission and vision */}
      <section id="mission">
        <SectionWrapper className="p-0" style={{ backgroundColor: missionVision.backgroundColor }}>
          {/* Intro text */}
          <div className="px-6 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <Heading
                variant="h2"
                color="#16216A"
                centered
                className="mb-0"
              >
                {missionVision.tagline}
              </Heading>
            </motion.div>
          </div>

          <div className="px-6 py-12 md:py-20">
            <div className="max-w-7xl mx-auto">
              {/* Mission overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch mb-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <ImageContainer
                    src={missionVision.mission.image}
                    alt={missionVision.mission.title}
                    aspectRatio="16/9"
                    minHeight="400px"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="p-12 md:p-20 flex flex-col justify-center bg-white"
                >
                  <Heading variant="h3" withBorder color="#16216A" className="mb-6">
                    {missionVision.mission.title}
                  </Heading>
                  <TextBlock variant="body" color="#666666">
                    {missionVision.mission.description}
                  </TextBlock>
                </motion.div>
              </div>

              {/* Vision overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="p-12 md:p-20 flex flex-col justify-center bg-white"
                >
                  <Heading variant="h3" withBorder color="#16216A" className="mb-6">
                    {missionVision.vision.title}
                  </Heading>
                  <TextBlock variant="body" color="#666666">
                    {missionVision.vision.description}
                  </TextBlock>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <ImageContainer
                    src={missionVision.vision.image}
                    alt={missionVision.vision.title}
                    aspectRatio="16/9"
                    minHeight="400px"
                  />
                </motion.div>
              </div>

              {/* Learn more button */}
              <div className="px-6 py-12 md:py-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.button
                    whileHover={{ opacity: 0.8 }}
                    className="px-10 py-3 rounded-sm transition-opacity"
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#16216A',
                      border: '2px solid #16216A',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    {missionVision.cta}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* Core values section */}
      <section id="principles">
        <SectionWrapper className="bg-white p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-12 md:p-20 flex flex-col justify-center"
            >
              <Heading variant="h3" withBorder color="#16216A" className="mb-6">
                {guidingPrinciples.title}
              </Heading>

              <TextBlock variant="body" color="#666666" className="mb-10">
                {guidingPrinciples.intro}
              </TextBlock>

              <Heading variant="h4" color="#16216A" className="mb-8">
                {guidingPrinciples.principlesTitle}
              </Heading>

              <div className="space-y-6">
                {guidingPrinciples.principles.map((principle, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#16216A',
                        marginBottom: '6px',
                      }}
                    >
                      {principle.title}
                    </p>
                    <TextBlock variant="bodySmall" color="#666666">
                      {principle.description}
                    </TextBlock>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="mt-8 pt-8 border-t border-gray-200"
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: '13px',
                  color: '#666666',
                  lineHeight: '1.7',
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {guidingPrinciples.closing}
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageContainer
                src={guidingPrinciples.image}
                alt={guidingPrinciples.title}
                aspectRatio="16/9"
                minHeight="400px"
              />
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why-choose-detailed">
        <div style={{ backgroundColor: whyChooseUs.backgroundColor, padding: '60px 24px' }}>
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Heading
                variant="h2"
                color="white"
                centered
              >
                {whyChooseUs.title}
              </Heading>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8"
                  style={{
                    backgroundColor: 'rgba(25, 49, 129, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0px',
                  }}
                >
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'white',
                      letterSpacing: '0.5px',
                    }}
                  >
                    <span style={{ opacity: 0.7 }}>{item.number}</span> {item.title}
                  </h3>
                  <TextBlock variant="body" color="#cfd9e6" centered={false}>
                    {item.description}
                  </TextBlock>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key differentiator */}
      <section id="how-we-differ">
        <div
          className="relative w-full h-auto min-h-[500px] md:min-h-[600px] flex items-center justify-center py-8 md:py-12"
          style={{
            backgroundImage: `url(${howWeDiffer.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#d1d5db',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-16 py-8 md:py-12"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              borderRadius: '0px',
            }}
          >
            <Heading variant="h2" color="#16216A" centered className="mb-8">
              {howWeDiffer.title}
            </Heading>

            <TextBlock variant="body" color="#666666" centered className="mb-10">
              {howWeDiffer.description}
            </TextBlock>

            <div className="text-center">
              <motion.button
                whileHover={{ opacity: 0.8 }}
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#16216A',
                  border: '2px solid #16216A',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  letterSpacing: '0.5px',
                  padding: '12px 48px',
                }}
              >
                {howWeDiffer.cta}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact form section */}
      <section id="contact">
        <div className="relative w-full min-h-screen flex items-stretch">
          {/* Left Side - Background Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:flex md:w-1/2 items-center justify-center"
            style={{
              backgroundImage: `url(/images/heroimg3.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#d1d5db',
            }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>

          {/* Contact form */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center py-16 md:py-0 px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full max-w-lg"
            >
              <Heading variant="h2" color="#16216A" className="mb-10">
                {siteContent.contact.title}
              </Heading>

              <form className="space-y-6">
                {siteContent.contact.form.fields.map((field) => {
                  if (field.type === 'textarea') {
                    return (
                      <textarea
                        key={field.name}
                        placeholder={field.placeholder}
                        rows="6"
                        required={field.required}
                        style={{
                          fontFamily: '"Work Sans", sans-serif',
                          width: '100%',
                          padding: '14px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '4px',
                          fontSize: '15px',
                          color: '#16216A',
                          boxSizing: 'border-box',
                          resize: 'vertical',
                          minHeight: '160px',
                        }}
                      />
                    )
                  }

                  if (field.name === 'phone' || field.name === 'email') {
                    return (
                      <div key={field.name} className="grid grid-cols-2 gap-4">
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          style={{
                            fontFamily: '"Work Sans", sans-serif',
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            fontSize: '15px',
                            color: '#16216A',
                            boxSizing: 'border-box',
                          }}
                        />
                        {field.name === 'phone' && (
                          <input
                            type="email"
                            placeholder="E-mail"
                            style={{
                              fontFamily: '"Work Sans", sans-serif',
                              width: '100%',
                              padding: '14px 16px',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '15px',
                              color: '#16216A',
                              boxSizing: 'border-box',
                            }}
                          />
                        )}
                      </div>
                    )
                  }

                  return (
                    <input
                      key={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '15px',
                        color: '#16216A',
                        boxSizing: 'border-box',
                      }}
                    />
                  )
                })}

                {/* Privacy Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    required
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                      accentColor: '#16216A',
                    }}
                  />
                  <label
                    htmlFor="privacy-policy"
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '14px',
                      color: '#666666',
                      cursor: 'pointer',
                    }}
                  >
                    {siteContent.contact.form.privacyText}{' '}
                    <a
                      href="#"
                      style={{
                        color: '#16216A',
                        textDecoration: 'underline',
                        fontWeight: 500,
                      }}
                    >
                      {siteContent.contact.form.privacyLink}
                    </a>
                    *
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ opacity: 0.9 }}
                  type="submit"
                  className="w-full py-4 rounded-sm transition-all mt-8"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#16216A',
                    border: '2px solid #16216A',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    letterSpacing: '0.5px',
                  }}
                >
                  {siteContent.contact.form.submitButton}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
