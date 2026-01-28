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
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 90 },
        { name: "C++", level: 70 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Radix UI", level: 80 },
        { name: "Shadcn UI", level: 80 },
        { name: "Monaco Editor", level: 75 }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Next.js API Routes", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "Prisma ORM", level: 85 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Authentication & DevOps",
      skills: [
        { name: "NextAuth.js", level: 80 },
        { name: "Stripe", level: 80 },
        { name: "AWS (S3/CloudFront)", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 70 }
      ]
    },
    {
      title: "AI & Advanced",
      skills: [
        { name: "Google Gemini AI", level: 75 },
        { name: "WebSocket", level: 80 },
        { name: "Operational Transformation", level: 75 },
        { name: "Git/GitHub", level: 90 }
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
              Technical Stack
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of technologies and tools I've mastered to build modern, scalable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-cyan-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-teal-500/10 rounded-2xl transition-all duration-300"></div>

              <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 group-hover:border-cyan-500/50 pb-4 transition-colors relative z-10">
                {category.title}
              </h3>
              
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 hover:bg-gray-700 rounded-full h-2.5 overflow-hidden transition-colors">
                      <motion.div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: '3+', label: 'Years of Experience', icon: '📅' },
            { number: '20+', label: 'Projects Completed', icon: '💼' },
            { number: '400+', label: 'GitHub Contributions', icon: '📊' },
            { number: '10+', label: 'Certifications', icon: '🏆' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;