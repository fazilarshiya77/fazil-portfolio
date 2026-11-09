import React, { useState } from 'react';
import { skillsCategories } from '../data/skills';
import { Palette, Layout, Database, Sparkles, GitBranch, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-4 h-4" />;
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  const filteredCategories = selectedCategoryId === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === selectedCategoryId);

  return (
    <section id="skills" className="py-12 sm:py-16 bg-[var(--bg-primary)] scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-[var(--border-color)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] mb-3 shadow-xs">
              <span>01</span>
              <span>/</span>
              <span>Capabilities &amp; Stack</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Technical Stack &amp; Disciplines
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              A comprehensive toolkit spanning design systems, performant frontend architecture, and modern agentic engineering workflows.
            </p>
          </div>
        </div>

        {/* Category Filters Bar with Sliding Pill */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar font-sans text-xs">
          <button
            onClick={() => setSelectedCategoryId('all')}
            className="relative px-4 py-2 rounded-xl transition-colors duration-150 flex items-center gap-2 font-bold focus:outline-none"
          >
            {selectedCategoryId === 'all' ? (
              <motion.div
                layoutId="skillsTabPill"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                className="absolute inset-0 bg-[var(--accent-primary)] rounded-xl shadow-xs z-0"
              />
            ) : (
              <div className="absolute inset-0 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl z-0" />
            )}
            <span className={`relative z-10 ${selectedCategoryId === 'all' ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
              All Categories
            </span>
          </button>
          
          {skillsCategories.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className="relative px-4 py-2 rounded-xl transition-colors duration-150 flex items-center gap-2 whitespace-nowrap font-bold focus:outline-none"
              >
                {isSelected ? (
                  <motion.div
                    layoutId="skillsTabPill"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    className="absolute inset-0 bg-[var(--accent-primary)] rounded-xl shadow-xs z-0"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl z-0" />
                )}
                <span className={`relative z-10 ${isSelected ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                  {getCategoryIcon(cat.iconName)}
                </span>
                <span className={`relative z-10 ${isSelected ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((category) => {
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-7 shadow-xs hover:border-[var(--accent-primary)] transition-all flex flex-col justify-between ${
                  category.id === 'ai-workflows' ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-color)]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
                        {category.name}
                      </h3>
                    </div>
                    <span className="font-sans text-xs font-semibold px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                      {category.skills.length} Items
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skill Items */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/40 hover:bg-[var(--bg-surface)] hover:border-[var(--accent-primary)] transition-colors"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                            {skill.isHighlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                            )}
                            <span>{skill.name}</span>
                          </span>
                          {skill.isHighlight && (
                            <span className="font-sans text-[10px] uppercase font-bold text-[var(--accent-primary)] px-2 py-0.5 rounded bg-[var(--accent-primary-soft)]">
                              Core
                            </span>
                          )}
                        </div>
                        {skill.roleInWorkflow && (
                          <p className="text-xs text-[var(--text-secondary)] font-normal mt-1 leading-snug">
                            {skill.roleInWorkflow}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between font-sans text-xs text-[var(--text-muted)]">
                  <span>Applied in Production</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Deployed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Thoughtful AI Philosophy Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-3xl">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
              Perspective / Engineering Philosophy
            </span>
            <h4 className="font-heading text-xl font-bold text-[var(--text-primary)] tracking-tight">
              AI Tools as an Engineering Accelerator, Not a Substitute
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Foundational design systems, semantic HTML, and strict TypeScript interfaces provide the architecture; modern agentic models (Claude, Gemini, Antigravity) accelerate prototyping, test scaffolding, and continuous refactoring without sacrificing human craftsmanship.
            </p>
          </div>

          <div className="shrink-0 px-4 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] font-sans text-xs font-bold text-[var(--accent-primary)] shadow-xs">
            Accelerated Delivery
          </div>
        </div>

      </div>
    </section>
  );
};
