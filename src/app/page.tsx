
import Hero from "@/components/hero";
import About from "@/components/about";
import ExperienceItem from "@/components/experience-item";
import Projects from '@/components/projects';
export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <section id="experience" className="bg-gradient-primary py-16">
        <div className="container flex flex-col items-center">
          <ExperienceItem
            startDate={new Date(Date.UTC(2020, 11, 20))}
            endDate={new Date(Date.UTC(2023, 11, 20))}
            title={`Experience`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
            cum?
          </ExperienceItem>
          <ExperienceItem
            startDate={new Date(Date.UTC(2020, 11, 20))}
            endDate={new Date(Date.UTC(2023, 11, 20))}
            title={`Experience`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
            cum?
          </ExperienceItem>
          <ExperienceItem
            startDate={new Date(Date.UTC(2020, 11, 20))}
            endDate={new Date(Date.UTC(2023, 11, 20))}
            title={`Experience`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
            cum?
          </ExperienceItem>
        </div>
      </section>
      <Projects />
    </main>
  );
}
