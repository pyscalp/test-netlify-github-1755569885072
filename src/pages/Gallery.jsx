import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { Image } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      image: '/images/product-1.svg',
      title: 'Project Alpha',
      description: 'A conceptual design showcasing rapid deployment.',
    },
    {
      image: '/images/product-2.svg',
      title: 'Flow Beta',
      description: 'Illustrating a smooth CI/CD pipeline.',
    },
    {
      image: '/images/product-3.svg',
      title: 'System Gamma',
      description: 'Visualizing scalable architecture.',
    },
    {
      image: '/images/product-4.svg',
      title: 'Integration Delta',
      description: 'Depicting seamless platform integration.',
    },
    {
      image: '/images/product-5.svg',
      title: 'Security Echo',
      description: 'Representing robust security protocols.',
    },
    {
      image: '/images/product-6.svg',
      title: 'Performance Zeta',
      description: 'Symbolizing optimized content delivery.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Showcase of Excellence"
        description="Witness the visual representation of our commitment to modern web development and efficient deployment."
        imageSrc="/images/hero-gallery.svg"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Deployed Creations</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our gallery features conceptual designs and mockups, all deployed with the efficiency of our Netlify-GitHub pipeline. Each piece represents a facet of modern web capabilities.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index}>
              <img src={item.image} alt={item.title} className="w-full h-48 object-contain mb-4 rounded-md" />
              <h3 className="text-2xl font-semibold text-secondary mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Gallery;