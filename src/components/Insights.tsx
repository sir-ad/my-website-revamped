import React from 'react';
import { motion } from 'framer-motion';

interface Insight {
  id: number;
  title: string;
  description: string;
  link: string;
}

const insights: Insight[] = [
  { id: 1, title: 'Product-Led Growth Strategies', description: 'A detailed exploration of how product-led growth can drive user acquisition and retention.', link: '#' },
  { id: 2, title: 'Building Cross-Functional Teams', description: 'Key insights on fostering collaboration and aligning goals within cross-functional teams.', link: '#' },
  { id: 3, title: 'User Research Best Practices', description: 'How to effectively conduct user research to inform product decisions and create value.', link: '#' },
];

const Insights: React.FC = () => {
  return (
    <section id="insights" className="insights-section py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <motion.div
              key={insight.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: insight.id * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{insight.title}</h3>
              <p className="text-gray-700 mb-6">{insight.description}</p>
              <a
                href={insight.link}
                className="text-blue-600 hover:underline"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
