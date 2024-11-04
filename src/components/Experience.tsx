import React from 'react';
import { Briefcase, Award, Target, Cpu } from 'lucide-react';

const experiences = [
  {
    company: 'HROne',
    role: 'Associate Director of Product',
    period: '2021 - Present',
    description: 'Spearheading AI innovation in HR tech, leading the development of next-generation products that transform workplace operations.',
    achievements: [
      'Launched 3 Gen AI products revolutionizing HR operations',
      'Led cross-functional team of 40+ members across product, design, and engineering',
      'Achieved 200% YoY growth in enterprise customer base',
      'Pioneered AI-driven employee experience platform'
    ],
    tags: ['Gen AI', 'Product Strategy', 'Enterprise SaaS']
  },
  {
    company: 'GLG (Gerson Lehrman Group)',
    role: 'Technology Consultant',
    period: '2020 - Present',
    description: 'Providing expert consultation to Fortune 500 companies on product strategy, AI implementation, and digital transformation.',
    achievements: [
      'Advised 50+ enterprise clients on AI strategy and implementation',
      'Conducted technology assessment for $100M+ digital transformation projects',
      'Expertise in AI/ML, enterprise software, and product innovation'
    ],
    tags: ['AI Strategy', 'Enterprise Tech', 'Digital Transformation']
  },
  {
    company: 'Tech Startup (Founder)',
    role: 'Founder & Product Leader',
    period: '2018 - 2021',
    description: 'Built an innovative SaaS platform from concept to scale, leading product strategy and development.',
    achievements: [
      'Scaled to 2M+ users within 2 years',
      'Raised multiple rounds of funding',
      'Built and led founding team of 15 members',
      'Successful exit through acquisition'
    ],
    tags: ['Entrepreneurship', 'SaaS', 'Product Development']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Leadership Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building and scaling AI-powered products that transform industries.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row gap-8 bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex-shrink-0 w-full md:w-64">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                  <p className="text-blue-400 font-semibold mb-2">{exp.role}</p>
                  <p className="text-gray-400">{exp.period}</p>
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <Target className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;