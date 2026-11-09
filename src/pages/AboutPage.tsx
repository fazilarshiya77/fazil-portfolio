import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { 
  Palette, 
  Code2, 
  Layers, 
  Sparkles, 
  MapPin, 
  Briefcase
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[var(--bg-secondary)]/50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dedicated Page Header */}
          <div className="pb-10 mb-12 sm:mb-16 border-b border-[var(--border-color)]">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-muted)] mb-3">
              <Link to="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[var(--accent-primary)] font-bold">About Fazil</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Design-Minded.{' '}
                <span className="font-display-italic font-normal text-[var(--accent-primary)]">
                  Code-Grounded.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-4 leading-relaxed font-normal">
                I’m a digital product designer and frontend engineer with a deep appreciation for typography, information hierarchy, and resilient web architecture based in Bengaluru, India.
              </p>
            </div>
          </div>

          {/* Biographical Story & Working Principles */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
            
            {/* Left Column: Authoritative Editorial Journey */}
            <div className="lg:col-span-7 space-y-8">
              <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-8 sm:p-10 shadow-sm space-y-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                  Background &amp; Philosophy
                </span>

                <p className="text-lg sm:text-xl font-normal text-[var(--text-primary)] leading-relaxed">
                  I believe the most compelling digital products emerge at the intersection of <span className="font-bold text-[var(--accent-primary)]">empathy for business realities</span> and <span className="font-bold text-[var(--text-primary)]">technical rigor</span>.
                </p>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  My work spans websites and custom applications for real estate, transportation, event management, and travel. Rather than treating design and code as separate silos, I move fluidly between Figma wireframes, design tokens, and production React 19 architecture.
                </p>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  I enjoy taking intricate operational workflows—like multi-location property filtering, live wedding package estimators, or 24/7 outstation route calculators—and turning them into accessible, lightweight interfaces that convert prospective buyers effortlessly.
                </p>

                <div className="pt-6 border-t border-[var(--border-color)] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2 font-semibold text-[var(--text-primary)]">
                    <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Based in Bengaluru, India</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-[var(--text-primary)]">
                    <Briefcase className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Open to Full-time &amp; Contracts</span>
                  </div>
                </div>
              </div>

              {/* Core Values & Working Standards */}
              <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-8 sm:p-10 shadow-sm space-y-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                  Operating Principles
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                      <span>Frictionless Ergonomics</span>
                    </h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed font-sans">
                      Mobile-first tap targets, scannable hierarchies, and under-3-second pathways to inquiries.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-butter-dark)]" />
                      <span>Type-Safe Architecture</span>
                    </h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed font-sans">
                      Strict TypeScript interfaces, modular components, and predictable state transitions.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-lavender-dark)]" />
                      <span>Operational Continuity</span>
                    </h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed font-sans">
                      Ensuring administrative triage consoles match the polish of visitor-facing landing pages.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Sub-Second Performance</span>
                    </h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed font-sans">
                      Clean CSS tokens, zero bundle bloat, and fast edge delivery on modern cloud infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Disciplines & Key Numbers */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Verified Metrics Counter */}
              <div className="p-7 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm space-y-4 font-mono">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                  Production Track Record
                </span>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[var(--bg-peach)]/60 border border-[var(--border-orange)]">
                    <span className="text-3xl font-extrabold text-[var(--text-primary)] block">05</span>
                    <span className="text-[10px] text-[var(--accent-primary)] font-bold uppercase tracking-wider">Live Deployments</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[var(--bg-butter)]/60 border border-[var(--accent-butter)]/60">
                    <span className="text-3xl font-extrabold text-[var(--text-primary)] block">₹250+ Cr</span>
                    <span className="text-[10px] text-[var(--accent-butter-dark)] font-bold uppercase tracking-wider">Property Volume</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[var(--bg-lavender)]/60 border border-[var(--border-lavender)]">
                    <span className="text-3xl font-extrabold text-[var(--text-primary)] block">100%</span>
                    <span className="text-[10px] text-[var(--accent-lavender-dark)] font-bold uppercase tracking-wider">Client Deployed</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                    <span className="text-3xl font-extrabold text-[var(--text-primary)] block">&lt;24h</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Response SLA</span>
                  </div>
                </div>
              </div>

              {/* 4 Core Pillars */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--bg-butter)] text-[var(--accent-butter-dark)] flex items-center justify-center font-bold">
                      <Palette className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-[var(--text-primary)]">
                      Product UI/UX &amp; Design Systems
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Figma design systems, responsive layout ergonomics across 375px to 1440px+, typography pairings, and accessible contrast control.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--bg-peach)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-[var(--text-primary)]">
                      Frontend Architecture
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    React 19, custom hooks, strict TypeScript interfaces, Tailwind CSS v4 design tokens, and performant state handling.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--bg-lavender)] text-[var(--accent-lavender-dark)] flex items-center justify-center font-bold">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-[var(--text-primary)]">
                      Operations, Dashboards &amp; CRM
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Inquiry triage pipelines, real-time WhatsApp dispatches, and custom administrative management tools.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-[var(--text-primary)]">
                      AI-Augmented Engineering
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Harnessing agentic models (Claude, Gemini, Antigravity) to accelerate edge-case handling, documentation, and QA.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Navigation to Work & Contact */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5">
              <span className="font-mono text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
                Next in the Experience
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Review the 5 Live Production Deployments
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                Inspect real screenshots, architecture details, and verified client deployments.
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs shrink-0">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                <span>View Work Archive →</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
