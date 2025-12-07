import React from 'react';
import { ClipboardCheck, PenTool, Wrench, Headphones } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Consultation",
      desc: "We analyze your electricity usage, roof size, and environmental goals."
    },
    {
      icon: PenTool,
      title: "Custom Design",
      desc: "We design a system maximizing solar exposure using top-tier components."
    },
    {
      icon: Wrench,
      title: "Installation",
      desc: "Our licensed electricians install your system with minimal disruption."
    },
    {
      icon: Headphones,
      title: "Support",
      desc: "Ongoing local service to ensure your system performs for decades."
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">How it works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Your Solar Journey Made Easy</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-white shadow-lg rounded-full flex items-center justify-center text-primary-600 mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};