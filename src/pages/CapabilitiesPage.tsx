import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { SkillsSection } from '../components/SkillsSection';
import { CodeInspector } from '../components/CodeInspector';
import { AdminShowcase } from '../components/AdminShowcase';
import { PageTransition } from '../components/PageTransition';
import { SparkleStar } from '../components/SparkleStar';

export const CapabilitiesPage: React.FC = () => {
  useDocumentTitle('Technical Capabilities & Operations');

  return (
    <PageTransition>
      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[var(--bg-primary)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Reference Slide Style Header Card */}
          <div className="relative rounded-[2.5rem] bg-[#F8D8C8] dark:bg-[#3D2825] text-[#2D2320] dark:text-[#FFF0EB] p-8 sm:p-12 shadow-xl mb-12 overflow-hidden">
            {/* Sparkling Stars */}
            <div className="absolute top-8 right-12">
              <SparkleStar size={28} delay={0} className="text-[#2D2320]/25 dark:text-white/30" />
            </div>
            <div className="absolute bottom-8 left-12">
              <SparkleStar size={24} delay={1} className="text-[#2D2320]/20 dark:text-white/20" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-[#2D2320]/70 dark:text-[#FFF0EB]/70 mb-2">
                <Link to="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span className="font-bold text-[#7562E0] dark:text-[#9D8DF8]">Capabilities &amp; Systems</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Technical Stack &amp;{' '}
                <span className="font-signature text-5xl sm:text-7xl text-[#7562E0] dark:text-[#9D8DF8] block sm:inline">
                  Operations
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#2D2320]/90 dark:text-[#FFF0EB]/90 mt-2 leading-relaxed font-normal">
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
              <span className="font-sans text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
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
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold font-sans text-xs uppercase tracking-wider shadow-xs transition-all"
            >
              <span>Explore Process →</span>
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
