import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gold/30 py-4 px-4 sm:px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.postimg.cc/cCDqhQZq/LEDOME.png"
              alt="Le Dôme"
              className="h-16 md:h-28 object-contain mix-blend-screen brightness-200 contrast-200 hover:brightness-150 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-gold hover:text-gold/80 transition text-base uppercase tracking-wider">Accueil</Link>
            <Link to="/menu" className="nav-link text-gold hover:text-gold/80 transition text-base uppercase tracking-wider">Menu</Link>
            <Link to="/blog" className="nav-link text-gold hover:text-gold/80 transition text-base uppercase tracking-wider">Blog</Link>
            <Link to="/contact" className="nav-link text-gold hover:text-gold/80 transition text-base uppercase tracking-wider">Nous Contacter</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="https://web.facebook.com/Ledomekenitra" target="_blank" rel="noopener noreferrer" className="social-icon text-gold hover:text-gold/80 transition">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/le_dome_kenitra/" target="_blank" rel="noopener noreferrer" className="social-icon text-gold hover:text-gold/80 transition">
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="button-hover md:hidden text-gold hover:text-gold/80 transition p-2 rounded-full"
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="nav-link text-gold hover:text-gold/80 transition text-sm uppercase tracking-wider"
              >
                Accueil
              </Link>
              <Link
                to="/menu"
                onClick={() => setIsOpen(false)}
                className="nav-link text-gold hover:text-gold/80 transition text-sm uppercase tracking-wider"
              >
                Menu
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="nav-link text-gold hover:text-gold/80 transition text-sm uppercase tracking-wider"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="nav-link text-gold hover:text-gold/80 transition text-sm uppercase tracking-wider"
              >
                Nous Contacter
              </Link>
              <div className="flex space-x-6 pt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon text-gold hover:text-gold/80 transition">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon text-gold hover:text-gold/80 transition">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;