import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ProcessSection } from '../components/ProcessSection';
import { PageTransition } from '../components/PageTransition';
import { SparkleStar } from '../components/SparkleStar';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  useDocumentTitle('Engineering & Delivery Methodology');

  return (
    <PageTransition>
      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[var(--bg-primary)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Reference Slide Style Header Card */}
          <div className="relative rounded-[2.5rem] bg-[#B8B0EA] dark:bg-[#312A50] text-[#232035] dark:text-[#F8F6FF] p-8 sm:p-12 shadow-xl mb-12 overflow-hidden">
            {/* Sparkling Stars */}
            <div className="absolute top-8 right-12">
              <SparkleStar size={28} delay={0} className="text-white opacity-85" />
            </div>
            <div className="absolute bottom-8 left-12">
              <SparkleStar size={24} delay={1} className="text-white opacity-75" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-[#232035]/80 dark:text-[#F8F6FF]/80 mb-2">
                <Link to="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span className="font-bold text-[#232035] dark:text-white">Engineering Methodology</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                From Problem to{' '}
                <span className="font-signature text-5xl sm:text-7xl text-white dark:text-[#9D8DF8] block sm:inline">
                  Polished Product
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#232035]/90 dark:text-[#F8F6FF]/90 mt-2 leading-relaxed font-normal">
                How business intent transforms into performant, accessible digital products through measured scoping, structural wireframes, and verified releases.
              </p>
            </div>
          </div>

          {/* 1. Complete Process Section with 4-Step Animated Progression */}
          <div className="mb-20">
            <ProcessSection />
          </div>

          {/* 2. Engineering Quality Assurance Standards */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-8 sm:p-10 shadow-xs mb-20 space-y-6">
            <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Rigorous Delivery Standards</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-2">
                <span className="font-heading font-bold text-sm text-[var(--text-primary)] block">
                  Cross-Device Ergonomics
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed font-sans">
                  Testing across 375px mobile, tablet breakpoints, and ultrawide desktop monitors to ensure responsive ergonomics and finger-friendly tap targets.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-2">
                <span className="font-heading font-bold text-sm text-[var(--text-primary)] block">
                  Deterministic Type Safety
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed font-sans">
                  Every property, API payload, and event callback is strictly typed with TypeScript interfaces to eliminate runtime errors before release.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-2">
                <span className="font-heading font-bold text-sm text-[var(--text-primary)] block">
                  Automated CI/CD Delivery
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed font-sans">
                  Seamless git pushes triggering automatic preview branches, lint verifications, and global edge deployments on Vercel.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps: Contact CTA */}
          <div className="p-8 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <span className="font-sans text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
                Ready to Collaborate?
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                Let’s Apply This Process to Your Next Initiative
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                Whether you’re launching a new venture or elevating an existing application.
              </p>
            </div>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold font-sans text-xs uppercase tracking-wider shadow-xs transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
