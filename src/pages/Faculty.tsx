import React, { useState } from 'react';
import { Users, Mail, Phone, Award, GraduationCap, BookOpen } from 'lucide-react';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  experience: string;
  qualifications: string[];
  bio: string;
  email: string;
  phone: string;
  image: string;
  specializations: string[];
  isHeadMistress?: boolean;
}

const Faculty: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  // Sample faculty data - easily expandable
  const facultyMembers: FacultyMember[] = [
    {
      id: 1,
      name: 'Mrs. M. Syamala Devi',
      designation: 'GHM, PM SHRI ZPHS Raghudevapuram',
      department: 'Administration',
      experience: '20+ years',
      qualifications: ['M.Sc in Zoology', 'M.A. in English','B.Ed. Secondary Education'],
      bio: 'M. Syamala Devi brings over two decades of educational leadership experience. She is passionate about fostering an inclusive learning environment and driving academic excellence through innovative teaching methodologies.',
      email: 'msd@gmail.com',
      phone: '+1 (555) 123-4567',
      image: '/images/ghm_pic.jpg',
      specializations: ['Educational Leadership', 'Curriculum Development', 'Student Development'],
      isHeadMistress: true
    },
    {
      id: 2,
      name: 'Gulivindala Sekhar',
      designation: 'SA, Physical Science Teacher',
      department: 'Science',
      experience: '30+ years',
      qualifications: ['M.Sc', 'B.Ed'],
      bio: 'Gulivindala Sekhar is a highly experienced physical science educator with 30 years of dedicated service. He is passionate about making science engaging through hands-on experiments and practical demonstrations.',
      email: 'Sekhargulivindala@gmail.com',
      phone: '+91 9701384806',
      image: '/images/shekar_pic.jpg',
      specializations: ['Physical Science', 'Laboratory Management', 'Experimental Learning']
    },
    {
      id: 3,
      name: 'M. M. Sirisha',
      designation: 'SA, Mathematics Teacher',
      department: 'Mathematics',
      experience: '20+ years',
      qualifications: ['M.Sc', 'B.Ed'],
      bio: 'M. M. Sirisha is a passionate mathematics educator with 20 years of experience. She is dedicated to fostering a love for numbers and problem-solving among her students through creative and student-centered approaches.',
      email: 'Sirishamarepalli20@gmail.com',
      phone: '+91 7981859928',
      image: '/images/sirisha_pic.jpg',
      specializations: ['Mathematics', 'Problem Solving', 'Advanced Concepts']
    },
    {
      id: 4,
      name: 'V PADMAVATHI',
      designation: 'SA, Mathematics Teacher',
      department: 'Mathematics',
      experience: '15+ years',
      qualifications: ['B.Sc', 'B.Ed'],
      bio: 'V Padmavathi is a dedicated mathematics educator with 18 years of teaching experience. She is committed to helping students develop a deep understanding of mathematical concepts through interactive and engaging instruction.',
      email: 'padmavathiv54@gmail.com',
      phone: '+91 9492859231',
      image: '/images/padmavathi_pic.jpg',
      specializations: ['Mathematics', 'Problem Solving', 'Numeracy']
    },
    {
      id: 5,
      name: 'M APPALA RAJU',
      designation: 'SA, Physical Science Teacher',
      department: 'Science',
      experience: '25+ years',
      qualifications: ['B.Sc', 'B.Ed'],
      bio: 'M Appala Raju is an experienced physical science educator with 29 years of dedicated service. He is passionate about making science education engaging and accessible to all students through practical demonstrations and real-world applications.',
      email: 'Malluvalasa16@gmail.com',
      phone: '+91 9553260620',
      image: '/images/appalaraju_pic.jpg',
      specializations: ['Physical Science', 'Laboratory Management', 'Practical Learning']
    },
    {
      id: 6,
      name: 'Rambabu Vasamsetty',
      designation: 'SA, English Teacher',
      department: 'English',
      experience: '25+ years',
      qualifications: ['M.A (English)', 'M.Sc (Botany)', 'M.Ed', 'PGDCA'],
      bio: 'Rambabu Vasamsetty is a highly qualified educator with 28 years of experience in teaching English and related subjects. His diverse qualifications allow him to bring interdisciplinary perspectives to his teaching.',
      email: 'rambabuvasamsetty79@gmail.com',
      phone: '+91 8019204079',
      image: '/images/rambabu_pic.jpg',
      specializations: ['English Language', 'Literature', 'Educational Technology']
    },
    {
      id: 7,
      name: 'Ch. Lillymary',
      designation: 'SA, Telugu Teacher',
      department: 'Telugu',
      experience: '30+ years',
      qualifications: ['M.A', 'B.Ed'],
      bio: 'Ch. Lillymary has devoted 30 years to teaching Telugu language and culture. She is passionate about preserving the richness of the Telugu language and literature for the younger generation.',
      email: 'lillymary310171@gmail.com',
      phone: '+91 9493570194',
      image: '/images/lilymary_pic.jpg',
      specializations: ['Telugu Language', 'Indian Literature', 'Cultural Heritage']
    },
    {
      id: 8,
      name: 'Ramakrishna Sadhanala',
      designation: 'SA, English Teacher',
      department: 'English',
      experience: '10+ years',
      qualifications: ['M.A (English)', 'B.Sc', 'B.Ed'],
      bio: 'Ramakrishna Sadhanala is an experienced English teacher with 12 years of dedication to language and literature education. He believes in fostering a love for the English language through interactive and engaging classroom sessions.',
      email: 'ramakrishna.sadhanala@gmail.com',
      phone: '+91 9494007270',
      image: '/images/srk_pic.jpg',
      specializations: ['English Language', 'Literature', 'Communication Skills']
    },
    {
      id: 9,
      name: 'Totta Ammaji',
      designation: 'SA, Social Sciences Teacher',
      department: 'Social Sciences',
      experience: '10+ years',
      qualifications: ['B.A', 'B.E.D'],
      bio: 'Totta Ammaji is a dedicated social sciences educator with 13 years of teaching experience. She is committed to fostering critical thinking and civic awareness among students.',
      email: 'tottammaji12@gmail.com',
      phone: '+91 9985028648',
      image: '/images/ammaji_pic.jpg',
      specializations: ['Social Sciences', 'Civic Education', 'History']
    },
    {
      id: 10,
      name: 'Bulusu Rama Devi',
      designation: 'SA, Hindi Teacher',
      department: 'Hindi',
      experience: '20+ years',
      qualifications: ['B.A', 'Rastra Bhasha Praveen', 'HPT'],
      bio: 'Bulusu Rama Devi has been teaching Hindi for 23 years with a passion for preserving and promoting the Hindi language and culture. She creates an engaging environment for students to develop strong language skills.',
      email: 'ramadevibulusu76@gmail.com',
      phone: '+91 9963949613',
      image: '/images/ramadevi_pic.jpg',
      specializations: ['Hindi Language', 'Indian Culture', 'Language Arts']
    },
    {
      id: 11,
      name: 'KOTA V NAGESWARA RAO',
      designation: 'SA, Special Education Teacher',
      department: 'Special Education',
      experience: '5+ years',
      qualifications: ['B.Com', 'M.A (Sociology)', 'B.Ed Special Education (Hearing Impairment)', 'S.A (Special Education)'],
      bio: 'KOTA V NAGESWARA RAO specializes in special education with expertise in supporting students with hearing impairment. He is dedicated to providing inclusive and equitable education for all learners.',
      email: 'nageshkota84@gmail.com',
      phone: '+91 9441404446',
      image: '/images/knr_pic.jpg',
      specializations: ['Special Education', 'Inclusive Learning', 'Hearing Impairment Support']
    },
    {
      id: 12,
      name: 'M.Sita Devi',
      designation: 'SA, Biological Science Teacher',
      department: 'Science',
      experience: '29+ years',
      qualifications: ['B.Sc', 'B.Ed'],
      bio: 'M.Sita Devi brings 29 years of expertise in biological sciences education. She is committed to fostering scientific curiosity and critical thinking skills in her students through hands-on learning experiences.',
      email: 'sitadevimalyala30@gmail.com',
      phone: '+91 8500814560',
      image: '/images/sithadevi_pic.jpg',
      specializations: ['Biology', 'Life Sciences', 'Laboratory Techniques']
    },
    {
      id: 13,
      name: 'Sireesh balla',
      designation: 'SA, Mathematics Teacher',
      department: 'Mathematics',
      experience: '15+ years',
      qualifications: ['B.Sc', 'B.P.Ed'],
      bio: 'Sireesh balla is a dedicated mathematics educator passionate about making mathematics accessible and interesting to all students. He uses innovative teaching methods to build confidence and problem-solving skills.',
      email: 'Sireeshballa@gmail.com',
      phone: '+91 9703868755',
      image: '',
      specializations: ['Mathematics', 'Problem Solving', 'Numeracy Skills']
    }
  ];

  const departments = [
    { id: 'all', label: 'All Faculty' },
    { id: 'Administration', label: 'Administration' },
    { id: 'English', label: 'English' },
    { id: 'Science', label: 'Science' },
    { id: 'Mathematics', label: 'Mathematics' },
    { id: 'Social Sciences', label: 'Social Sciences' },
    { id: 'Hindi', label: 'Hindi' },
    { id: 'Telugu', label: 'Telugu' },
    { id: 'Special Education', label: 'Special Education' }
  ];

  const headMistress = facultyMembers.find(member => member.isHeadMistress);
  const otherFaculty = facultyMembers.filter(member => !member.isHeadMistress);
  
  const filteredFaculty = selectedDepartment === 'all' 
    ? otherFaculty 
    : otherFaculty.filter(member => member.department === selectedDepartment);

  const openFacultyModal = (faculty: FacultyMember) => {
    setSelectedFaculty(faculty);
  };

  const closeFacultyModal = () => {
    setSelectedFaculty(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Faculty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of educators who are committed to nurturing young minds and fostering academic excellence
          </p>
        </div>

        {/* Head Mistress Section */}
        {headMistress && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">School Leadership</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden shadow-2xl mb-6">
                      <img 
                        src={headMistress.image} 
                        alt={headMistress.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=' + headMistress.name.split(' ').map(n => n[0]).join('');
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{headMistress.name}</h3>
                    <p className="text-blue-200 text-xl font-semibold mb-4">{headMistress.designation}</p>
                    <p className="text-blue-100 mb-6 leading-relaxed">{headMistress.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {headMistress.specializations.map((spec, index) => (
                        <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => openFacultyModal(headMistress)}
                      className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      View Full Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {departments.map((department) => (
            <button
              key={department.id}
              onClick={() => setSelectedDepartment(department.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedDepartment === department.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {department.label}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => openFacultyModal(faculty)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x400/3B82F6/FFFFFF?text=' + faculty.name.split(' ').map(n => n[0]).join('');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                    {faculty.experience}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {faculty.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">{faculty.designation}</p>
                <p className="text-gray-600 text-sm mb-4">{faculty.department}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {faculty.specializations.slice(0, 2).map((spec, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {spec}
                    </span>
                  ))}
                  {faculty.specializations.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{faculty.specializations.length - 2} more
                    </span>
                  )}
                </div>

                <div className="text-blue-600 font-medium text-sm group-hover:text-blue-800 transition-colors duration-200">
                  View Profile →
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-16">
            <Users className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">No faculty found</h3>
            <p className="text-gray-500">Try selecting a different department</p>
          </div>
        )}
      </div>

      {/* Faculty Detail Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-lg mb-6">
                    <img 
                      src={selectedFaculty.image} 
                      alt={selectedFaculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <a 
                      href={`mailto:${selectedFaculty.email}`}
                      className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200"
                    >
                      <Mail className="h-5 w-5 text-blue-600" />
                    </a>
                    <a 
                      href={`tel:${selectedFaculty.phone}`}
                      className="p-3 bg-green-100 hover:bg-green-200 rounded-full transition-colors duration-200"
                    >
                      <Phone className="h-5 w-5 text-green-600" />
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedFaculty.name}</h2>
                  <p className="text-blue-600 font-semibold text-xl mb-2">{selectedFaculty.designation}</p>
                  <p className="text-gray-600 mb-4">{selectedFaculty.department} • {selectedFaculty.experience}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Qualifications
                    </h3>
                    <ul className="space-y-1">
                      {selectedFaculty.qualifications.map((qual, index) => (
                        <li key={index} className="text-gray-600 text-sm">• {qual}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Specializations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.specializations.map((spec, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center text-lg">
                  <Award className="h-5 w-5 mr-2" />
                  About
                </h3>
                <p className="text-gray-700 leading-relaxed">{selectedFaculty.bio}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-800">{selectedFaculty.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-800">{selectedFaculty.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={closeFacultyModal}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;