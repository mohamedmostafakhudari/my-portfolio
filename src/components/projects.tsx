"use client";

import React from 'react';
import { TypographyH2 } from '@/components/ui/typography';
import ProjectCard from '@/components/project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from '@/data.js';

const Projects = () => {
  return (
    <section id="projects" className="py-16 text-center">
      <div className="container">
        <TypographyH2>Samples of My Work</TypographyH2>

        <Tabs defaultValue="personal" className="mt-6">
          <TabsList>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="clones">Clones</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            {projects.personal.notComplete.map(
              ({ name, desc, imgSrc, githubHref, demoHref }) => (
                <ProjectCard
                  key={githubHref}
                  name={name}
                  desc={desc}
                  thumbnailSrc={imgSrc}
                  githubHref={githubHref}
                  demoHref={demoHref}
                />
              ),
            )}
          </TabsContent>
          <TabsContent value="clones">
            {projects.clones.map(
              ({ name, desc, imgSrc, githubHref, demoHref }) => (
                <ProjectCard
                  key={githubHref}
                  name={name}
                  desc={desc}
                  thumbnailSrc={imgSrc}
                  githubHref={githubHref}
                  demoHref={demoHref}
                />
              ),
            )}
          </TabsContent>
          <TabsContent value="games">
            {projects.games.map(
              ({ name, desc, imgSrc, githubHref, demoHref }) => (
                <ProjectCard
                  key={githubHref}
                  name={name}
                  desc={desc}
                  thumbnailSrc={imgSrc}
                  githubHref={githubHref}
                  demoHref={demoHref}
                />
              ),
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Projects