import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Chips from "@/components/ui/Chips";
import ExternalLink from "@/components/ui/ExternalLink";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading id="projects-heading" lead="Other" highlight="Projects" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-4 md:p-8 p-6 rounded-2xl outline-2 outline-blue-600"
          >
            {project.image && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1440}
                  height={900}
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="w-full rounded-xl outline-2 outline-neutral-200"
                />
              </a>
            )}
            <header>
              <p className="text-sm font-semibold text-blue-600">
                {project.role} · {project.dates}
              </p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </header>
            <p>{project.summary}</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Chips items={project.stack} />
            <div className="mt-auto">
              <ExternalLink href={project.url} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
