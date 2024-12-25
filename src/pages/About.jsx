import Footer from '@/components/page.jsx/Footer';
import Navbar1 from '@/components/page.jsx/Navbar1';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar1/>
      {/* Background Pattern Container */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {/* SVG background will be included here */}
      </div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/50">
          {/* Company Overview */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-orange-600">Revamp</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2003, Revamp has revolutionized the automotive retail experience 
              by combining cutting-edge technology with a passion for exceptional vehicles. 
              Our mission is to deliver the finest automobiles to enthusiasts and collectors 
              worldwide.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-orange-50 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Vehicles Delivered</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Staff</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Global Locations</div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sherlock Bethran",
                  role: "Founder & CEO",
                  image: "https://static.vecteezy.com/system/resources/previews/001/503/756/original/boy-face-avatar-cartoon-free-vector.jpg"
                },
                {
                  name: "Sarah Martinez",
                  role: "Head of Operations",
                   image: "https://static.vecteezy.com/system/resources/previews/009/383/943/original/little-girl-face-clipart-design-illustration-free-png.png"
                },
                {
                  name: "Alexy George",
                  role: "Chief Technical Officer",
                  image: "https://th.bing.com/th/id/OIP.VGq7Aire391jl7KLGLWODgHaHa?w=626&h=626&rs=1&pid=ImgDetMain"
                }
              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-orange-200"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Headquarters</h3>
                <p className="text-gray-600">
                  123 Automotive Avenue<br />
                  Silicon Valley, CA 94025<br />
                  United States
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">European Center</h3>
                <p className="text-gray-600">
                  45 Motor Street<br />
                  Stuttgart 70173<br />
                  Germany
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-orange-600">contact@revamp.com</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-orange-600">+1 (555) 123-4567</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
                <p className="text-orange-600">Mon-Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;