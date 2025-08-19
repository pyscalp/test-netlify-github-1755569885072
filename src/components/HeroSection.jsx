import React from 'react';
import Button from './Button';

const HeroSection = ({ title, description, imageSrc, ctaText, ctaLink }) => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
      <img
        src={imageSrc}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          {description}
        </p>
        {ctaText && ctaLink && (
          <Button variant="accent" onClick={() => window.location.href = ctaLink}>
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;