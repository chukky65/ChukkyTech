import { Suspense, lazy } from "react";
import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { TechStack } from "./components/TechStack";
import { PerformanceMetrics } from "./components/PerformanceMetrics";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Timeline } from "./components/Timeline";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { CustomCursor } from "./components/CustomCursor";

import { SEO } from "./components/SEO";
import { LanguageProvider, useLanguage } from "./i18n";

const NeuralNetworkCanvas = lazy(() => import("./components/NeuralNetworkCanvas").then(module => ({ default: module.NeuralNetworkCanvas })));
const FloatingAIIcons = lazy(() => import("./components/FloatingAIIcons").then(module => ({ default: module.FloatingAIIcons })));
const TerminalSection = lazy(() => import("./components/TerminalSection").then(module => ({ default: module.TerminalSection })));
const GithubActivity = lazy(() => import("./components/GithubActivity").then(module => ({ default: module.GithubActivity })));

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

function AppShell() {
  const { isArabic } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen bg-slate-50 text-neutral-800 font-sans selection:bg-blue-100 selection:text-blue-900"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <SEO />
      <CustomCursor />
      <ScrollProgress />
      <Suspense fallback={null}>
        <NeuralNetworkCanvas />
        <FloatingAIIcons />
      </Suspense>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <TechStack />
          <PerformanceMetrics />
          <Suspense fallback={<div className="py-20 text-center">{isArabic ? "جارٍ تحميل وحدة الطرفية..." : "Loading terminal module..."}</div>}>
            <TerminalSection />
          </Suspense>
          <Suspense fallback={<div className="py-20 text-center">{isArabic ? "جارٍ تحميل نشاط GitHub..." : "Loading GitHub activity..."}</div>}>
            <GithubActivity />
          </Suspense>
          <Projects />
          <Testimonials />
          <Timeline />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}
