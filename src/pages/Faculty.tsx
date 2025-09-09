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
      name: 'Dr. Sarah Johnson',
      designation: 'Head Mistress',
      department: 'Administration',
      experience: '20+ years',
      qualifications: ['Ph.D. in Education', 'M.Ed. Educational Leadership', 'B.Ed. Secondary Education'],
      bio: 'Dr. Sarah Johnson brings over two decades of educational leadership experience. She is passionate about fostering an inclusive learning environment and driving academic excellence through innovative teaching methodologies.',
      email: 'sarah.johnson@excellenceacademy.edu',
      phone: '+1 (555) 123-4567',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Educational Leadership', 'Curriculum Development', 'Student Development'],
      isHeadMistress: true
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      designation: 'Vice Principal',
      department: 'Administration',
      experience: '15+ years',
      qualifications: ['M.Ed. Educational Administration', 'B.Sc. Mathematics', 'Teaching Certification'],
      bio: 'Prof. Chen oversees academic operations and student affairs. His expertise in mathematics education and administrative leadership has significantly contributed to our academic programs.',
      email: 'michael.chen@excellenceacademy.edu',
      phone: '+1 (555) 123-4568',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Academic Administration', 'Mathematics', 'Student Affairs']
    },
    {
      id: 3,
      name: 'Ms. Emily Rodriguez',
      designation: 'English Department Head',
      department: 'English',
      experience: '12+ years',
      qualifications: ['M.A. English Literature', 'B.Ed. English', 'TESOL Certification'],
      bio: 'Ms. Rodriguez leads our English department with passion for literature and creative writing. She has published several academic papers on modern teaching methodologies.',
      email: 'emily.rodriguez@excellenceacademy.edu',
      phone: '+1 (555) 123-4569',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['English Literature', 'Creative Writing', 'ESL Teaching']
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      designation: 'Science Department Head',
      department: 'Science',
      experience: '18+ years',
      qualifications: ['Ph.D. Physics', 'M.Sc. Applied Physics', 'B.Ed. Science'],
      bio: 'Dr. Wilson brings cutting-edge scientific research into the classroom. His innovative lab programs have won multiple state-level recognition awards.',
      email: 'james.wilson@excellenceacademy.edu',
      phone: '+1 (555) 123-4570',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Physics', 'Laboratory Research', 'STEM Education']
    },
    {
      id: 5,
      name: 'Ms. Lisa Thompson',
      designation: 'Mathematics Teacher',
      department: 'Mathematics',
      experience: '10+ years',
      qualifications: ['M.Sc. Mathematics', 'B.Ed. Mathematics', 'Advanced Calculus Certification'],
      bio: 'Ms. Thompson specializes in making complex mathematical concepts accessible to students of all levels. Her students consistently achieve high scores in standardized tests.',
      email: 'lisa.thompson@excellenceacademy.edu',
      phone: '+1 (555) 123-4571',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Advanced Mathematics', 'Statistics', 'Problem Solving']
    },
    {
      id: 6,
      name: 'Mr. David Kumar',
      designation: 'Physical Education Coach',
      department: 'Sports',
      experience: '14+ years',
      qualifications: ['M.P.Ed. Physical Education', 'B.P.Ed. Sports Science', 'Sports Coaching Certification'],
      bio: 'Mr. Kumar has coached multiple championship-winning teams. He emphasizes both physical fitness and character development through sports.',
      email: 'david.kumar@excellenceacademy.edu',
      phone: '+1 (555) 123-4572',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Team Sports', 'Fitness Training', 'Sports Psychology']
    },
    {
      id: 7,
      name: 'Ms. Sophie Martin',
      designation: 'Art & Music Teacher',
      department: 'Arts',
      experience: '8+ years',
      qualifications: ['M.F.A. Fine Arts', 'B.Mus. Music Education', 'Art Therapy Certification'],
      bio: 'Ms. Martin nurtures creativity and artistic expression in students. Her interdisciplinary approach combines visual arts with music for holistic artistic development.',
      email: 'sophie.martin@excellenceacademy.edu',
      phone: '+1 (555) 123-4573',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Fine Arts', 'Music Composition', 'Creative Expression']
    },
    {
      id: 8,
      name: 'Mr. Robert Lee',
      designation: 'Computer Science Teacher',
      department: 'Technology',
      experience: '11+ years',
      qualifications: ['M.S. Computer Science', 'B.Tech. Information Technology', 'Programming Certifications'],
      bio: 'Mr. Lee keeps our technology curriculum current with industry trends. His students regularly participate in coding competitions and robotics championships.',
      email: 'robert.lee@excellenceacademy.edu',
      phone: '+1 (555) 123-4574',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Programming', 'Web Development', 'Artificial Intelligence']
    }
  ];

  const departments = [
    { id: 'all', label: 'All Faculty' },
    { id: 'Administration', label: 'Administration' },
    { id: 'English', label: 'English' },
    { id: 'Science', label: 'Science' },
    { id: 'Mathematics', label: 'Mathematics' },
    { id: 'Sports', label: 'Sports' },
    { id: 'Arts', label: 'Arts' },
    { id: 'Technology', label: 'Technology' }
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