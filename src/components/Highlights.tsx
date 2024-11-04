import React from 'react';
import { Brain, Users, Lightbulb, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Gen AI Pioneer',
    description: 'Leading AI product innovation at HROne, transforming HR tech',
    stat: '3+ AI Products Launched'
  },
  {
    icon: Trophy,
    title: 'GLG Consultant',
    description: 'Advising Fortune 500 companies on product strategy & innovation',
    stat: '50+ Consultations'
  },
  {
    icon: Lightbulb,
    title: 'Tech Founder',
    description: 'Built and scaled innovative solutions from ground up',
    stat: '2M+ Users Impacted'
  },
  {
    icon: Users,
    title: 'Product Leader',
    description: 'Driving cross-functional teams towards excellence',
    stat: '40+ Team Members Led'
  }
];

const Highlights = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/50 rounded-xl p-8 hover:bg-slate-900/70 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 p-2.5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {highlight.description}
                  </p>
                  
                  <div className="text-sm font-semibold text-blue-400">
                    {highlight.stat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;