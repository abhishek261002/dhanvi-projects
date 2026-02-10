import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { companyInfo } from '../data/projectData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Facility', href: '#facility' },
    { label: 'About Us', href: '#about' },
  ];

  const services = [
    'Structural Steel Fabrication',
    'Custom Truss Design',
    'Pipe & Tube Work',
    'Surface Treatment',
    'CAD Design & Drafting',
    'Quality Assurance',
  ];

  return (
    <footer className="bg-steel-900 text-steel-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Dhanvi</span>
              <span className="text-safetyOrange"> Projects</span>
            </h3>
            <p className="text-steel-300 mb-6 text-sm">
              End-to-End Solution for Infrastructure Structural Fabrication. Building India's future with precision and excellence.
            </p>
            <p className="text-steel-400 text-sm">
              <strong>Est:</strong> {companyInfo.yearEstablished}
            </p>
            <p className="text-steel-400 text-sm mt-2">
              <strong>Director:</strong> {companyInfo.director}
            </p>
            <p className="text-steel-400 text-sm">
              <strong>{companyInfo.directorQualification}</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-steel-300 hover:text-safetyOrange transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 3).map((service) => (
                <li key={service} className="text-steel-300 text-sm">
                  ✓ {service}
                </li>
              ))}
              <li className="text-steel-400 text-sm mt-2 italic">+ and more...</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-3 text-steel-300 hover:text-safetyOrange transition-colors text-sm group"
              >
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span className="break-all">{companyInfo.email}</span>
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-3 text-steel-300 hover:text-safetyOrange transition-colors text-sm"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-steel-300 text-sm pt-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="px-4 py-8 border-t border-steel-700">
          <div className="max-w-md mx-auto md:mx-0">
            <h4 className="text-white font-bold mb-3">Get Project Updates</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-steel-800 text-white placeholder-steel-500 focus:outline-none focus:ring-2 focus:ring-safetyOrange text-sm"
              />
              <button
                type="submit"
                className="bg-safetyOrange text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
            <p className="text-steel-400 text-xs mt-2">We'll send you updates about our latest projects and services.</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="px-4 py-8 border-t border-steel-700 flex justify-center gap-6">
          <a
            href="#"
            className="text-steel-300 hover:text-safetyOrange transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="text-steel-300 hover:text-safetyOrange transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="text-steel-300 hover:text-safetyOrange transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Bottom Footer */}
        <div className="px-4 py-6 border-t border-steel-700 bg-steel-950 rounded-t-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-steel-400 text-sm">
              &copy; {currentYear} Dhanvi Projects. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-steel-400 hover:text-safetyOrange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-steel-400 hover:text-safetyOrange transition-colors">
                Terms & Conditions
              </a>
              <a href="#contact" className="text-steel-400 hover:text-safetyOrange transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
