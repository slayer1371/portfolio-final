import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-300 animate-pulse"></div>
              
              <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/mrinal.png" 
                  alt="Mrinal Sharma" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <motion.div 
                className="inline-block mb-4"
                variants={itemVariants}
              >
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase tracking-widest">
                  About Me
                </span>
              </motion.div>

              <motion.h2 
                className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
                variants={itemVariants}
              >
                About my <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Digital Experiences</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                I am a Software Engineer and MS CS Graduate from the University of Notre Dame (Class of 2026), obsessed with building scalable, high-performance applications. My sweet spot lies at the intersection of Full Stack Engineering and Generative AI—I don't just use APIs; I build the architectures that make them useful.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                I specialize in full-stack development, turning complex problems into elegant solutions. Whether it's architecting backend systems, creating responsive UIs, or launching startups, I bring a problem-solving mindset to every project.
              </motion.p>
            </div>

            {/* Skill Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <FaCode className="text-cyan-400 text-2xl mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">Frontend</h3>
                <p className="text-sm text-gray-400">React, Next.js, Tailwind, Shadcn</p>
              </div>
              
              <div className="group bg-gradient-to-br from-blue-500/10 to-teal-500/10 border border-blue-500/30 hover:border-blue-500/60 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <FaServer className="text-blue-400 text-2xl mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">Backend</h3>
                <p className="text-sm text-gray-400">Node.js, Express, Next.js API</p>
              </div>
              
              <div className="group bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 hover:border-teal-500/60 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                <FaLaptopCode className="text-teal-400 text-2xl mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">Database</h3>
                <p className="text-sm text-gray-400">PostgreSQL, MongoDB, Prisma</p>
              </div>

              <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 hover:border-blue-500/60 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <FaMobileAlt className="text-blue-400 text-2xl mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">DevOps & Tools</h3>
                <p className="text-sm text-gray-400">Docker, Kubernetes, AWS, Stripe</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <a 
                href="https://www.linkedin.com/in/mrinal-sharma-nd/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
              >
                Let's Connect
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;