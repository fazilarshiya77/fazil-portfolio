import React, { useState } from 'react';
import { sampleAdminLeads, adminCapabilities, type AdminLead } from '../data/adminData';
import { Search } from 'lucide-react';

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

  return (
    <section id="admin-showcase" className="py-20 sm:py-28 md:py-36 border-b border-[var(--border)] scroll-mt-16 bg-[var(--bg-secondary)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] mb-3">
              <span>02</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span>Systems &amp; Architecture</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
              Beyond the Frontend
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              Public websites succeed when their administrative workflows are just as intuitive as the customer-facing interface. Custom portals engineered for lead triage, booking pipelines, and CRM integration.
            </p>
          </div>
        </div>

        {/* High-End Enterprise CRM Demonstration Frame */}
        <div className="border border-[var(--border)] bg-[var(--bg-surface)] rounded-lg overflow-hidden shadow-xs mb-16">
          
          {/* Top Specification Banner */}
          <div className="px-5 py-3.5 bg-[var(--bg-primary)] border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--text-primary)] font-medium uppercase tracking-wider">
                CRM &amp; Inquiries Command Console
              </span>
              <span className="text-[var(--text-muted)] hidden sm:inline">
                / Live Workflow Demonstration
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="text-[var(--accent)]">Dispatcher: Operational</span>
              <span className="hidden md:inline text-[var(--text-muted)]">Latency: 14ms</span>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[var(--border)] bg-[var(--bg-surface)] divide-y md:divide-y-0 md:divide-x divide-[var(--border)] font-mono">
            <div className="p-4 sm:p-5">
              <span className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Total Inquiries
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-medium text-[var(--text-primary)]">284</span>
                <span className="text-[11px] text-[var(--accent)]">+14% vs lw</span>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <span className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Avg Response Time
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-medium text-[var(--text-primary)]">12m</span>
                <span className="text-[11px] text-[var(--text-muted)]">SLA: &lt;30m</span>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <span className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Pipeline Conversion
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-medium text-[var(--text-primary)]">38.4%</span>
                <span className="text-[11px] text-[var(--accent)]">Target: 35%</span>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <span className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Connected Portals
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-medium text-[var(--text-primary)]">5 Active</span>
                <span className="text-[11px] text-[var(--accent)]">Synchronized</span>
              </div>
            </div>
          </div>

          {/* Filter Bar & Search */}
          <div className="p-4 sm:p-5 border-b border-[var(--border)] bg-[var(--bg-primary)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {(['all', 'New', 'In Progress', 'Contacted', 'Closed'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-md text-[11px] uppercase tracking-wider transition-colors ${
                    activeTab === tab
                      ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium'
                      : 'border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tab === 'all' ? 'All Records' : tab}
                </button>
              ))}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter by client, requirement or source..."
                className="w-full pl-8 pr-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-xs font-mono focus:outline-none focus:border-[var(--text-primary)] transition-colors placeholder:text-[var(--text-muted)]"
              />
            </div>
          </div>

          {/* Records Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[var(--bg-surface)] border-b border-[var(--border)] text-[var(--text-muted)] font-mono uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-4 font-medium">Record ID &amp; Client</th>
                  <th className="py-3 px-4 font-medium">Requirement</th>
                  <th className="py-3 px-4 font-medium hidden sm:table-cell">Source Origin</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {filteredLeads.map((lead) => {
                  const isSelected = selectedLead?.id === lead.id;
                  return (
                    <tr
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`cursor-pointer transition-colors ${
                        isSelected 
                          ? 'bg-[var(--accent-soft)]' 
                          : 'hover:bg-[var(--bg-secondary)]/50'
                      }`}
                    >
                      <td className="py-3 px-4">
                        <div className="font-medium text-[var(--text-primary)]">{lead.clientName}</div>
                        <span className="font-mono text-[10px] text-[var(--text-muted)]">
                          {lead.id} • {lead.date}
                        </span>
                      </td>

                      <td className="py-3 px-4 text-[var(--text-secondary)] font-light">
                        {lead.serviceRequested}
                      </td>

                      <td className="py-3 px-4 text-[var(--text-muted)] font-mono text-[11px] hidden sm:table-cell">
                        {lead.source}
                      </td>

                      <td className="py-3 px-4 font-mono text-[10px] uppercase tracking-wider">
                        <span
                          className={`px-2 py-0.5 rounded border ${
                            lead.status === 'New'
                              ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-soft)]'
                              : lead.status === 'In Progress'
                              ? 'border-amber-600/30 text-amber-700 dark:text-amber-400 bg-amber-500/10'
                              : lead.status === 'Contacted'
                              ? 'border-stone-400 text-[var(--text-secondary)] bg-stone-200/20'
                              : 'border-[var(--border)] text-[var(--text-muted)] bg-[var(--bg-secondary)]'
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>

                      <td className="py-3 px-4 text-right font-mono text-[11px]">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(lead);
                          }}
                          className={`px-2.5 py-1 rounded border transition-colors ${
                            isSelected
                              ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-primary)]'
                              : 'border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          {isSelected ? 'Viewing' : 'Inspect'}
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
            <div className="p-4 sm:p-6 border-t border-[var(--border)] bg-[var(--bg-primary)] font-mono text-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                <span>Inspection Panel / {selectedLead.id}</span>
                <span className="text-[var(--accent)]">Webhook Dispatched</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div>
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                    Client &amp; Contact
                  </span>
                  <span className="text-[var(--text-primary)] font-sans font-medium">
                    {selectedLead.clientName}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                    Service Requirement &amp; Scope
                  </span>
                  <span className="text-[var(--text-secondary)] font-sans">
                    {selectedLead.serviceRequested} ({selectedLead.value})
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                    Inbound Source Pipeline
                  </span>
                  <span className="text-[var(--text-secondary)] font-mono text-[11px]">
                    {selectedLead.source}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Architectural Principles / Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {adminCapabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className="border border-[var(--border)] bg-[var(--bg-surface)] p-6 sm:p-7 rounded-lg space-y-3"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                0{idx + 1} / CAPABILITY
              </div>
              <h3 className="text-lg font-medium text-[var(--text-primary)] tracking-tight">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
