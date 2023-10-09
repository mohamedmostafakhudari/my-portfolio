import React from 'react'
import ExperienceItem from '@/components/experience-item';
import { experiences } from '@/data';
const Experiences = () => {
  return (
    <section id="experience" className="bg-gradient-primary py-16">
      <div className="container flex flex-col gap-12 items-center">
        {experiences.map(({title, bullets, startDate, endDate}) => (
          <ExperienceItem
            key={title}
            title={title}
            startDate={startDate}
            endDate={endDate}
          >
            <ul className='list-disc pl-6 space-y-4'>
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