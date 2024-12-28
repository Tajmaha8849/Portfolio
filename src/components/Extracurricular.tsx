import React from 'react';
import { Award, Trophy } from 'lucide-react';

const Extracurricular = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Extracurricular Activities</h2>
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <Trophy className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-4">Hackathons and Coding Competitions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  Actively participated in numerous hackathons, demonstrating innovative problem-solving skills and teamwork under time constraints.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  Competed in various coding competitions, showcasing proficiency in algorithms, data structures, and competitive programming.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  Received participation certificates for events and earned recognition for outstanding performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;