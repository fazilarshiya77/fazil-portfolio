import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageTransition } from '../components/PageTransition';

export const NotFoundPage: React.FC = () => {
  useDocumentTitle('Page not found');

  return (
    <PageTransition>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
        <p className="font-signature text-5xl text-[#7562E0] dark:text-[#9D8DF8]">404</p>
        <h1 className="font-heading font-black text-4xl sm:text-5xl tracking-tight text-[var(--text-primary)] mt-2">
          This page doesn’t exist
        </h1>
        <p className="mt-4 max-w-md text-[var(--text-secondary)]">
          The link may be broken or the page may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 px-6 py-3 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-sm font-bold transition-colors"
        >
          Back to home
        </Link>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;
