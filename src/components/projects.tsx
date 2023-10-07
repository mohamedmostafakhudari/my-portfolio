"use client";

import React from 'react';
import { TypographyH2 } from '@/components/ui/typography';
import ProjectCard from '@/components/project-card';

const Projects = () => {
  return (
    <section id="projects" className="py-16 text-center">
      <div className="container">
        <TypographyH2>My Latest Projects</TypographyH2>
        <div className="grid-cols-auto-fill mt-6 grid gap-6">
          <ProjectCard
            name={"Project Name"}
            desc={"Project Desc"}
            thumbnailSrc={"https://unsplash.it/300/300"}
            demoHref={"#"}
            githubHref={"#"}
          />
          <ProjectCard
            name={"Project Name"}
            desc={"Project Desc"}
            thumbnailSrc={"https://unsplash.it/300/300"}
            demoHref={"#"}
            githubHref={"#"}
          />
          <ProjectCard
            name={"Project Name"}
            desc={"Project Desc"}
            thumbnailSrc={"https://unsplash.it/300/300"}
            demoHref={"#"}
            githubHref={"#"}
          />
          <ProjectCard
            name={"Project Name"}
            desc={"Project Desc"}
            thumbnailSrc={"https://unsplash.it/300/300"}
            demoHref={"#"}
            githubHref={"#"}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects