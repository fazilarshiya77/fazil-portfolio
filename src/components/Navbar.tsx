import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/theme';
import { Sun, Moon, Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CommandPalette } from './CommandPalette';
import { SparkleStar } from './SparkleStar';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-color)] shadow-xs'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Monogram */}
            <Link
              to="/"
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Fazil Arshiya - Home"
            >
              <div className="w-8 h-8 rounded-xl bg-[#B8B0EA] text-[#232035] flex items-center justify-center font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
                FA
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1">
                  <span>Fazil Arshiya</span>
                  <SparkleStar size={12} className="text-[#B8B0EA]" />
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                  Product Designer &amp; Dev
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Controls: Quick Search Cmd+K, Theme Toggle & Contact Button */}
            <div className="flex items-center gap-2.5">
              
              {/* Cmd+K Search Trigger */}
              <button
                onClick={() => setCommandPaletteOpen(true)}
                className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] text-xs font-mono transition-colors shadow-xs"
                title="Quick Command Palette (Ctrl+K or ⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span className="text-[11px]">Search</span>
                <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={toggleTheme}
                type="button"
                className="w-8 h-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] flex items-center justify-center transition-colors shadow-xs focus:outline-none"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-[var(--accent-primary)]" />
                )}
              </button>

              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="md:hidden w-8 h-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] flex items-center justify-center transition-colors shadow-xs focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
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
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-[var(--bg-surface)] border-l border-[var(--border-color)] p-6 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-xs">
                      FA
                    </div>
                    <span className="font-heading font-bold text-sm text-[var(--text-primary)]">
                      Navigation
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === '/'}
                      onClick={handleLinkClick}
                      className={({ isActive }) => `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[var(--accent-primary)] text-white'
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCommandPaletteOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-xs font-mono font-bold"
                >
                  <Search className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>Search &amp; Jump (⌘K)</span>
                </button>

                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="w-full text-center py-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-xs font-semibold block shadow-xs transition-colors"
                >
                  Contact Direct →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Interactive Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
};
