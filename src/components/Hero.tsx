import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm Shubham Prajapati
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full-Stack Developer specializing in MERN Stack, Flask, and Django
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Contact Me
              </a>
              <a
                href="/https://drive.google.com/drive/u/0/folders/1Om556zvLvk8DfTuEqt9z4r2dAFL8I1AF"
                className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <a href="https://github.com/Tajmaha8849" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shubham-prajapati-4a4262241/" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="mailto:shubham.prajapati9297@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Developer"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
