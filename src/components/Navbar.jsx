import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLinkClasses = 'text-accent border-b-2 border-accent';
  const defaultLinkClasses = 'text-white hover:text-accent transition-colors duration-200';

  return (
    <nav className="bg-primary p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold">
          TestNet
        </NavLink>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                twMerge(defaultLinkClasses, isActive ? activeLinkClasses : '')
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary absolute top-full left-0 w-full shadow-lg pb-4">
          <div className="flex flex-col items-center space-y-4 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  twMerge(defaultLinkClasses, 'text-xl', isActive ? activeLinkClasses : '')
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;