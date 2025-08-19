import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { Check, Truck, Globe, CreditCard, Package, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Check size={48} className="text-accent mb-4" />,
      title: 'Automated CI/CD',
      description: 'Experience instant deployments with every Git push, showcasing a true continuous integration and delivery pipeline.',
    },
    {
      icon: <Truck size={48} className="text-accent mb-4" />,
      title: 'Global CDN Network',
      description: 'Deliver your content at lightning speed worldwide, ensuring low latency and high availability for all users.',
    },
    {
      icon: <Globe size={48} className="text-accent mb-4" />,
      title: 'Scalable Hosting',
      description: 'Our infrastructure demonstrates auto-scaling capabilities, handling traffic spikes effortlessly without manual intervention.',
    },
    {
      icon: <CreditCard size={48} className="text-accent mb-4" />,
      title: 'SSL & Security',
      description: 'Built-in HTTPS and robust security features ensure your deployed applications are always secure and trusted.',
    },
    {
      icon: <Package size={48} className="text-accent mb-4" />,
      title: 'Atomic Deploys',
      description: 'Ensure zero downtime with atomic deploys, where new versions are swapped instantly and seamlessly.',
    },
    {
      icon: <Users size={48} className="text-accent mb-4" />,
      title: 'Collaborative Workflows',
      description: 'Designed for teams, our setup facilitates smooth collaboration and version control through GitHub integration.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Our Core Offerings"
        description="Discover the robust capabilities engineered to showcase seamless integration and powerful performance."
        imageSrc="/images/hero-services.svg"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">Deployment Excellence</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Each service is a testament to the efficiency and reliability of our Netlify-GitHub deployment model. We highlight features that make modern web development a breeze.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              {service.icon}
              <h3 className="text-2xl font-semibold text-secondary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Services;