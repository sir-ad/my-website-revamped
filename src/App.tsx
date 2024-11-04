import React from 'react';
import { Menu, X, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Journey from './components/Journey';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Experience />
        <Portfolio />
        <Journey />
        <Insights />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;