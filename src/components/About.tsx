import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "B.E in Electronics and Communication from B.M.S College of Engineering (CGPA: 7.9)"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Expertise",
      description: "Specialized in Generative AI, LLMs, and Machine Learning with hands-on project experience"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Development",
      description: "Full-stack development with Python, Java, and modern web technologies"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Achievements",
      description: "1st place in Gen AI Hackathon, Top 15 in CIDECODE 2025, Gold Tier on Google Cloud"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm a passionate developer with a strong foundation in AI and software engineering,
            constantly learning and building innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Passionate About Innovation
            </motion.h3>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Currently pursuing my B.E in Electronics and Communication Engineering at B.M.S College of Engineering,
              I've developed a strong passion for artificial intelligence and software development. My journey has been
              marked by hands-on experience in building intelligent systems, from LinkedIn post generators to fraud
              detection systems.
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I thrive on solving complex problems and have successfully led teams to victory in hackathons while
              contributing to multiple GenAI projects. My expertise spans across machine learning, generative AI,
              full-stack development, and IoT systems.
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              When I'm not coding, you'll find me exploring new technologies, solving algorithmic challenges on
              LeetCode, or contributing to open-source projects. I believe in continuous learning and staying
              updated with the latest trends in technology.
            </motion.p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-blue-600 mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;