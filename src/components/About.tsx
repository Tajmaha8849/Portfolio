import React from 'react';
import { Code2, Brain, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <Code2 className="w-8 h-8 text-indigo-600 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">
                As a passionate Full Stack Developer with expertise in MERN stack, Flask, and Django, 
                I have honed my skills in building robust web applications. My experience spans both 
                front-end and back-end development, with a particular focus on creating user-centric solutions.
              </p>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <Brain className="w-8 h-8 text-indigo-600 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">
                I have hands-on experience in AI and machine learning, having worked on projects including 
                AI-driven healthcare platforms, cryptographic algorithm identifiers, and Indian Sign Language 
                translation tools. Currently, I'm expanding my knowledge through the SAP Educate to Employ 
                Scholarship Program.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Rocket className="w-8 h-8 text-indigo-600 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">
                I actively participate in hackathons and coding competitions to sharpen my problem-solving skills. 
                My focus is on leveraging technology to solve complex challenges across industries, and I'm always 
                eager to collaborate on exciting projects that push the boundaries of innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;