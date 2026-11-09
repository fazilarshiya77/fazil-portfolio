import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ContactSection } from '../components/ContactSection';
import { PageTransition } from '../components/PageTransition';

export const ContactPage: React.FC = () => {
  useDocumentTitle('Contact & Inquiries');

  return (
    <PageTransition>
      <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[var(--bg-primary)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dedicated Page Breadcrumb Header */}
          <div className="pb-8 mb-8 border-b border-[var(--border-color)]">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-muted)] mb-3">
              <Link to="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[var(--accent-primary)] font-bold">Contact &amp; Inquiries</span>
            </div>
          </div>

          {/* Full Interactive Contact Experience */}
          <ContactSection />

        </div>
      </div>
    </PageTransition>
  );
};
