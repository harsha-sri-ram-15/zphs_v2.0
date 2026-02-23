import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Camera, Loader } from 'lucide-react';

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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [visibleThumbnails, setVisibleThumbnails] = useState<Set<number>>(new Set());
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Gallery data with all 55 images from local folder
  const galleryImages: GalleryImage[] = [
    // Ambani events
    { id: 1, src: '/gallery/ambani_2324.jpg', title: 'RDAQ 2023-24', description: 'School events and celebrations', category: 'events', date: '2023-11-15' },
    { id: 2, src: '/gallery/ambani_2425.jpg', title: 'RDAQ 2024-25', description: 'School events and celebrations', category: 'events', date: '2024-11-15' },
    // Academic events
    { id: 3, src: '/gallery/collector.jpg', title: 'Collector Visit', description: 'District collector visit to school', category: 'academic', date: '2024-08-10' },
    { id: 4, src: '/gallery/dcmpkproject.jpg', title: 'Science Project, Visit by Dep. CM Pawan Kalyan', description: 'School development project', category: 'academic', date: '2024-07-20' },
    { id: 5, src: '/gallery/delhi15.jpg', title: 'Independence Day Celebrations, Delhi Trip', description: 'Educational tour to Delhi', category: 'events', date: '2024-06-15' },
    { id: 6, src: '/gallery/deoscoutsguides.jpg', title: 'DEO Scouts & Guides', description: 'District-level scouts and guides event', category: 'community', date: '2024-05-20' },
    { id: 7, src: '/gallery/diary.jpg', title: 'School Diary', description: 'School diary and documentation', category: 'academic', date: '2024-04-10' },
    { id: 8, src: '/gallery/dist_scfair_2324.jpg', title: 'District Science Fair 2023-24', description: 'District-level science fair competition', category: 'academic', date: '2024-03-15' },
    { id: 9, src: '/gallery/eemt.jpg', title: 'EEMT Event', description: 'Educational excellence and motivation training', category: 'academic', date: '2024-02-28' },
    { id: 10, src: '/gallery/idcard.jpg', title: 'ID Card Distribution', description: 'Student ID card distribution event', category: 'events', date: '2024-01-20' },
    // IMG Photos - School Activities
    { id: 11, src: '/gallery/IMG-20260220-WA0000.jpg', title: 'School Board', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 12, src: '/gallery/IMG-20260220-WA0001.jpg', title: 'Parent Meeting', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 14, src: '/gallery/IMG-20260220-WA0003.jpg', title: 'Internet Facility', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 15, src: '/gallery/IMG-20260220-WA0004.jpg', title: 'No Bag Day Activities', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 16, src: '/gallery/IMG-20260220-WA0005.jpg', title: 'Making of Craft Items', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 17, src: '/gallery/IMG-20260220-WA0006.jpg', title: 'Hand Wash Facility', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 18, src: '/gallery/IMG-20260220-WA0007.jpg', title: 'Career Guidance and Mental Health Counselling', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 19, src: '/gallery/IMG-20260220-WA0008.jpg', title: 'Self Defense Program', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 20, src: '/gallery/IMG-20260220-WA0009.jpg', title: 'Green Club Activities', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 21, src: '/gallery/IMG-20260220-WA0010.jpg', title: 'Swatch Evam Haritha Vidyalayam, 5-star Rating', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 22, src: '/gallery/IMG-20260220-WA0011.jpg', title: 'Library Establishment', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 23, src: '/gallery/IMG-20260220-WA0012.jpg', title: 'Ek Bharat, Shrestha Bharat', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 25, src: '/gallery/IMG-20260220-WA0014.jpg', title: 'Experiments in Classroom', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 26, src: '/gallery/IMG-20260220-WA0015.jpg', title: 'Ek Bharat, Shrestha Bharat', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 27, src: '/gallery/IMG-20260220-WA0016.jpg', title: 'Ek Bharat, Shrestha Bharat', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 28, src: '/gallery/IMG-20260220-WA0017.jpg', title: 'Republic Day Parade', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 29, src: '/gallery/IMG-20260220-WA0018.jpg', title: 'PMshri pre expo to Vocational Education visit', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 30, src: '/gallery/IMG-20260220-WA0019.jpg', title: 'PMshri pre expo to Vocational Education visit', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 31, src: '/gallery/IMG-20260220-WA0020.jpg', title: 'PMshri pre expo to Vocational Education visit', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 32, src: '/gallery/IMG-20260220-WA0021.jpg', title: 'PMshri pre expo to Vocational Education visit', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 33, src: '/gallery/IMG-20260220-WA0022.jpg', title: 'Bharat Tech team State-level Participation', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 34, src: '/gallery/IMG-20260220-WA0023.jpg', title: 'Ozone day Celebrations', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 35, src: '/gallery/IMG-20260220-WA0024.jpg', title: 'T. Sai Satya Ganesh participated in mock assembly', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 36, src: '/gallery/IMG-20260220-WA0025.jpg', title: 'RJD madam with our scouts and guides', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 37, src: '/gallery/IMG-20260220-WA0026.jpg', title: 'Best PMshri School, Nationalisation of School', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 38, src: '/gallery/IMG-20260220-WA0027.jpg', title: 'Best PMshri School, Nationalisation of School', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 39, src: '/gallery/IMG-20260220-WA0029.jpg', title: 'New Academic Block', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 40, src: '/gallery/IMG-20260220-WA0032.jpg', title: 'Drug Abuse Program', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 41, src: '/gallery/IMG-20260220-WA0033.jpg', title: 'Republic Day Celebrations', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 42, src: '/gallery/IMG-20260220-WA0034.jpg', title: 'Republic Day Celebrations', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    { id: 43, src: '/gallery/IMG-20260220-WA0035.jpg', title: 'Badminton Court Construction', description: 'Students engaged in school activities', category: 'events', date: '2026-02-20' },
    // Special events
    { id: 44, src: '/gallery/inspire.jpg', title: 'Inspiration Program', description: 'Student inspiration and motivation program', category: 'academic', date: '2024-09-10' },
    { id: 45, src: '/gallery/jcmla.jpg', title: 'JCMLA Event', description: 'Junior council member leadership award', category: 'academic', date: '2024-08-15' },
    { id: 46, src: '/gallery/koushal_2324.jpg', title: 'Koushal Program 2023-24', description: 'Skill development program', category: 'academic', date: '2024-03-10' },
    { id: 47, src: '/gallery/koushal_2425.jpg', title: 'Koushal Program 2024-25', description: 'Skill development program', category: 'academic', date: '2025-03-10' },
    { id: 48, src: '/gallery/koushal_st2.jpg', title: 'Koushal Second Term', description: 'Skill development second term', category: 'academic', date: '2024-06-15' },
    { id: 49, src: '/gallery/mathsday_2324.jpg', title: 'Mathematics Day 2023-24', description: 'Mathematics day celebration', category: 'academic', date: '2024-01-22' },
    { id: 50, src: '/gallery/megaptmprize.jpg', title: 'Mega PTM Prize Distribution', description: 'Parent-teacher meeting prize distribution', category: 'events', date: '2024-02-15' },
    { id: 51, src: '/gallery/nationalization.jpg', title: 'Nationalization Event', description: 'National consciousness program', category: 'events', date: '2024-01-26' },
    { id: 52, src: '/gallery/rjd.jpg', title: 'RJD Program', description: 'Residential-Junior Development program', category: 'academic', date: '2024-05-10' },
    { id: 53, src: '/gallery/scoutsguides.jpg', title: 'Scouts & Guides', description: 'Scout and guide training program', category: 'community', date: '2024-04-20' },
    { id: 54, src: '/gallery/ssc_results2324.jpg', title: 'SSC Results 2023-24', description: 'SSC board exam results announcement', category: 'academic', date: '2024-05-15' },
    { id: 55, src: '/gallery/ssc_results2425.jpg', title: 'SSC Results 2024-25', description: 'SSC board exam results announcement', category: 'academic', date: '2025-05-15' },
    { id: 56, src: '/gallery/ssc_toppers.jpg', title: 'SSC Toppers', description: 'Celebration of SSC board exam toppers', category: 'academic', date: '2024-06-10' },
    { id: 57, src: '/gallery/tlm.jpg', title: 'Teaching-Learning Material', description: 'TLM workshop and development', category: 'academic', date: '2024-07-15' },
    { id: 58, src: '/gallery/yoga.jpg', title: 'Yoga Day', description: 'International yoga day celebration', category: 'sports', date: '2024-06-21' },
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'academic', label: 'Academic' },
    { id: 'sports', label: 'Sports' },
    { id: 'community', label: 'Community' },
    { id: 'events', label: 'Events' }
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

  // Lazy load images in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Observe all thumbnail images
    document.querySelectorAll('[data-src]').forEach((img) => {
      observer.observe(img);
    });

    return () => observer.disconnect();
  }, [filteredImages]);

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

        {/* Thumbnail Grid with Lazy Loading */}
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
              {/* Lazy load thumbnail images */}
              <img
                data-src={image.src}
                alt={image.title}
                className="w-full h-full object-cover bg-gray-200"
                loading="lazy"
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