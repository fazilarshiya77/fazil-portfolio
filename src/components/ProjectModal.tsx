import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';
import { X, ArrowUpRight, CheckCircle2, Sparkles, Layers, ShieldCheck } from 'lucide-react';

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
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-white bg-[var(--accent-primary)] px-3 py-1 rounded-lg">
                CASE {project.number}
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-[var(--text-secondary)]">
                  {project.categoryLabel}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close dossier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 max-h-[76vh] overflow-y-auto space-y-8">
            
            {/* Visual Frame */}
            <div className="relative rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-xs">
              <img
                src={project.image}
                alt={`${project.title} live interface preview`}
                className="w-full h-auto object-cover max-h-[380px]"
                loading="lazy"
              />
              <div className="px-5 py-3 bg-[var(--bg-surface)] border-t border-[var(--border-color)] font-mono text-xs text-[var(--text-secondary)] flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold text-[var(--text-primary)]">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Verified Production Interface from Client Deployment
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                  ● 100% Active Server
                </span>
              </div>
            </div>

            {/* Scope & Overview */}
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-primary)] font-bold block">
                01 / Project Scope &amp; Commercial Context
              </span>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-[var(--border-color)]">
              
              {/* Left Column: Engineering & Features */}
              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Engineering Deliverables</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-medium">
                    {project.skillsHighlighted.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] font-bold mt-0.5">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Key Features &amp; Workflows</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-medium">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Design Highlights & Tech Stack */}
              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Design Systems &amp; Visual Identity</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-medium">
                    {project.designHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] font-bold mt-0.5">—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold mb-3">
                    Technology Tokens &amp; Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs font-semibold px-3 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
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
          <div className="px-6 py-5 border-t border-[var(--border-color)] bg-[var(--bg-primary)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="text-xs text-[var(--text-secondary)] truncate max-w-sm">
              Target: <code className="text-[var(--accent-primary)] font-bold">{project.liveUrl}</code>
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-bold uppercase tracking-wider"
              >
                Close
              </button>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold tracking-wider uppercase shadow-xs transition-all duration-150"
              >
                <span>Launch Live Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
