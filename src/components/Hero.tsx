import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-44 md:pb-32 border-b border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Meta Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-8 mb-10 sm:mb-14 border-b border-[var(--border)] font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[var(--text-secondary)]">Fazil Arshiya — Selected Portfolio</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span>Location / Bengaluru, India</span>
            <span>Focus / Digital Products &amp; Frontend</span>
            <span className="text-[var(--accent)] font-medium">Available for 2026</span>
          </div>
        </motion.div>

        {/* Editorial Headline & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-8 space-y-6 sm:space-y-8"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.12] tracking-[-0.03em] text-[var(--text-primary)]">
              Designing <span className="font-serif-italic font-normal tracking-normal">intuitive</span> digital experiences. Engineering <span className="font-serif-italic font-normal tracking-normal">resilient</span> web products.
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl font-light leading-relaxed">
              I collaborate with businesses to translate intricate domain requirements into minimal, accessible user interfaces and high-performance production code.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity uppercase tracking-wider font-medium"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#admin-showcase"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors uppercase tracking-wider font-medium"
              >
                <span>Admin &amp; CRM Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Spec Sheet Index */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-4 border border-[var(--border)] bg-[var(--bg-surface)] p-6 sm:p-7 rounded-lg space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              <span>Overview</span>
              <span>Spec 2026.01</span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                  Disciplines
                </span>
                <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                  Product UI/UX Design, Design Systems, Frontend Engineering, Conversion Architecture
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                  Primary Stack
                </span>
                <p className="text-[var(--text-secondary)] font-mono text-[11px] leading-relaxed">
                  React 19, TypeScript, Tailwind CSS, Vite, Framer Motion, Next.js, Node.js
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                  Live Deployments
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  5 Commercial projects deployed across real estate, transport, and luxury event management.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                  Status
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-[var(--accent)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  Open to Opportunities
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
