import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  { id: 1, company: 'InnovateX', role: 'Product Manager', duration: '2018 - 2020', description: 'Led product development for a SaaS platform, focusing on user-centered design and feature prioritization.' },
  { id: 2, company: 'TechFlow', role: 'Senior Product Manager', duration: '2020 - 2022', description: 'Oversaw development of AI-driven features, managed cross-functional teams, and enhanced customer satisfaction.' },
  { id: 3, company: 'FutureWorks', role: 'Associate Director of Product', duration: '2022 - Present', description: 'Guided product strategy and mentored a team of product managers, driving product innovation.' },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: exp.id * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.role} at {exp.company}</h3>
              <p className="text-lg text-blue-600 mb-4">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
