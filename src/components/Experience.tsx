import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Gen AI Developer Intern",
      company: "HiDevs",
      location: "Remote",
      duration: "Dec 2024 - Feb 2025",
      type: "Internship",
      achievements: [
        "Engineered a LinkedIn Post Generator using Python, Streamlit, LangChain, Groq API, and LinkedIn API enabling users to generate and publish personalized posts 3x faster",
        "Automated the retrieval of LinkedIn profile data using Python and the REST API, streamlining manual research processes with structured JSON output",
        "Contributed to 10+ GenAI project listings on the HiDevs platform, improving learner outcomes and platform engagement"
      ],
      technologies: ["Python", "Streamlit", "LangChain", "Groq API", "LinkedIn API", "REST API"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics and Communication",
      institution: "B.M.S College of Engineering, Bengaluru",
      duration: "2022 - Aug 2026",
      grade: "CGPA: 7.9",
      type: "education"
    },
    {
      degree: "Pre-University Course (Class XII)",
      field: "Science",
      institution: "KLE Prerana, Hubli",
      duration: "2020 - 2021",
      grade: "Percentage: 99.83%",
      type: "education"
    }
  ];

  const TimelineItem = ({ item, isLast = false }) => (
    <div className="relative flex items-start space-x-4">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${item.type === 'education' ? 'bg-green-500' : 'bg-blue-500'} border-4 border-white shadow-lg`}></div>
        {!isLast && <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title || item.degree}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
              <Calendar size={14} className="mr-1" />
              {item.duration}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="text-lg font-medium text-blue-600">
              {item.company || item.institution}
              {item.field && <span className="text-gray-600"> - {item.field}</span>}
            </div>
            {item.location && (
              <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                <MapPin size={14} className="mr-1" />
                {item.location}
              </div>
            )}
          </div>

          {item.grade && (
            <div className="text-sm font-medium text-green-600 mb-4">
              {item.grade}
            </div>
          )}

          {item.achievements && (
            <div className="mb-4">
              <ul className="space-y-2">
                {item.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.technologies && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const allItems = [...experiences, ...education].sort((a, b) => {
    // Sort by start year (descending)
    const yearA = parseInt(a.duration.split(' - ')[0].split(' ').pop());
    const yearB = parseInt(b.duration.split(' - ')[0].split(' ').pop());
    return yearB - yearA;
  });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600">
            My journey through professional experience and academic achievements
          </p>
        </div>

        <div className="relative">
          {allItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isLast={index === allItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;