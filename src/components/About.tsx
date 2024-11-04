import React from 'react';
import { Code, Users, Lightbulb, BarChart } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Building products that solve real user problems and create lasting impact.',
  },
  {
    icon: BarChart,
    title: 'Data-Driven',
    description: 'Making informed decisions through analytics and user insights.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Pushing boundaries to create breakthrough product experiences.',
  },
  {
    icon: Code,
    title: 'Tech Excellence',
    description: 'Leveraging cutting-edge technology to build scalable solutions.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate product leader with over a decade of experience in building innovative solutions 
            that drive business growth and user satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 p-2.5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;