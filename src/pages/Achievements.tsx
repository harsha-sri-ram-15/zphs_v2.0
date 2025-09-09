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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Achievements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence, innovation, and the remarkable accomplishments of our school community
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={achievement.thumbnail}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=Achievement';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 capitalize">
                    {achievement.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(achievement.date).toLocaleDateString()}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {achievement.description}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => handlePreview(achievement)}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </button>
                  <button
                    onClick={() => handleDownload(achievement)}
                    className="flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-200"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-16">
            <Trophy className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">No achievements found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedAchievement.title}
                  </h2>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(selectedAchievement.date).toLocaleDateString()}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="h-64 mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedAchievement.thumbnail}
                  alt={selectedAchievement.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedAchievement.description}
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">PDF Preview</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Click the download button to access the full achievement certificate and documentation.
                </p>
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-center">
                    <Download className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">PDF Document Preview</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleDownload(selectedAchievement)}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </button>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;