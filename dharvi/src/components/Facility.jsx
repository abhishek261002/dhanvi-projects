import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Zap, 
  Wrench, 
  CheckCircle2, 
  Award, 
  Microscope, 
  Users 
} from 'lucide-react';
// Assuming your icons are stored in the data or you'll use these defaults
import { facilitiesData, servicesData } from '../data/projectData';

/**
 * Enhanced Facility Card with interactive hover and bottom accent
 */
const FacilityCard = ({ facility, index }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-blue-500 transition-colors duration-300 flex flex-col items-start overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Background Decorative Circle */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-0" />

      {/* Icon Container */}
      <div className="relative z-10 w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {/* If your facility.icon is a string (emoji), wrap it in a span. 
            If it's a Lucide component, it will render directly. */}
        <div className="w-8 h-8 flex items-center justify-center">
          {facility.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
        {facility.name}
      </h3>

      {/* Capacity Tag */}
      <div className="relative z-10 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
        {facility.capacity}
      </div>

      {/* Description */}
      <p className="relative z-10 text-slate-600 text-sm leading-relaxed">
        {facility.description}
      </p>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

/**
 * Refined Service Card with checkmark and subtle gradients
 */
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
          <CheckCircle2 className="w-5 h-5 text-orange-600" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-slate-900 mb-1">{service.name}</h4>
          <p className="text-slate-500 text-sm leading-snug">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Facility = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section id="facility" className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Engineered for Excellence</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              State-of-the-Art <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Facilities</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our advanced manufacturing hubs are equipped with industry-leading 
              technology to ensure precision, uncompromising quality, and rapid delivery.
            </p>
          </motion.div>

          {/* Facilities Grid */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <Settings className="text-blue-600 w-6 h-6 animate-spin-slow" />
              <h3 className="text-2xl font-bold text-slate-900">Advanced Equipment</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilitiesData.map((facility, index) => (
                <FacilityCard key={facility.id} facility={facility} index={index} />
              ))}
            </div>
          </div>

          {/* Section Divider with Icon */}
          <div className="relative my-24 border-t border-slate-200">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-4 text-slate-400">
              <Zap className="w-5 h-5" />
            </div>
          </div>

          {/* Services Section */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Wrench className="text-orange-600 w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-900 text-center md:text-left">Value Added Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* Quality Assurance Section */}
          <motion.div
            className="mt-24 relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-slate-900 opacity-95">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700/50 p-8 md:p-16">
              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <div className="bg-blue-500/10 p-4 rounded-full mb-6">
                  <Award className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-white">ISO 9001:2015</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Certified quality management systems ensuring consistent excellence in every component we deliver.
                </p>
              </div>

              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <div className="bg-blue-500/10 p-4 rounded-full mb-6">
                  <Microscope className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-white">Advanced Metrology</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Laser scanning and 3D coordinate measurement for strict adherence to your critical tolerances.
                </p>
              </div>

              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <div className="bg-blue-500/10 p-4 rounded-full mb-6">
                  <Users className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-white">Expert Engineering</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Over 50 years of collective experience in mechanical engineering and high-end fabrication.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS for the slow spin animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Facility;