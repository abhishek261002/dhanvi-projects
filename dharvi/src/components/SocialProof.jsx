import { motion } from 'framer-motion';
import { clientsData } from '../data/projectData';
import { Award, TrendingUp, Users, Zap } from 'lucide-react';

const ClientLogo = ({ client, index }) => {
  return (
    <motion.div
      className="flex items-center justify-center h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl">{client.logo}</div>
      <span className="ml-3 font-semibold text-steel-900 hidden sm:inline">{client.name}</span>
    </motion.div>
  );
};

const TrustCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-lg border border-steel-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-safetyOrange/20 to-deepBlue-600/20 flex items-center justify-center mb-4">
        <Icon className="text-safetyOrange" size={28} />
      </div>
      <h3 className="text-xl font-bold text-steel-900 mb-3">{title}</h3>
      <p className="text-steel-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const SocialProof = () => {
  const trustMetrics = [
    {
      icon: TrendingUp,
      title: 'Industry Leader',
      description: 'Over a decade of expertise in structural steel fabrication for India\'s most critical infrastructure projects.',
    },
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'ISO certified processes ensuring consistent quality and adherence to international standards.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced engineers and technicians with Masters degrees and specialized certifications.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: '100% on-time project completion with zero compromise on quality or safety standards.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
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
            Trusted by <span className="text-deepBlue-600">Major Organizations</span>
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            We've earned the confidence of India's most demanding clients with consistently exceptional results.
          </p>
        </motion.div>

        {/* Client Logos - Marquee */}
        <div className="mb-20 overflow-hidden bg-steel-50 rounded-xl py-8">
          <div className="marquee flex gap-8 px-4">
            {[...clientsData, ...clientsData].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-40">
                <ClientLogo client={client} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Cards */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-steel-900 mb-10 text-center">Why Clients Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustMetrics.map((metric, index) => (
              <TrustCard
                key={index}
                icon={metric.icon}
                title={metric.title}
                description={metric.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Highlight Box - Tata Memorial */}
        <motion.div
          className="bg-gradient-to-r from-safetyOrange/10 to-deepBlue-600/10 rounded-xl p-8 md:p-12 border-2 border-safetyOrange"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-steel-900 mb-4">
                🏥 Tata Memorial Hospital Extension
              </h3>
              <p className="text-steel-700 mb-4 text-lg">
                Successful completion of structural fabrication for India's premier cancer research hospital.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-steel-700">
                  <span className="w-3 h-3 bg-safetyOrange rounded-full mr-3"></span>
                  <strong>1,200 MT</strong> of structural steel fabricated
                </li>
                <li className="flex items-center text-steel-700">
                  <span className="w-3 h-3 bg-safetyOrange rounded-full mr-3"></span>
                  <strong>On-Time Completion</strong> with quality assurance certificate
                </li>
                <li className="flex items-center text-steel-700">
                  <span className="w-3 h-3 bg-safetyOrange rounded-full mr-3"></span>
                  <strong>Zero defects</strong> at inspection and commissioning
                </li>
                <li className="flex items-center text-steel-700">
                  <span className="w-3 h-3 bg-safetyOrange rounded-full mr-3"></span>
                  <strong>Premium finishes</strong> meeting hospital standards
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-safetyOrange">
                <div className="text-6xl mb-4">✓</div>
                <h4 className="text-2xl font-bold text-steel-900 mb-2">Quality Certificate</h4>
                <p className="text-steel-700 text-sm mb-4">
                  Certified on-time completion and quality assurance from Tata Memorial Hospital.
                </p>
                <div className="bg-safetyOrange text-white rounded p-3">
                  <p className="font-semibold">Project Status: ✅ COMPLETED</p>
                  <p className="text-sm">Year: 2023</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-deepBlue-600 mb-2">50+</p>
            <p className="text-steel-600 font-semibold">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-deepBlue-600 mb-2">20,000+</p>
            <p className="text-steel-600 font-semibold">MT Fabricated</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-deepBlue-600 mb-2">100%</p>
            <p className="text-steel-600 font-semibold">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-deepBlue-600 mb-2">10+</p>
            <p className="text-steel-600 font-semibold">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
