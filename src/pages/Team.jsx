import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import siteContent from '../content/siteContent.json'

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [selectedExpert, setSelectedExpert] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const teamMembers = siteContent.team.members
  const experts = siteContent.team.members

  return (
    <div className="w-full">
      <section style={{ backgroundColor: '#FFFFFF' }} className="w-full pt-32 md:pt-48 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
            <div>
              <h1
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: '56px',
                  fontWeight: 400,
                  lineHeight: '56px',
                  color: '#184061',
                  letterSpacing: '-0.5px',
                }}
              >
                Meet the Team
              </h1>
            </div>
            <div>
              <p
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '26px',
                  color: '#184061',
                }}
              >
                We believe different points of view don't just lead to the best answers; they also lead to the best questions being asked and the best solutions being devised. Our international team with its diverse set of experience, enable us to unlock innovation and discover new and distinct ideas, all in pursuit of achieving outstanding outcomes and value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
        <div
          style={{
            width: '100vw',
            height: '500px',
            backgroundImage: 'url(/images/pexels-isaac-revu-343430087-18538834.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="w-full h-full bg-black/8"></div>
        </div>
      </div>

      <section style={{ backgroundColor: '#FFFFFF' }} className="w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-start">
              <h2
                style={{
                  fontFamily: '"Inria Serif", Arial, sans-serif',
                  fontSize: '56px',
                  fontWeight: 400,
                  lineHeight: '56px',
                  color: 'rgb(24, 64, 97)',
                  letterSpacing: '-0.5px',
                }}
              >
                Our Experts
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {experts.map((expert) => (
                <motion.div
                  key={expert.id}
                  className="flex flex-col cursor-pointer group"
                  onClick={() => setSelectedExpert(expert)}
                  whileHover={{ transform: 'translateY(-8px)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    style={{
                      aspectRatio: '1/1.2',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      marginBottom: '16px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                    }}
                    className="group-hover:shadow-lg"
                  >
                    <img
                      src={expert.image}
                      alt={expert.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%)',
                        transition: 'filter 0.3s ease',
                      }}
                      className="group-hover:filter group-hover:grayscale-0"
                      onError={(e) => {
                        e.target.src = '/images/logo.png';
                      }}
                    />
                  </div>

                  <p
                    style={{
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '18px',
                      color: '#666666',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {expert.title}
                  </p>

                  <div className="flex items-center gap-2">
                    <h3
                      style={{
                        fontFamily: '"Inria Serif", serif',
                        fontSize: '24px',
                        fontWeight: 700,
                        lineHeight: '1.1',
                        color: '#184061',
                        margin: 0,
                      }}
                    >
                      {expert.name}
                    </h3>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        border: '1.5px solid #184061',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        flexShrink: 0,
                      }}
                      className="group-hover:bg-blue-900 group-hover:text-white"
                    >
                      <span
                        style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        ›
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative w-full min-h-screen flex items-stretch">
        <div
          className="hidden md:flex md:w-1/2 items-center justify-center"
          style={{
            backgroundImage: 'url(/images/heroimg3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#d1d5db',
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="w-full md:w-1/2 bg-white flex items-center justify-center py-16 md:py-0 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-lg"
          >
            <h2
              className="mb-10"
              style={{
                fontFamily: '"Inria Serif", serif',
                fontSize: 'clamp(36px, 5.2vw, 52px)',
                fontWeight: 400,
                color: '#184061',
                lineHeight: '1.2',
              }}
            >
              Lets connect
            </h2>

            <ContactForm variant="minimal" />
          </motion.div>
        </div>
      </section>

      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMember(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg flex flex-col md:flex-row"
            style={{ backgroundColor: '#184061' }}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 z-50 text-white hover:opacity-70 transition-opacity"
              style={{ fontSize: '32px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ✕
            </button>

            {/* Left Side - Image */}
            <div className="w-full md:w-2/5 flex items-center justify-center p-8 md:p-12 bg-gradient-to-b from-blue-900 to-blue-950">
              <div className="relative">
                <div
                  style={{
                    width: '280px',
                    height: '380px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                  }}
                >
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      e.target.src = '/images/person.png'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center text-white">
              {/* Title */}
              <p
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#A8B0D8',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                {selectedMember.title}
              </p>

              {/* Name */}
              <h2
                style={{
                  fontFamily: '"Inria Serif", serif',
                  fontSize: '56px',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                }}
              >
                {selectedMember.name}
              </h2>

              {/* Bio */}
              <p
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: '#D3D9FF',
                  lineHeight: '1.8',
                  letterSpacing: '0.3px',
                }}
              >
                {selectedMember.bio}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {selectedExpert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedExpert(null)}
          className="fixed inset-0 z-50 flex items-stretch bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden"
          >
            {/* Left Side - Image */}
            <div
              className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center"
              style={{
                backgroundColor: '#184061',
              }}
            >
              <button
                onClick={() => setSelectedExpert(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 text-white hover:opacity-70 transition-opacity z-50"
                style={{
                  fontSize: '32px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>

              <div
                style={{
                  width: '280px',
                  height: '380px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                  flexShrink: 0,
                }}
              >
                <img
                  src={selectedExpert.image}
                  alt={selectedExpert.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.target.src = '/images/logo.png'
                  }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div
              className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto"
              style={{
                backgroundColor: '#184061',
              }}
            >
              {/* Title */}
              <p
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#A8B0D8',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                {selectedExpert.title}
              </p>

              {/* Name */}
              <h2
                style={{
                  fontFamily: '"Inria Serif", serif',
                  fontSize: '50px',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                }}
              >
                {selectedExpert.name}
              </h2>

              {/* Bio */}
              <p
                style={{
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: '#D3D9FF',
                  lineHeight: '1.8',
                  letterSpacing: '0.3px',
                }}
              >
                {selectedExpert.bio}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}



