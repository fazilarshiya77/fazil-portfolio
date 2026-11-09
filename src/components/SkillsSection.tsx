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

  const getCategoryColor = (id: string) => {
    switch (id) {
      case 'ui-ux': return { bg: 'bg-[var(--bg-butter)]', text: 'text-[var(--accent-butter-dark)]', border: 'border-[var(--accent-butter)]' };
      case 'frontend': return { bg: 'bg-[var(--bg-peach)]', text: 'text-[var(--accent-primary)]', border: 'border-[var(--border-orange)]' };
      case 'backend': return { bg: 'bg-[var(--bg-lavender)]', text: 'text-[var(--accent-lavender-dark)]', border: 'border-[var(--border-lavender)]' };
      case 'ai-workflows': return { bg: 'bg-emerald-50 dark:bg-emerald-950/40', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-300 dark:border-emerald-800' };
      default: return { bg: 'bg-[var(--bg-secondary)]', text: 'text-[var(--text-primary)]', border: 'border-[var(--border-color)]' };
    }
  };

  const filteredCategories = selectedCategoryId === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === selectedCategoryId);

  return (
    <section id="skills" className="py-20 sm:py-28 md:py-36 bg-[var(--bg-primary)] border-b border-[var(--border-color)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border-color)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-butter)] text-[var(--accent-butter-dark)] border border-[var(--accent-butter)]/60 mb-3 shadow-xs">
              <span>04</span>
              <span>/</span>
              <span>Capabilities &amp; Stack</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Technical Stack &amp; Disciplines
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              A comprehensive toolkit spanning design systems, performant frontend architecture, and modern agentic engineering workflows.
            </p>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar font-mono text-xs">
          <button
            onClick={() => setSelectedCategoryId('all')}
            className={`px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 font-bold focus:outline-none shadow-xs ${
              selectedCategoryId === 'all'
                ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/20'
                : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
            }`}
          >
            <span>All Categories</span>
          </button>
          
          {skillsCategories.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap font-bold focus:outline-none shadow-xs ${
                  isSelected
                    ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/20'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                }`}
              >
                <span>{getCategoryIcon(cat.iconName)}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            const colors = getCategoryColor(category.id);

            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[var(--accent-primary)] transition-all flex flex-col justify-between ${
                  category.id === 'ai-workflows' ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-color)]">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center font-bold`}>
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
                        {category.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                      {category.skills.length} Items
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skill Items */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-peach)]/30 hover:border-[var(--border-orange)] transition-colors"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                            {skill.isHighlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                            )}
                            <span>{skill.name}</span>
                          </span>
                          {skill.isHighlight && (
                            <span className="font-mono text-[10px] uppercase font-bold text-[var(--accent-primary)] px-2 py-0.5 rounded bg-[var(--bg-peach)]">
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

                <div className="mt-8 pt-4 border-t border-[var(--border-color)] flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
                  <span>Applied in Production</span>
                  <span className="text-[var(--accent-primary)] font-bold">100% Deployed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Thoughtful AI Philosophy Callout Banner */}
        <div className="mt-12 p-8 rounded-3xl border border-[var(--border-orange)] bg-[var(--bg-peach)]/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
              Perspective / Engineering Philosophy
            </span>
            <h4 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight">
              AI Tools as an Engineering Accelerator, Not a Substitute
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Foundational design systems, semantic HTML, and strict TypeScript interfaces provide the architecture; modern agentic models (Claude, Gemini, Antigravity) accelerate prototyping, test scaffolding, and continuous refactoring without sacrificing human craftsmanship.
            </p>
          </div>

          <div className="shrink-0 px-4 py-2 rounded-xl bg-white dark:bg-[#1C1D1A] border border-[var(--border-orange)] font-mono text-xs font-bold text-[var(--accent-primary)] shadow-xs">
            Accelerated Delivery
          </div>
        </div>

      </div>
    </section>
  );
};
