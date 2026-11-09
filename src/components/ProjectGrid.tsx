import React, { useState } from 'react';
import { projectsData, projectCategories, type Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { AnimatePresence } from 'framer-motion';

export const ProjectGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 sm:py-28 md:py-36 bg-[var(--bg-primary)] border-b border-[var(--border-color)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border-color)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-peach)] text-[var(--accent-primary)] border border-[var(--border-orange)] mb-3 shadow-xs">
              <span>01</span>
              <span>/</span>
              <span>Selected Work</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Commercial Case Studies
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Five live production websites designed and engineered for real clients. No placeholder prototypes—each site is active and accessible.
            </p>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar font-mono text-xs">
          {projectCategories.map((category) => {
            const count = category === 'All Projects'
              ? projectsData.length
              : projectsData.filter((p) => p.category === category).length;

            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 font-semibold focus:outline-none shadow-xs ${
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/20'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)]'
                }`}
                aria-pressed={isActive}
              >
                <span>{category}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[var(--bg-secondary)] text-[var(--text-muted)]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Alternating Asymmetrical Exhibition Layout */}
        <div className="space-y-16 sm:space-y-24">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenDetails={(p) => setActiveModalProject(p)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Colophon Callout */}
        <div className="mt-20 p-8 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-[var(--text-primary)]">All 5 deployments link directly to active client servers</span>
          </div>
          <a 
            href="#contact" 
            className="text-[var(--accent-primary)] font-bold hover:underline flex items-center gap-1"
          >
            <span>Discuss your custom digital platform →</span>
          </a>
        </div>

      </div>

      {/* Case Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
