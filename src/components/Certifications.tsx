import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'AWS' },
  { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft' },
  { name: 'SQL', issuer: 'LearnTube.ai' },
  { name: 'Develop Generative AI Solutions', issuer: 'Microsoft' },
  { name: 'Intel Unnati Industrial Training', issuer: 'Intel' },
  { name: 'Android App Development', issuer: 'Internshala' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco' },
  { name: 'Full Stack Web Development', issuer: 'Udemy' }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-indigo-600" />
                <h3 className="font-bold text-lg">{cert.name}</h3>
              </div>
              <p className="text-gray-600">Issued by {cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;