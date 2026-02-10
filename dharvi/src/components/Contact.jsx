import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../data/projectData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-4">
            Get Your <span className="text-deepBlue-600">Project Quote</span>
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Tell us about your infrastructure project, and our team of experts will provide a
            detailed quote and timeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Email */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-safetyOrange/20 flex items-center justify-center">
                    <Mail className="text-safetyOrange" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Email</h3>
                </div>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-steel-600 hover:text-safetyOrange transition-colors ml-16"
                >
                  {companyInfo.email}
                </a>
                <p className="text-sm text-steel-500 ml-16 mt-1">Respond within 24 hours</p>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-deepBlue-600/20 flex items-center justify-center">
                    <Phone className="text-deepBlue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Phone</h3>
                </div>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-steel-600 hover:text-deepBlue-600 transition-colors ml-16"
                >
                  {companyInfo.phone}
                </a>
                <p className="text-sm text-steel-500 ml-16 mt-1">Available Monday to Friday</p>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-steel-600/20 flex items-center justify-center">
                    <MapPin className="text-steel-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900">Office</h3>
                </div>
                <p className="text-steel-600 ml-16">{companyInfo.address}</p>
                <p className="text-sm text-steel-500 ml-16 mt-1">
                  Facility tours available by appointment
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-12 bg-gradient-to-br from-deepBlue-50 to-steel-50 rounded-xl p-6 border border-deepBlue-100">
              <h4 className="text-lg font-bold text-steel-900 mb-3">Why Contact Us?</h4>
              <ul className="space-y-2 text-sm text-steel-700">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Expert technical consultation</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Competitive pricing & fast quotes</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Project timeline planning</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Dedicated project manager</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-steel-50 rounded-xl p-8 shadow-lg border border-steel-100"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-steel-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-steel-300 bg-white text-steel-900 focus:outline-none focus:border-deepBlue-600 focus:ring-2 focus:ring-deepBlue-600/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-steel-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-steel-300 bg-white text-steel-900 focus:outline-none focus:border-deepBlue-600 focus:ring-2 focus:ring-deepBlue-600/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-steel-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-steel-300 bg-white text-steel-900 focus:outline-none focus:border-deepBlue-600 focus:ring-2 focus:ring-deepBlue-600/20"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-steel-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-steel-300 bg-white text-steel-900 focus:outline-none focus:border-deepBlue-600 focus:ring-2 focus:ring-deepBlue-600/20"
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-steel-900 mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-steel-300 bg-white text-steel-900 focus:outline-none focus:border-deepBlue-600 focus:ring-2 focus:ring-deepBlue-600/20"
                >
                  <option value="">Select project type...</option>
                  <option value="structural">Structural Fabrication</option>
                  <option value="truss">Truss Design & Fabrication</option>
                  <option value="pipe">Pipe & Tube Work</option>
                  <option value="custom">Custom Project</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-steel-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-steel-300 bg-white text-steel-900 focus:outline-none focus:border-deepBlue-600 focus:ring-2 focus:ring-deepBlue-600/20 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and specifications..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-safetyOrange to-orange-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-75"
                >
                  {isSubmitted ? '✓ Message Sent Successfully!' : 'Get Your Quote Today'}
                </button>
                <p className="text-xs text-steel-500 mt-3 text-center">
                  We'll be in touch within 24 hours with your custom quote.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
