import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Process from './components/Process';
import About from './components/About';
import WorkflowProcess from './components/WorkflowProcess';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TabBar from './components/TabBar';
import LoadingScreen from './components/LoadingScreen';
import NotFound from './components/NotFound';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Simple 404 check: if path is not "/" show 404
  const is404 = window.location.pathname !== '/';

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        is404 ? (
          <NotFound />
        ) : (
          <div className="min-h-screen" style={{ background: 'var(--notes-bg)' }}>
            <Header />
            <main>
              <Hero />
              <Services />
              <Portfolio />
              <Clients />
              <Process />
              <About />
              <WorkflowProcess />
              <CTA />
            </main>
            <Footer />
            <TabBar />
          </div>
        )
      )}
    </ThemeProvider>
  );
}
