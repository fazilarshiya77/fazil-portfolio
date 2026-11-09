import React from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { PageTransition } from '../components/PageTransition';

export const ContactPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#1C1B18] min-h-screen text-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dedicated Page Breadcrumb Header */}
          <div className="pb-8 mb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#ABA69F] mb-3">
              <Link to="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[var(--accent-butter)] font-bold">Contact &amp; Inquiries</span>
            </div>
          </div>

          {/* Full Interactive Contact Experience */}
          <ContactSection />

        </div>
      </div>
    </PageTransition>
  );
};

