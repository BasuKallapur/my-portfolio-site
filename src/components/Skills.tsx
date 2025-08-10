import React from 'react';
import { Code, Brain, Database, Cloud, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Machine Learning", "Generative AI", "LangChain", "Large Language Models (LLMs)"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools & Methodologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "REST APIs", "Postman", "CI/CD (GitHub Actions)", "Render", "Railway", "Vercel", "Streamlit Cloud"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "MySQL"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Computer Science Fundamentals",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Data Structures and Algorithms (DSA)", "Operating Systems (OS)", "Object-Oriented Programming (OOP)", "Computer Networks", "Database Management Systems (DBMS)"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Communication", "Analytical Thinking", "Teamwork & Collaboration", "Problem-Solving"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  const achievements = [
    {
      title: "1st Place - Gen AI Hackathon",
      description: "Led team to victory in BMSCE ACM Student Chapter & HiDevs hackathon",
      icon: "🏆"
    },
    {
      title: "Top 15 Finalist - CIDECODE 2025",
      description: "PES University in collaboration with CID Karnataka",
      icon: "🎯"
    },
    {
      title: "Google Cloud Skills Boost - Gold Tier",
      description: "Completed hands-on labs in ML, Gen AI, and Cloud Fundamentals",
      icon: "☁️"
    },
    {
      title: "Postman API Expert",
      description: "Certified in API Fundamentals",
      icon: "📡"
    },
    {
      title: "250+ DSA Problems Solved",
      description: "Enhanced algorithmic thinking on LeetCode and GFG",
      icon: "💻"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and notable accomplishments
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Achievements & Certifications
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;