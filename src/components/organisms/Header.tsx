'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home Food', href: '/' },
    { name: 'Ingredients', href: '/ingredients' },
    { name: 'Local Culinary', href: '/local-culinary' },
  ];

  // Logic to determine if navbar should be in floating state
  const shouldFloat = isScrolled && !isMenuOpen;

  return (
    <>
      {/* 1. Mobile Menu Overlay (Outside of header for glitch-free animation) */}
      <div 
        className={`fixed inset-0 bg-white/98 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-4xl font-black transition-all duration-300 hover:scale-110 ${
                  isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="mt-16 w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      {/* 2. Main Navbar Container */}
      <div 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          shouldFloat ? 'top-6 px-4 md:px-8' : 'top-0 px-0'
        }`}
      >
        <header 
          className={`mx-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 md:px-12 relative ${
            shouldFloat 
              ? 'max-w-4xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full h-16 ring-1 ring-black/5' 
              : 'max-w-full bg-white border-b border-gray-100 rounded-none h-20 shadow-none'
          }`}
        >
          <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter hover:scale-105 transition-transform flex-shrink-0">
            mealapp<span className="text-gray-900">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.2em] font-black transition-all duration-300 relative group ${
                    isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Burger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-[60]"
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 w-6 bg-gray-900 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-gray-900 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-gray-900 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </header>
      </div>
    </>
  );
};
