import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData, type Project } from '../data/projects';
import { PageTransition } from '../components/PageTransition';
import { 
  ArrowRight, 
  Palette, 
  Code2, 
  Layers,
  Sparkles
} from 'lucide-react';

export const HomePage: React.FC = () => {
  useDocumentTitle('Product Designer & Frontend Engineer');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Selected top 2 projects for the homepage curated preview
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <PageTransition>
      <div className="relative">
        
        {/* 1. Hero Section with Interactive Tech Switcher */}
        <Hero />

        {/* 2. Curated Personal Positioning & Verified Metrics */}
        <section className="py-20 sm:py-28 bg-[var(--bg-secondary)]/40 border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] shadow-xs">
                  <span>About Fazil</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
                  Design-minded. Code-grounded.{' '}
                  <span className="text-[var(--accent-primary)]">
                    Engineered for business results.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                  I collaborate with businesses to translate intricate operational workflows into clean, accessible interfaces and high-performance production code. My work spans luxury property portals, dispatch platforms, interactive package builders, and booking engines.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-xs font-bold font-mono tracking-wider uppercase shadow-xs transition-all"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  
                  <Link
                    to="/capabilities"
                    className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    <span>View Capabilities &amp; Stack →</span>
                  </Link>
                </div>
              </div>

              {/* Verified Metrics Counter Cards with Hover Springs */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4 font-mono">
                <motion.div 
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-1 hover:border-[var(--accent-primary)] transition-colors"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] block">05</span>
                  <span className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">Live Websites</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-sans">Active client portals</span>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-1 hover:border-[var(--accent-primary)] transition-colors"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] block">₹250+ Cr</span>
                  <span className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">Scope Handled</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-sans">Real-estate transactions</span>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-1 hover:border-emerald-500 transition-colors"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] block">100%</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">Client Deployed</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-sans">Production releases</span>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-1 hover:border-emerald-500 transition-colors"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] block">&lt;24h</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">Response SLA</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-sans">Fast collaboration</span>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Selected Commercial Projects (Curated Preview) */}
        <section className="py-20 sm:py-28 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-[var(--border-color)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] mb-3 shadow-xs">
                  <span>Selected Work</span>
                </div>
                
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  Featured Client Projects
                </h2>
              </div>

              <div className="max-w-md">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  A snapshot of live commercial solutions designed and engineered for active businesses.
                </p>
              </div>
            </div>

            {/* Curated 2 Featured Projects */}
            <div className="space-y-12 sm:space-y-16">
              {featuredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onOpenDetails={(p) => setActiveModalProject(p)}
                />
              ))}
            </div>

            {/* Work Archive Navigation Callout */}
            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
                  Complete Portfolio
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  Looking for more? Explore all 5 production case studies.
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  Including SID Events Management, The Property Agent portal, and Taj Luxury Tours.
                </p>
              </div>

              <Link
                to="/work"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold font-mono text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>View All 5 Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* 4. Disciplines & Capabilities */}
        <section className="py-20 sm:py-28 bg-[var(--bg-secondary)]/40 border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-[var(--border-color)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] mb-3 shadow-xs">
                  <span>Core Disciplines</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  What I Bring to Teams
                </h2>
              </div>
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] hover:underline"
              >
                <span>Inspect Full Stack &amp; CRM Architecture →</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-3 hover:border-[var(--accent-primary)] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">Product UI/UX Design</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Translating complex business requirements into intuitive Figma mockups, accessible visual hierarchies, and high-conversion user journeys.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-3 hover:border-[var(--accent-primary)] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">Frontend Architecture</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Engineering component-driven web apps with React 19, strict TypeScript interfaces, Tailwind CSS tokens, and sub-second Vite builds.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-3 hover:border-[var(--accent-primary)] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-emerald-soft)] text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">Operations &amp; CRM</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Extending web presence into functional operations: lead triage consoles, WhatsApp booking triggers, and responsive dispatch portals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Process & Methodology Teaser */}
        <section className="py-20 sm:py-28 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-[var(--border-color)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] mb-3 shadow-xs">
                  <span>Methodology</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  The 4-Stage Delivery Process
                </h2>
              </div>
              <Link
                to="/process"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] hover:underline"
              >
                <span>Read Full Methodology Details →</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
              <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2">
                <span className="w-7 h-7 rounded-lg bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-xs">01</span>
                <span className="font-heading font-bold text-sm text-[var(--text-primary)] block">Understand</span>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans">Pain points &amp; requirements scoping</p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2">
                <span className="w-7 h-7 rounded-lg bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] flex items-center justify-center font-bold text-xs">02</span>
                <span className="font-heading font-bold text-sm text-[var(--text-primary)] block">Structure</span>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans">Information architecture &amp; wireframes</p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2">
                <span className="w-7 h-7 rounded-lg bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] flex items-center justify-center font-bold text-xs">03</span>
                <span className="font-heading font-bold text-sm text-[var(--text-primary)] block">Design &amp; Build</span>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans">Figma design systems &amp; React code</p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2">
                <span className="w-7 h-7 rounded-lg bg-[var(--accent-emerald-soft)] text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">04</span>
                <span className="font-heading font-bold text-sm text-[var(--text-primary)] block">Refine &amp; Deliver</span>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans">Cross-viewport QA &amp; Vercel deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Clean High-Impact CTA Banner */}
        <section className="py-20 sm:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for 2026</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Ready to create something{' '}
              <span className="text-[var(--accent-primary)]">
                exceptional?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              Whether you need an end-to-end web product, design system, or a dedicated frontend engineer, let’s talk.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 font-mono text-xs">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                <span>Get in Touch →</span>
              </Link>

              <Link
                to="/work"
                className="px-6 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold uppercase tracking-wider transition-all shadow-xs"
              >
                <span>Browse All Work</span>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Case Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </PageTransition>
  );
};
