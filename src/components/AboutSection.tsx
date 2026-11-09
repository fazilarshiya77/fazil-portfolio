import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, Layers, Sparkles, MapPin, Briefcase } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-36 bg-[var(--bg-secondary)]/60 border-b border-[var(--border-color)] scroll-mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border-color)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-orange)] mb-3 shadow-xs">
              <span>01</span>
              <span>/</span>
              <span>Profile &amp; Perspective</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Design-Minded.{' '}
              <span className="font-display-italic font-normal text-[var(--accent-primary)]">
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
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-7 sm:p-9 shadow-sm space-y-6">
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
              <div className="pt-6 border-t border-[var(--border-color)] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
                <div className="p-3 rounded-xl bg-[var(--bg-peach)]/60 border border-[var(--border-orange)]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] block">05</span>
                  <span className="text-[10px] text-[var(--accent-primary)] font-bold uppercase tracking-wider">Live Deployments</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-butter)]/60 border border-[var(--accent-butter)]/60">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] block">₹250+ Cr</span>
                  <span className="text-[10px] text-[var(--accent-butter-dark)] font-bold uppercase tracking-wider">Property Scope</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-lavender)]/60 border border-[var(--border-lavender)]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] block">100%</span>
                  <span className="text-[10px] text-[var(--accent-lavender-dark)] font-bold uppercase tracking-wider">Client Verified</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] block">&lt;24h</span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">Response SLA</span>
                </div>
              </div>

              {/* Spec Metadata Strip */}
              <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)]">
                  <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Bengaluru, India (IST / UTC +5:30)</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)]">
                  <Briefcase className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Open to Full-Time &amp; Contracts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Interactive Discipline Dimensions */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Dimension 1: UI/UX & Design Systems */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs transition-all hover:border-[var(--accent-primary)] group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-butter)] text-[var(--accent-butter-dark)] flex items-center justify-center font-bold">
                    <Palette className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    UI/UX &amp; Design Systems
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-butter)] text-[var(--accent-butter-dark)]">
                  Figma-First
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Crafting coherent visual systems, typography pairings, mobile touch targets, and frictionless conversion pathways.
              </p>
            </motion.div>

            {/* Dimension 2: Modern Frontend Architecture */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs transition-all hover:border-[var(--accent-primary)] group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-peach)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    Frontend Architecture
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-peach)] text-[var(--accent-primary)]">
                  React 19 &amp; TS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Component-driven engineering with React 19, strict TypeScript interfaces, Tailwind CSS design tokens, and sub-second Vite bundling.
              </p>
            </motion.div>

            {/* Dimension 3: Commercial Systems & CRM */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs transition-all hover:border-[var(--accent-primary)] group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-lavender)] text-[var(--accent-lavender-dark)] flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    Operational Dashboards &amp; CRM
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--bg-lavender)] text-[var(--accent-lavender-dark)]">
                  Operations
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Extending websites into operational powerhouses: inquiry triage, WhatsApp webhook dispatches, and custom booking pipelines.
              </p>
            </motion.div>

            {/* Dimension 4: Modern AI-Augmented Workflows */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs transition-all hover:border-[var(--accent-primary)] group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-primary)] text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    AI-Augmented Workflows
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Modern Tooling
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Leveraging agentic LLM pair-programming tools (Claude, Gemini, Antigravity) to accelerate edge-case handling, documentation, and QA.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
