import React, { useState } from 'react';
import { Menu, X, Sun, Phone } from 'lucide-react';
import { NavItem, PageView } from '../types';

interface HeaderProps {
  onNavigate: (view: PageView) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Process', href: '#process' },
];

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === '#home') {
      onNavigate(PageView.HOME);
      window.scrollTo(0, 0);
    } else {
      onNavigate(PageView.HOME);
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNavClick('#home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center text-white">
              <Sun size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">Ashcroft Electrical</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">SOLAR & AIR CONDITIONING</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:0421282727"
              className="flex items-center gap-2 text-slate-600 hover:text-primary-600 font-medium"
            >
              <Phone size={18} />
              <span>0421 282 727</span>
            </a>
            <button 
              onClick={() => handleNavClick('#contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3 px-3">
               <a 
                href="tel:0421282727"
                className="flex items-center gap-2 text-slate-700 font-semibold"
              >
                <Phone size={18} />
                Call 0421 282 727
              </a>
              <button 
                onClick={() => handleNavClick('#contact')}
                className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};