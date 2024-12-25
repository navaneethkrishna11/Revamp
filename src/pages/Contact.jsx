import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, FileText, Download } from 'lucide-react';
import Navbar1 from '@/components/page.jsx/Navbar1';
import Footer from '@/components/page.jsx/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [fileUpload, setFileUpload] = useState(null);

  // Sample vacancy data
  const currentVacancies = [
    {
      title: "Senior Car Mechanic",
      department: "Service",
      experience: "5+ years",
      location: "New York"
    },
    {
      title: "Automotive Sales Executive",
      department: "Sales",
      experience: "3+ years",
      location: "Los Angeles"
    }
  ];

  const previousVacancies = [
    {
      title: "Junior Mechanic Training Program",
      period: "Jan 2024",
      pdfUrl: "/sample.pdf"
    },
    {
      title: "Customer Service Representative",
      period: "Dec 2023",
      pdfUrl: "/sample.pdf"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
        <Navbar1/>
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
        <div className="max-w-7xl mx-auto">
          {/* Contact Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600">We'd love to hear from you. Let us know how we can help.</p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
              <Mail className="h-6 w-6 text-orange-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                <p className="text-gray-600">contact@revamp.com</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
              <Phone className="h-6 w-6 text-orange-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-orange-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                <p className="text-gray-600">123 Automotive Ave, CA</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-6 items-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
  <Footer/>
    </div>
  );
};

export default Contact;