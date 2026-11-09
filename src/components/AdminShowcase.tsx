import React, { useState } from 'react';
import { sampleAdminLeads, adminCapabilities, type AdminLead } from '../data/adminData';
import { Search, TrendingUp, Clock, ShieldCheck, LayoutDashboard, Users, Layers, BarChart3, Smartphone } from 'lucide-react';

export const AdminShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'New' | 'In Progress' | 'Contacted' | 'Closed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<AdminLead | null>(sampleAdminLeads[0]);

  const filteredLeads = sampleAdminLeads.filter((lead) => {
    const matchesTab = activeTab === 'all' || lead.status === activeTab;
    const matchesSearch = lead.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.serviceRequested.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.source.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'GitFork': return <Layers className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="admin-showcase" className="py-12 sm:py-16 bg-[var(--bg-primary)] scroll-mt-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-[var(--border-color)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-color)] mb-3 shadow-xs">
              <span>02</span>
              <span>/</span>
              <span>Systems &amp; Architecture</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Beyond the Frontend
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Real-world websites succeed when their administrative workflows are just as intuitive as the public interface. Custom management consoles, lead triage pipelines, and CRM integrations.
            </p>
          </div>
        </div>

        {/* High-End Enterprise CRM Demonstration Console */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden shadow-sm mb-16">
          
          {/* Top Specification Banner */}
          <div className="px-6 py-4 bg-[var(--bg-secondary)]/50 border-b border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[var(--text-secondary)]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="text-[var(--text-primary)] font-bold uppercase tracking-wider">
                CRM &amp; Inquiries Command Console
              </span>
              <span className="hidden sm:inline px-2 py-0.5 rounded-md bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] font-bold text-[10px]">
                Interactive Demonstration
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="text-emerald-600 dark:text-emerald-400">● WhatsApp Dispatcher: Active</span>
              <span className="hidden md:inline text-[var(--text-muted)]">Sub-30ms Pipeline</span>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 p-6 gap-4 border-b border-[var(--border-color)] bg-[var(--bg-surface)]">
            <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)]">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] mb-1">
                Incoming Inquiries
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-primary)]">284</span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center">
                  <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +14%
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)]">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Avg Response Time
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-primary)]">12m</span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-0.5" /> Optimal
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)]">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] mb-1">
                Pipeline Conversion
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-primary)]">38.4%</span>
                <span className="text-xs text-[var(--accent-primary)] font-bold">Active SLA</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)]">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Connected Portals
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-primary)]">5 Active</span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Synced</span>
              </div>
            </div>
          </div>

          {/* Filter Bar & Search */}
          <div className="p-6 border-b border-[var(--border-color)] bg-[var(--bg-primary)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {(['all', 'New', 'In Progress', 'Contacted', 'Closed'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-xl font-bold uppercase tracking-wider transition-all duration-150 ${
                    activeTab === tab
                      ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                      : 'border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tab === 'all' ? 'All Inquiries' : tab}
                </button>
              ))}
            </div>

            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search lead or client..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-xs font-sans focus:outline-none focus:border-[var(--accent-primary)] transition-colors placeholder:text-[var(--text-muted)]"
              />
            </div>
          </div>

          {/* Records Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[var(--bg-surface)] border-b border-[var(--border-color)] text-[var(--text-secondary)] font-mono uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-6 font-bold">Record ID &amp; Client</th>
                  <th className="py-3.5 px-6 font-bold">Requirement Scope</th>
                  <th className="py-3.5 px-6 font-bold hidden sm:table-cell">Source Origin</th>
                  <th className="py-3.5 px-6 font-bold">Status</th>
                  <th className="py-3.5 px-6 font-bold text-right">Triage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {filteredLeads.map((lead) => {
                  const isSelected = selectedLead?.id === lead.id;
                  return (
                    <tr
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`cursor-pointer transition-colors ${
                        isSelected 
                          ? 'bg-[var(--accent-primary-soft)]' 
                          : 'hover:bg-[var(--bg-secondary)]/40'
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="font-bold text-sm text-[var(--text-primary)]">{lead.clientName}</div>
                        <span className="font-mono text-xs text-[var(--text-muted)]">
                          {lead.id} • {lead.date}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-[var(--text-secondary)] font-medium">
                        {lead.serviceRequested}
                      </td>

                      <td className="py-4 px-6 font-mono text-xs text-[var(--text-secondary)] hidden sm:table-cell">
                        <span className="px-2.5 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border-color)]">
                          {lead.source}
                        </span>
                      </td>

                      <td className="py-4 px-6 font-mono text-xs uppercase tracking-wider font-bold">
                        <span
                          className={`px-2.5 py-1 rounded-lg border ${
                            lead.status === 'New'
                              ? 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400'
                              : lead.status === 'In Progress'
                              ? 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'
                              : lead.status === 'Contacted'
                              ? 'border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400'
                              : 'border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-right font-mono text-xs">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(lead);
                          }}
                          className={`px-3 py-1.5 rounded-lg border font-bold transition-all ${
                            isSelected
                              ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white shadow-xs'
                              : 'border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]'
                          }`}
                        >
                          {isSelected ? 'Inspecting' : 'Inspect'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Selected Record Spec Sheet Drawer */}
          {selectedLead && (
            <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)] font-mono text-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wider font-bold text-[var(--text-secondary)]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                  <span>Lead Inspection Dossier / {selectedLead.id}</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">✓ Webhook Dispatched to Sales WhatsApp</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1 font-bold">
                    Client &amp; Contact
                  </span>
                  <span className="text-[var(--text-primary)] font-sans font-bold text-sm">
                    {selectedLead.clientName}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1 font-bold">
                    Service Scope &amp; Estimated Value
                  </span>
                  <span className="text-[var(--text-primary)] font-sans font-bold text-sm">
                    {selectedLead.serviceRequested}{' '}
                    <span className="text-[var(--accent-primary)] font-mono">({selectedLead.value})</span>
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1 font-bold">
                    Inbound Pipeline Source
                  </span>
                  <span className="text-[var(--text-secondary)] font-mono font-medium">
                    {selectedLead.source}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 6 Architectural System Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {adminCapabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-7 shadow-xs hover:border-[var(--accent-primary)] transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] flex items-center justify-center font-bold">
                  {getCapabilityIcon(cap.icon)}
                </div>
                <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] tracking-tight">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
