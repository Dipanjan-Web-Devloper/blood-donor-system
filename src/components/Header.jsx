import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="gradient-bg text-white shadow-lg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 blood-drop">
          <Heart className="w-full h-full" />
        </div>
        <div className="absolute top-8 right-8 w-12 h-12 blood-drop">
          <Heart className="w-full h-full" />
        </div>
        <div className="absolute bottom-4 left-1/3 w-8 h-8 blood-drop">
          <Heart className="w-full h-full" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="pulse-red rounded-full p-2">
              <Heart className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Blood Help Online</h1>
              <p className="text-red-100 text-sm">World's Largest Voluntary Blood Donors Database</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-red-200 transition-all duration-300 flex items-center space-x-1 hover-lift px-3 py-2 rounded-lg hover:bg-white/10">
              <Search className="h-4 w-4" />
              <span>Find Donors</span>
            </Link>
            <Link to="/register" className="hover:text-red-200 transition-all duration-300 flex items-center space-x-1 hover-lift px-3 py-2 rounded-lg hover:bg-white/10">
              <Users className="h-4 w-4" />
              <span>Register as Donor</span>
            </Link>
            <Link to="/request" className="hover:text-red-200 transition-all duration-300 flex items-center space-x-1 hover-lift px-3 py-2 rounded-lg hover:bg-white/10">
              <Heart className="h-4 w-4" />
              <span>Request Blood</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-48 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className="hover:text-red-200 transition-all duration-300 flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-4 w-4" />
              <span>Find Donors</span>
            </Link>
            <Link 
              to="/register" 
              className="hover:text-red-200 transition-all duration-300 flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="h-4 w-4" />
              <span>Register as Donor</span>
            </Link>
            <Link 
              to="/request" 
              className="hover:text-red-200 transition-all duration-300 flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="h-4 w-4" />
              <span>Request Blood</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

