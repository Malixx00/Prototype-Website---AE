import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Ashcroft Electrical</h5>
            <p className="text-sm leading-relaxed">
              Your local solar and battery experts in Bendigo. providing clean, affordable electricity solutions for homes and businesses.
            </p>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => { onNavigate(PageView.HOME); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => { onNavigate(PageView.HOME); setTimeout(() => document.getElementById('services')?.scrollIntoView(), 100); }} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => { onNavigate(PageView.HOME); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => { onNavigate(PageView.PRIVACY); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => { onNavigate(PageView.TERMS); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Terms & Conditions</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Ashcroft Electrical. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Bendigo & District</p>
        </div>
      </div>
    </footer>
  );
};