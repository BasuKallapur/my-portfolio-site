import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-12">
      {/* Soft gradient fade separator above the footer */}
      <div className="absolute -top-8 left-0 right-0 h-8 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <div className="w-full h-full bg-gradient-to-b from-black/30 to-transparent dark:from-black/60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Basavaraj Kallapur</h3>
            <p className="text-gray-400 leading-relaxed">
              Gen AI Developer & Software Engineer passionate about building intelligent systems
              and solving complex problems through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:basukallapur00@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} className="mr-2" />
                basukallapur00@gmail.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/BasuKallapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/basavarajkallapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Basavaraj Kallapur. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 sm:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;