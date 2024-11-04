import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  position: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: 'John Doe', feedback: 'This service was amazing and exceeded my expectations.', position: 'CEO at ExampleCorp' },
  { id: 2, name: 'Jane Smith', feedback: 'A truly outstanding experience, highly recommend!', position: 'CTO at Techies Inc.' },
  { id: 3, name: 'Alice Johnson', feedback: 'Professional, reliable, and great quality work!', position: 'Product Manager at Innovate' },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
        <div className="relative mx-auto max-w-2xl p-8 bg-gray-100 rounded shadow-md">
          <p className="text-lg italic mb-4">"{testimonials[currentIndex].feedback}"</p>
          <p className="text-xl font-semibold">- {testimonials[currentIndex].name}, {testimonials[currentIndex].position}</p>
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
