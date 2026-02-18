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

export default function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
