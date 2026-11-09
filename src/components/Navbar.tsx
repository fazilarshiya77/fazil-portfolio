import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/theme';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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
    { label: 'Home', path: '/', number: '01' },
    { label: 'Work', path: '/work', number: '02' },
    { label: 'About', path: '/about', number: '03' },
    { label: 'Capabilities', path: '/capabilities', number: '04' },
    { label: 'Process', path: '/process', number: '05' },
    { label: 'Contact', path: '/contact', number: '06' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Dynamic Burnt Orange Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-butter)] to-[var(--accent-primary)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header Container */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] shadow-xs'
            : 'py-5 sm:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Wordmark & Animated Brand Pill */}
            <Link
              to="/"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Fazil Arshiya - Home"
            >
              <div className="w-9 h-9 rounded-xl bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 group-hover:rotate-[-3deg] transition-transform duration-200">
                FA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  Fazil Arshiya
                </span>
                <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Product Designer &amp; Frontend
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 relative ${
                    isActive
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/50'
                  }`}
                >
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Right Controls: Theme Toggle & Inquire CTA */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                type="button"
                className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] flex items-center justify-center transition-all duration-200 shadow-xs focus:outline-none"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[var(--accent-butter)] transition-transform duration-300 hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 text-[var(--accent-primary)] transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              {/* Lively CTA Link to /contact */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all duration-200 group focus:outline-none"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="md:hidden w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] flex items-center justify-center transition-colors shadow-xs focus:outline-none"
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-black/50 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-[var(--bg-surface)] border-l border-[var(--border-color)] p-6 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-xs">
                      FA
                    </div>
                    <div>
                      <span className="font-bold text-sm text-[var(--text-primary)] block">
                        Fazil Arshiya
                      </span>
                      <span className="font-mono text-[10px] text-[var(--text-secondary)]">
                        Portfolio Navigation
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === '/'}
                      onClick={handleLinkClick}
                      className={({ isActive }) => `px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-primary)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs opacity-75">
                          {link.number}
                        </span>
                        <span>{link.label}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[var(--border-color)] space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs text-[var(--text-secondary)] font-medium">Appearance</span>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs font-semibold"
                  >
                    {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[var(--accent-butter)]" /> : <Moon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                    <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>

                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="w-full text-center py-3 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-xs font-bold tracking-wider uppercase font-mono block shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
