import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Marquee from '@/sections/Marquee';
import Projects from '@/sections/Projects';
import About from '@/sections/About';
import Stats from '@/sections/Stats';
import Process from '@/sections/Process';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Behance from '@/sections/Behance';
import Contact from '@/sections/Contact';

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Stats />
        <Process />
        <Skills />
        <Experience />
        <Behance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
