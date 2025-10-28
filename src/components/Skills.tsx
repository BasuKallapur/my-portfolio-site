import { Code, Brain, Database, Cloud, Wrench, Users, ExternalLink } from 'lucide-react';

type Achievement = {
  title: string;
  description: string;
  icon: string;
  link?: string;
};

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
      title: "Development Tools",
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

  const achievements: Achievement[] = [
    {
      title: "1st Place - Gen AI Hackathon",
      description: "Led team to victory in BMSCE ACM Student Chapter & HiDevs hackathon",
      icon: "🏆",
      link: "https://www.linkedin.com/posts/basavaraj-c-kallapur_generativeai-llms-hackathon-activity-7265192379882643458-oX9X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJqIaMBzEzr5wvn-cI2phBX1pfq_rngLt0"
    },
    {
      title: "Top 15 Finalist - CIDECODE 2025",
      description: "PES University in collaboration with CID Karnataka",
      icon: "🎯",
      link: "https://cidecode.in/hackathon-shortlisted-teams/"
    },
    {
      title: "Google Cloud Skills Boost - Gold Tier",
      description: "Completed hands-on labs in ML, Gen AI, and Cloud Fundamentals",
      icon: "☁️",
      link: "https://www.cloudskillsboost.google/public_profiles/60f7a806-2841-4036-a6bc-c0e06a3c590b"
    },
    {
      title: "Postman API Expert",
      description: "Certified in API Fundamentals",
      icon: "📡",
      link: "https://badgr.com/public/assertions/ZZBvY0a7SNmsy9ZLUgrBoQ?identity__email=basukallapur00@gmail.com"
    },
    {
      title: "350+ DSA Problems Solved",
      description: "Enhanced algorithmic thinking on LeetCode and GFG",
      icon: "💻",
      link: "https://codolio.com/profile/Basavaraj%20Kallapur"
    },
    {
      title: "Gen AI Study Jams 2024 - Completion",
      description: "Successfully completed the Gen AI Study Jams 2024 conducted by GDSC BMSCE",
      icon: "🤖",
      link: "https://www.linkedin.com/posts/basavaraj-c-kallapur_gdsc-genai-machinelearning-activity-7214843251609018369-GVs-/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJqIaMBzEzr5wvn-cI2phBX1pfq_rngLt0"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and notable accomplishments
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
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
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Achievements & Certifications
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {achievements.map((achievement: Achievement, index: number) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-md text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/70 dark:hover:bg-gray-700/60 transition-colors duration-200"
                    aria-label={`Open proof for ${achievement.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
