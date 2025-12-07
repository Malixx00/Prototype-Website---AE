import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Solar',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', service: 'Solar', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Solar Journey</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Contact us today to discuss how we can help with your solar installations. We verify your roof size, shape, orientation, and current usage to provide the perfect solution.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Call Glenn</p>
                  <a href="tel:0421282727" className="text-xl font-bold hover:text-primary-400">0421 282 727</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email Us</p>
                  <a href="mailto:glenn@ashcroftelectrical.com" className="text-xl font-bold hover:text-primary-400 break-all">glenn@ashcroftelectrical.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Service Area</p>
                  <p className="text-xl font-bold">Bendigo and District</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-800 rounded-xl border border-slate-700">
               <h4 className="font-bold mb-2 text-primary-400">Did you know?</h4>
               <p className="text-slate-300 text-sm">
                 Amounts generated in excess of your usage are fed automatically back into the grid, becoming available for use by others—and you get credit for this!
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="0400 000 000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Interested In</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="Solar">Solar Panels</option>
                  <option value="Battery">Battery Storage</option>
                  <option value="Hot Water">Hot Water Heat Pump</option>
                  <option value="AC">Air Conditioning</option>
                  <option value="Combo">Full Combo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                <textarea 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your home or business needs..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                Send Request
                <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};