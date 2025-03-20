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
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce platform with user authentication, product management, cart functionality, and payment integration.',
      image: '/ecommerce-project.jpg',
      tags: ['fullstack', 'react', 'node'],
      github: 'https://github.com/yourusername/ecommerce-project',
      demo: 'https://ecommerce-project.example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/task-app.jpg',
      tags: ['frontend', 'react', 'firebase'],
      github: 'https://github.com/yourusername/task-management',
      demo: 'https://task-app.example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard displaying complex data sets with filterable charts, graphs, and exportable reports.',
      image: '/dashboard.jpg',
      tags: ['frontend', 'react', 'd3'],
      github: 'https://github.com/yourusername/data-dashboard',
      demo: 'https://data-dashboard.example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Machine Learning API',
      description: 'A RESTful API that provides machine learning capabilities for image recognition and natural language processing.',
      image: '/ml-api.jpg',
      tags: ['backend', 'python', 'ai'],
      github: 'https://github.com/yourusername/ml-api',
      demo: 'https://ml-api.example.com',
      featured: false
    },
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
    { id: 'ai', label: 'AI/ML' }
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