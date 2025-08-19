import React from 'react';
import HeroSection from '../components/HeroSection';
import { Check, Truck, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Welcome to TestNet: Seamless Deployment"
        description="Experience the future of web hosting with our integrated Netlify-GitHub flow, mirroring the efficiency and scalability of Vercel."
        imageSrc="/images/hero-home.svg"
        ctaText="Explore Our Services"
        ctaLink="/services"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Why Choose TestNet?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At TestNet, we're not just hosting websites; we're demonstrating a paradigm shift in web deployment. Our platform is built to showcase the power and simplicity of a Netlify-GitHub workflow, ensuring your projects are always live, fast, and secure.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Check size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-secondary mb-2">Automated Workflow</h3>
            <p className="text-gray-600">
              Push to GitHub, deploy to Netlify. Our system exemplifies a fully automated CI/CD pipeline for instant updates.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Truck size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-secondary mb-2">Blazing Fast Delivery</h3>
            <p className="text-gray-600">
              Leverage global CDN for lightning-fast content delivery, ensuring optimal performance worldwide.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Globe size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-secondary mb-2">Scalable & Reliable</h3>
            <p className="text-gray-600">
              Built on robust infrastructure, our test environment demonstrates scalable and highly reliable hosting.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to See It in Action?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Dive deeper into how TestNet can simplify your deployment process and elevate your web projects.
          </p>
          <Button variant="primary" onClick={() => window.location.href = '/contact'}>
            Get Started Today
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Home;