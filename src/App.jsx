import About from "./components/About";
import Aurora from "./components/Aurora";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoystickTop from "./components/JoystickTop";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import { Analytics } from "@vercel/analytics/react";

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
      <Aurora />
      <main className="relative z-10">
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
      <Analytics />
    </div>
  );
}

export default App;
