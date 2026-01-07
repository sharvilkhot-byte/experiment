
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ADVENTURE', path: '/game' },
    { name: 'EXPLORE', path: '/locations' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-duo-dark border-b-2 border-duo-border dark:border-gray-800 px-4 py-3 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-duo-green rounded-xl flex items-center justify-center shadow-duo-green">
            <span className="text-white text-2xl font-black">V</span>
          </div>
          <span className="text-2xl font-black text-duo-green tracking-tight">VoyaGo</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-black tracking-widest transition-colors ${
                location.pathname === item.path
                  ? 'text-duo-blue'
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl border-2 border-duo-border dark:border-gray-700 shadow-duo-white dark:shadow-duo-dark press-effect bg-gray-50 dark:bg-gray-800"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <Link
            to="/"
            className="px-6 py-2 bg-duo-blue text-white font-black text-sm rounded-xl shadow-duo-blue press-effect"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
