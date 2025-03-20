
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './App.css';
import HeroSection from './assets/Heropage';
import AboutSection from './assets/About';
import ProjectsSection from './assets/Projects';
// import ContactSection from './assets/Contact';
import SkillsSection from './assets/Skills';

const App = () => {
  const videoRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  // Handle smooth video playback during scrolling
  useEffect(() => {
    const video = videoRef.current;
    let scrollTimeout = null;

    const handleScroll = () => {
      setIsScrolling(true);
      if (videoRef.current && videoRef.current.paused) videoRef.current.play();

      // Determine which section is currently in view
      const scrollPosition = window.scrollY;

      const heroOffset = heroRef.current.offsetTop;
      const aboutOffset = aboutRef.current.offsetTop;
      const projectsOffset = projectsRef.current.offsetTop;
      const skillsOffset = skillsRef.current.offsetTop;

      if (scrollPosition < (aboutOffset + heroOffset) / 2) {
        setActiveSection('hero');
      } else if (scrollPosition < (projectsOffset + aboutOffset) / 2) {
        setActiveSection('about');
      } else if (scrollPosition < (skillsOffset + projectsOffset) / 2) {
        setActiveSection('projects');
      } else {
        setActiveSection('skills');
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        if (video) video.pause();
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Handle video looping
  useEffect(() => {
    const video = videoRef.current;
    
    const handleVideoEnd = () => {
      if (video) {
        video.currentTime = 0;
        if (isScrolling) {
          video.play();
        }
      }
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [isScrolling]);

  return (
    <div className={`relative w-full ${darkMode ? 'dark' : ''}`}>
      {/* Fullscreen background video with dynamic opacity */}
      <motion.div 
        className="fixed top-0 h-screen w-full overflow-hidden"
        style={{ opacity }}
      >
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/port4cut1.mp4"
          muted
          playsInline
          autoPlay
          loop
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 ${darkMode ? 'opacity-70' : 'opacity-40'}`} />
      </motion.div>

      {/* Navigation bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-sm transition-all duration-300 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Mrinal Sharma
          </motion.div>
          
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-6">
              {['hero', 'about', 'projects', 'skills'].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      activeSection === section 
                        ? 'text-indigo-600 dark:text-indigo-400' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            
            <motion.a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <motion.div 
          className="flex items-center space-x-4 bg-white dark:bg-gray-900 rounded-full shadow-lg px-4 py-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {['hero', 'about', 'projects', 'skills'].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className={`p-2 rounded-full ${
                activeSection === section 
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {section === 'hero' && '🏠'}
              {section === 'about' && '👤'}
              {section === 'projects' && '💻'}
              {section === 'skills' && '🛠️'}
              {/* {section === 'contact' && '📧'} */}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Social media links */}
      <div className="fixed left-4 bottom-1/2 transform translate-y-1/2 z-40 hidden md:block">
        <motion.div 
          className="flex flex-col space-y-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, staggerChildren: 0.1 }}
        >
          <motion.a 
            href="https://github.com/slayer1371" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-md text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/mrinal-sharma1371" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-md text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a 
            href="mailto:msharma2@nd.edu" 
            className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-md text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <FaEnvelope size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
      <section id="hero" ref={heroRef}>
          <HeroSection />
        </section>
        <section id="about" ref={aboutRef}>
          <AboutSection />
        </section>
        <section id="projects" ref={projectsRef}>
          <ProjectsSection />
        </section>
        <section id="skills" ref={skillsRef}>
          <SkillsSection />
        </section>
        {/* <section id="contact">
          <ContactSection />
        </section> */}
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-100 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} Mrinal Sharma. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
