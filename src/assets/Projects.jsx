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
      title: 'Recruitmate platform (Startup)',
      description: 'RecruitMate is a startup that streamlines college recruitment for student-athletes through a tech-driven platform. Built with React and Tailwind for the frontend and integrating features like video portfolios, automated outreach, and email templates, it enhances athlete-coach connections.',
      image: '/recruitmate.png',
      tags: [ 'frontend', 'react', 'tailwind'],
      github: 'https://github.com/slayer1371/recruitmate-v2',
      demo: 'https://recruitmate-v2.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'CarShare',
      description: 'The platform I am building enables local car-sharing, allowing individuals to rent out their neighbor\'s car when it\'s not in use. Renters can pay for the time they use the vehicle, fostering a convenient and community-driven way to share resources. ',
      image: '/carshar.png',
      tags: [ 'fullstack', 'react', 'tailwind','typescript'],
      github: 'https://github.com/slayer1371/Peer-CarShare',
      demo: 'https://github.com/slayer1371/Peer-CarShare',
      featured: true
    },
    {
      id: 3,
      title: 'Supply chain management system using solidity contracts',
      description: 'The Supply Chain Management System is a decentralized application built using Solidity smart contracts and ReactJS to ensure transparency and security in tracking goods.',
      image: '/scm.png',
      tags: ['frontend', 'react', 'blockchain'],
      github: 'https://github.com/slayer1371/SCM_solidity_react',
      demo: 'https://github.com/slayer1371/SCM_solidity_react',
      featured: true
    },
    {
      id: 4,
      title: 'Beanbag scoring application',
      description: 'The Beanbag Scoring Application is a web-based system built with React (frontend) and Flask (backend) to automate score tracking in beanbag competitions. It features real-time score updates, a user-friendly UI, and automated calculations to reduce human errors. ',
      image: '/beanbag.png',
      tags: ['fullstack', 'react','python', 'flask'],
      github: 'https://github.com/slayer1371/cs4good-beanbag',
      demo: 'https://cs4good-beanbag.vercel.app/',
      featured: true
    },
    {
      id: 5,
      title: 'Video platform for courses.(Has no data)',
      description: 'The Video Platform for Courses is a web application built with React and Tailwind CSS, designed for seamless video content delivery. ',
      image: '/video.png',
      tags: ['frontend', 'react', 'tailwind'],
      github: 'https://github.com/slayer1371/video-platform',
      demo: 'https://video-platform-iota-seven.vercel.app/',
      featured: true
    }
    // {
    //   id: 6,
    //   title: 'Exercise tracker',
    //   description: 'The Exercise Tracker is an application that allows users to log workouts with details like exercise type, duration, and date. Built using Node.js, Express, and MongoDB, it features a REST API for managing user exercise logs and supports querying workouts by date range.',
    //   image: '/exercise.png',
    //   tags: ['backend', 'node','mongoose', 'rest'],
    //   github: 'https://github.com/slayer1371/exercise_tracker',
    //   demo: 'https://github.com/slayer1371/exercise_tracker',
    //   featured: false
    // },
    // {
    //   id: 7,
    //   title: 'URL shortener',
    //   description: 'The URL Shortener is a backend application built with Node.js, Express, and MongoDB, allowing users to generate shortened URLs. It features a REST API for creating and retrieving shortened links, stores mappings in a NoSQL database, and handles redirects efficiently.',
    //   image: '/url.png',
    //   tags: ['backend', 'node','MongoDB'],
    //   github: 'https://github.com/slayer1371/url_shortener',
    //   demo: 'https://github.com/slayer1371/url_shortener',
    //   featured: false
    // },
    // {
    //   id: 8,
    //   title: 'Header parser microservice',
    //   description: 'The Header Parser Microservice is a backend service built with Node.js and Express that extracts client request headers. It retrieves details like IP address, preferred languages, and user-agent from incoming HTTP requests and returns them as a JSON response.',
    //   image: '/header.png',
    //   tags: ['backend', 'node'],
    //   github: 'https://github.com/slayer1371/header_Parser_microservice',
    //   demo: 'https://github.com/slayer1371/header_Parser_microservice',
    //   featured: false
    // },
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
    <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
            Each project represents unique challenges I've overcome and technologies I've mastered.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative group h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    // onError={(e) => {
                    //   e.target.onerror = null;
                    //   e.target.src = "/api/placeholder/600/400";
                    // }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {project.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="text-xs px-2 py-1 bg-indigo-600/80 text-white rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
                          >
                            <FaGithub />
                          </a>
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-indigo-600/80 text-white rounded-full hover:bg-indigo-600 transition-colors duration-300"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300 flex items-center"
                    >
                      View Details
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
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
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-300">
              No projects found with the selected filter.
            </p>
          </motion.div>
        )}

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="https://github.com/slayer1371" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <FaGithub className="mr-2" />
            See More on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;