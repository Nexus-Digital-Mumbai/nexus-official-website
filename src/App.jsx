import { useEffect, useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import PageContent from './components/PageContent';

export default function App({ views }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    setDark(next);
    try {
      localStorage.setItem('nexus-theme', next ? 'dark' : 'light');
    } catch { /* Keep the selection for this session. */ }
  }

  return (
    <>
      <a className="sr-only focus:not-sr-only focus:fixed focus:z-[100001] focus:bg-white focus:p-4" href="#main-content">Skip to content</a>
      <AnimatedBackground dark={dark} />
      <PageLoader />
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <PageContent views={views} />
      <Footer />
    </>
  );
}
