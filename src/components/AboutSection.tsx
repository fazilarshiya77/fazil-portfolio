import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-36 border-b border-[var(--border)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] mb-3">
              <span>05</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span>Profile &amp; Perspective</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
              Design-Minded. Code-Grounded.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              Curious about what comes next in web interfaces, yet anchored in time-tested principles of usability, contrast, and performance.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authoritative Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-6 sm:p-9 rounded-lg space-y-6">
              <p className="text-lg sm:text-xl font-normal text-[var(--text-primary)] leading-relaxed">
                I’m <span className="text-[var(--text-primary)] font-medium underline underline-offset-4 decoration-[var(--border)]">Fazil Arshiya</span>, a product designer and web developer based in Bengaluru. I design and build production-ready digital experiences for businesses across real estate, transportation, event management, and travel.
              </p>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                I enjoy turning complex, unstructured operational requirements into clean interfaces—balancing mobile ergonomics, responsive performance, and modern workflow automation.
              </p>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                I am looking for opportunities where I can collaborate with teams that hold a high bar for craft, thoughtful design systems, and resilient frontend architecture.
              </p>

              {/* Spec Metadata Strip */}
              <div className="pt-6 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Based In
                  </span>
                  <span className="text-[var(--text-primary)]">Bengaluru, India (UTC +5:30)</span>
                </div>

                <div>
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Engagement Models
                  </span>
                  <span className="text-[var(--text-primary)]">Full-time Roles &amp; Contracts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Experience Dimensions */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-5 sm:p-6 rounded-lg space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                <span>01 / Discipline</span>
                <span>Focus</span>
              </div>
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                UI/UX Design Systems
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                Figma-to-code workflows, typographic pairing, responsive touch targets, and friction-free user journeys.
              </p>
            </div>

            <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-5 sm:p-6 rounded-lg space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                <span>02 / Discipline</span>
                <span>Frontend</span>
              </div>
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                Modern Component Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                React 19, strict TypeScript interfaces, Tailwind CSS tokens, and performance-tuned bundling with Vite.
              </p>
            </div>

            <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-5 sm:p-6 rounded-lg space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                <span>03 / Discipline</span>
                <span>Commercial</span>
              </div>
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                Cross-Domain Business Context
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                Proven delivery for real estate search, cab dispatch systems, wedding package builders, and luxury travel calculators.
              </p>
            </div>

            <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-5 sm:p-6 rounded-lg space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                <span>04 / Discipline</span>
                <span>Exploration</span>
              </div>
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                Agentic &amp; AI-Augmented Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                Incorporating modern LLM pipelines into pair programming, rapid test scaffolding, and continuous refactoring.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
