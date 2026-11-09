import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { projectsData, projectCategories, type Project } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { PageTransition } from '../components/PageTransition';
import { ShieldCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { SparkleStar } from '../components/SparkleStar';

export const WorkPage: React.FC = () => {
  useDocumentTitle('Selected Work & Case Studies');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <PageTransition>
      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[var(--bg-primary)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Reference Slide Style Header Card */}
          <div className="relative rounded-[2.5rem] bg-[#B8B0EA] dark:bg-[#312A50] text-[#232035] dark:text-[#F8F6FF] p-8 sm:p-12 shadow-xl mb-12 overflow-hidden">
            {/* Sparkling Stars */}
            <div className="absolute top-8 right-12">
              <SparkleStar size={28} delay={0} className="text-white opacity-85" />
            </div>
            <div className="absolute bottom-8 left-12">
              <SparkleStar size={24} delay={1} className="text-white opacity-75" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-[#232035]/80 dark:text-[#F8F6FF]/80 mb-2">
                  <Link to="/" className="hover:underline">Home</Link>
                  <span>/</span>
                  <span className="font-bold text-[#232035] dark:text-white">Selected Work Archive</span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                  My Projects
                </h1>
                <p className="text-base sm:text-lg text-[#232035]/90 dark:text-[#F8F6FF]/90 mt-2 max-w-2xl leading-relaxed">
                  Five active commercial websites designed and engineered for live businesses. Each project represents an end-to-end delivery: from visual identity and UX research to production React 19 architecture.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-sans bg-white dark:bg-[#221E35] text-[#232035] dark:text-white px-4 py-2.5 rounded-full shadow-md shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-bold">All 5 sites deployed to production</span>
              </div>
            </div>
          </div>

          {/* Category Filter Bar with Animated Sliding Pill */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10 font-sans text-xs">
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
                    className="relative px-4 py-2 rounded-xl transition-colors duration-150 flex items-center gap-2 font-bold focus:outline-none"
                    aria-pressed={isActive}
                  >
                    {isActive ? (
                      <motion.div
                        layoutId="workCategoryPill"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                        className="absolute inset-0 bg-[var(--accent-primary)] rounded-xl shadow-xs z-0"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl z-0" />
                    )}

                    <span className={`relative z-10 ${isActive ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
                      {category}
                    </span>
                    <span className={`relative z-10 px-1.5 py-0.5 rounded-full text-[10px] ${
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
          <div className="space-y-12 sm:space-y-16">
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
          <div className="mt-20 p-8 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <span className="font-sans text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
                Next in the Experience
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                Inspect Behind-the-Scenes Architecture &amp; CRM Systems
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                See the interactive management console, WhatsApp booking dispatches, and operational tools.
              </p>
            </div>

            <Link
              to="/capabilities"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold font-sans text-xs uppercase tracking-wider shadow-xs transition-all"
            >
              <span>Explore Capabilities →</span>
            </Link>
          </div>

        </div>

        {/* Case Details Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onSelectProject={(p) => setActiveModalProject(p)}
        />
      </div>
    </PageTransition>
  );
};
