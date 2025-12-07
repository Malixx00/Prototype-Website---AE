import React from 'react';
import { Sun, BatteryCharging, Wind, ThermometerSun, Zap, Check } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'solar',
    title: 'Solar Panels',
    description: 'Custom designed solar systems tailored to your roof size, shape, and orientation.',
    icon: Sun,
    features: [
        'Custom Design & Install',
        'Top Brands (Jinko, Canadian)',
        'Detailed Savings Estimates',
        'Rooftop Racking Systems'
    ]
  },
  {
    id: 'batteries',
    title: 'Battery Storage',
    description: 'Store your excess solar energy for use at night. Ask about the government battery rebate (~30% savings).',
    icon: BatteryCharging,
    features: [
        'Goodwe Linx Batteries',
        'Sig Energy Systems',
        'Energy Independence',
        'Emergency Backup Power'
    ]
  },
  {
    id: 'hotwater',
    title: 'Hot Water Heat Pumps',
    description: 'Efficient iStore Hot Water Heat Pumps that run on your solar power, drastically reducing running costs.',
    icon: ThermometerSun,
    features: [
        'iStore Technology',
        'Low Running Costs',
        'Solar Compatible',
        'Eco-Friendly Heating'
    ]
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    description: 'Split system air conditioning installation to keep your home comfortable year-round efficiently.',
    icon: Wind,
    features: [
        'Split Systems',
        'Heating & Cooling',
        'Energy Efficient Models',
        'Professional Installation'
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From generation to storage and efficient usage, Ashcroft Electrical provides a complete energy solution for your home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[80px]">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={16} className="text-primary-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-secondary-700 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        <Zap className="text-yellow-400" />
                        Government Incentives Available
                    </h3>
                    <p className="text-secondary-100 max-w-xl">
                        New government battery rebates can save you around <span className="font-bold text-white">30% of your up-front cost</span>. 
                        Contact us to check your eligibility for solar and battery rebates.
                    </p>
                </div>
                <a href="#contact" className="bg-white text-secondary-900 hover:bg-secondary-50 px-8 py-3 rounded-full font-bold transition-colors whitespace-nowrap">
                    Check Eligibility
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};