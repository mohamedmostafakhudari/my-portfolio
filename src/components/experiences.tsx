import React from 'react'
import ExperienceItem from '@/components/experience-item';
import { experiences } from '@/data';
import { TypographyH2 } from '@/components/ui/typography';
const Experiences = () => {
  return (
    <section id="experience" className="bg-gradient-primary py-16">
      <div className="container flex flex-col items-center gap-12">
        <TypographyH2>My Experiences</TypographyH2>
        {experiences.map(({ title, bullets, startDate, endDate }) => (
          <ExperienceItem
            key={title}
            title={title}
            startDate={startDate}
            endDate={endDate}
          >
            <ul className="list-disc space-y-4 pl-6">
              {bullets.map((bulletPoint, i) => (
                <li key={i}>{bulletPoint}</li>
              ))}
            </ul>
          </ExperienceItem>
        ))}
      </div>
    </section>
  );
}

export default Experiences