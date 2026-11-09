import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ContactSection } from '../components/ContactSection';
import { PageTransition } from '../components/PageTransition';
import { SparkleStar } from '../components/SparkleStar';

export const ContactPage: React.FC = () => {
  useDocumentTitle('Contact & Inquiries');

  return (
    <PageTransition>
      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[var(--bg-primary)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Reference Slide Style Header Card */}
          <div className="relative rounded-[2.5rem] bg-[#B8B0EA] dark:bg-[#312A50] text-[#232035] dark:text-[#F8F6FF] p-8 sm:p-12 shadow-xl overflow-hidden">
            {/* Sparkling Stars */}
            <div className="absolute top-8 right-12">
              <SparkleStar size={28} delay={0} className="text-white opacity-85" />
            </div>
            <div className="absolute bottom-8 left-12">
              <SparkleStar size={24} delay={1} className="text-white opacity-75" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-[#232035]/80 dark:text-[#F8F6FF]/80 mb-2">
                <Link to="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span className="font-bold text-[#232035] dark:text-white">Contact</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Let’s work{' '}
                <span className="font-signature text-5xl sm:text-7xl text-white dark:text-[#9D8DF8] block sm:inline">
                  together!
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#232035]/90 dark:text-[#F8F6FF]/90 mt-2 leading-relaxed font-normal">
                Open to digital product design roles, frontend engineering opportunities, and custom web application contracts for 2026.
              </p>
            </div>
          </div>

          {/* Full Interactive Contact Experience */}
          <ContactSection />

        </div>
      </div>
    </PageTransition>
  );
};
