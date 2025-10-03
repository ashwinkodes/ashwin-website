import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          Ashwin Kaushik
        </Link>
        <div className="flex gap-6">
          <Link
            to="/"
            onClick={handleHomeClick}
            className={`text-white hover:text-blue-400 transition-colors ${isActive('/') ? 'text-blue-400' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white hover:text-blue-400 transition-colors ${isActive('/about') || location.pathname.startsWith('/about/') ? 'text-blue-400' : ''}`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`text-white hover:text-blue-400 transition-colors ${isActive('/projects') ? 'text-blue-400' : ''}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`text-white hover:text-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-400' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
