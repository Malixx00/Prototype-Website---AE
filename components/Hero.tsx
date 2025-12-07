import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Solar Panels Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Serving Bendigo & District
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Power Your Home with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Clean Energy</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Local, established electricians specializing in Solar, Batteries, and Hot Water Heat Pumps. 
            Protect yourself against rising electricity prices and offset carbon emissions today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Request Free Quote
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              View Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary-600"/> Interest Free Finance</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary-600"/> Licensed Electricians</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary-600"/> Gov Rebates Available</span>
          </div>
        </div>

        <div className="flex-1 relative">
           <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://www.solarbendigo.com/data1/images/2.jpg" 
               alt="Rooftop Solar Installation" 
               className="w-full h-auto object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <p className="font-bold text-lg">Quality Installation</p>
                <p className="text-sm opacity-90">Using trusted brands like Jinko & Canadian Solar</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};