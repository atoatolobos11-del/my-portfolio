import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoystickTop from "./components/JoystickTop";
import Marquee from "./components/Marquee";
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
      {/* Reflecting-light backdrop — decorative, fixed behind everything */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="animate-beam-a absolute -top-[20vh] left-[12%] h-[140vh] w-36 bg-gradient-to-b from-transparent via-lime/[0.07] to-transparent blur-2xl mix-blend-screen" />
        <div className="animate-beam-b absolute -top-[20vh] left-[58%] h-[140vh] w-52 bg-gradient-to-b from-transparent via-vio/[0.09] to-transparent blur-2xl mix-blend-screen" />
        <div className="animate-beam-a absolute -top-[20vh] left-[82%] h-[140vh] w-28 bg-gradient-to-b from-transparent via-azure/[0.08] to-transparent blur-2xl mix-blend-screen" style={{ animationDelay: "-11s" }} />
        <div className="animate-sheen absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-cream/[0.05] to-transparent mix-blend-screen" />
      </div>
      <main className="relative z-10">
        {/* Blueprint grid backdrop for the top of the page — decorative */}
        <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-x-0 top-0 h-[42rem]" />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <JoystickTop />
    </div>
  );
}

export default App;
