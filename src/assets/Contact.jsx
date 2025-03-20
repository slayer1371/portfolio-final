import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});
const [messageSent, setMessageSent] = useState(false);
const [messageError, setMessageError] = useState(false);

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Replace with your actual endpoint or email service
        const response = await fetch('/api/contact', { //example endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            setMessageSent(true);
            setFormData({name: '', email: '', message: ''}); //reset form
        } else {
            setMessageError(true);
        }

    } catch (error) {
        console.error('Error sending message:', error);
        setMessageError(true);
    }
};

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 text-center max-w-3xl w-full"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Contact <span className="text-indigo-400">Me</span>
        </motion.h2>

        <motion.p 
          className="text-gray-300 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Feel free to reach out for collaborations or just a friendly chat!
        </motion.p>

        <motion.form 
          variants={containerVariants}
          className="w-full space-y-4"
          onSubmit={handleSubmit}
        >
          <motion.input 
            type="text" 
            name = "name"
            placeholder="Your Name" 
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            variants={itemVariants}
            value={formData.name}
            onChange={handleChange}
          />
          <motion.input 
            type="email" 
            name = "email"
            placeholder="Your Email" 
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            variants={itemVariants}
            value={formData.email}
            onChange={handleChange}
          />
          <motion.textarea 
            name="message"
            placeholder="Your Message" 
            rows="4" 
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            variants={itemVariants}
            value={formData.message}
            onChange={handleChange}
          ></motion.textarea>

          <motion.button 
            type="submit" 
            className="w-full px-6 py-3 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600 transition-all duration-300"
            variants={itemVariants}
          >
            Send Message
          </motion.button>
        </motion.form>
        {messageSent && <p className="text-green-400">Message Sent!</p>}
        {messageError && <p className="text-red-400">Error sending message. Please try again.</p>}
      </motion.div>
    </section>
  );
};

export default ContactSection;
