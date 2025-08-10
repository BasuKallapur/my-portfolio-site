import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Calendar, Zap, Shield, Cpu } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Multi Source Content Intelligent System",
      date: "Feb 2025",
      description: "Created a cross-modal analysis system for YouTube, documents and webpage using RAG architecture. Leveraged LLaMA 3 and Groq API to summarize videos, reducing manual review time by 80%.",
      fullDescription: "This comprehensive system represents a breakthrough in cross-modal content analysis, seamlessly integrating multiple data sources including YouTube videos, PDF documents, and web pages. Built using advanced RAG (Retrieval-Augmented Generation) architecture, the system employs LLaMA 3 and Groq API to provide intelligent summarization and analysis capabilities. The implementation features a sophisticated pipeline that processes diverse content types, extracts meaningful insights, and delivers accurate responses through an intuitive Q&A interface.",
      technologies: ["LLaMA 3", "Groq API", "LangChain", "FAISS", "YouTube Transcript API"],
      achievements: [
        "Reduced manual review time by 80%",
        "Achieved 90%+ accuracy in Q&A pipeline",
        "Cross-modal analysis capabilities",
        "Processed 1000+ documents efficiently",
        "Real-time content summarization",
        "Scalable vector database implementation"
      ],
      challenges: [
        "Handling diverse content formats and structures",
        "Optimizing vector embeddings for cross-modal retrieval",
        "Ensuring consistent accuracy across different content types",
        "Managing large-scale document processing efficiently"
      ],
      impact: "This system has revolutionized content analysis workflows, enabling organizations to process vast amounts of multimedia content with unprecedented speed and accuracy. The 80% reduction in manual review time translates to significant cost savings and improved productivity.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Credit Card Fraud Detection System",
      date: "May 2025",
      description: "Designed a machine learning system comparing four models (Random Forest, Logistic Regression, Decision Tree, SGD). Developed and hosted a Streamlit dashboard on Render with real-time prediction capabilities.",
      fullDescription: "A comprehensive fraud detection system that leverages advanced machine learning algorithms to identify potentially fraudulent credit card transactions in real-time. The system implements and compares four different ML models to ensure optimal performance, featuring an intuitive Streamlit dashboard that provides instant predictions and detailed analytics. The solution includes sophisticated data preprocessing, feature engineering, and model optimization techniques.",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Plotly", "Render"],
      achievements: [
        "99% prediction accuracy",
        "Real-time prediction dashboard",
        "Interactive data exploration",
        "Feature importance analysis",
        "Processed 284,807 transactions",
        "Sub-second prediction response time",
        "Comprehensive model comparison framework"
      ],
      challenges: [
        "Handling highly imbalanced dataset (0.17% fraud cases)",
        "Optimizing model performance for real-time predictions",
        "Implementing robust feature engineering pipeline",
        "Ensuring model interpretability for business stakeholders"
      ],
      impact: "The system provides financial institutions with a powerful tool to combat fraud, potentially saving millions in fraudulent transactions while maintaining excellent user experience through minimal false positives.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "ESP32 Power Theft Detection System",
      date: "Aug 2024",
      description: "Devised an embedded IoT system to combat electricity theft by detecting anomalies in current between input and load lines. Implemented real-time alerts and remote power control capabilities.",
      fullDescription: "An innovative IoT-based solution designed to address the critical issue of electricity theft in power distribution systems. The system utilizes ESP32 microcontrollers and precision current sensors to monitor power consumption patterns and detect anomalies that indicate potential theft. Features include real-time monitoring, automated alert systems, and remote control capabilities through a comprehensive web dashboard.",
      technologies: ["ESP32", "ACS712", "Firebase", "HTML/CSS", "PlatformIO"],
      achievements: [
        "Over 90% theft detection accuracy",
        "Real-time alerts and monitoring",
        "Reduced manual inspection by 70%",
        "Remote power control system",
        "24/7 automated monitoring",
        "Cloud-based data analytics",
        "Mobile-responsive dashboard"
      ],
      challenges: [
        "Ensuring accurate current measurement in varying conditions",
        "Implementing reliable wireless communication",
        "Designing tamper-proof hardware installation",
        "Optimizing power consumption for continuous operation"
      ],
      impact: "This system addresses a significant challenge in power distribution, helping utility companies reduce revenue losses from theft while improving overall grid efficiency and reliability.",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work in AI, machine learning, and IoT development
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color} rounded-t-xl`}></div>
              
              <div className="p-6">
                {/* Icon and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveLink ? 'flex-1' : 'w-full'} inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`h-4 bg-gradient-to-r ${selectedProject.color} rounded-t-2xl`}></div>
                
                <div className="p-8">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    ×
                  </button>

                  {/* Project Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedProject.color} text-white mr-4`}>
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        {selectedProject.date}
                      </div>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  {selectedProject.challenges && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Technical Challenges</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedProject.challenges.map((challenge, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Impact */}
                  {selectedProject.impact && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Impact & Results</h4>
                      <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg">
                        {selectedProject.impact}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {selectedProject.liveLink && (
                      <motion.a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        View Live Demo
                      </motion.a>
                    )}
                    {selectedProject.githubLink && (
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} className="mr-2" />
                        View Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;