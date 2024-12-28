import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'SAP Trainee',
    company: 'SAP',
    period: 'Oct 2024 – April 2025',
    location: 'Remote',
    description: 'Enrolled in the SAP Educate to Employ Scholarship Program, focusing on acquiring technical SAP skills and professional competencies.',
  },
  {
    title: 'Full Stack Intern',
    company: 'Prodigy InfoTech',
    period: 'Jul 2024 – Aug 2024',
    location: 'Remote, India',
    description: 'Contributed to web development projects using HTML, CSS, and JavaScript, supporting both frontend and backend components.',
  },
  {
    title: 'Trainee',
    company: 'Intel Unnati Industrial Training Program',
    period: 'May 2024 – Jul 2024',
    location: 'Remote, India',
    description: 'Completed a 3-month apprenticeship program with focused training in Python, Data Analysis, and Machine Learning techniques.',
  },
  {
    title: 'Project Intern',
    company: 'Bharat Intern',
    period: 'Dec 2023 – Feb 2024',
    location: 'Remote, India',
    description: 'Developed full-stack web applications, collaborating on both frontend and backend technologies to build scalable solutions.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative pl-8">
              <div className="absolute left-0 top-0 w-2 h-full bg-indigo-200 rounded">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Briefcase className="w-6 h-6 text-indigo-600 bg-white rounded-full p-1" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-indigo-600 font-medium">{exp.company}</p>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
                <p className="mt-4 text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;