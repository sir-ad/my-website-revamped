import React, { useState } from 'react';
import { Mail, Linkedin, Book, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'adarsh.agrahari26@gmail.com',
      link: 'mailto:adarsh.agrahari26@gmail.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/adarshagrahari',
      link: 'https://linkedin.com/in/adarshagrahari'
    },
    {
      icon: Book,
      title: 'Published Books',
      value: 'Halcyon & Retire Today?',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-400">{item.title}</h3>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-400 ml-auto" />
                  </a>
                );
              })}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-4">Author Profile</h3>
              <div className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                    alt="Adarsh Agrahari"
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">Adarsh Agrahari</h4>
                    <p className="text-gray-400">3.6K+ LinkedIn Followers</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Author of "Halcyon: Your Finance Guide" and "Retire Today?" with 10,000+ copies sold.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-slate-800/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Join My Newsletter</h2>
            <p className="text-gray-300 mb-6">
              Get exclusive insights on product leadership, AI innovation, and tech industry trends.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
              </button>
            </form>

            <div className="mt-8 p-6 bg-slate-900/50 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Latest Publications</h3>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Halcyon Book"
                  className="rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Retire Today Book"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;