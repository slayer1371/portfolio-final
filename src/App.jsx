
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './App.css';
import ThreeDHero from './components/ThreeDHero';
import AboutSection from './assets/About';
import ProjectsSection from './assets/Projects';
import SkillsSection from './assets/Skills';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  // Handle active section tracking on scroll
  useEffect(() => {
    let scrollTimeout = null;

    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="relative w-full">
      <Analytics />
      {/* Background gradient */}
      <div 
        className="fixed top-0 h-screen w-full bg-gradient-to-b from-black via-gray-950 to-black"
      />

      {/* Navigation bar */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            href="#hero"
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            MS
          </motion.a>
          
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              {['hero', 'about', 'projects', 'skills'].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`}
                    className={`text-sm font-semibold transition-colors duration-300 hover:text-cyan-400 ${
                      activeSection === section 
                        ? 'text-cyan-400' 
                        : 'text-gray-300'
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
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 text-white py-2.5 px-5 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload size={16} />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <motion.div 
          className="flex items-center space-x-3 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl px-4 py-3"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {['hero', 'about', 'projects', 'skills'].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === section 
                  ? 'bg-cyan-600/80 text-white shadow-lg shadow-cyan-500/50' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {section === 'hero' && '🏠'}
              {section === 'about' && '👤'}
              {section === 'projects' && '💻'}
              {section === 'skills' && '🛠️'}
            </a>
          ))}
          <div className="w-px h-6 bg-white/20 mx-1" />
          <motion.a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-3 rounded-full font-semibold text-xs transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload size={14} />
            <span>Resume</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Social media links */}
      <div className="fixed left-6 bottom-1/2 transform translate-y-1/2 z-40 hidden lg:block">
        <motion.div 
          className="flex flex-col space-y-4"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, staggerChildren: 0.1 }}
        >
          <motion.a 
            href="https://github.com/slayer1371" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={22} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/mrinal-sharma-nd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={22} />
          </motion.a>
          <motion.a 
            href="mailto:mrinalworkus@gmail.com" 
            className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope size={22} />
          </motion.a>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <section id="hero" ref={heroRef}>
          <ThreeDHero />
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
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-medium">
            © {new Date().getFullYear()} Mrinal Sharma. Crafted with passion.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React • Vite • Tailwind • Framer Motion • Three.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
