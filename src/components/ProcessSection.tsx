import React from 'react';
import { processSteps } from '../data/skills';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 md:py-36 border-b border-[var(--border)] scroll-mt-16 bg-[var(--bg-secondary)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] mb-3">
              <span>04</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span>Engineering Methodology</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
              From Problem to Polished Product
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              A linear, requirement-driven process ensuring that brand elegance, user journey ergonomics, and engineering stability align seamlessly.
            </p>
          </div>
        </div>

        {/* 4-Step Architectural Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="border border-[var(--border)] bg-[var(--bg-surface)] p-6 sm:p-7 rounded-lg flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Step Indicator */}
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  <span>Phase {step.step}</span>
                  <span className="text-[var(--accent)] font-medium">Stage 0{step.step}</span>
                </div>

                <h3 className="text-xl font-medium tracking-tight text-[var(--text-primary)]">
                  {step.title}
                </h3>

                <p className="text-xs font-serif-italic text-[var(--text-secondary)]">
                  {step.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tangible Outputs */}
              <div className="pt-4 border-t border-[var(--border)] space-y-2.5">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] font-light">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] font-mono text-[10px] mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Colophon */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-[var(--text-muted)]">
          <span>MEASURED EXECUTION / ZERO DECORATIVE AMBIGUITY</span>
          <span className="text-[var(--accent)]">Cross-Viewport QA &amp; Verified Releases</span>
        </div>

      </div>
    </section>
  );
};
