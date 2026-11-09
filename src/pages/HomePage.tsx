import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData, type Project } from '../data/projects';
import { PageTransition } from '../components/PageTransition';
import { 
  ArrowRight, 
  Sparkles, 
  Palette, 
  Code2, 
  Layers
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Selected top 2 projects for the homepage curated preview
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <PageTransition>
      <div className="relative">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Curated Personal Introduction & Verified Metrics */}
        <section className="py-20 sm:py-28 bg-[var(--bg-secondary)]/50 border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-orange)] shadow-xs">
                  <span>About Fazil</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
                  Design-minded. Code-grounded.{' '}
                  <span className="font-display-italic font-normal text-[var(--accent-primary)]">
                    Built for business impact.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                  I collaborate with businesses to translate intricate domain requirements into clean user interfaces and high-performance production code. My work spans property discovery platforms, on-demand dispatch systems, event package builders, and luxury travel rate calculators.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] text-white text-xs font-bold font-mono tracking-wider uppercase shadow-xs hover:bg-[var(--accent-primary-hover)] transition-all"
                  >
                    <span>Read Full Journey &amp; Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  
                  <Link
                    to="/capabilities"
                    className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    <span>View Capabilities &amp; Tech Stack →</span>
                  </Link>
                </div>
              </div>

              {/* Verified Metrics Counter Cards */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4 font-mono">
                <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] block">05</span>
                  <span className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">Live Websites</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-sans">Active client portals</span>
                </div>

                <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] block">₹250+ Cr</span>
                  <span className="text-xs font-bold text-[var(--accent-butter-dark)] uppercase tracking-wider block">Scope Supported</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-sans">Real-estate transactions</span>
                </div>

                <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] block">100%</span>
                  <span className="text-xs font-bold text-[var(--accent-lavender-dark)] uppercase tracking-wider block">Client Deployed</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-sans">Production releases</span>
                </div>

                <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] block">&lt;24h</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">Response SLA</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-sans">Fast collaboration</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Selected Commercial Projects (Curated Preview) */}
        <section className="py-20 sm:py-28 md:py-32 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border-color)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-peach)] text-[var(--accent-primary)] border border-[var(--border-orange)] mb-3 shadow-xs">
                  <span>Curated Highlights</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  Featured Client Deployments
                </h2>
              </div>

              <div className="max-w-md">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  A snapshot of live commercial solutions designed and engineered for active businesses.
                </p>
              </div>
            </div>

            {/* Curated 2 Featured Projects */}
            <div className="space-y-16">
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
            <div className="mt-16 p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-orange)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1.5">
                <span className="font-mono text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
                  Complete Portfolio Available
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  Looking for more? Explore all 5 production case studies.
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  Including SID Events Management, The Property Agent portal, and Taj Luxury Tours.
                </p>
              </div>

              <Link
                to="/work"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold font-mono text-xs uppercase tracking-wider shadow-md shadow-[var(--accent-primary)]/20 transition-all duration-200"
              >
                <span>View Full Work Archive (5)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* 4. Disciplines & Capabilities Teaser */}
        <section className="py-20 sm:py-28 bg-[var(--bg-lavender-subtle)] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-[var(--border-color)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-lavender)] text-[var(--accent-lavender-dark)] border border-[var(--border-lavender)] mb-3 shadow-xs">
                  <span>Core Disciplines</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
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
              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-butter)] text-[var(--accent-butter-dark)] flex items-center justify-center font-bold">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Product UI/UX Design</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Translating complex business requirements into intuitive Figma mockups, accessible visual hierarchies, and high-conversion pathways.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-peach)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Frontend Architecture</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Engineering component-driven web apps with React 19, strict TypeScript interfaces, Tailwind CSS tokens, and sub-second Vite builds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-lavender)] text-[var(--accent-lavender-dark)] flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Operations &amp; CRM</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Extending web presence into functional operations: lead triage consoles, WhatsApp booking triggers, and responsive dispatch portals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Process & Methodology Teaser */}
        <section className="py-20 sm:py-28 bg-[var(--bg-secondary)]/40 border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-[var(--border-color)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-orange)] mb-3 shadow-xs">
                  <span>How I Deliver</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  The 4-Stage Methodology
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
                <span className="font-bold text-sm text-[var(--text-primary)] block font-sans">Understand</span>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans">Pain points &amp; requirements scoping</p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2">
                <span className="w-7 h-7 rounded-lg bg-[var(--accent-butter)] text-[var(--accent-butter-dark)] flex items-center justify-center font-bold text-xs">02</span>
                <span className="font-bold text-sm text-[var(--text-primary)] block font-sans">Structure</span>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans">Information architecture &amp; wireframes</p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2">
                <span className="w-7 h-7 rounded-lg bg-[var(--accent-lavender)] text-[var(--accent-lavender-dark)] flex items-center justify-center font-bold text-xs">03</span>
                <span className="font-bold text-sm text-[var(--text-primary)] block font-sans">Design &amp; Build</span>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans">Figma design systems &amp; React code</p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">04</span>
                <span className="font-bold text-sm text-[var(--text-primary)] block font-sans">Refine &amp; Deliver</span>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans">Cross-viewport QA &amp; Vercel deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. High-Impact Contact CTA Banner */}
        <section className="py-20 sm:py-24 bg-[#1C1B18] text-[#FAF8F2] relative overflow-hidden">
          <div 
            className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[var(--accent-primary)]/20 blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[var(--accent-butter)]/15 blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-primary)] text-white">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for 2026</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Ready to create something{' '}
              <span className="font-display-italic font-normal text-[var(--accent-butter)]">
                exceptional?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#ABA69F] max-w-xl mx-auto">
              Whether you need an end-to-end web product, design system, or a dedicated frontend engineer, let’s discuss the opportunity.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold uppercase tracking-wider shadow-lg shadow-[var(--accent-primary)]/25 transition-all"
              >
                <span>Get in Touch →</span>
              </Link>

              <Link
                to="/work"
                className="px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-wider transition-all"
              >
                <span>Browse Projects</span>
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
