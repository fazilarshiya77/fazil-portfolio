import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, projectCategories, type Project } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { PageTransition } from '../components/PageTransition';
import { ShieldCheck } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <PageTransition>
      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[var(--bg-primary)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dedicated Page Header */}
          <div className="pb-10 mb-12 sm:mb-16 border-b border-[var(--border-color)]">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-muted)] mb-3">
              <Link to="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[var(--accent-primary)] font-bold">Selected Work Archive</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  Commercial Case Studies
                </h1>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-3 max-w-2xl leading-relaxed">
                  Five active commercial websites designed and engineered for live businesses. Each project represents an end-to-end delivery: from visual identity and UX research to production React 19 architecture.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-[var(--bg-surface)] border border-[var(--border-color)] px-4 py-2.5 rounded-xl shadow-xs shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="font-bold">All 5 sites deployed to production</span>
              </div>
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12 font-mono text-xs">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              {projectCategories.map((category) => {
                const count = category === 'All Projects'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === category).length;

                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 font-bold focus:outline-none shadow-xs ${
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

            <span className="text-[11px] text-[var(--text-muted)] hidden lg:inline">
              Showing {filteredProjects.length} of {projectsData.length} projects
            </span>
          </div>

          {/* Complete Case Studies Exhibition */}
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

          {/* Next Steps Navigation Bar */}
          <div className="mt-24 p-8 rounded-3xl bg-[var(--bg-lavender-subtle)] border border-[var(--border-lavender)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[var(--accent-lavender-dark)] uppercase tracking-wider block">
                Next in the Experience
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Inspect Behind-the-Scenes Architecture &amp; CRM Systems
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                See the interactive management console, WhatsApp booking dispatches, and operational tools.
              </p>
            </div>

            <Link
              to="/capabilities"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold font-mono text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <span>Explore Capabilities →</span>
            </Link>
          </div>

        </div>

        {/* Case Details Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </PageTransition>
  );
};
