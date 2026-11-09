import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles, Terminal, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'spotlight' | 'stack' | 'impact'>('spotlight');

  const headlineWords = [
    { text: 'Designing', highlight: false },
    { text: 'digital', highlight: false },
    { text: 'products.', highlight: false },
    { text: 'Engineering', highlight: true },
    { text: 'web', highlight: true },
    { text: 'apps.', highlight: true },
  ];

  const marqueeItems = [
    'React 19 & Vite',
    'Figma Design Systems',
    'Strict TypeScript',
    '5 Production Sites Deployed',
    'Tailwind CSS v4',
    'CRM & Inquiry Pipelines',
    '₹250+ Cr Handled Scope',
    'WhatsApp Dispatch Webhooks',
    'Bengaluru, India',
    'Accessible Ergonomics (WCAG AA)',
  ];

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      
      {/* Animated Warm Atmospheric Glow Orbs */}
      <div 
        className="absolute top-12 left-10 w-96 h-96 rounded-full bg-[var(--accent-primary)]/10 blur-3xl pointer-events-none animate-float-slow -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--accent-gold)]/10 blur-3xl pointer-events-none animate-float-reverse -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clean, Powerful Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Pill with Ripple Animation */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Full-Time &amp; Contract Roles — 2026</span>
            </motion.div>

            {/* Staggered Animated Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1] flex flex-wrap gap-x-3 gap-y-1">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.45, 
                    delay: index * 0.07,
                    ease: [0.2, 0.65, 0.3, 0.9] 
                  }}
                  className={word.highlight ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl"
            >
              I’m <span className="font-bold text-[var(--text-primary)]">Fazil Arshiya</span>, a product designer and frontend engineer in Bengaluru. I build intuitive interfaces, accessible design systems, and resilient React 19 applications for commercial businesses.
            </motion.p>

            {/* Focused Action Row with Magnetic Spring Physics */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="pt-2 flex flex-wrap items-center gap-3.5 font-mono text-xs"
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold tracking-wide shadow-xs transition-all duration-150"
                >
                  <span>View Selected Work</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold transition-all duration-150 shadow-xs"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Minimalist Trust Indicator Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[var(--text-muted)] font-mono"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>5 Production Releases</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>₹250+ Cr Transaction Scope</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>📍 Bengaluru, India</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Advanced Interactive Spotlight Component with Sliding Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg">
              
              {/* Interactive Tabs Header with Framer Motion Sliding Indicator */}
              <div className="p-2 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex items-center justify-between gap-1.5 relative">
                {(['spotlight', 'stack', 'impact'] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  const label = tab === 'spotlight' ? 'Spotlight' : tab === 'stack' ? 'Tech Stack' : 'Impact SLA';

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="relative px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-colors z-10 flex-1 text-center"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="heroTabIndicator"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                          className="absolute inset-0 bg-[var(--bg-surface)] rounded-lg shadow-xs z-[-1]"
                        />
                      )}
                      <span className={isActive ? 'text-[var(--accent-primary)] font-bold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}>
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Interactive Body */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'spotlight' && (
                    <motion.div
                      key="spotlight"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                        <span>FLAGSHIP CASE STUDY</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Active Online</span>
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="font-heading font-bold text-xl text-[var(--text-primary)]">
                          Sarakki Homes Luxury Portal
                        </h3>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          End-to-end luxury residential discovery platform connecting property buyers with verified premium builders across South India.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="text-[10px] text-[var(--text-muted)] uppercase block">Scope Handled</span>
                          <span className="font-bold text-[var(--text-primary)]">₹250+ Cr Value</span>
                        </div>
                        <Link
                          to="/work"
                          className="inline-flex items-center gap-1 text-[var(--accent-primary)] font-bold hover:underline"
                        >
                          <span>Case Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'stack' && (
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3.5"
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                        <span>CORE ARCHITECTURE</span>
                        <span className="text-[var(--accent-primary)] font-bold">Strict TypeScript</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <Code2 className="w-3 h-3 text-[var(--accent-primary)]" />
                            <span className="font-bold text-[var(--text-primary)]">React 19 &amp; Vite</span>
                          </div>
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">Sub-second HMR</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <Terminal className="w-3 h-3 text-[var(--accent-primary)]" />
                            <span className="font-bold text-[var(--text-primary)]">TypeScript</span>
                          </div>
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">Zero runtime leaks</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <span className="font-bold text-[var(--text-primary)] block">Tailwind CSS v4</span>
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">Clean design tokens</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <span className="font-bold text-[var(--text-primary)] block">Figma Systems</span>
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">Pixel-accurate specs</span>
                        </div>
                      </div>

                      <Link
                        to="/capabilities"
                        className="block text-center text-xs font-mono font-bold text-[var(--accent-primary)] pt-1 hover:underline"
                      >
                        Inspect Full Technical Capabilities →
                      </Link>
                    </motion.div>
                  )}

                  {activeTab === 'impact' && (
                    <motion.div
                      key="impact"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                        <span>OPERATIONAL SLA</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">● High Availability</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <span className="text-[var(--text-secondary)]">Client Server Uptime</span>
                          <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">99.8%</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <span className="text-[var(--text-secondary)]">Avg. Inquiry Response</span>
                          <span className="font-mono font-bold text-[var(--text-primary)]">&lt; 24 Hours</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <span className="text-[var(--text-secondary)]">WhatsApp Dispatch Webhook</span>
                          <span className="font-mono font-bold text-[var(--accent-primary)]">Sub-30ms</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Quick Footer */}
              <div className="px-6 py-3 bg-[var(--bg-secondary)]/50 border-t border-[var(--border-color)] flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                <span>Fazil Arshiya • 2026 Core</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">● Verified Delivery</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Infinite Horizontal Marquee Ticker */}
      <div className="mt-14 pt-4 border-t border-[var(--border-color)] overflow-hidden">
        <div className="animate-marquee items-center gap-8 text-xs font-mono font-semibold text-[var(--text-secondary)]">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="hover:text-[var(--accent-primary)] transition-colors cursor-default">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] opacity-60" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
