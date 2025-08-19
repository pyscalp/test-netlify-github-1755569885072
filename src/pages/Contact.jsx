import React from 'react';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Get in Touch with TestNet"
        description="Have questions or want to learn more about our innovative deployment solutions? Reach out to us."
        imageSrc="/images/hero-contact.svg"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">We're Here to Help</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you're curious about our Netlify-GitHub workflow or need assistance, our team is ready to provide insights and support.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold text-secondary mb-6">Contact Information</h3>
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-center gap-4">
                <Mail size={28} className="text-accent" />
                <div>
                  <span className="font-semibold">Email Us:</span><br />
                  <a href="mailto:info@testnet.com" className="hover:text-primary transition-colors duration-200">info@testnet.com</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={28} className="text-accent" />
                <div>
                  <span className="font-semibold">Call Us:</span><br />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors duration-200">+1 (234) 567-890</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <MapPin size={28} className="text-accent" />
                <div>
                  <span className="font-semibold">Visit Us:</span><br />
                  <span>123 Deployment Way, Cloud City, CA 90210</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={28} className="text-accent" />
                <div>
                  <span className="font-semibold">Business Hours:</span><br />
                  <span>Mon - Fri: 9:00 AM - 5:00 PM (PST)</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold text-secondary mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;