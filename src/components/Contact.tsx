import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact" className="contact-section py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        {formSubmitted ? (
          <p className="text-green-600 text-lg">Thank you for reaching out! I will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded shadow-md">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
              ></textarea>
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
