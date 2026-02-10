import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectData';
import ProjectsMarquee from './ProjectsMarquee';
/* -------------------- Project Card -------------------- */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />

        {/* Category */}
        <div className="absolute top-5 left-5 z-20">
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 rounded-full tracking-wide uppercase">
            {project.clientCategory}
          </span>
        </div>

        {/* Status */}
        <div className="absolute bottom-5 right-5 z-20">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-xs font-medium text-white rounded-lg border border-white/10">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <div className="pr-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-deepBlue-600 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              {project.year}
            </p>
          </div>

          {/* Action Icon */}
          <div className="shrink-0 p-3 rounded-full bg-slate-50 text-slate-400 group-hover:bg-deepBlue-600 group-hover:text-white transition-all duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>

        {/* Specs */}
        <div className="mt-auto pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
              Tonnage
            </p>
            <p className="text-base font-semibold text-deepBlue-600">
              {project.tonnage}
            </p>
          </div>

          <div className="border-l border-slate-100 pl-4">
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
              Material
            </p>
            <p className="text-base font-semibold text-slate-800 line-clamp-1">
              {project.material}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------- Projects Section -------------------- */
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage =
    window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= projectsData.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? projectsData.length - itemsPerPage
        : prev - itemsPerPage
    );
  };

  const visibleProjects = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex + i) % projectsData.length;
    visibleProjects.push(projectsData[index]);
  }

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Selected <span className="text-deepBlue-600">Work</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Engineering excellence in every beam and bolt. Explore our
              portfolio of large-scale structural fabrication.
            </p>
          </motion.div>

          {/* Desktop Controls */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-deepBlue-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-deepBlue-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden justify-center items-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-sm font-semibold text-slate-500">
            {currentIndex + 1} / {projectsData.length}
          </span>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-deepBlue-600 font-bold hover:text-deepBlue-800 transition-colors"
          >
            Start Your Project <ArrowUpRight size={18} />
          </a>
        </div>
        <ProjectsMarquee/>
      </div>
    </section>
  );
};

export default Projects;
