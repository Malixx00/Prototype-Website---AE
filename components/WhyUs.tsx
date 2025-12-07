import React from 'react';
import { ShieldCheck, PiggyBank, HeartHandshake, Leaf } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Ashcroft Electrical?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We aren't just a sales company; we are local, established electricians committed to the Bendigo district. When you buy from us, you get ongoing local service and support.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                    <ShieldCheck size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Local & Reliable</h4>
                  <p className="text-slate-600 text-sm">Thousands of homes in Victoria trust us. We take a personalized approach to every installation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-700">
                    <PiggyBank size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Financial Benefits</h4>
                  <p className="text-slate-600 text-sm">Save money on bills, access Interest Free Finance, and claim generous Government Rebates.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700">
                    <Leaf size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Environmental Impact</h4>
                  <p className="text-slate-600 text-sm">Offset harmful carbon emissions and generate your own clean, affordable electricity.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
               <img src="https://www.solarbendigo.com/files/Home%20Page/ashcroft_2.jpg" alt="Solar Panel" className="rounded-2xl shadow-lg mt-8" />
               <img src="https://www.solarbendigo.com/files/Home%20Page/ashcroft_1.jpg" alt="Installer" className="rounded-2xl shadow-lg mb-8" />
             </div>
             {/* Decorative badge */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl border border-slate-100 text-center">
                <p className="text-3xl font-bold text-primary-600">100%</p>
                <p className="text-xs font-bold text-slate-900 uppercase">Local Service</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};