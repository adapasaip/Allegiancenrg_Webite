import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SectionWrapper from '../components/SectionWrapper'
import CardGrid from '../components/CardGrid'
import CTASection from '../components/CTASection'
import ContactForm from '../components/ContactForm'
import siteContent from '../content/siteContent.json'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const coreprinciples = siteContent.guidingPrinciples.principles
  const investmentCards = siteContent.heroInfoBoxes
  const whyChooseCards = siteContent.whyChooseUs.items
  const strategicInvestments = siteContent.strategicInvestments.strategies

  return (
    <div>
      <section id="home">
        <HeroSection
          title="Strategic Energy Investments"
          backgroundImage="/images/pexels-snowfly09-33284879.jpg"
          showInfoBoxes={true}
        />
      </section>

      <section id="strategic-investments">
        <SectionWrapper className="bg-white p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white"
            >
              <h2
                className="mb-2 text-left"
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: 'clamp(32px, 8vw, 76px)',
                  fontWeight: 400,
                  color: '#184061',
                  lineHeight: '1.2',
                  letterSpacing: '-0.5px',
                }}
              >
                Strategic LNG &
              </h2>
              <h3
                className="mb-2 text-left"
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: 'clamp(28px, 7vw, 76px)',
                  fontWeight: 400,
                  color: '#184061',
                  lineHeight: '1.2',
                  letterSpacing: '-0.3px',
                }}
              >
                OIL Investments
              </h3>

              <div className="space-y-2 mt-4">
                {strategicInvestments.map((strategy, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4
                      style={{
                        fontFamily: '"Inria Serif", serif',
                        fontSize: '20px',
                        fontWeight: 600,
                        lineHeight: '36px',
                        color: '#184061',
                        marginBottom: '4px',
                      }}
                    >
                      {strategy.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: 'clamp(20px, 3.2vw, 20px)',
                        color: '#666666',
                        lineHeight: '1.5',
                        margin: 0,
                      }}
                    >
                      {strategy.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-96 md:h-auto md:min-h-96 overflow-hidden"
              style={{
                backgroundColor: '#d1d5db',
                backgroundImage: 'linear-gradient(135deg, #d1d5db 0%, #c0c5d0 100%)',
              }}
            >
              <img
                src="/images/lng infra build.jpg"
                alt="Strategic Investments"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      <section id="about">
        <SectionWrapper className="bg-white p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-96 md:h-auto md:min-h-96 overflow-hidden"
              style={{
                backgroundColor: '#b0b8c8',
                backgroundImage: 'linear-gradient(135deg, #b0b8c8 0%, #9ca5b8 100%)',
              }}
            >
              <img
                src="/images/pexels-shvetsa-5324993.jpg"
                alt="Who We Are"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-12 md:p-20 flex flex-col justify-center bg-white"
            >
              <h2
                className="mb-6"
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: '64px',
                  fontWeight: 400,
                  color: '#184061',
                  lineHeight: '64px',
                  letterSpacing: '-0.5px',
                }}
              >
                Who We Are
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  color: '#666666',
                  lineHeight: '1.8',
                  fontSize: '20px',
                }}
              >
                AllegianceNRG is an independent trade house specializing in LNG and oil derivatives, delivering value through expertise, agility, and a customer-centric approach.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  color: '#666666',
                  lineHeight: '1.8',
                  fontSize: '20px',
                }}
              >
                We have built our reputation on the foundation of trust, transparency, and excellence in a competitive landscape. Our team combines deep industry knowledge with strong trading experience to serve as a reliable global partner for strategic energy investments.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  color: '#666666',
                  lineHeight: '1.8',
                  fontSize: '20px',
                }}
              >
                We are more than advisors - we are your trusted partner in navigating the complexities of energy markets with precision and care.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/team')}
                className="px-14 py-4 rounded-sm transition-all w-fit"
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#184061',
                  border: '2px solid #184061',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  minHeight: '56px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#184061';
                  e.target.style.color = 'white';
                  e.target.style.boxShadow = '0 8px 16px rgba(22, 33, 106, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#184061';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Learn More About Us - Meet The Team
              </motion.button>
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      <section id="mission" style={{ backgroundColor: '#F5F6F8' }}>
        <SectionWrapper className="p-0" style={{ backgroundColor: '#F5F6F8' }}>
          <div className="px-6 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-5xl mx-auto"
            >
              <h2
                style={{
                  fontFamily: '"Inria Serif", serif',
                  fontSize: 'clamp(52px, 7.2vw, 78px)',
                  fontWeight: 400,
                  color: '#184061',
                  lineHeight: '1.3',
                }}
              >
                Aligning Your Wealth with<br />What Matters Most
              </h2>
            </motion.div>
          </div>

          <div className="px-6 py-12 md:py-20">
            <div className="max-w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch mb-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-96 md:h-auto md:min-h-96 overflow-hidden"
                style={{
                  backgroundColor: '#b0b8c8',
                  backgroundImage: 'linear-gradient(135deg, #b0b8c8 0%, #9ca5b8 100%)',
                }}
              >
                <img
                  src="/images/2026-04-12_23-11-07.jpg.jpeg"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-12 md:p-20 flex flex-col justify-center bg-white"
              >
              <h3
                className="mb-6"
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: '64px',
                  fontWeight: 400,
                  color: '#184061',
                  borderLeft: '4px solid #184061',
                  paddingLeft: '16px',
                  lineHeight: '64px',
                  letterSpacing: '-0.5px',
                }}
              >
                Our Mission
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    color: '#666666',
                    lineHeight: '1.8',
                    fontSize: '20px',
                  }}
                >
                  Promote transparency and efficiency while enabling sustainable growth across global energy markets.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-12 md:p-20 flex flex-col justify-center bg-white"
              >
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: '"Inria Serif", Arial, sans-serif',
                    fontSize: '64px',
                    fontWeight: 400,
                    color: '#184061',
                    borderLeft: '4px solid #184061',
                    paddingLeft: '16px',
                    lineHeight: '64px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Our Vision
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    color: '#666666',
                    lineHeight: '1.8',
                    fontSize: '20px',
                  }}
                >
                  Our vision is to be the trusted partner for High-Net-Worth individuals and entrepreneurs by offering long-term, independent, and conflict-free financial services. Operating through a boutique consultancy model, we prioritize personalized solutions, free from the constraints and biases of large institutional advisory firms.
                </p>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-96 md:h-auto md:min-h-96 overflow-hidden"
                style={{
                  backgroundColor: '#b0b8c8',
                  backgroundImage: 'linear-gradient(135deg, #b0b8c8 0%, #9ca5b8 100%)',
                }}
              >
                <img
                  src="/images/2026-04-12_23-13-09.jpg.jpeg"
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </motion.div>
            </div>

            {/* Strategic Focus & Innovation with layout matching Mission/Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
              {/* Right Image - first for alternating pattern */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-96 md:h-auto md:min-h-96 overflow-hidden"
                style={{
                  backgroundColor: '#b0b8c8',
                  backgroundImage: 'linear-gradient(135deg, #b0b8c8 0%, #9ca5b8 100%)',
                  order: -1,
                }}
              >
                <img
                  src="/images/discharge port2.jpg"
                  alt="Strategic Focus & Innovation"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </motion.div>

              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-12 md:p-20 flex flex-col justify-center bg-white"
              >
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: '"Inria Serif", Arial, sans-serif',
                    fontSize: '64px',
                    fontWeight: 400,
                    color: '#184061',
                    borderLeft: '4px solid #184061',
                    paddingLeft: '16px',
                    lineHeight: '64px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  VISION: Strategic Focus & Innovation
                </h3>
                
                {/* Strategic Focus items as text list */}
                <div className="space-y-6">
                  {[
                    {
                      title: 'Strategic Focus',
                      description: 'Success is anchored in a clear focus as an independent trade house in LNG and oil derivatives.',
                    },
                    {
                      title: 'Market Understanding',
                      description: 'Deep insight into market dynamics supports stronger decisions and resilient execution.',
                    },
                    {
                      title: 'Optimize & Manage Risk',
                      description: 'Optimized supply chains and disciplined risk management strengthen performance in volatility.',
                    },
                    {
                      title: 'Digital Innovation',
                      description: 'Embracing digital tools positions AllegianceNRG for sustainable growth and differentiation',
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4
                        style={{
                          fontFamily: '"Inria Serif", serif',
                          fontSize: '20px',
                          fontWeight: 600,
                          lineHeight: '36px',
                          color: '#184061',
                          marginBottom: '4px',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: '"Work Sans", sans-serif',
                          fontSize: '20px',
                          color: '#666666',
                          lineHeight: '1.8',
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Button - moved after Strategic Focus */}
            <div className="px-6 py-12 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-sm transition-all"
                  style={{
                    fontFamily: '"Inria Serif", Arial, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#184061',
                    border: '2px solid #184061',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    padding: '20px 48px',
                    letterSpacing: '0.5px',
                    minHeight: '56px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#184061';
                    e.target.style.color = 'white';
                    e.target.style.boxShadow = '0 8px 16px rgba(22, 33, 106, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#184061';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  See How we Align Interest
                </motion.button>
              </motion.div>
            </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* Relationships and partnerships */}
      <section id="relationships">
        <SectionWrapper className="bg-white p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-96 md:h-auto md:min-h-96 overflow-hidden"
              style={{
                backgroundColor: '#d1d5db',
                backgroundImage: 'linear-gradient(135deg, #d1d5db 0%, #c0c5d0 100%)',
              }}
            >
              <img
                src="/images/2026-04-12_23-12-04.jpg.jpeg"
                alt="Building Relationships"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-12 md:p-20 flex flex-col justify-center"
            >
              <h2
                className="mb-6"
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: '64px',
                  fontWeight: 400,
                  color: '#184061',
                  lineHeight: '64px',
                  letterSpacing: '-0.5px',
                }}
              >
                Building Relationships with Producers and Suppliers
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3
                    style={{
                      fontFamily: '"Inria Serif", serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#184061',
                      marginBottom: '8px',
                    }}
                  >
                    Foundations of Strong Partnerships
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '20px',
                      color: '#666666',
                      lineHeight: '1.7',
                    }}
                  >
                    Trust and consistent communication are key to building strong relationships with producers and suppliers.
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: '"Inria Serif", serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#184061',
                      marginBottom: '8px',
                    }}
                  >
                    Benefits of Strong Relationships
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '20px',
                      color: '#666666',
                      lineHeight: '1.7',
                    }}
                  >
                    Such relationships secure preferential pricing, reliable supply chains, and early market access.
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: '"Inria Serif", serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#184061',
                      marginBottom: '8px',
                    }}
                  >
                    Impact on Sourcing and Risk
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '20px',
                      color: '#666666',
                      lineHeight: '1.7',
                    }}
                  >
                    Over 70% of traders affirm that enduring producer ties enhance sourcing and risk management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      {/* Core principles showcase */}
      <section id="principles">
        <SectionWrapper className="p-0" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-12 md:p-20 flex flex-col justify-center"
            >
              <h2
                className="mb-6"
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: '64px',
                  fontWeight: 400,
                  color: '#184061',
                  lineHeight: '64px',
                  letterSpacing: '-0.5px',
                }}
              >
                Guiding Principles
              </h2>
              <p
                className="mb-10 text-base leading-relaxed"
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  color: '#666666',
                  fontSize: '20px',
                }}
              >
                At AllegianceNRG, our philosophy is built on a foundation of trust, discretion, and excellence. We believe that every client is unique, and we are committed to crafting bespoke solutions that reflect your individual needs, ambitions, and financial complexities.
              </p>

              <h3
                className="mb-8"
                style={{
                  fontFamily: '"Inria Serif", serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#184061',
                  borderLeft: '4px solid #184061',
                  paddingLeft: '16px',
                }}
              >
                Our Core Principles
              </h3>

              <div className="space-y-6">
                {coreprinciples.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4
                      style={{
                        fontFamily: '"Inria Serif", serif',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#184061',
                        marginBottom: '6px',
                      }}
                    >
                      {principle.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: '20px',
                        color: '#666666',
                        lineHeight: '1.6',
                      }}
                    >
                      {principle.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="mt-8 pt-8 border-t border-gray-200"
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: '20px',
                  color: '#666666',
                  lineHeight: '1.7',
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                AllegianceNRG strives to be more than an Oil and Gas advisor - we are your trusted partner in navigating the complexities of Strategic Investments with precision and care.
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-3 rounded-sm transition-all"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#184061',
                    border: '2px solid #184061',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#184061';
                    e.target.style.color = 'white';
                    e.target.style.boxShadow = '0 8px 16px rgba(22, 33, 106, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#184061';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Experience Our Commitment
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-96 md:h-auto md:min-h-96 overflow-hidden"
              style={{
                backgroundColor: '#e0e7ff',
                backgroundImage: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)',
              }}
            >
              <img
                src="/images/pexels-pixabay-327041.jpg"
                alt="Guiding Principles"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-detailed">
        <div style={{ backgroundColor: '#184061', padding: '60px 24px' }}>
          <div className="container mx-auto max-w-7xl">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                style={{
                  fontFamily: '"Inria Serif", serif',
                  fontSize: 'clamp(40px, 6.5vw, 64px)',
                  fontWeight: 400,
                  color: 'white',
                  lineHeight: '1.2',
                }}
              >
                Why Choose AllegianceNRG?
              </h2>
            </motion.div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: 'rgba(24, 64, 97, 0.4)',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'white',
                    letterSpacing: '0.5px',
                  }}
                >
                  <span style={{ opacity: 0.7 }}>01.</span> Client-First Philosophy
                </h3>
                <p
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '20px',
                    color: '#cfd9e6',
                    lineHeight: '1.8',
                  }}
                >
                  Your success is our priority. Every strategy and decision is tailored to meet your unique financial objectives.
                </p>
              </motion.div>

              {/* Feature card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: 'rgba(24, 64, 97, 0.4)',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'white',
                    letterSpacing: '0.5px',
                  }}
                >
                  <span style={{ opacity: 0.7 }}>02.</span> Personalized Services
                </h3>
                <p
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '20px',
                    color: '#cfd9e6',
                    lineHeight: '1.8',
                  }}
                >
                  We take pride in delivering solutions that are as distinctive as our clients, ensuring a truly customized experience.
                </p>
              </motion.div>

              {/* Feature card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: 'rgba(24, 64, 97, 0.4)',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'white',
                    letterSpacing: '0.5px',
                  }}
                >
                  <span style={{ opacity: 0.7 }}>03.</span> Expertise and Experience
                </h3>
                <p
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '16px',
                    color: '#cfd9e6',
                    lineHeight: '1.8',
                  }}
                >
                  Our team comprises seasoned professionals with a deep understanding and expertise in energy markets, strategic investments, and financial structuring.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique value proposition */}
      <section id="how-we-differ">
        <div
          className="relative w-full h-auto min-h-[500px] md:min-h-[600px] flex items-center justify-center py-8 md:py-12"
          style={{
            backgroundImage: 'url(/images/ESG%20Compliance%20Excellence.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          {/* Dark overlay effect */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-16 py-8 md:py-12"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              borderRadius: '0px',
            }}
          >
            {/* Section title */}
            <h2
              className="mb-8 text-center"
              style={{
                fontFamily: '"Inria Serif", Arial, sans-serif',
                fontSize: '64px',
                fontWeight: 400,
                color: '#184061',
                lineHeight: '64px',
              }}
            >
              How We Differ from Larger Firms
            </h2>

            {/* Descriptive text */}
            <p
              className="mb-10 text-center"
              style={{
                fontFamily: '"Work Sans", sans-serif',
                fontSize: '20px',
                color: '#666666',
                lineHeight: '1.8',
              }}
            >
              Unlike large advisory firms bound by quotas and institutional priorities, AllegianceNRG operates with agility, innovation, and a personal touch. Our boutique model allows us to build long-term relationships, deliver highly customized solutions, and adapt swiftly to the evolving needs of our clients.
            </p>

            {/* Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-14 py-4 rounded-sm transition-all"
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#184061',
                  border: '2px solid #184061',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  letterSpacing: '0.5px',
                  minHeight: '56px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#184061';
                  e.target.style.color = 'white';
                  e.target.style.boxShadow = '0 8px 16px rgba(22, 33, 106, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#184061';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Discover The AllegianceNRG Difference
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Contact form area */}
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
              backgroundImage: 'url(/images/2026-04-12_23-14-11.jpg.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#d1d5db',
            }}
          >
            {/* Image overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>

          {/* Right: Contact form */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center py-16 md:py-0 px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full max-w-lg"
            >
              {/* Contact section title */}
              <h2
                className="mb-10"
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: 'clamp(36px, 6vw, 56px)',
                  fontWeight: 400,
                  color: '#184061',
                  lineHeight: '1.3',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Lets connect
              </h2>

              {/* Email form */}
              <ContactForm variant="minimal" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


