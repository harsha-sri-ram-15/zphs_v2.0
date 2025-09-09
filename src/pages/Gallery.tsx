import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Camera } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

const Gallery: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample gallery data - easily expandable
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Annual Sports Day',
      description: 'Students showcasing their athletic talents in various sports competitions',
      category: 'sports',
      date: '2024-03-15'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Science Exhibition',
      description: 'Young scientists presenting their innovative projects and experiments',
      category: 'academic',
      date: '2024-02-28'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cultural Festival',
      description: 'Celebrating diversity through music, dance, and traditional performances',
      category: 'cultural',
      date: '2024-02-14'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8499493/pexels-photo-8499493.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Library Reading Program',
      description: 'Promoting literacy and love for reading among our students',
      category: 'academic',
      date: '2024-01-20'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Service Day',
      description: 'Students contributing to local community development projects',
      category: 'community',
      date: '2024-01-15'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Graduation Ceremony',
      description: 'Celebrating the achievements of our graduating class',
      category: 'events',
      date: '2023-12-10'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Technology Workshop',
      description: 'Students learning cutting-edge programming and robotics',
      category: 'technology',
      date: '2023-11-25'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Environmental Day',
      description: 'Tree planting and environmental awareness activities',
      category: 'environmental',
      date: '2023-11-10'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'academic', label: 'Academic' },
    { id: 'sports', label: 'Sports' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'community', label: 'Community' },
    { id: 'events', label: 'Events' },
    { id: 'technology', label: 'Technology' },
    { id: 'environmental', label: 'Environmental' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && filteredImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, filteredImages.length, currentImageIndex]);

  // Reset current image when category changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedCategory]);

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (filteredImages.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-400 mb-2">No images found</h3>
          <p className="text-gray-500">Try selecting a different category</p>
        </div>
      </div>
    );
  }

  const currentImage = filteredImages[currentImageIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Camera className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">School Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing the vibrant moments, achievements, and memories that define our school community
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

        {/* Main Gallery */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          {/* Main Image Display */}
          <div className="relative h-96 md:h-[600px] overflow-hidden group">
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-full object-cover transition-transform duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=School+Gallery';
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Auto-play Control */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all duration-200"
            >
              {isAutoPlaying ? (
                <Pause className="h-5 w-5 text-white" />
              ) : (
                <Play className="h-5 w-5 text-white" />
              )}
            </button>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium capitalize">
                  {currentImage.category}
                </span>
                <span className="text-sm opacity-75">
                  {new Date(currentImage.date).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentImage.title}</h3>
              <p className="text-gray-200 text-sm md:text-base">{currentImage.description}</p>
            </div>
          </div>

          {/* Image Counter and Progress */}
          <div className="p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-medium">
                {currentImageIndex + 1} of {filteredImages.length}
              </span>
              <div className="text-sm text-gray-500">
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentImageIndex + 1) / filteredImages.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'ring-4 ring-blue-600 scale-105' 
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=' + (index + 1);
                }}
              />
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                index === currentImageIndex ? 'opacity-0' : 'opacity-20 hover:opacity-0'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Touch/Swipe Instructions */}
        <div className="text-center mt-12 text-gray-500">
          <p className="text-sm">
            Use arrow keys or click navigation buttons • Swipe on mobile • Auto-play every 5 seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;