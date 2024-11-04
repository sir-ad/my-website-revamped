import React from 'react';
import { Quote, Star, Award } from 'lucide-react';

const testimonials = [
  {
    quote: "Hey Adarsh, Thank you so much for this recognition... it's all because of your effort and management that is making me a better PM. Without your lessons, mentorship this was not possible.",
    author: "Riddhi Jain",
    role: "Product Manager at HROne",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "A special shoutout to the Product Management team under Adarsh's leadership—your attention to every detail has made such a difference. It's clear that your passion is driving this forward.",
    author: "Magnum Gupta",
    role: "Engineering Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Thank you Karan. Your contribution at PM layer is noteworthy. We appreciate your guidance at all other layers too.",
    author: "Sunaina Sharma",
    role: "QA Team Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

const achievements = [
  { icon: Star, title: "Product King Award", description: "Led product innovation at Paytail" },
  { icon: Award, title: "1st Rank GrowthX", description: "Created growth strategy for Zomato" },
  { icon: Star, title: "CAT 99.87%ile", description: "Academic Excellence" }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Team Impact & Recognition
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building high-performing teams and driving innovation through leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="bg-slate-900/50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group bg-slate-900/50 rounded-xl p-8 hover:bg-slate-900/70 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-blue-400/20" />
              </div>
              
              <blockquote className="relative">
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-blue-400">{testimonial.role}</div>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Team Collaboration"
            className="w-full h-64 object-cover rounded-xl mb-8 opacity-50"
          />
          <p className="text-xl text-gray-300">
            Featured in <span className="text-blue-400">Mock Interview Series</span> discussing product strategy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;