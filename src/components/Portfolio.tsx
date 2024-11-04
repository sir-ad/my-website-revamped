import React, { useState, useMemo } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
}

const projects: Project[] = [
  { id: 1, title: 'E-commerce Website', category: 'Web Development', description: 'A full-featured e-commerce platform.' },
  { id: 2, title: 'Social Media App', category: 'Mobile Development', description: 'A mobile app to connect with friends.' },
  { id: 3, title: 'Portfolio Website', category: 'UI/UX Design', description: 'A personal portfolio showcasing design skills.' },
  { id: 4, title: 'CRM System', category: 'Web Development', description: 'A CRM system for managing customer relationships.' },
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="portfolio-section py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">My Portfolio</h2>
        <div className="mb-8">
          {['All', 'Web Development', 'Mobile Development', 'UI/UX Design'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mr-4 rounded ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
