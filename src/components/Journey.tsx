import React from 'react';
import { Milestone, ArrowRight, Heart, BookOpen, Target, Trophy } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: '2019',
      achievement: 'UPSC AIR 151',
      description: 'Qualified but chose a different path, following my passion for technology and innovation.',
      icon: Trophy
    },
    {
      year: '2019',
      achievement: 'CAT 99.87%ile',
      description: "After multiple attempts (92.34%ile in '17, 95.07%ile in '18), finally cracked it.",
      icon: Target
    }
  ];

  const examJourney = [
    { exam: "NEET UG '13, AIPMT '14", result: 'Not successful' },
    { exam: 'SBI PO - Prelims', result: 'Not cleared' },
    { exam: 'EPFO', result: 'Not selected post-interview' },
    { exam: 'RBI Grade B', result: 'Not selected post-interview' }
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
            The Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Unfiltered: My Exam Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real strength isn't just in acing exams; it's in rising after each fall.
          </p>
        </div>

        {/* Major Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-400">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white">{milestone.achievement}</h3>
                  </div>
                </div>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            );
          })}
        </div>

        {/* Journey Timeline */}
        <div className="bg-slate-800/50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">The Complete Journey</h3>
          <div className="space-y-6">
            {examJourney.map((exam, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="ml-4 flex-grow">
                  <div className="text-lg font-semibold text-white">{exam.exam}</div>
                  <div className="text-gray-400">{exam.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection Card */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-xl p-8">
          <div className="flex items-start mb-6">
            <BookOpen className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0" />
            <blockquote className="text-xl text-gray-300 italic">
              "संघर्ष मेरी पाठशाला, सीख मेरा पुरस्कार"
              <span className="block text-sm text-gray-400 mt-2">
                (Struggle is my school, learning is my reward)
              </span>
            </blockquote>
          </div>
          <p className="text-gray-300 mb-6">
            The process, the persistence, the climb—they are the true measures of our journey. Each setback was a setup for a stronger comeback.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-gray-400">Sharing to inspire</span>
            </div>
            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
              Connect for Guidance <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;