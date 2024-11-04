import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            I am a dedicated product leader with a passion for building impactful digital experiences. With several years of experience in product management, I have successfully led cross-functional teams to deliver innovative solutions that meet both user and business needs.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            My journey has taken me through various industries, where I have developed a strong foundation in understanding customer requirements, defining clear product strategies, and driving successful launches. I believe in creating products that not only solve real problems but also delight users.
          </p>
          <p className="text-lg text-gray-700">
            When I'm not working on product challenges, I love to explore new technologies, mentor aspiring product managers, and share my knowledge with the community. Let's collaborate to make great things happen!
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={() => window.location.href = '#contact'}
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
