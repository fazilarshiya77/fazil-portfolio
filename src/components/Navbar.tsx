import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/theme';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work', number: '01' },
    { label: 'Architecture', href: '#admin-showcase', number: '02' },
    { label: 'Capabilities', href: '#skills', number: '03' },
    { label: 'Process', href: '#process', number: '04' },
    { label: 'About', href: '#about', number: '05' },
    { label: 'Contact', href: '#contact', number: '06' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Restrained Hairline Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-[var(--accent)] transition-all duration-150 ease-out opacity-80"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header Container */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'py-3.5 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)]'
            : 'py-5 sm:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Wordmark & Identity */}
            <a
              href="#"
              className="group flex items-baseline gap-3 focus:outline-none"
              aria-label="Fazil Arshiya - Home"
            >
              <span className="font-semibold text-sm sm:text-base tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                Fazil Arshiya
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
                / Bengaluru
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-[var(--text-secondary)]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[var(--text-primary)] transition-colors relative py-1 focus:outline-none group"
                >
                  <span className="text-[10px] text-[var(--text-muted)] mr-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    {link.number}
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Right Controls: Theme Toggle & Inquire CTA */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                type="button"
                className="w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] flex items-center justify-center transition-colors focus:outline-none"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}
              </button>

              {/* Inquire CTA */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-transparent hover:text-[var(--text-primary)] text-xs font-medium transition-all duration-150 focus:outline-none"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="md:hidden w-8 h-8 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] flex items-center justify-center transition-colors focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-[var(--bg-surface)] border-l border-[var(--border)] p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[var(--border)]">
                  <div>
                    <span className="font-semibold text-sm text-[var(--text-primary)]">
                      Fazil Arshiya
                    </span>
                    <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                      Portfolio Index
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="px-3 py-3 rounded-md text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[var(--text-muted)]">
                          {link.number}
                        </span>
                        <span>{link.label}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[var(--border)] space-y-4">
                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span>Theme</span>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs"
                  >
                    {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                    <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                  </button>
                </div>

                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full text-center py-2.5 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-medium tracking-wide uppercase font-mono block hover:opacity-90 transition-opacity"
                >
                  Contact Direct →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
