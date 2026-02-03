import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
      {
      id: 1,
      title: 'NeighborDrive',
      description: 'A modern car-sharing platform connecting owners with renters in their community. Handles listing management, availability checking, secure Stripe payments, and AI-powered damage dispute resolution using Google Gemini for photo analysis.',
      image: '/neighbordrive.png',
      tags: ['fullstack', 'nextjs', 'stripe', 'aws-s3', 'cloudfront'],
      github: 'https://github.com/slayer1371/neighbordrive',
      demo: 'https://neighbor-drive.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'InsightEngine',
      description: 'An AI-powered analytics dashboard that transforms raw sales data into actionable insights. Upload CSV files, auto-map to database, and use natural language-to-SQL conversion powered by Google Gemini for intelligent data analysis.',
      image: '/insightengine.png',
      tags: ['fullstack', 'nextjs', 'ai', 'gemini-api'],
      github: 'https://github.com/slayer1371/insightengine',
      demo: 'https://insight-engine-eight.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'DevFlow',
      description: 'A real-time collaborative code editor enabling multiple users to edit code simultaneously in isolated rooms. Uses Operational Transformation to resolve concurrent edits and maintain document consistency. Frontend: Next.js with Monaco Editor, Backend: Node.js with WebSocket server.',
      image: '/devflow.png',
      tags: [ 'fullstack', 'nextjs', 'typescript'],
      github: 'https://github.com/slayer1371/devflow',
      demo: 'https://devflow-umber.vercel.app/',
      featured: true
    },

        {
      id: 4,
      title: 'Recruitmate platform (Startup)',
      description: 'RecruitMate is a startup that streamlines college recruitment for student-athletes through a tech-driven platform. Built with React and Tailwind for the frontend and integrating features like video portfolios, automated outreach, and email templates, it enhances athlete-coach connections.',
      image: '/recruitmate.png',
      tags: [ 'frontend', 'react', 'tailwind'],
      github: 'https://github.com/slayer1371/recruitmate-v2',
      demo: 'https://recruitmate-v2.vercel.app/',
      featured: true
    },
    {
      id: 6,
      title: 'Pulsecheck',
      description: 'A comprehensive Kubernetes health monitoring system that provides real-time insights into cluster health, node status, pod performance, and resource utilization. Built with modern DevOps practices for production-grade monitoring and alerting.',
      image: '/pulsecheck.png',
      tags: ['fullstack', 'kubernetes', 'backend'],
      github: 'https://github.com/slayer1371/PulseCheck-Kubernetes_monitoring',
      demo: 'https://github.com/slayer1371/PulseCheck-Kubernetes_monitoring',
      featured: true
    },
    {
      id: 5,
      title: 'Beanbag scoring application',
      description: 'The Beanbag Scoring Application is a web-based system built with React (frontend) and Flask (backend) to automate score tracking in beanbag competitions. It features real-time score updates, a user-friendly UI, and automated calculations to reduce human errors. ',
      image: '/beanbag.png',
      tags: ['fullstack', 'react','python', 'flask','backend'],
      github: 'https://github.com/slayer1371/cs4good-beanbag',
      demo: 'https://cs4good-beanbag.vercel.app/',
      featured: true
    }

    
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase tracking-widest">
              Portfolio
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of full-stack projects demonstrating my expertise in modern web development, problem-solving, and architectural design.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/50' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10 hover:border-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Quick Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900/90 text-white rounded-full hover:bg-cyan-600 transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={24} />
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt size={24} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <motion.span 
                        className="bg-gradient-to-r from-cyan-600/80 to-blue-600/80 text-white text-xs font-bold px-3 py-1 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        Featured
                      </motion.span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 font-semibold hover:text-blue-400 transition-colors duration-300 group/link"
                  >
                    Explore Project
                    <motion.svg 
                      className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </motion.svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">
              No projects found with the selected filter.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="text-center pt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="https://github.com/slayer1371" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 group"
          >
            <FaGithub className="mr-2 group-hover:scale-110 transition-transform" />
            View More on GitHub
            <motion.svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;