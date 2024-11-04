import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'The Future of Product Management in AI-First World',
    excerpt: 'Exploring how artificial intelligence is reshaping the product management landscape and what it means for future product leaders.',
    readTime: '5 min read',
    category: 'Product Strategy',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
  {
    title: 'Building Products That Scale: Lessons Learned',
    excerpt: 'Key insights and strategies for creating scalable products that can grow with your user base while maintaining performance.',
    readTime: '7 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
  {
    title: 'Data-Driven Product Decisions',
    excerpt: 'How to leverage data analytics and user insights to make better product decisions and drive growth.',
    readTime: '6 min read',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thoughts and perspectives on product management, innovation, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>

                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;