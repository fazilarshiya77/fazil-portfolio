import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { SkillsSection } from '../components/SkillsSection';
import { CodeInspector } from '../components/CodeInspector';
import { AdminShowcase } from '../components/AdminShowcase';
import { PageTransition } from '../components/PageTransition';

export const CapabilitiesPage: React.FC = () => {
  useDocumentTitle('Technical Capabilities & Operations');

  return (
    <PageTransition>
      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[var(--bg-primary)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dedicated Page Header */}
          <div className="pb-10 mb-12 border-b border-[var(--border-color)]">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-muted)] mb-3">
              <Link to="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[var(--accent-primary)] font-bold">Capabilities &amp; Systems</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Technical Stack &amp;{' '}
                <span className="text-[var(--accent-primary)]">
                  Operations Architecture
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-4 leading-relaxed font-normal">
                A disciplined engineering toolkit spanning responsive component design, type-safe architecture, and behind-the-scenes administrative portals.
              </p>
            </div>
          </div>

          {/* 1. Technical Capabilities & Tooling Matrix */}
          <div className="mb-20">
            <SkillsSection />
          </div>

          {/* 2. Interactive Production Architecture & Code Inspector */}
          <div className="mb-20">
            <CodeInspector />
          </div>

          {/* 3. Integrated Behind-The-Scenes CRM & Operations Showcase */}
          <div className="mb-20">
            <AdminShowcase />
          </div>

          {/* Next Steps Navigation Bar */}
          <div className="p-8 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
                Next in the Experience
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                Understand the 4-Stage Delivery Process
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                Explore how user research, wireframing, component implementation, and QA align.
              </p>
            </div>

            <Link
              to="/process"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold font-mono text-xs uppercase tracking-wider shadow-xs transition-all"
            >
              <span>Explore Process →</span>
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
