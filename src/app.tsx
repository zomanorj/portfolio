import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scroll during loader
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <div className="grain relative min-h-screen bg-zinc-950 text-zinc-100">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />

      {/* Background radial gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-900/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[700px] rounded-full bg-cyan-900/15 blur-[120px]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* Floating badge */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.8 : 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-lg transition-all hover:border-violet-400/50 hover:bg-violet-500/10 md:flex"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Disponible pour stage
      </motion.a>
    </div>
  );
}
