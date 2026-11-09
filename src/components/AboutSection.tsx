import React from 'react';
import { Palette, Code2, Layers, Sparkles, MapPin, Briefcase } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-36 bg-[var(--bg-secondary)]/60 border-b border-[var(--border-color)] scroll-mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border-color)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] mb-3 shadow-xs">
              <span>01</span>
              <span>/</span>
              <span>Profile &amp; Perspective</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Design-Minded.{' '}
              <span className="text-[var(--accent-primary)]">
                Code-Grounded.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Obsessed with how digital products feel, perform, and solve real operational challenges for growing commercial businesses.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authoritative Editorial Statement & Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-7 sm:p-9 shadow-xs space-y-6">
              <p className="text-lg sm:text-xl font-normal text-[var(--text-primary)] leading-relaxed">
                I’m <span className="font-bold text-[var(--accent-primary)]">Fazil Arshiya</span>, a product designer and web developer based in Bengaluru. My work bridges UX research, creative visual identity, and modern frontend engineering across real estate, transportation, event management, and travel.
              </p>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Rather than treating design and development as siloed phases, I work across the full spectrum: from early Figma wireframes and customer journey mapping to writing production-ready React 19 components with strict TypeScript types and Tailwind CSS.
              </p>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                I'm looking for opportunities to collaborate with engineering teams, design studios, and ambitious product companies that prioritize usability, craftsmanship, and tangible business impact.
              </p>

              {/* Verified Metrics Counter Strip */}
              <div className="pt-6 border-t border-[var(--border-color)] grid grid-cols-2 sm:grid-cols-4 gap-4 font-sans">
                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <AnimatedCounter value={5} prefix="0" className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] block" />
                  <span className="text-[10px] text-[var(--accent-primary)] font-bold uppercase tracking-wider">Live Deployments</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <AnimatedCounter value={250} prefix="₹" suffix="+ Cr" className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] block" />
                  <span className="text-[10px] text-[var(--accent-primary)] font-bold uppercase tracking-wider">Property Scope</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <AnimatedCounter value={100} suffix="%" className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] block" />
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Client Verified</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] block">&lt;24h</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Response SLA</span>
                </div>
              </div>

              {/* Location & Status Pills */}
              <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Based in Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-500" />
                  <span>Open to Full-Time &amp; High-Impact Contracts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Disciplines Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                    <Palette className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    Product UI/UX Design
                  </h3>
                </div>
                <span className="font-sans text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                  Figma
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Design systems, responsive ergonomics (375px to 1440px+), WCAG AA contrast control, and interaction specifications.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    Frontend Architecture
                  </h3>
                </div>
                <span className="font-sans text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--accent-primary)]">
                  React 19
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Component-driven codebases, custom hooks, strict TypeScript interfaces, Tailwind CSS tokens, and sub-second builds.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-emerald-soft)] text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    Operations, Dashboards &amp; CRM
                  </h3>
                </div>
                <span className="font-sans text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-emerald-600 dark:text-emerald-400">
                  Full Flow
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Management consoles, WhatsApp notification pipelines, lead triage matrices, and client operations tools.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    AI-Augmented Engineering
                  </h3>
                </div>
                <span className="font-sans text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--accent-primary)]">
                  Modern
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Leveraging Claude, Gemini, and Antigravity to accelerate prototype scaffolding, test coverage, and documentation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
