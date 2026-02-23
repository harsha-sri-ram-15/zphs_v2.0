import React from 'react';
import { Award, Camera, Users, ChevronRight } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const leadershipTeam = [
    {
      name: "Sri N. Chandrababu Naidu",
      title: "Hon'ble Chief Minister",
      image: '/images/cbn_pic.jpg',
      description: 'Government of Andhra Pradesh'
    },
    {
      name: 'Sri K. Pawan Kalyan',
      title: "Hon'ble Deputy Chief Minister",
      image: '/images/pk_pic.jpg',
      description: 'Government of Andhra Pradesh'
    },
    {
      name: 'Sri Nara Lokesh',
      title: "Hon'ble Education Minister",
      image: '/images/lokesh_pic.jpg',
      description: 'Government of Andhra Pradesh'
    },
    {
      name: 'Sri V. Vijaya Ram Raju',
      title: 'Director of School Education Department',
      image: '/images/director_pic.jpg',
      description: 'Government of Andhra Pradesh'
    },
    {
      name: 'Sri B. Srininivasa Rao',
      title: 'State Project Director Samagra Siksha',
      image: '/images/srinivas_rao.jpg',
      description: 'Government of Andhra Pradesh'
    },
    {
      name: 'Sri K. Vasudeva Rao',
      title: 'District Educational Officer',
      image: '/images/deo_pic.jpeg',
      description: 'East Godavari'
    },
    {
      name: 'Smt S.Subhashini',
      title: 'Additional Project Co ordinator SS',
      image: '/images/subhashini.jpg',
      description: 'EAST GODAVARI'
    },
    {
      name: 'Sri B.Gowri Sri Shankar',
      title: 'Academic Monitoring Officer Samgra Siksha',
      image: '/images/gowri_shankar.jpg',
      description: 'East Godavari'
    },
    {
      name: 'Smt M. Syamala Devi',
      title: 'Gazatted Head Mistress',
      image: '/images/ghm_pic.jpg',
      description: 'PM SHRI ZPHS Raghudevapuram'
    }

  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("/images/school_bg.jpg")'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Excellence in
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Nurturing minds, building futures, creating tomorrow's leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('achievements')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Our Achievements
            </button>
            <button
              onClick={() => setCurrentPage('gallery')}
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold transition-all duration-300"
            >
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">Dedicated professionals leading our educational mission</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=' + leader.name.split(' ').map(n => n[0]).join('');
                      }}
                    />
                  </div>
                  <h3 className="text-1xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.title}</p>
                  <p className="text-gray-600">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our School</h2>
            <p className="text-xl text-gray-600">Discover what makes us unique</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              onClick={() => setCurrentPage('achievements')}
              className="group cursor-pointer bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Achievements</h3>
              <p className="text-gray-600 mb-6">Explore our awards, recognitions, and student accomplishments</p>
              <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-200">
                View Achievements <ChevronRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            <div 
              onClick={() => setCurrentPage('gallery')}
              className="group cursor-pointer bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h3>
              <p className="text-gray-600 mb-6">Browse through our vibrant school life and memorable events</p>
              <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-200">
                View Gallery <ChevronRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            <div 
              onClick={() => setCurrentPage('faculty')}
              className="group cursor-pointer bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Faculty</h3>
              <p className="text-gray-600 mb-6">Meet our dedicated team of educators and staff members</p>
              <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-200">
                Meet Faculty <ChevronRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;