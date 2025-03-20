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
    <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="/mrinal.png" 
                  alt="Your Name" 
                  className="w-full h-auto"
                  // onError={(e) => {
                  //   e.target.onerror = null;
                  //   e.target.src = "/api/placeholder/400/400";
                  // }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mrinal Sharma</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-4">Master's Student in CSE</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Based in Notre Dame, USA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                variants={itemVariants}
              >
                About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                I'm a passionate software engineering student with a focus on building 
                scalable and user-friendly applications. With a strong foundation in 
                computer science principles and hands-on experience with modern technologies, 
                I strive to create solutions that make a positive impact.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                Currently pursuing my Master's degree in Computer Science and Eng. at The University of Notre Dame, 
                I combine academic knowledge with practical projects to continuously 
                improve my skills and stay updated with industry trends.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <FaCode className="text-indigo-600 dark:text-indigo-400 text-2xl mb-2" />
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Frontend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">React, Tailwind</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <FaServer className="text-indigo-600 dark:text-indigo-400 text-2xl mb-2" />
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Backend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Express</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <FaLaptopCode className="text-indigo-600 dark:text-indigo-400 text-2xl mb-2" />
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Database</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB, SQL</p>
              </div>
              
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-4"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                Let's connect
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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