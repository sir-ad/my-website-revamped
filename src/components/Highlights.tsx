import React from 'react';
import { motion } from 'framer-motion';

interface Highlight {
  id: number;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  { id: 1, title: 'Product Leadership', description: 'Led teams to launch successful digital products with a focus on user-centered design.' },
  { id: 2, title: 'Cross-Functional Collaboration', description: 'Worked closely with engineering, design, and business teams to deliver innovative solutions.' },
  { id: 3, title: 'Community Engagement', description: 'Actively mentored and contributed to the product management community.' },
];

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="highlights-section py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: highlight.id * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
