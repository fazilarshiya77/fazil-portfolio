import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Colophon Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[var(--border)]">
          
          {/* Identity */}
          <div className="space-y-1.5">
            <span className="font-semibold text-sm tracking-tight text-[var(--text-primary)] block">
              Fazil Arshiya
            </span>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              Digital Product Designer &amp; Frontend Engineer / Bengaluru, India
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
            <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">
              Work
            </a>
            <a href="#admin-showcase" className="hover:text-[var(--text-primary)] transition-colors">
              Architecture
            </a>
            <a href="#skills" className="hover:text-[var(--text-primary)] transition-colors">
              Capabilities
            </a>
            <a href="#process" className="hover:text-[var(--text-primary)] transition-colors">
              Process
            </a>
            <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:fazil1ga22is053@gmail.com"
              className="w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] flex items-center justify-center transition-colors"
              aria-label="Email Fazil Arshiya"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/fazilarshiya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] flex items-center justify-center transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/fazilarshiya77"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] flex items-center justify-center transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] flex items-center justify-center transition-colors focus:outline-none ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-[var(--text-muted)]">
          <p>© {CURRENT_YEAR} Fazil Arshiya. All rights reserved.</p>
          <p>Crafted with React 19, TypeScript &amp; Tailwind CSS v4</p>
        </div>

      </div>
    </footer>
  );
};
