import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'WORK', path: '/work' },
    { name: 'PRACTICE', path: '/practice' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gallery-100/95 backdrop-blur-sm border-b border-gallery-300/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Editorial Masthead */}
        <Link 
          to="/" 
          className="group flex flex-col items-start focus:outline-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="font-editorial text-2xl sm:text-3xl tracking-tight text-gallery-900 group-hover:text-terracotta transition-colors">
            JYOTSANA PATHAK
          </span>
          <span className="text-[10px] sm:text-2xs uppercase tracking-widest-editorial text-gallery-600 font-medium">
            Visual Artist — Mumbai
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-xs tracking-widest-editorial font-medium uppercase transition-colors relative py-1 ${
                  isActive
                    ? 'text-gallery-900 font-semibold'
                    : 'text-gallery-600 hover:text-gallery-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-terracotta transition-all" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gallery-900 focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span
              className={`w-full h-[1.5px] bg-gallery-900 transition-transform duration-300 origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-gallery-900 transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-gallery-900 transition-transform duration-300 origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gallery-300 bg-gallery-100 px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm tracking-widest-editorial font-medium uppercase py-1 ${
                    isActive ? 'text-terracotta font-semibold' : 'text-gallery-800'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="pt-4 border-t border-gallery-300 flex justify-between text-2xs uppercase tracking-widest text-gallery-600">
            <span>Mumbai, India</span>
            <span>B.V.A. Fine Arts</span>
          </div>
        </div>
      )}
    </header>
  );
}

