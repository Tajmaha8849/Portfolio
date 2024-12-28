import React from 'react';
import { Code, Database, Wrench, Globe, Brain, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="w-6 h-6" />,
    skills: ['JavaScript', 'Python', 'Java', 'Golang', 'Kotlin', 'C'],
  },
  {
    title: 'Frameworks',
    icon: <Globe className="w-6 h-6" />,
    skills: ['MERN Stack', 'Flask', 'Django'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Docker', 'Redis', 'Microsoft Azure', 'Linux'],
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6" />,
    skills: ['MongoDB', 'SQL', 'Firebase'],
  },
  {
    title: 'AI/ML',
    icon: <Brain className="w-6 h-6" />,
    skills: ['Machine Learning', 'Cryptography', 'Data Analysis'],
  },
  {
    title: 'DevOps',
    icon: <Server className="w-6 h-6" />,
    skills: ['Git', 'CI/CD', 'Cloud Services'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-indigo-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;