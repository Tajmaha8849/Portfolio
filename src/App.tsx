import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Extracurricular from './components/Extracurricular';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Extracurricular />
        <Certifications />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Shubham Prajapati. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;