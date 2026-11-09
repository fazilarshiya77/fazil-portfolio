import React, { useState } from 'react';
import { projectsData, projectCategories, type Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { AnimatePresence, motion } from 'framer-motion';

export const ProjectGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 sm:py-28 md:py-36 border-b border-[var(--border)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] mb-3">
              <span>01</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span>Selected Work</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
              Live Commercial Deployments
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              Five live production websites designed and built for commercial businesses. Each project represents an end-to-end design and frontend engineering delivery.
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
                className={`px-3.5 py-1.5 rounded-md transition-all duration-150 flex items-center gap-2 focus:outline-none ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]'
                }`}
                aria-pressed={isActive}
              >
                <span>{category}</span>
                <span className="opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Projects Exhibition Showcase */}
        <motion.div 
          layout
          className="space-y-16 sm:space-y-24"
        >
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
        </motion.div>

        {/* Bottom Colophon Note */}
        <div className="mt-20 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
          <span>05 / 05 ACTIVE CASE STUDIES DISPLAYED</span>
          <a href="#contact" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors underline underline-offset-4">
            Discuss a new project or custom platform →
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
