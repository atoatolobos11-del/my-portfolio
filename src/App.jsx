import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink font-sans text-cream">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main>
        {/* Blueprint grid backdrop for the top of the page — decorative */}
        <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-x-0 top-0 h-[42rem]" />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
