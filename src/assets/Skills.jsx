import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 60 },
        { name: "Java", level: 90 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level : 80},
        { name: "SQL", level : 75}
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technology stack and areas of expertise. These are the tools and technologies
            I've mastered to build modern, efficient, and scalable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">3+</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Years Coding</div>
          </div>
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">20+</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Projects Completed</div>
          </div>
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">400+</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">GitHub Contributions</div>
          </div>
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Certifications</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;