import React from 'react';
import HeroSection from '../components/HeroSection';
import { Users, Building, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="About TestNet: Our Vision"
        description="Pioneering a new era of web deployment by showcasing the power of a streamlined Netlify-GitHub workflow."
        imageSrc="/images/hero-about.svg"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At TestNet, we are dedicated to demonstrating the ultimate efficiency and simplicity of modern web deployment. Our platform serves as a living example of how Netlify and GitHub can seamlessly integrate to provide a development experience that is both powerful and intuitive, much like the industry's leading solutions.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold text-secondary mb-4">The TestNet Philosophy</h3>
            <p className="text-gray-600 mb-4">
              We believe that deploying web applications should be a joy, not a chore. By focusing on the Netlify-GitHub synergy, we aim to highlight how continuous integration and continuous deployment (CI/CD) can be effortlessly achieved, reducing friction and accelerating development cycles.
            </p>
            <p className="text-gray-600">
              Our commitment is to provide a robust, scalable, and secure environment that reflects the best practices in modern web infrastructure. We're constantly refining our approach to ensure TestNet remains at the forefront of deployment innovation.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img src="/images/product-2.svg" alt="Philosophy Icon" className="w-64 h-64 object-contain" />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users size={48} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-secondary mb-2">Collaboration</h3>
              <p className="text-gray-600">Fostering a collaborative environment for seamless project integration.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Building size={48} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-secondary mb-2">Innovation</h3>
              <p className="text-gray-600">Continuously exploring new ways to optimize deployment workflows.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Star size={48} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-secondary mb-2">Reliability</h3>
              <p className="text-gray-600">Ensuring stable and consistent performance for all deployed projects.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;