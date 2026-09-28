import ScrollProgress from "@/components/ScrollProgress";
import BottomBar from "@/components/BottomBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import { profile } from "@/data/portfolioData";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
        <footer className="px-4 sm:px-6 pt-10 pb-32 border-t border-line text-sm text-muted flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Pittsburgh, PA</span>
        </footer>
      </main>
      <BottomBar />
    </>
  );
}
