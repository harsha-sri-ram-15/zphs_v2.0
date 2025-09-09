import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <img
                src="/images/pm-shri-seeklogo.jpg"
                alt="School Logo"
                className="h-12 w-12 mr-3 object-contain bg-white rounded shadow"
                style={{ minWidth: '50px', minHeight: '50px' }}
              />
              <span className="font-bold text-xl text-gray-300">ZPHS RAGHUDEVAPURAM</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Nurturing minds, building futures, and creating tomorrow's leaders through excellence in education, 
              character development, and innovative learning experiences.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Raghudevapuram,</p>
                  <p className="text-gray-300">Seethanagaram, East Godavari,</p>
                  <p className="text-gray-300">Andhra Pradesh - 533333</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <div>
                  <p className="text-gray-300">+91 123 456 7890</p>
                  <p className="text-gray-400 text-sm">Mon - Fri, 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                <div>
                  <p className="text-gray-300">zphsraghudevapuram@gmail.com</p>
                  <p className="text-gray-400 text-sm">General inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="/achievements" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Achievements
              </a>
              <a href="/gallery" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Gallery
              </a>
              <a href="/faculty" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Faculty
              </a>
            </div>
          </div>
        </div>

        {/* School Hours & Additional Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">School Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-medium">Regular Classes:</span> 8:00 AM - 5:00 PM</p>
                <p><span className="font-medium">Lunch Break:</span> 12:30 PM - 1:30 PM</p>
                <p><span className="font-medium">Office Hours:</span> 8:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Recognition</h4>
              <div className="space-y-2 text-gray-300">
                <p>🏆 National Blue Ribbon School</p>
                <p>🌟 State Excellence in Education</p>
                <p>🎓 College Readiness Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} PM SHRI ZPHS RAGHUDEVAPURAM. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">Terms of Service</a>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Empowering students to achieve their full potential since 2003
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;