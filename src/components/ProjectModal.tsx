import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';
import { X, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/50 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg shadow-2xl overflow-hidden my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Specification Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)] bg-[var(--bg-primary)]">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-[var(--accent)] font-medium">
                {project.number} / CASE SPEC
              </span>
              <div className="h-3 w-[1px] bg-[var(--border)]" />
              <div>
                <h3 className="text-lg font-medium tracking-tight text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close dossier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[76vh] overflow-y-auto space-y-8">
            
            {/* Visual Frame */}
            <div className="relative rounded-md overflow-hidden border border-[var(--border)] bg-[var(--bg-secondary)]">
              <img
                src={project.image}
                alt={`${project.title} live interface preview`}
                className="w-full h-auto object-cover max-h-[380px]"
                loading="lazy"
              />
              <div className="px-4 py-2 bg-[var(--bg-surface)] border-t border-[var(--border)] font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                <span>Production Capture / Verified Client Interface</span>
                <span className="text-[var(--accent)] font-medium">Status: Active</span>
              </div>
            </div>

            {/* Context & Description */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block">
                01 / Project Scope &amp; Context
              </span>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-[var(--border)]">
              
              {/* Left Column: Features & Deliverables */}
              <div className="space-y-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-3">
                    02 / Engineering Highlights
                  </span>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-light">
                    {project.skillsHighlighted.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] font-mono text-[10px] mt-0.5">—</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-3">
                    03 / Features &amp; User Journeys
                  </span>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-light">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--text-muted)] font-mono text-[10px] mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Design System & Technologies */}
              <div className="space-y-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-3">
                    04 / Design Principles &amp; Polish
                  </span>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-light">
                    {project.designHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] font-mono text-[10px] mt-0.5">—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-3">
                    05 / Architecture &amp; Tooling
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Modal Action Bar */}
          <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--bg-primary)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="text-[11px] text-[var(--text-muted)] truncate max-w-sm">
              Endpoint: {project.liveUrl}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-wider"
              >
                Close
              </button>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity uppercase tracking-wider font-medium"
              >
                <span>Launch Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
