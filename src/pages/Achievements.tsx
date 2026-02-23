import React from 'react';
import { Construction, ArrowRight } from 'lucide-react';

/* 
  COMMENTED OUT ORIGINAL CODE:
  
  import React, { useState } from 'react';
  import { Download, Eye, Calendar, Trophy, X } from 'lucide-react';

  interface Achievement {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    pdfUrl: string;
    thumbnail: string;
  }

  const Achievements: React.FC = () => {
    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Sample achievement data - easily expandable
    const achievements: Achievement[] = [
      {
        id: 1,
        title: 'National Science Fair Winner 2024',
        description: 'Our students won first place in the National Science Fair with their innovative renewable energy project.',
        date: '2024-03-15',
        category: 'academic',
        pdfUrl: '#',
        thumbnail: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 2,
        title: 'Inter-School Sports Championship',
        description: 'Secured gold medals in basketball, swimming, and track events at the regional championship.',
        date: '2024-02-20',
        category: 'sports',
        pdfUrl: '#',
        thumbnail: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 3,
        title: 'Environmental Excellence Award',
        description: 'Recognized for outstanding commitment to environmental sustainability and green initiatives.',
        date: '2024-01-10',
        category: 'environmental',
        pdfUrl: '#',
        thumbnail: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 4,
        title: 'Academic Excellence Recognition',
        description: '95% of our students achieved distinction in board examinations this year.',
        date: '2023-12-05',
        category: 'academic',
        pdfUrl: '#',
        thumbnail: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 5,
        title: 'Community Service Leadership',
        description: 'Students led multiple community service projects benefiting over 1000 families.',
        date: '2023-11-18',
        category: 'community',
        pdfUrl: '#',
        thumbnail: 'https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 6,
        title: 'Technology Innovation Award',
        description: 'Developed AI-powered learning assistant that enhances student engagement.',
        date: '2023-10-22',
        category: 'technology',
        pdfUrl: '#',
        thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ];

    const categories = [
      { id: 'all', label: 'All Achievements' },
      { id: 'academic', label: 'Academic' },
      { id: 'sports', label: 'Sports' },
      { id: 'environmental', label: 'Environmental' },
      { id: 'community', label: 'Community' },
      { id: 'technology', label: 'Technology' }
    ];

    const filteredAchievements = selectedCategory === 'all' 
      ? achievements 
      : achievements.filter(achievement => achievement.category === selectedCategory);

    const handleDownload = (achievement: Achievement) => {
      // Simulate PDF download
      alert(`Downloading: ${achievement.title}.pdf`);
    };

    const handlePreview = (achievement: Achievement) => {
      setSelectedAchievement(achievement);
    };
*/

const Achievements: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <Construction className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Main Text */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-600 mb-8">
          Our Achievements page is under construction and will be available very soon!
        </p>

        {/* Description */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            We're currently working on showcasing our school's incredible achievements, awards, and student accomplishments. 
            This page will feature all the recognitions, certifications, and milestones we're proud of.
          </p>
          <p className="text-gray-600">
            Check back soon to explore our achievements, competitions won, and academic excellence!
          </p>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="bg-yellow-100 rounded-lg p-4">
            <p className="text-2xl mb-1">🏆</p>
            <p className="text-sm text-gray-600">Awards</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-4">
            <p className="text-2xl mb-1">⭐</p>
            <p className="text-sm text-gray-600">Recognition</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4">
            <p className="text-2xl mb-1">📜</p>
            <p className="text-sm text-gray-600">Certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;