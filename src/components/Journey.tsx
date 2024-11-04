import React from 'react';
import { motion } from 'framer-motion';

interface JourneyItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

const journeyItems: JourneyItem[] = [
  { id: 1, year: '2018', title: 'Product Manager at InnovateX', description: 'Led product development for a SaaS platform, growing user engagement by 30%.' },
  { id: 2, year: '2020', title: 'Senior Product Manager at TechFlow', description: 'Oversaw cross-functional teams to deliver AI-driven features, improving customer satisfaction.' },
  { id: 3, year: '2022', title: 'Associate Director of Product at FutureWorks', description: 'Guided product strategy and mentored a team of product managers to drive innovation.' },
];

const Journey: React.FC = () => {
  return (
    <section id="journey" className="journey-section py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">My Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
          <div className="space-y-12">
            {journeyItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-3xl mx-auto"
                initial={{ opacity: 0, x: item.id % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item.id * 0.3 }}
              >
                <div className={`flex ${item.id % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="text-left">
                    <span className="block text-xl font-semibold mb-2">{item.year}</span>
                    <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
