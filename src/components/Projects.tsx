import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PlayCircle, Github, Calendar, Zap, Shield, Cpu, PenSquare } from 'lucide-react';

type Project = {
  title: string;
  date?: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  achievements: string[];
  challenges?: string[];
  impact?: string;
  icon: JSX.Element;
  color: string;
  githubLink?: string;
  liveLink?: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Multi Source Content Intelligent System",
      date: "Feb 2025",
      description: "Created a cross-modal analysis system for YouTube, documents and webpage using RAG architecture. Leveraged LLaMA 3 and Groq API to summarize videos, reducing manual review time by 80%.",
      fullDescription: "Cross‑modal analysis system for YouTube, documents, and webpages using RAG. Groq + LLaMA 3 for video summarization; LangChain + FAISS Q&A delivering 90%+ accuracy and 80% review‑time reduction.",
      technologies: ["LLaMA 3", "Groq API", "LangChain", "FAISS", "YouTube Transcript API"],
      achievements: [
        "Created a cross-modal analysis system for YouTube, documents and webpage using RAG architecture",
        "Leveraged LLaMA 3 and Groq API to summarize videos, reducing manual review time by 80%",
        "Constructed a RAG-based Q&A pipeline with LangChain and FAISS, achieving 90%+ accuracy"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      githubLink: "https://github.com/BasuKallapur/MultiSourceContentSystem",
      liveLink: "https://www.youtube.com/watch?v=IvUpg4D1PuY"
    },
    {
      title: "Credit Card Fraud Detection System",
      date: "May 2025",
      description: "Designed a machine learning system comparing four models (Random Forest, Logistic Regression, Decision Tree, SGD). Developed and hosted a Streamlit dashboard on Render with real-time prediction capabilities.",
      fullDescription: "Machine‑learning system for credit card fraud detection with model comparison and a Streamlit dashboard hosted on Render for real‑time prediction and exploration.",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Plotly", "Render"],
      achievements: [
        "Designed a machine learning system comparing four models (Random Forest, Logistic Regression, Decision Tree, SGD)",
        "Developed and hosted a Streamlit dashboard on Render, with real-time prediction and interactive data exploration",
        "Implemented optimized Random Forest model with feature importance analysis, achieving 99% prediction accuracy"
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      githubLink: "https://github.com/BasuKallapur/credit-card-risk-analysis",
      liveLink: "https://drive.google.com/file/d/1lZ4IcC6M86f20kwWBCAvDLqeP0-Wv0Xa/view"
    },
    {
      title: "ESP32 Power Theft Detection System",
      date: "Aug 2024",
      description: "Devised an embedded IoT system to combat electricity theft by detecting anomalies in current between input and load lines. Implemented real-time alerts and remote power control capabilities.",
      fullDescription: "Embedded IoT solution with ESP32 and ACS712 sensors, Firebase dashboard for alerts and remote control to detect and curb power theft.",
      technologies: ["ESP32", "ACS712", "Firebase", "HTML/CSS", "PlatformIO"],
      achievements: [
        "Devised an embedded IoT system to combat electricity theft by detecting anomalies in current between input and load lines",
        "Implemented an IoT system with ACS712 sensors and Firebase dashboard for real-time alerts and remote power control",
        "Achieved over 90% theft detection accuracy, allowing automated alerts and reducing manual inspection efforts by 70%"
      ],
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      githubLink: "https://github.com/BasuKallapur/Power-theft-detection-project",
      liveLink: "https://drive.google.com/drive/u/2/folders/1ssZexdgxhFqKzHugFqWw-XPR635nFloX"
    },
    {
      title: "LinkedIn Post Generator",
      date: "Nov 2024",
      description: "LinkedIn Post Generator with Image & Video Support. A Streamlit-based app that uses AI to create professional LinkedIn posts with customizable length and language options (English, Hinglish, Kannada). Users can upload images and videos, then copy or publish directly to LinkedIn.",
      fullDescription: "AI-powered LinkedIn post generator with multi-language support and media upload; streamlined to compose, copy, and publish posts.",
      technologies: ["Streamlit", "LangChain", "Groq API", "LinkedIn API", "Python"],
      achievements: [
        "AI-powered content generation using Groq LLM",
        "Supports multi-language post creation",
        "Media upload for images and videos",
        "Direct LinkedIn posting integration",
        "User-friendly interface with copy-to-clipboard functionality"
      ],
      icon: <PenSquare className="w-6 h-6" />,
      color: "from-orange-500 to-rose-500",
      githubLink: "https://github.com/BasuKallapur/post-generator",
      liveLink: "https://drive.google.com/file/d/1Fc8M8r8xyZ7wx6GOEO11gLUBak9dVcdO/view?usp=drive_link"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work in AI, machine learning, and IoT development
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform-gpu [will-change:transform] border border-gray-100 dark:border-gray-700 cursor-pointer h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.04, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color} rounded-t-xl`}></div>

              <div className="p-6 flex flex-col h-full">
                {/* Icon and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto pt-2">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Watch video demo"
                    >
                      <PlayCircle size={16} className="mr-2" />
                      Video Demo
                    </motion.a>
                  )}
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveLink ? 'flex-1' : 'w-full'} inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
                      whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
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
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform-gpu"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ type: "spring", damping: 26, stiffness: 260 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`h-4 bg-gradient-to-r ${selectedProject.color} rounded-t-2xl`}></div>

                <div className="p-8">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 w-8 h-8 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    ×
                  </button>

                  {/* Project Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedProject.color} text-white mr-4`}>
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        {selectedProject.date}
                      </div>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  {selectedProject.challenges && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Challenges</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedProject.challenges.map((challenge, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Impact */}
                  {selectedProject.impact && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Impact & Results</h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
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
                        whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <PlayCircle size={18} className="mr-2" />
                        Watch Video
                      </motion.a>
                    )}
                    {selectedProject.githubLink && (
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
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