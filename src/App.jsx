import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import TechMarquee from './components/TechMarquee';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach((link) => {
              link.classList.remove('text-[#FF7200]');
              link.classList.add('text-[#A1A1AA]');
              if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.remove('text-[#A1A1AA]');
                link.classList.add('text-[#FF7200]');
              }
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Services />
          <About />
          <Skills />
          <TechMarquee />
          <Portfolio />
          <Experience />
          <Technologies />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;