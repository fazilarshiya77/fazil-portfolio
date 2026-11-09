import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { SparkleStar } from '../components/SparkleStar';
import { projectsData, type Project } from '../data/projects';
import { PageTransition } from '../components/PageTransition';
import { ArrowRight } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const HomePage: React.FC = () => {
  useDocumentTitle('Product Designer & Frontend Engineer');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Selected top 2 projects for the homepage curated preview
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <PageTransition>
      <div className="relative pb-24 space-y-16 sm:space-y-24">
        
        {/* 1. Top Hero Slide Card (Matches Reference Card 1) */}
        <Hero />

        {/* 2. Dual Bento Slide Cards: About Me (Peach) & Capabilities (Lavender) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Card A: About Me (Soft Peach Card - Matches Reference Row 2 Left) */}
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative rounded-[2.5rem] bg-[#F8D8C8] dark:bg-[#3D2825] text-[#2D2320] dark:text-[#FFF0EB] p-8 sm:p-12 shadow-xl hover:shadow-2xl flex flex-col justify-between overflow-hidden group/card"
            >
              {/* Sparkling Stars with Gentle Float */}
              <motion.div 
                animate={{ y: [0, -6, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 right-12"
              >
                <SparkleStar size={24} delay={0} className="text-[#2D2320]/25 dark:text-white/30" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 6, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-10"
              >
                <SparkleStar size={20} delay={1} className="text-[#2D2320]/20 dark:text-white/20" />
              </motion.div>

              <div className="relative z-10 space-y-6">
                
                {/* Header with Organic Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-[#2D2320]/70 dark:text-[#FFF0EB]/70 font-bold block mb-1">
                      01 / About Me
                    </span>
                    <h3 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
                      Design-Minded.{' '}
                      <span className="font-signature text-4xl sm:text-5xl text-[#7562E0] dark:text-[#9D8DF8] font-bold block sm:inline">
                        Code-Grounded.
                      </span>
                    </h3>
                  </div>

                  {/* Organic Heart/Curved Portrait Monogram (Matches Reference Cutout) */}
                  <motion.div 
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white dark:bg-[#2A1D1A] flex items-center justify-center shadow-md shrink-0 border-2 border-white/60 dark:border-white/10 cursor-pointer"
                  >
                    <span className="font-heading font-black text-2xl text-[#2D2320] dark:text-white">FA</span>
                  </motion.div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[#2D2320]/90 dark:text-[#FFF0EB]/90">
                  Hi! I'm <strong className="font-bold">Fazil Arshiya</strong>, a digital product designer and frontend engineer in Bengaluru. I bridge user research, modern visual identity, and production React 19 architecture across real estate, logistics, events, and travel.
                </p>

                {/* Tool Badges with Hover Springs */}
                <div className="flex flex-wrap items-center gap-2 pt-2 font-sans text-xs">
                  {['Figma', 'React 19', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      className="px-3.5 py-1.5 rounded-full bg-white/75 dark:bg-white/10 text-[#2D2320] dark:text-white font-semibold shadow-xs cursor-default hover:bg-white transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </div>

              {/* Bottom Row Navigation */}
              <div className="relative z-10 pt-8 mt-6 border-t border-[#2D2320]/15 dark:border-white/10 flex items-center justify-between">
                <span className="font-sans text-xs text-[#2D2320]/70 dark:text-[#FFF0EB]/70 font-medium">
                  📍 Bengaluru, India
                </span>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2D2320] text-white hover:bg-black transition-all font-sans text-xs font-semibold shadow-md"
                  >
                    <span>Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Card B: Digital Presence & Stack (Soft Lavender Card - Matches Reference Row 2 Right) */}
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative rounded-[2.5rem] bg-[#B8B0EA] dark:bg-[#312A50] text-[#232035] dark:text-[#F8F6FF] p-8 sm:p-12 shadow-xl hover:shadow-2xl flex flex-col justify-between overflow-hidden group/card"
            >
              {/* Sparkling Stars with Gentle Float */}
              <motion.div 
                animate={{ y: [0, -6, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 left-12"
              >
                <SparkleStar size={24} delay={0} className="text-white opacity-85" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 6, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 right-12"
              >
                <SparkleStar size={22} delay={2} className="text-white opacity-75" />
              </motion.div>

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#232035]/70 dark:text-[#F8F6FF]/70 font-bold block mb-1">
                    02 / Capabilities &amp; Operations
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Beyond the Frontend
                  </h3>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[#232035]/90 dark:text-[#F8F6FF]/90">
                  Real digital products succeed when their administrative workflows are just as polished as public landing pages. I design interactive CRM consoles, lead triage matrices, and WhatsApp dispatch pipelines.
                </p>

                {/* Perspective Metric Indicators with Animated Counter */}
                <div className="grid grid-cols-2 gap-3 font-sans text-xs pt-1">
                  <motion.div 
                    whileHover={{ scale: 1.04 }}
                    className="p-3.5 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xs transition-transform"
                  >
                    <AnimatedCounter value={5} prefix="0" className="text-2xl font-black block text-[#232035] dark:text-white" />
                    <span className="text-[11px] font-semibold text-[#232035]/80 dark:text-white/80">Active Websites</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.04 }}
                    className="p-3.5 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xs transition-transform"
                  >
                    <span className="text-2xl font-black block text-[#232035] dark:text-white">&lt;24h</span>
                    <span className="text-[11px] font-semibold text-[#232035]/80 dark:text-white/80">Response SLA</span>
                  </motion.div>
                </div>

              </div>

              {/* Bottom Row Navigation */}
              <div className="relative z-10 pt-8 mt-6 border-t border-white/20 dark:border-white/10 flex items-center justify-between">
                <span className="font-sans text-xs text-[#232035]/70 dark:text-[#F8F6FF]/70 font-medium">
                  Interactive CRM Console Active
                </span>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/capabilities"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#232035] hover:bg-white/90 transition-all font-sans text-xs font-semibold shadow-md"
                  >
                    <span>Explore Stack</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 3. "My Projects" Showcase (Matches Reference Row 3 & 4) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-color)]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-bold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] shadow-xs">
                <span>03 / Commercial Showcase</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight">
                My Projects
              </h2>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold text-[var(--accent-primary)] hover:underline"
            >
              <span>Explore All 5 Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Project Cards Exhibition */}
          <div className="space-y-12">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenDetails={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>

        </section>

        {/* 4. "Let's work together!" Contact Banner (Matches Reference Row 5 Card) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-[2.5rem] bg-[#B8B0EA] dark:bg-[#312A50] text-[#232035] dark:text-[#F8F6FF] p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden"
          >
            {/* Sparkling Stars */}
            <div className="absolute top-8 left-12">
              <SparkleStar size={32} delay={0} className="text-white opacity-90" />
            </div>
            <div className="absolute bottom-10 right-14">
              <SparkleStar size={28} delay={1} className="text-white opacity-80" />
            </div>
            <div className="absolute top-1/2 right-1/4">
              <SparkleStar size={20} delay={2} className="text-white opacity-70" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              <div className="space-y-4 max-w-xl">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#232035]/80 dark:text-white/80 block">
                  Available for 2026 Collaborations
                </span>

                <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white dark:text-[#F8F6FF] tracking-tight leading-tight">
                  Let's work{' '}
                  <span className="font-signature text-5xl sm:text-7xl lg:text-8xl text-[#232035] dark:text-white block sm:inline">
                    together!
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#232035]/90 dark:text-[#F8F6FF]/90 leading-relaxed font-medium">
                  Have an ambitious web app, responsive redesign, or high-conversion product in mind? Let’s initiate a conversation.
                </p>
              </div>

              {/* Direct Quick Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0 font-sans text-xs">
                <Link
                  to="/contact"
                  className="px-6 py-4 rounded-full bg-[#232035] text-white hover:bg-black font-bold tracking-wider uppercase text-center shadow-lg transition-all"
                >
                  <span>Start a Project →</span>
                </Link>

                <a
                  href="mailto:fazil1ga22is053@gmail.com"
                  className="px-6 py-4 rounded-full bg-white text-[#232035] hover:bg-white/90 font-bold tracking-wider uppercase text-center shadow-lg transition-all"
                >
                  <span>Copy Email</span>
                </a>
              </div>

            </div>
          </motion.div>
        </section>

      </div>

      {/* Case Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onSelectProject={(p) => setActiveModalProject(p)}
      />
    </PageTransition>
  );
};
