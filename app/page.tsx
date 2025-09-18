import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { TechStackSection } from "./components/TechStackSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <TechStackSection />
      <ContactSection />
    </>
  );
}
