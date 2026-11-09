import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'spotlight' | 'stack' | 'impact'>('spotlight');

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      
      {/* Subtle Ambient Tech Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent-primary)]/5 blur-3xl rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clean, Powerful Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-Time &amp; Contract Roles — 2026</span>
            </div>

            {/* Bold, Clean Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
              Designing digital products.{' '}
              <span className="text-[var(--accent-primary)]">Engineering web apps.</span>
            </h1>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl">
              I’m <span className="font-bold text-[var(--text-primary)]">Fazil Arshiya</span>, a product designer and frontend engineer in Bengaluru. I build intuitive interfaces, accessible design systems, and resilient React 19 applications for commercial businesses.
            </p>

            {/* Focused Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 font-mono text-xs">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-150"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold transition-all duration-150 shadow-xs"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              </Link>
            </div>

            {/* Minimalist Trust Indicator Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[var(--text-muted)] font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>5 Production Releases</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>₹250+ Cr Transaction Scope</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>📍 Bengaluru, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Advanced Interactive Spotlight Component */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-md overflow-hidden">
              
              {/* Interactive Tabs Header */}
              <div className="p-2 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex items-center justify-between gap-1.5">
                <button
                  onClick={() => setActiveTab('spotlight')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                    activeTab === 'spotlight'
                      ? 'bg-[var(--bg-surface)] text-[var(--accent-primary)] shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Spotlight
                </button>

                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                    activeTab === 'stack'
                      ? 'bg-[var(--bg-surface)] text-[var(--accent-primary)] shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Tech Stack
                </button>

                <button
                  onClick={() => setActiveTab('impact')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                    activeTab === 'impact'
                      ? 'bg-[var(--bg-surface)] text-[var(--accent-primary)] shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Impact SLA
                </button>
              </div>

              {/* Dynamic Interactive Body */}
              <div className="p-6">
                {activeTab === 'spotlight' && (
                  <motion.div
                    key="spotlight"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                      <span>FLAGSHIP CASE STUDY</span>
                      <span className="text-emerald-500 font-bold">● Active Online</span>
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
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                      <span>CORE ARCHITECTURE</span>
                      <span className="text-[var(--accent-primary)] font-bold">Strict TypeScript</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                        <span className="font-bold text-[var(--text-primary)] block">React 19 &amp; Vite</span>
                        <span className="text-[10px] text-[var(--text-muted)] font-mono">Sub-second HMR</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                        <span className="font-bold text-[var(--text-primary)] block">TypeScript</span>
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
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                      <span>OPERATIONAL SLA</span>
                      <span className="text-emerald-500 font-bold">● High Availability</span>
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
              </div>

              {/* Bottom Quick Footer */}
              <div className="px-6 py-3 bg-[var(--bg-secondary)]/50 border-t border-[var(--border-color)] flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                <span>Fazil Arshiya • 2026 Core</span>
                <span className="text-emerald-500 font-bold">● Verified Delivery</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
