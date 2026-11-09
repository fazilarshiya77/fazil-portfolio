import React from 'react';
import type { Project } from '../data/projects';
import { ArrowUpRight, Eye, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, index }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-[var(--accent-primary)] transition-all duration-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Visual Screenshot Frame */}
        <div 
          onClick={() => onOpenDetails(project)}
          className="lg:col-span-6 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] relative cursor-pointer group/frame"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} live interface preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/frame:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Hover Hint */}
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-150 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-[var(--text-primary)] font-mono text-xs font-bold shadow-md">
              <Eye className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Inspect Case Dossier</span>
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--accent-primary)]">{project.number}</span>
              <span>/</span>
              <span className="font-semibold text-[var(--text-secondary)]">{project.category}</span>
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
          <div className="space-y-1.5 pt-1 text-xs text-[var(--text-secondary)]">
            {project.skillsHighlighted.slice(0, 3).map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                <span>{skill}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold transition-colors"
            >
              <span>Visit Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold transition-colors"
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
