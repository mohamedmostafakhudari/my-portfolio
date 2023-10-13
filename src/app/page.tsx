
import Hero from "@/components/hero";
import About from "@/components/about";
import ExperienceItem from "@/components/experience-item";
import Projects from '@/components/projects';
import Experiences from '@/components/experiences';
export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Experiences />
      <Projects />
      
    </main>
  );
}
