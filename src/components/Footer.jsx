import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">TestNet</h3>
          <p className="text-sm opacity-90">
            Pioneering seamless deployment with Netlify and GitHub.
            Experience the future of web hosting.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-accent transition-colors duration-200">Home</a></li>
            <li><a href="/about" className="hover:text-accent transition-colors duration-200">About Us</a></li>
            <li><a href="/services" className="hover:text-accent transition-colors duration-200">Services</a></li>
            <li><a href="/gallery" className="hover:text-accent transition-colors duration-200">Gallery</a></li>
            <li><a href="/contact" className="hover:text-accent transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:info@testnet.com" className="hover:text-accent transition-colors duration-200">info@testnet.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+1234567890" className="hover:text-accent transition-colors duration-200">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              <span>123 Deployment Way, Cloud City, CA 90210</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={18} />
              <span>Global Reach</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-indigo-600 mt-8 pt-6 text-center text-sm opacity-80">
        &copy; {new Date().getFullYear()} TestNet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;