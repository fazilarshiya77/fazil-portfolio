import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { SparkleStar } from './SparkleStar';

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
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-2xl bg-[#B8B0EA] text-[#232035] flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
              FA
            </div>
            <div>
              <span className="font-heading font-extrabold text-base tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1.5">
                <span>Fazil Arshiya</span>
                <SparkleStar size={16} className="text-[#B8B0EA]" />
              </span>
              <p className="font-sans text-xs text-[var(--text-secondary)] font-normal">
                Product Designer &amp; Frontend Engineer • Bengaluru, India
              </p>
            </div>
          </Link>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-xs font-semibold text-[var(--text-secondary)]">
            <Link to="/" className="hover:text-[var(--accent-primary)] transition-colors">
              Home
            </Link>
            <Link to="/work" className="hover:text-[var(--accent-primary)] transition-colors">
              Work
            </Link>
            <Link to="/about" className="hover:text-[var(--accent-primary)] transition-colors">
              About
            </Link>
            <Link to="/capabilities" className="hover:text-[var(--accent-primary)] transition-colors">
              Capabilities
            </Link>
            <Link to="/process" className="hover:text-[var(--accent-primary)] transition-colors">
              Process
            </Link>
            <Link to="/contact" className="hover:text-[var(--accent-primary)] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-2.5">
            <motion.a
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:fazil1ga22is053@gmail.com"
              className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] flex items-center justify-center transition-colors shadow-xs"
              aria-label="Email Fazil Arshiya"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/fazilarshiya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] flex items-center justify-center transition-colors shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/fazilarshiya77"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] flex items-center justify-center transition-colors shadow-xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </motion.a>
            
            <motion.button
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white flex items-center justify-center transition-all shadow-xs focus:outline-none ml-2 cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-sans text-xs text-[var(--text-secondary)]">
          <p>© {CURRENT_YEAR} Fazil Arshiya. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with React 19, TypeScript &amp; Tailwind CSS v4</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
