import React from 'react';
import type { Project } from '../data/projects';
import { ArrowUpRight, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, index }) => {
  const isHeroCase = index === 0;
  const isReversed = index % 2 === 0 && !isHeroCase;

  // Render index 0 as a wide cinematic showcase
  if (isHeroCase) {
    return (
      <motion.article
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="group rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 lg:p-10 shadow-lg shadow-[var(--shadow-soft)] hover:border-[var(--accent-primary)] transition-all duration-300"
      >
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-[var(--border-color)] font-mono text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white bg-[var(--accent-primary)] px-2.5 py-1 rounded-lg">
              FEATURED CASE {project.number}
            </span>
            <span className="text-[var(--text-primary)] font-bold">{project.categoryLabel}</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified Live Deployment</span>
          </div>
        </div>

        {/* Cinematic Visual Frame */}
        <div 
          onClick={() => onOpenDetails(project)}
          className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] cursor-pointer group/frame mb-8 shadow-sm"
        >
          <img
            src={project.image}
            alt={`${project.title} live interface preview`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.03]"
            loading="lazy"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] opacity-0 group-hover/frame:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[var(--text-primary)] font-bold text-xs shadow-lg">
              <Eye className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Inspect Full Case Study</span>
            </span>
          </div>

          {/* Floating Pill on Image */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 dark:bg-[#1C1D1A]/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-md hidden sm:flex items-center gap-2 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="font-bold text-[var(--text-primary)]">₹250+ Cr Property Volume Supported</span>
          </div>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
          <div className="lg:col-span-8 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {project.fullDescription}
            </p>

            {/* Tag Pills */}
            <div className="pt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] font-semibold px-3 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-peach)]/60 text-[var(--text-primary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono text-xs">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold tracking-wider uppercase shadow-md shadow-[var(--accent-primary)]/20 transition-all duration-200"
            >
              <span>Visit Live Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenDetails(project)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold tracking-wider uppercase transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Read Case Dossier</span>
            </button>
          </div>
        </div>
      </motion.article>
    );
  }

  // Alternating split layout for subsequent projects
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-[var(--accent-primary)] transition-all duration-300"
    >
      {/* Top Specification Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 sm:mb-8 border-b border-[var(--border-color)] font-mono text-xs text-[var(--text-secondary)]">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-[var(--text-primary)] bg-[var(--bg-secondary)] px-2.5 py-1 rounded-lg">
            CASE {project.number}
          </span>
          <span className="text-[var(--text-primary)] font-bold">{project.categoryLabel}</span>
        </div>

        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Active Client Portal</span>
        </div>
      </div>

      {/* Alternating Grid */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Visual Frame */}
        <div 
          onClick={() => onOpenDetails(project)}
          className={`cursor-pointer overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] relative group/frame shadow-sm ${
            isReversed ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'
          }`}
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} live interface preview`}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.03]"
              loading="lazy"
            />
          </div>

          {/* Hover Hint */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover/frame:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[var(--text-primary)] font-mono text-xs font-bold shadow-md">
              <Eye className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Quick Inspect</span>
            </span>
          </div>
        </div>

        {/* Content Column */}
        <div className={`flex flex-col justify-between space-y-6 ${
          isReversed ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6'
        }`}>
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-primary)] transition-colors">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Key Highlights */}
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-2">
              <span className="font-mono text-[10px] text-[var(--accent-primary)] font-bold uppercase tracking-wider block">
                Engineering Highlights
              </span>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                {project.skillsHighlighted.slice(0, 3).map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--accent-primary)] font-bold">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold tracking-wider uppercase shadow-xs transition-all duration-200"
              aria-label={`Open live website for ${project.title}`}
            >
              <span>Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold tracking-wider uppercase transition-colors"
            >
              <span>Case Dossier</span>
              <Eye className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </button>
          </div>
        </div>

      </div>
    </motion.article>
  );
};
