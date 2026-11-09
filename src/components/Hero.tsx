import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles, Terminal, Code2, Mail } from 'lucide-react';
import { SparkleStar } from './SparkleStar';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'spotlight' | 'stack' | 'impact'>('spotlight');

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
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-[var(--bg-primary)]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Reference Card: Big Dreamy Lavender Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-[#B8B0EA] dark:bg-[#312A50] text-[#232035] dark:text-[#F8F6FF] p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden"
        >
          {/* Animated Sparkling Stars Scattered Across Card */}
          <div className="absolute top-8 left-12">
            <SparkleStar size={26} delay={0} className="text-white opacity-85" />
          </div>
          <div className="absolute top-16 right-20">
            <SparkleStar size={32} delay={1} className="text-white opacity-95" />
          </div>
          <div className="absolute bottom-24 left-24">
            <SparkleStar size={28} delay={2} className="text-white opacity-80" />
          </div>
          <div className="absolute top-1/2 right-12">
            <SparkleStar size={22} delay={1} className="text-white opacity-70" />
          </div>
          <div className="absolute bottom-16 right-1/3">
            <SparkleStar size={18} delay={0} className="text-white opacity-75" />
          </div>

          {/* Top Specification Bar (Matches Reference Top Row) */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#232035]/80 dark:text-[#F8F6FF]/80 uppercase tracking-wider pb-6">
            <div className="flex items-center gap-2 font-bold">
              <span>Creative Presentation</span>
              <span>/</span>
              <span className="text-[#232035] dark:text-white">Product Designer &amp; Dev</span>
            </div>

            <div className="flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Fazil Arshiya • 2026</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Massive Centerpiece: "portfolio" with Cursive Signature "Fazil Arshiya" */}
          <div className="relative z-10 py-12 sm:py-20 lg:py-24 text-center select-none">
            
            {/* Giant Geometric Sans "portfolio" Title */}
            <motion.h1 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black text-white dark:text-[#F8F6FF] tracking-tight leading-none drop-shadow-sm lowercase"
            >
              portfolio
            </motion.h1>

            {/* Handwritten Signature Script Overlay Layered Across the Word */}
            <motion.div
              initial={{ opacity: 0, y: 16, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <span className="font-signature text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#232035] dark:text-white drop-shadow-md tracking-wide px-4">
                Fazil Arshiya
              </span>
            </motion.div>

          </div>

          {/* Bottom Social Pills Strip (Directly Matches Reference Bottom Row) */}
          <div className="relative z-10 pt-6 border-t border-white/20 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            
            <div className="flex flex-wrap items-center gap-2.5">
              {/* LinkedIn Pill */}
              <a
                href="https://www.linkedin.com/in/fazilarshiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#232035] text-white hover:bg-black transition-all shadow-sm"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#B8B0EA]" />
                <span className="font-bold text-[11px]">in / fazilarshiya</span>
              </a>

              {/* Email Pill */}
              <a
                href="mailto:fazil1ga22is053@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#232035] text-white hover:bg-black transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-[#B8B0EA]" />
                <span className="font-bold text-[11px]">fazil1ga22is053@gmail.com</span>
              </a>

              {/* GitHub Pill */}
              <a
                href="https://github.com/fazilarshiya77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#232035] text-white hover:bg-black transition-all shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#B8B0EA]" />
                <span className="font-bold text-[11px]">@fazilarshiya77</span>
              </a>

              {/* Active Deployment Badge */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/20 dark:bg-white/10 text-[#232035] dark:text-white font-bold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>5 Active Deployments</span>
              </div>
            </div>

            {/* Quick Action Navigation CTAs */}
            <div className="flex items-center gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-[#232035] font-bold shadow-md hover:bg-white/90 transition-all"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#232035]/40 dark:border-white/30 hover:bg-[#232035] hover:text-white transition-all font-bold"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </motion.div>

        {/* Supporting Interactive Console Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Left Text Intro */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bengaluru, India • Available for 2026</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Designing delightful user journeys.{' '}
              <span className="text-[var(--accent-primary)]">
                Engineering reliable software.
              </span>
            </h2>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              I partner with product teams and growing businesses to transform complex operational requirements into intuitive design systems and sub-second React 19 web applications.
            </p>
          </div>

          {/* Right Interactive 3-Tab Console Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-md overflow-hidden">
              {/* Sliding Pill Header */}
              <div className="p-2 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex items-center justify-between gap-1 relative">
                {(['spotlight', 'stack', 'impact'] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  const label = tab === 'spotlight' ? 'Spotlight' : tab === 'stack' ? 'Tech Stack' : 'Impact SLA';

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="relative px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-colors z-10 flex-1 text-center"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="heroTabIndicator"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                          className="absolute inset-0 bg-[#B8B0EA] text-white rounded-xl shadow-xs z-0"
                        />
                      )}
                      <span className={`relative z-10 ${isActive ? 'text-white font-bold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Tab Body */}
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

                      <div className="space-y-1">
                        <h3 className="font-heading font-bold text-xl text-[var(--text-primary)]">
                          Sarakki Homes Luxury Portal
                        </h3>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          End-to-end luxury residential discovery platform connecting property buyers with verified premium builders across South India.
                        </p>
                      </div>

                      <div className="p-3 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-between text-xs font-mono">
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
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                        <span>CORE ARCHITECTURE</span>
                        <span className="text-[var(--accent-primary)] font-bold">Strict TypeScript</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <div className="flex items-center gap-1 mb-0.5">
                            <Code2 className="w-3 h-3 text-[var(--accent-primary)]" />
                            <span className="font-bold text-[var(--text-primary)]">React 19 &amp; Vite</span>
                          </div>
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">Sub-second HMR</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <div className="flex items-center gap-1 mb-0.5">
                            <Terminal className="w-3 h-3 text-[var(--accent-primary)]" />
                            <span className="font-bold text-[var(--text-primary)]">TypeScript</span>
                          </div>
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">Zero runtime leaks</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <span className="font-bold text-[var(--text-primary)] block">Tailwind CSS v4</span>
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">Clean design tokens</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
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
                      className="space-y-2.5"
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                        <span>OPERATIONAL SLA</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">● High Availability</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <span className="text-[var(--text-secondary)]">Client Server Uptime</span>
                          <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">99.8%</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <span className="text-[var(--text-secondary)]">Avg. Inquiry Response</span>
                          <span className="font-mono font-bold text-[var(--text-primary)]">&lt; 24 Hours</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          <span className="text-[var(--text-secondary)]">WhatsApp Dispatch Webhook</span>
                          <span className="font-mono font-bold text-[var(--accent-primary)]">Sub-30ms</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Quick Footer */}
              <div className="px-6 py-2.5 bg-[var(--bg-secondary)]/50 border-t border-[var(--border-color)] flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                <span>Fazil Arshiya • 2026 Core</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">● Verified Delivery</span>
              </div>
            </div>
          </div>

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
