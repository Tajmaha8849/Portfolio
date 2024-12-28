import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'EduConnect Platform',
    description: 'A comprehensive educational platform enabling students and educators to connect seamlessly, with over 200 active users.',
    tech: ['MERN Stack', 'Authentication', 'Responsive Design'],
    liveLink: '#',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Job Seeker Platform',
    description: 'Enhanced job seeker platform with admin posting capabilities, resulting in 15% increase in successful job placements.',
    tech: ['MERN Stack', 'Email Notifications', 'Authentication'],
    liveLink: '#',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'HavenHub Real Estate',
    description: 'Robust real estate platform with advanced search and filtering features, achieving over 150 active users.',
    tech: ['MERN Stack', 'MongoDB', 'React'],
    liveLink: '#',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Mail Sending App',
    description: 'Flask-based application for sending automated emails with customizable templates and bulk email support.',
    tech: ['Flask', 'Email Automation', 'Python'],
    liveLink: '#',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;