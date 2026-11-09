import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] py-14 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Colophon Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[var(--border-color)]">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-sm shadow-xs">
              FA
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-[var(--text-primary)] block">
                Fazil Arshiya
              </span>
              <p className="font-mono text-xs text-[var(--text-secondary)]">
                Product Designer &amp; Frontend Engineer • Bengaluru, India
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider font-semibold text-[var(--text-secondary)]">
            <a href="#work" className="hover:text-[var(--accent-primary)] transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-[var(--accent-primary)] transition-colors">
              About
            </a>
            <a href="#admin-showcase" className="hover:text-[var(--accent-primary)] transition-colors">
              Systems
            </a>
            <a href="#skills" className="hover:text-[var(--accent-primary)] transition-colors">
              Stack
            </a>
            <a href="#process" className="hover:text-[var(--accent-primary)] transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-[var(--accent-primary)] transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-2.5">
            <a
              href="mailto:fazil1ga22is053@gmail.com"
              className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] flex items-center justify-center transition-colors shadow-xs"
              aria-label="Email Fazil Arshiya"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/fazilarshiya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[#0A66C2] hover:border-[#0A66C2] flex items-center justify-center transition-colors shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/fazilarshiya77"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] flex items-center justify-center transition-colors shadow-xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white flex items-center justify-center transition-all shadow-xs focus:outline-none ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-[var(--text-secondary)]">
          <p>© {CURRENT_YEAR} Fazil Arshiya. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with React 19, TypeScript &amp; Tailwind CSS v4</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
