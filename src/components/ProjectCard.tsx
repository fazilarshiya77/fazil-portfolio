import React from 'react';
import type { Project } from '../data/projects';
import { ArrowUpRight, Plus } from 'lucide-react';
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      className="group border border-[var(--border)] bg-[var(--bg-surface)] rounded-lg p-6 sm:p-8 lg:p-10 transition-colors hover:border-[var(--text-muted)]"
    >
      {/* Top Monospace Specification Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 sm:mb-8 border-b border-[var(--border)] font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
        <div className="flex items-center gap-3">
          <span className="text-[var(--text-primary)] font-medium">{project.number}</span>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">{project.categoryLabel}</span>
        </div>

        <div className="flex items-center gap-2 text-[var(--accent)] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>Production Release</span>
        </div>
      </div>

      {/* Main Grid: Visual Frame + Editorial Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Visual Frame */}
        <div 
          onClick={() => onOpenDetails(project)}
          className="lg:col-span-7 cursor-pointer overflow-hidden rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] relative group/frame"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} live interface preview`}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.02]"
              loading="lazy"
            />
          </div>

          {/* Minimalist Hover Hint */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-200">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-[10px] uppercase tracking-wider shadow-sm">
              <Plus className="w-3 h-3" />
              <span>Expand Case</span>
            </span>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Design & Technical Highlights */}
            <div className="pt-2 space-y-2">
              <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                Key Contributions
              </span>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] font-light">
                {project.skillsHighlighted.slice(0, 3).map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] font-mono text-[10px] mt-0.5">—</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle Tag List */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-3 font-mono text-xs">
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors uppercase tracking-wider font-medium focus:outline-none"
            >
              <span>Case Dossier</span>
              <Plus className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity uppercase tracking-wider font-medium focus:outline-none"
              aria-label={`Open live website for ${project.title}`}
            >
              <span>Live Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </motion.article>
  );
};
