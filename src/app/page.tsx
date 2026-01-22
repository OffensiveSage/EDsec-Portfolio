"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleBackground from "@/components/ParticleBackground";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import BouncingElement from "@/components/BouncingElement";
import EducationSection from "@/components/EducationSection";
import { Shield, Lock, Terminal as TerminalIcon, Globe } from "lucide-react";

import Navbar from "@/components/Navbar";
import CyberGrid from "@/components/CyberGrid";
import DigitalRain from "@/components/DigitalRain";
import HolographicHUD from "@/components/HolographicHUD";

import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import MouseTrail from "@/components/MouseTrail";
import Terminal from "@/components/Terminal";
import TypingAnimation from "@/components/TypingAnimation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setTimeout(() => setIsLoading(false), 0);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <main className="min-h-screen bg-cyber-black text-white overflow-hidden font-mono selection:bg-cyber-green selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <MouseTrail />
          {/* Terminal hidden for now - will develop later */}
          {/* <Terminal /> */}
          <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory md:snap-mandatory scroll-smooth touch-pan-y" style={{ WebkitOverflowScrolling: 'touch' }}>
            <ParticleBackground />
            <ScanlineOverlay />

            {/* Hero Section */}
            <motion.div
              id="hero"
              className="relative z-10 container mx-auto px-4 sm:px-6 h-screen flex flex-col items-center justify-center snap-start overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Background Grid Effect */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none h-screen w-screen fixed top-0 left-0" />

              {/* Visual Layers */}
              <DigitalRain />
              <CyberGrid />
              <HolographicHUD />

              {/* Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-green/10 rounded-full blur-[100px] pointer-events-none z-0" />

              <div className="flex flex-col items-center justify-center text-center relative z-20">
                <BouncingElement delay={0.2} duration={3} yOffset={15}>
                  <div className="mb-8 p-4 border border-cyber-green rounded-full bg-cyber-gray/30 backdrop-blur-sm box-glow">
                    <Shield className="w-16 h-16 text-cyber-green" />
                  </div>
                </BouncingElement>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tighter px-4">
                  <TypingAnimation text="ESHWAR DESETTY" className="text-white" speed={80} />
                  <br />
                  <span className="text-cyber-green text-glow">PORTFOLIO</span>
                </h1>

                <span className="text-cyber-green font-mono text-sm md:text-base">
                  &quot;The only truly secure system is one that is powered off.&quot;
                </span>    <br />
                <span className="text-cyber-green not-italic mt-2 block">— Gene Spafford</span>

                <div className="flex gap-4 sm:gap-6 flex-wrap justify-center px-4">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "var(--cyber-green)", color: "#000000" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 text-sm sm:text-base border border-cyber-green text-cyber-green font-mono font-bold rounded hover:box-glow transition-all touch-manipulation"
                    style={{ minHeight: '44px', minWidth: '44px' }}
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    ESTABLISH_UPLINK
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, borderColor: "var(--cyber-neon)", color: "var(--cyber-neon)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 text-sm sm:text-base border border-gray-700 text-gray-400 font-mono font-bold rounded hover:text-cyber-neon transition-all touch-manipulation"
                    style={{ minHeight: '44px', minWidth: '44px' }}
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    VIEW_PROJECTS
                  </motion.button>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-1/4 left-10 opacity-20 pointer-events-none">
                <BouncingElement delay={0.5} duration={4}>
                  <Lock className="w-24 h-24 text-cyber-purple" />
                </BouncingElement>
              </div>
              <div className="absolute bottom-1/4 right-10 opacity-20 pointer-events-none">
                <BouncingElement delay={1} duration={3.5}>
                  <TerminalIcon className="w-32 h-32 text-cyber-neon" />
                </BouncingElement>
              </div>
              <div className="absolute top-1/3 right-1/4 opacity-10 pointer-events-none">
                <BouncingElement delay={1.5} duration={5}>
                  <Globe className="w-20 h-20 text-cyber-red" />
                </BouncingElement>
              </div>
            </motion.div>

            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ArticlesSection />
            <ContactSection />
          </div>
        </>
      )}
    </main>
  );
}
