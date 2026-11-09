import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  Copy, 
  Check, 
  Sun, 
  Moon, 
  ExternalLink, 
  FileText, 
  FolderGit2, 
  X,
  Layers,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { useTheme } from '../context/theme';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Keyboard shortcut listener for ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fazil1ga22is053@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const navItems = [
    { label: 'Home Page', path: '/', category: 'Navigation', icon: <FileText className="w-4 h-4" /> },
    { label: 'Selected Work (All 5 Projects)', path: '/work', category: 'Navigation', icon: <FolderGit2 className="w-4 h-4" /> },
    { label: 'About Fazil & Journey', path: '/about', category: 'Navigation', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Capabilities & CRM Architecture', path: '/capabilities', category: 'Navigation', icon: <Layers className="w-4 h-4" /> },
    { label: 'Engineering Process & QA', path: '/process', category: 'Navigation', icon: <FileText className="w-4 h-4" /> },
    { label: 'Contact & Inquiries', path: '/contact', category: 'Navigation', icon: <FileText className="w-4 h-4" /> },
  ];

  const projectItems = projectsData.map(p => ({
    label: `${p.title} — ${p.categoryLabel}`,
    action: () => {
      navigate('/work');
      onClose();
    },
    category: 'Projects',
    icon: <FolderGit2 className="w-4 h-4 text-[var(--accent-primary)]" />
  }));

  const filteredNav = navItems.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectItems.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/60 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.18 }}
          className="w-full max-w-xl rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Input Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
            <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a page, project name, or command..."
              className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-2 space-y-4 text-xs font-mono">
            
            {/* Quick Actions */}
            <div>
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                Quick Actions
              </span>
              <div className="mt-1 space-y-0.5">
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors text-left"
                >
                  <span className="flex items-center gap-2.5">
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-[var(--accent-primary)]" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy fazil1ga22is053@gmail.com'}</span>
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase">Action</span>
                </button>

                <button
                  onClick={() => {
                    toggleTheme();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors text-left"
                >
                  <span className="flex items-center gap-2.5">
                    {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[var(--accent-primary)]" />}
                    <span>Toggle to {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase">Theme</span>
                </button>

                <a
                  href="https://github.com/fazilarshiya77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors text-left"
                >
                  <span className="flex items-center gap-2.5">
                    <ExternalLink className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Open GitHub Profile (@fazilarshiya77)</span>
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase">External</span>
                </a>
              </div>
            </div>

            {/* Navigation Results */}
            {filteredNav.length > 0 && (
              <div>
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                  Pages &amp; Views
                </span>
                <div className="mt-1 space-y-0.5">
                  {filteredNav.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        navigate(item.path);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        {item.icon}
                        <span>{item.label}</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {filteredProjects.length > 0 && (
              <div>
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                  Client Case Studies
                </span>
                <div className="mt-1 space-y-0.5">
                  {filteredProjects.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={p.action}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        {p.icon}
                        <span className="truncate">{p.label}</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Command Palette Footer */}
          <div className="px-4 py-2.5 border-t border-[var(--border-color)] bg-[var(--bg-primary)] flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
            <span>Navigation shortcut</span>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--bg-surface)]">ESC</span>
              <span>to close</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
