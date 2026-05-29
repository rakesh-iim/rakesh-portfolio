import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Backdrop from './components/Backdrop';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Backdrop />
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
