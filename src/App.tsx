import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';

const WorkPage = lazy(() => import('./pages/WorkPage').then((m) => ({ default: m.WorkPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const CapabilitiesPage = lazy(() => import('./pages/CapabilitiesPage').then((m) => ({ default: m.CapabilitiesPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then((m) => ({ default: m.ProcessPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200 antialiased flex flex-col justify-between">
          <ScrollToTop />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />

          <main id="main-content" className="flex-1">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
