import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const Scene3D = lazy(() => import('./components/Scene3D'));

function useDeferredMount() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const schedule = () => {
      const ric = (window as typeof window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number;
      }).requestIdleCallback;
      if (ric) ric(() => setReady(true), { timeout: 1500 });
      else setTimeout(() => setReady(true), 300);
    };

    if (document.readyState === 'complete') {
      schedule();
      return;
    }
    window.addEventListener('load', schedule, { once: true });
    return () => window.removeEventListener('load', schedule);
  }, []);

  return ready;
}

export default function App() {
  const show3D = useDeferredMount();

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 -z-10 transition-opacity duration-700 ease-out ${
          show3D ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        {show3D && (
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        )}
      </div>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
