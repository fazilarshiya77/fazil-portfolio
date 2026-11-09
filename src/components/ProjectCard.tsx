import React, { useState } from 'react';
import type { Project } from '../data/projects';
import { ArrowUpRight, Eye, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { SparkleStar } from './SparkleStar';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, index }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-[var(--accent-primary)] transition-all duration-300 overflow-hidden"
    >
      {/* Soft Interactive Spotlight Sheen on Hover */}
      {mousePos && (
        <div 
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl opacity-100"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(117, 98, 224, 0.12), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Visual Screenshot Frame */}
        <div 
          onClick={() => onOpenDetails(project)}
          className="lg:col-span-6 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] relative cursor-pointer group/frame shadow-xs"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} live interface preview`}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Interactive Hover Hint Overlay */}
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] font-mono text-xs font-bold shadow-lg"
            >
              <Eye className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Inspect Case Dossier</span>
            </motion.span>
          </div>
        </div>

        {/* Content Details */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--accent-primary)]">{project.number}</span>
              <span>/</span>
              <span className="font-semibold text-[var(--text-secondary)]">{project.category}</span>
              <SparkleStar size={14} className="text-[#B8B0EA] ml-1" />
            </div>
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Live Deployment</span>
            </div>
          </div>

          <h3 className="font-heading font-bold text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key Deliverables Strip */}
          <div className="space-y-1.5 pt-1 text-xs text-[var(--text-secondary)] font-medium">
            {project.skillsHighlighted.slice(0, 3).map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-3 font-mono text-xs">
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold transition-colors shadow-xs"
            >
              <span>Visit Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold transition-colors shadow-xs"
            >
              <span>Case Dossier</span>
              <Eye className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </motion.button>
          </div>
        </div>

      </div>
    </motion.article>
  );
};
