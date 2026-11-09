import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Palette, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-36 overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      
      {/* Organic Animated Atmosphere Shapes (Peach, Butter Yellow & Lavender) */}
      <div 
        className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[var(--bg-peach)]/60 dark:bg-[var(--bg-peach)]/20 blur-3xl pointer-events-none -z-10 animate-float-slow" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-[var(--bg-butter)]/70 dark:bg-[var(--bg-butter)]/15 blur-3xl pointer-events-none -z-10 animate-float-reverse" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-[var(--bg-lavender)]/50 dark:bg-[var(--bg-lavender)]/15 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Expressive Headline, Introduction & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Availability Pill */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--bg-peach)] border border-[var(--border-orange)] text-[var(--text-primary)] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                <span>Available for UI/UX &amp; Frontend Roles 2026</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] shadow-xs">
                <span>📍 Bengaluru, India</span>
              </span>
            </motion.div>

            {/* Expressive Editorial Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.12]"
            >
              Crafting{' '}
              <span className="font-display-italic font-normal text-[var(--accent-primary)] relative inline-block">
                human-centered
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[var(--accent-butter)] opacity-80" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{' '}
              digital experiences with character.
            </motion.h1>

            {/* Introduction Bio */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl"
            >
              I’m <span className="text-[var(--text-primary)] font-bold">Fazil Arshiya</span>, a product designer and frontend engineer. I merge visual storytelling, accessible UX research, and production React 19 architecture to build websites that look striking, convert customers, and scale reliably.
            </motion.p>

            {/* Interactive Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold tracking-wide uppercase shadow-md shadow-[var(--accent-primary)]/20 hover:shadow-lg transition-all duration-200 group focus:outline-none"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#admin-showcase"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-peach)]/60 text-[var(--text-primary)] font-bold tracking-wide uppercase transition-all duration-200 shadow-xs focus:outline-none"
              >
                <span>Admin &amp; CRM Systems</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              </a>
            </motion.div>

            {/* Quick Skills Pill Strip */}
            <motion.div variants={itemVariants} className="pt-3 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[var(--text-secondary)]">
              <span className="px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs">
                ⚡ React 19 &amp; TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs">
                🎨 Figma Design Systems
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs">
                🚀 5 Active Production Deployments
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Layered Creative Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Interactive Preview Card */}
            <div className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-7 shadow-xl shadow-[var(--shadow-card)] space-y-5">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-[var(--accent-butter)]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    Fazil Arshiya • Portfolio Core
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[var(--bg-butter)] text-[var(--accent-butter-dark)] border border-[var(--accent-butter)]/50">
                  Live Preview
                </span>
              </div>

              {/* Featured Case Study Snippet: Sarakki Homes */}
              <div className="group rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 p-4 transition-all hover:border-[var(--accent-primary)]">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-2">
                  <span className="font-bold text-[var(--accent-primary)]">CASE 01 / FEATURED</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● Production Active</span>
                </div>
                <h3 className="font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  Sarakki Homes Web Platform
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
                  Premium luxury real-estate portal connecting prospective buyers with verified builders across South India.
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[var(--text-muted)]">₹250+ Cr Transacted</span>
                  <a 
                    href="#work" 
                    className="text-[var(--accent-primary)] font-bold flex items-center gap-1 hover:underline"
                  >
                    <span>View Case</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Second Case Study Snippet: Winter Cab Service */}
              <div className="group rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-lavender)]/50 p-4 transition-all hover:border-[var(--accent-lavender-dark)]">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-2">
                  <span className="font-bold text-[var(--accent-lavender-dark)]">CASE 02 / REAL-TIME</span>
                  <span className="text-[var(--accent-primary)] font-semibold">● Instant Dispatch</span>
                </div>
                <h3 className="font-bold text-lg text-[var(--text-primary)] transition-colors">
                  Winter Cab Service
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
                  Interactive travel calculator, multi-tier fleet catalog, and 24/7 WhatsApp dispatch integration.
                </p>
              </div>

              {/* Core Pillars Mini Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <div className="flex items-center gap-1.5 text-[var(--accent-primary)] font-bold font-mono text-[11px]">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Design Systems</span>
                  </div>
                  <span className="text-[11px] text-[var(--text-secondary)] mt-1 block">
                    Figma tokens &amp; accessible UX
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold font-mono text-[11px]">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>React 19 Core</span>
                  </div>
                  <span className="text-[11px] text-[var(--text-secondary)] mt-1 block">
                    Type safety &amp; sub-second HMR
                  </span>
                </div>
              </div>

            </div>

            {/* Floating Graphic Badge: 100% Deployed */}
            <motion.div 
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-[var(--bg-peach)] border border-[var(--border-orange)] p-3.5 rounded-2xl shadow-lg flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 rounded-xl bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left font-mono">
                <span className="text-xs font-bold text-[var(--text-primary)] block">5 Commercial Sites</span>
                <span className="text-[10px] text-[var(--accent-primary)] font-semibold">100% Client Verified</span>
              </div>
            </motion.div>

            {/* Floating Graphic Badge: Methodology */}
            <motion.div 
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 bg-[var(--bg-butter)] border border-[var(--accent-butter)]/60 p-3 rounded-2xl shadow-lg flex items-center gap-2.5 hidden sm:flex"
            >
              <Sparkles className="w-4 h-4 text-[var(--accent-butter-dark)]" />
              <span className="text-[11px] font-mono font-bold text-[var(--text-primary)]">
                4-Stage Engineering Process
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
