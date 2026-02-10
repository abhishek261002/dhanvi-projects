import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-24 text-white overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
          className="w-full h-full object-cover"
          alt="Infrastructure"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      <motion.div
        className="max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          DHANVI PROJECTS
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-3xl uppercase tracking-[0.25em] text-white/80 mb-4"
        >
          An Infrastructure Company
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-white/70 mb-12 tracking-wide"
        >
          QUALITY <span className="mx-2 text-safetyOrange">–</span>
          PLANNING <span className="mx-2 text-safetyOrange">–</span>
          EXECUTION
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <button
            onClick={scrollToProjects}
            className="bg-white text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-safetyOrange transition"
          >
            View Projects
          </button>
          <a
            href="#contact"
            className="border-2 border-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition"
          >
            Request Quote
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/20"
        >
          {[
            ['10+', 'Years Experience'],
            ['50+', 'Projects Completed'],
            ['20000+', 'MT Fabricated'],
            ['100%', 'On-Time Delivery'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-bold text-white">{value}</p>
              <p className="text-sm uppercase tracking-widest text-white/60">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
