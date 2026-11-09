import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check } from 'lucide-react';

export const CodeInspector: React.FC = () => {
  const [activeSnippet, setActiveSnippet] = useState<'types' | 'tokens' | 'webhook'>('types');
  const [copied, setCopied] = useState(false);

  const snippets = {
    types: `// Strict TypeScript Domain Models
export interface Project {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly category: 'Real Estate' | 'Dispatch & Logistics' | 'Events' | 'Luxury Travel';
  readonly scopeValue: string; // e.g. "₹250+ Cr"
  readonly liveUrl: string;
  readonly architecture: {
    readonly framework: 'React 19';
    readonly bundler: 'Vite 8';
    readonly styling: 'Tailwind CSS v4';
    readonly stateModel: 'Custom Reactive Hooks';
  };
}`,
    tokens: `/* Tailwind CSS v4 Design Token System */
@theme {
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-heading: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

:root {
  /* Dreamy Lavender & Soft Peach Studio Theme */
  --card-lavender: #B8B0EA;  /* Dreamy Lilac */
  --card-peach: #F8D8C8;     /* Soft Peachy Apricot */
  --accent-primary: #7562E0; /* Signature Lilac Violet */
  --text-primary: #232035;   /* Deep Charcoal Violet */
  --font-signature: 'Caveat', cursive;
}`,
    webhook: `// Serverless WhatsApp Lead Dispatch Webhook
export async function dispatchLeadNotification(lead: AdminLead) {
  const payload = {
    event: 'inquiry.received',
    recordId: lead.id,
    client: lead.clientName,
    requirement: lead.serviceRequested,
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(process.env.WHATSAPP_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return { success: response.ok, latencyMs: 24 };
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeSnippet]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden shadow-xs">
      {/* Console Bar Header */}
      <div className="px-5 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[var(--accent-primary)]" />
          <span className="font-heading font-bold text-xs text-[var(--text-primary)]">
            Production Architecture Inspector
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 font-sans text-xs">
          <button
            onClick={() => setActiveSnippet('types')}
            className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
              activeSnippet === 'types'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            TypeScript Models
          </button>

          <button
            onClick={() => setActiveSnippet('tokens')}
            className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
              activeSnippet === 'tokens'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Design Tokens
          </button>

          <button
            onClick={() => setActiveSnippet('webhook')}
            className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
              activeSnippet === 'webhook'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Lead Webhook
          </button>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-primary)] text-xs font-sans font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Window */}
      <div className="p-5 overflow-x-auto bg-[var(--bg-primary)]/70 font-mono text-xs leading-relaxed text-[var(--text-primary)]">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeSnippet}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="font-mono text-xs"
          >
            <code>{snippets[activeSnippet]}</code>
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* Footer Specs */}
      <div className="px-5 py-2.5 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/30 flex items-center justify-between font-sans text-[11px] text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Deterministic Type Safety</span>
        </div>
        <span>Zero Runtime Leaks • Production Tested</span>
      </div>
    </div>
  );
};
