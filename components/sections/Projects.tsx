import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Chips from "@/components/ui/Chips";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading" className="bg-blue-600 text-white">
      <SectionHeading id="projects-heading" lead="My" highlight="Projects" inverted />

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-5 md:p-10 p-6 rounded-2xl bg-white text-neutral-900"
          >
            <header className="flex md:flex-row flex-col md:items-end justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  {project.role} · {project.dates}
                </p>
                <h3 className="text-3xl font-bold">{project.title}</h3>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link underline shrink-0"
              >
                Visit {new URL(project.url).hostname.replace(/^www\./, "")} ↗
              </a>
            </header>

            <p>{project.summary}</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Chips items={project.stack} />

            {project.preview && (
              <iframe
                src={project.url}
                title={`Live preview of the ${project.title} website`}
                loading="lazy"
                className="mt-2 w-full outline-2 outline-neutral-300 rounded-xl aspect-video md:block hidden"
              />
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
