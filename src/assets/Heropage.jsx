import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';


const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-0" />
      
      <motion.div 
        className="text-center z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            Hello, I'm Mrinal.
          </span>
        </motion.h1>

        <div className="text-2xl md:text-3xl text-white font-light mb-8 h-12">
      <Typewriter
        words={['Software Engineer', 'Full-Stack Developer', 'Problem Solver', 'CS Student']}
        loop={Infinity} // Infinite loop
        cursor
        cursorStyle='|'
        typeSpeed={70} // Adjust typing speed (milliseconds)
        deleteSpeed={50} // Adjust deleting speed (milliseconds)
        delaySpeed={1000} // Adjust delay between words (milliseconds)
      />
    </div>
        
        {/* <div className="text-2xl md:text-3xl text-white font-light mb-8 h-12">
          <TypewriterComponent
            options={{
              strings: ['Software Engineer', 'Full-Stack Developer', 'Problem Solver', 'CS Student'],
              autoStart: true,
              loop: true,
            }}
          />
        </div> */}
        
        <motion.p 
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Building innovative solutions and turning complex problems into elegant code.
          Passionate about creating technology that makes a difference.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a 
            href="#projects" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full font-medium tracking-wide shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          
          <motion.a 
            href="#about" 
            className="bg-transparent hover:bg-white/10 text-white border border-white py-3 px-8 rounded-full font-medium tracking-wide shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down. Also, Observe the dragon 😉</span>
          <FaChevronDown className="animate-bounce" />
        </a>
      </motion.div>
    </div>
  );
};

export default HeroSection;