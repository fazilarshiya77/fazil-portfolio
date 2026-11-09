import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight,
  Send,
  Sparkles,
  MessageSquare
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
    <section id="contact" className="py-20 sm:py-28 md:py-36 relative scroll-mt-16 bg-[#1C1B18] text-[#FAF8F2] overflow-hidden">
      
      {/* Animated Warm Atmospheric Glows */}
      <div 
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[var(--accent-primary)]/20 blur-3xl pointer-events-none animate-float-slow" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[var(--accent-butter)]/15 blur-3xl pointer-events-none animate-float-reverse" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-primary)] text-white mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Initiate Conversation</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Let’s Build Something{' '}
              <span className="font-display-italic font-normal text-[var(--accent-butter)]">
                Exceptional.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#ABA69F] leading-relaxed">
              Open to product design roles, frontend engineering opportunities, and custom web application contracts for 2026.
            </p>
          </div>
        </div>

        {/* Content & Channels Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Links & Email Copier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#ABA69F] font-bold block">
                Direct Channels &amp; Profiles
              </span>

              {/* Email Copier */}
              <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-2 shadow-sm">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--accent-butter)] font-bold block">
                  Primary Email Address
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs sm:text-sm text-white select-all truncate font-semibold">
                    {emailAddress}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 px-3.5 py-1.5 rounded-xl border border-white/20 bg-white/10 hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] text-xs font-mono font-bold text-white flex items-center gap-1.5 transition-all focus:outline-none"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#ABA69F]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--accent-primary)] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] flex items-center justify-center font-bold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">Direct Email</span>
                      <span className="font-mono text-[11px] text-[#ABA69F]">Opens your default email client</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#ABA69F] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--accent-primary)] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0A66C2]/20 text-[#70B5F9] flex items-center justify-center font-bold">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">LinkedIn Profile</span>
                      <span className="font-mono text-[11px] text-[#ABA69F]">linkedin.com/in/fazilarshiya</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#ABA69F] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--accent-primary)] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">GitHub Repositories</span>
                      <span className="font-mono text-[11px] text-[#ABA69F]">github.com/fazilarshiya77</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#ABA69F] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Timezone Note */}
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 font-mono text-xs text-[#ABA69F] space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent-butter)] block">
                Timezone &amp; Response SLA
              </span>
              <p className="text-white">
                Based in Bengaluru, India (IST / UTC +5:30). Expected response within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Inquiries Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2 text-white font-bold">
                  <MessageSquare className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Inquiry Dispatch Composer</span>
                </div>
                <span className="text-[var(--accent-butter)] font-semibold">Prefilled Protocol</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ABA69F] mb-1.5 font-bold">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan / Studio Design"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/30 text-white text-xs font-sans focus:outline-none focus:border-[var(--accent-primary)] transition-colors placeholder:text-stone-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ABA69F] mb-1.5 font-bold">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/30 text-white text-xs font-sans focus:outline-none focus:border-[var(--accent-primary)] transition-colors placeholder:text-stone-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ABA69F] mb-1.5 font-bold">
                    Subject / Engagement Scope
                  </label>
                  <select
                    value={formData.roleOrProject}
                    onChange={(e) => setFormData({ ...formData, roleOrProject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/30 text-white text-xs font-sans focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                  >
                    <option value="UI/UX Product Designer Role" className="bg-[#1C1B18] text-white">UI/UX Product Designer Role</option>
                    <option value="Frontend Engineer Role" className="bg-[#1C1B18] text-white">Frontend Engineer Role</option>
                    <option value="Custom Web App or CRM Project" className="bg-[#1C1B18] text-white">Custom Web App or CRM Project</option>
                    <option value="General Collaboration or Consultation" className="bg-[#1C1B18] text-white">General Collaboration or Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#ABA69F] mb-1.5 font-bold">
                    Message / Outline
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project vision, timeline, or position details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/30 text-white text-xs font-sans focus:outline-none focus:border-[var(--accent-primary)] transition-colors placeholder:text-stone-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white uppercase tracking-wider text-xs font-bold transition-all shadow-md shadow-[var(--accent-primary)]/25 flex items-center justify-center gap-2 focus:outline-none"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email Client →</span>
                </button>

                <AnimatePresence>
                  {formSentNotice && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-center text-xs font-mono font-bold"
                    >
                      ✓ Formatted payload launched in your email application.
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
