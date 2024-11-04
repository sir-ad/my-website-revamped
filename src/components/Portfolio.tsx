import React from 'react';
import { ExternalLink, GitBranch, Users, TrendingUp, Brain, Star } from 'lucide-react';

const projects = [
  {
    title: 'ONE AI Platform',
    description: 'Leading the development of next-gen AI-powered HR solutions transforming workplace operations.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    metrics: [
      { icon: Brain, value: '3+', label: 'AI Products' },
      { icon: TrendingUp, value: '200%', label: 'YoY Growth' },
    ],
    tags: ['Gen AI', 'HR Tech', 'Enterprise SaaS'],
  },
  {
    title: 'GLG Consulting',
    description: 'Providing strategic consultation to Fortune 500 companies on AI implementation and digital transformation.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    metrics: [
      { icon: Users, value: '50+', label: 'Enterprise Clients' },
      { icon: Star, value: '4.9/5', label: 'Client Rating' },
    ],
    tags: ['AI Strategy', 'Innovation', 'Enterprise'],
  },
  {
    title: 'Tech Startup Exit',
    description: 'Built and scaled an innovative SaaS platform from concept to successful acquisition.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    metrics: [
      { icon: Users, value: '2M+', label: 'Users' },
      { icon: TrendingUp, value: '15+', label: 'Team Size' },
    ],
    tags: ['Startup', 'Product Strategy', 'Exit'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Innovation Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading AI transformation and product innovation across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex justify-between items-center mb-4">
                  {project.metrics.map((metric, i) => {
                    const Icon = metric.icon;
                    return (
                      <div key={i} className="flex items-center">
                        <Icon className="w-5 h-5 text-blue-400 mr-2" />
                        <div>
                          <div className="font-bold text-white">{metric.value}</div>
                          <div className="text-sm text-gray-400">{metric.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-blue-500/10 rounded-full px-6 py-3 border border-blue-400/20">
            <Brain className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-blue-400">
              Building the future of work with AI innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;