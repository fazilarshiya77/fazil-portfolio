import React from 'react';
import { processSteps } from '../data/skills';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SparkleStar } from './SparkleStar';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-12 sm:py-16 bg-[var(--bg-primary)] scroll-mt-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-[var(--border-color)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] mb-3 shadow-xs">
              <span>01</span>
              <span>/</span>
              <span>Methodology &amp; Execution</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              From Problem to Polished Product
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              A pragmatic 4-stage progression that ensures brand elegance, user journey ergonomics, and engineering stability align seamlessly.
            </p>
          </div>
        </div>

        {/* 4-Step Methodology Grid with Alternating Lavender & Peach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {processSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const cardBg = isEven 
              ? 'bg-[#B8B0EA]/25 dark:bg-[#312A50]/40 border-[#B8B0EA]/50 dark:border-[#312A50]' 
              : 'bg-[#F8D8C8]/30 dark:bg-[#3D2825]/40 border-[#F8D8C8]/60 dark:border-[#3D2825]';

            const badgeBg = isEven
              ? 'bg-[#B8B0EA] text-[#232035]'
              : 'bg-[#F8D8C8] text-[#2D2320]';

            return (
              <motion.div
                key={step.step}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-3xl border ${cardBg} p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 overflow-hidden`}
              >
                {/* Subtle Sparkle Star on Each Card */}
                <div className="absolute top-4 right-4">
                  <SparkleStar size={16} delay={idx % 3 as 0 | 1 | 2} className={isEven ? "text-[#B8B0EA] opacity-60" : "text-[#E87252] opacity-60"} />
                </div>

                <div className="space-y-4">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
                    <div className={`w-10 h-10 rounded-2xl ${badgeBg} flex items-center justify-center font-sans font-black text-sm shadow-xs`}>
                      {step.step}
                    </div>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      Stage 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold tracking-tight text-[var(--text-primary)]">
                    {step.title}
                  </h3>

                  <p className="text-xs font-sans text-[var(--accent-primary)] font-semibold">
                    {step.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Tangible Outputs */}
                <div className="pt-4 border-t border-[var(--border-color)] space-y-2.5">
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-bold">
                    Key Deliverables
                  </span>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-medium">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Methodology Colophon */}
        <div className="mt-12 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs text-[var(--text-secondary)]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-[var(--text-primary)]">Validated in 5 Commercial Deployments</span>
          </span>
          <span className="text-[var(--accent-primary)] font-bold">Cross-Viewport QA &amp; Verified Releases</span>
        </div>

      </div>
    </section>
  );
};
