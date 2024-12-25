import React from 'react';


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
        <div className="flex-shrink-0 bg-slate-200 p-2 m-4 rounded-md">
        <p className="p-3 text-4xl font-semibold">
          <span className="text-orange-600">Rev</span>
          <span className="text-black">amp</span>
        </p>
      </div>
          <p className="text-sm">
            © 2024 Revamp. All rights reserved. <br />
            Empowering the future with innovative solutions.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First List */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Second List */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-400">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Third List */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-400">
                  Consulting
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-orange-400">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Design
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 border-t border-gray-700 pt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: revamp011@gmail.com</p>
            <p className="mb-2">Phone: +91 234 567 890</p>
            <p>Address: Tirur,Malappuram</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 md:justify-end">
            <a
              href="#"
              className="hover:text-orange-400"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-orange-400"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-orange-400"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
