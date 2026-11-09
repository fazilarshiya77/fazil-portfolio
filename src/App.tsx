import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { AdminShowcase } from './components/AdminShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-soft)] selection:text-[var(--accent)] transition-colors duration-200 antialiased">
        {/* Architectural grid guide lines (optional subtle boundary) */}
        <Navbar />

        <main id="main-content" className="relative">
          {/* Hero Section */}
          <Hero />

          {/* Selected Work (5 Live Production Projects) */}
          <ProjectGrid />

          {/* Beyond the Frontend: Admin & CRM Engineering */}
          <AdminShowcase />

          {/* Technical Stack & Capabilities */}
          <SkillsSection />

          {/* 4-Step Engineering Methodology */}
          <ProcessSection />

          {/* Profile & Perspective */}
          <AboutSection />

          {/* Contact & Inquiries */}
          <ContactSection />
        </main>

        {/* Studio Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
