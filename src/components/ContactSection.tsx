import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrProject: 'UI/UX & Frontend Opportunity',
    message: ''
  });
  const [formSentNotice, setFormSentNotice] = useState(false);

  const emailAddress = 'fazil1ga22is053@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/fazilarshiya';
  const githubUrl = 'https://github.com/fazilarshiya77';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.roleOrProject} — from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Fazil,\n\nMy name is ${formData.name} (${formData.email}).\n\nI am contacting you regarding: ${formData.roleOrProject}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setFormSentNotice(true);
    setTimeout(() => setFormSentNotice(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36 border-b border-[var(--border)] scroll-mt-16 bg-[var(--bg-secondary)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] mb-3">
              <span>06</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span>Initiate Conversation</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
              Let's Build Something Meaningful
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              Open to UI/UX product design roles, frontend engineering opportunities, and bespoke web application contracts.
            </p>
          </div>
        </div>

        {/* Form & Channels Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Links & Email Copier */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block">
                Direct Channels
              </span>

              {/* Email Copier */}
              <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-muted)] block">
                  Primary Address
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs sm:text-sm text-[var(--text-primary)] select-all truncate">
                    {emailAddress}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 px-3 py-1.5 rounded border border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--text-primary)] text-[11px] font-mono uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5 transition-colors focus:outline-none"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[var(--accent)]" />
                        <span className="text-[var(--accent)]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[var(--text-muted)]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-2 pt-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center justify-between p-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--text-primary)] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                    <div>
                      <span className="text-xs font-medium text-[var(--text-primary)] block">Direct Email</span>
                      <span className="font-mono text-[10px] text-[var(--text-muted)]">Opens default mail client</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--text-primary)] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                    <div>
                      <span className="text-xs font-medium text-[var(--text-primary)] block">LinkedIn</span>
                      <span className="font-mono text-[10px] text-[var(--text-muted)]">fazilarshiya</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--text-primary)] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                    <div>
                      <span className="text-xs font-medium text-[var(--text-primary)] block">GitHub Repository</span>
                      <span className="font-mono text-[10px] text-[var(--text-muted)]">fazilarshiya77</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                </a>
              </div>
            </div>

            {/* Availability SLA */}
            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] font-mono text-xs text-[var(--text-muted)] space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] block">
                Timezone &amp; Response SLA
              </span>
              <p className="text-[var(--text-secondary)]">
                Based in Bengaluru, India (IST / UTC +5:30). Expected response within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiries Composer */}
          <div className="lg:col-span-7">
            <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-6 sm:p-8 rounded-lg space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                <span>Inquiry Dispatch Composer</span>
                <span className="text-[var(--accent)]">Prefilled Protocol</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan / Studio Design"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs font-sans focus:outline-none focus:border-[var(--text-primary)] transition-colors placeholder:text-[var(--text-muted)]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs font-sans focus:outline-none focus:border-[var(--text-primary)] transition-colors placeholder:text-[var(--text-muted)]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                    Subject / Engagement Scope
                  </label>
                  <select
                    value={formData.roleOrProject}
                    onChange={(e) => setFormData({ ...formData, roleOrProject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs font-sans focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                  >
                    <option value="UI/UX Product Designer Role">UI/UX Product Designer Role</option>
                    <option value="Frontend Engineer Role">Frontend Engineer Role</option>
                    <option value="Custom Web App or CRM Project">Custom Web App or CRM Project</option>
                    <option value="General Collaboration or Consultation">General Collaboration or Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                    Message / Outline
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Outline requirements, timeline, or position details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs font-sans focus:outline-none focus:border-[var(--text-primary)] transition-colors placeholder:text-[var(--text-muted)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity uppercase tracking-wider text-xs font-medium focus:outline-none"
                >
                  Generate Email Dispatch →
                </button>

                <AnimatePresence>
                  {formSentNotice && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 rounded-md border border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)] text-center text-xs font-mono"
                    >
                      ✓ Formatted payload launched in your mail application.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
