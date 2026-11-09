import React, { useState } from 'react';
import { skillsCategories } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const filteredCategories = selectedCategoryId === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === selectedCategoryId);

  return (
    <section id="skills" className="py-20 sm:py-28 md:py-36 border-b border-[var(--border)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] mb-3">
              <span>03</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span>Capabilities &amp; Tooling</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
              Technical Stack &amp; Disciplines
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              A disciplined toolkit spanning visual design systems, component architecture, and modern AI-augmented delivery workflows.
            </p>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar font-mono text-xs">
          <button
            onClick={() => setSelectedCategoryId('all')}
            className={`px-3.5 py-1.5 rounded-md transition-all duration-150 flex items-center gap-2 focus:outline-none ${
              selectedCategoryId === 'all'
                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium'
                : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]'
            }`}
          >
            <span>All Categories</span>
          </button>
          
          {skillsCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`px-3.5 py-1.5 rounded-md transition-all duration-150 flex items-center gap-2 whitespace-nowrap focus:outline-none ${
                selectedCategoryId === cat.id
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]'
              }`}
            >
              <span className="opacity-60 text-[10px]">0{idx + 1}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Editorial Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredCategories.map((category, idx) => (
            <div
              key={category.id}
              className={`border border-[var(--border)] bg-[var(--bg-surface)] p-6 sm:p-8 rounded-lg flex flex-col justify-between ${
                category.id === 'ai-workflows' ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border)] font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  <span>0{idx + 1} / {category.name}</span>
                  <span>{category.skills.length} Items</span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Structured Skill Items */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 hover:border-[var(--text-muted)] transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                          {skill.isHighlight && (
                            <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                        {skill.isHighlight && (
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--accent)]">
                            Core
                          </span>
                        )}
                      </div>
                      {skill.roleInWorkflow && (
                        <p className="text-[11px] text-[var(--text-muted)] font-light mt-1 leading-snug">
                          {skill.roleInWorkflow}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Colophon */}
              <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                <span>Production Tested</span>
                <span>Active Stack</span>
              </div>
            </div>
          ))}
        </div>

        {/* Understated Workflow Statement */}
        <div className="mt-12 p-6 sm:p-8 border border-[var(--border)] bg-[var(--bg-surface)] rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] block">
              Perspective / Engineering Philosophy
            </span>
            <h4 className="text-base sm:text-lg font-medium text-[var(--text-primary)] tracking-tight">
              AI Tools as an Engineering Accelerator, Not a Substitute
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
              Foundational design systems and robust TypeScript architecture provide the structure; modern agentic and multimodal models accelerate prototyping, type verification, and unit test generation without sacrificing craftsmanship.
            </p>
          </div>

          <div className="shrink-0 font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
            Spec: Deterministic Output
          </div>
        </div>

      </div>
    </section>
  );
};
