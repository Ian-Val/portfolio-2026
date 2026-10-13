import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { studystate } from "@/lib/content";

export default function Studystate() {
  return (
    <Section id="building" labelledBy="building-heading" className="bg-blue-600 text-white">
      <SectionHeading id="building-heading" lead="What I'm" highlight="Building" inverted />

      <article className="flex flex-col gap-6 md:p-10 p-6 rounded-2xl bg-white text-neutral-900">
        <a href={studystate.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={studystate.image.src}
            alt={studystate.image.alt}
            width={1440}
            height={900}
            sizes="(min-width: 1080px) 1000px, 100vw"
            className="w-full rounded-xl outline-2 outline-neutral-200 shadow-xl"
          />
        </a>

        <header>
          <p className="text-sm font-semibold text-blue-600">
            {studystate.role} · {studystate.dates}
          </p>
          <h3 className="text-4xl font-bold">{studystate.title}</h3>
        </header>

        <p className="text-lg">{studystate.summary}</p>

        {studystate.stats && (
          <dl className="grid grid-cols-3 gap-3">
            {studystate.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-blue-50 p-4 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold text-blue-600">{stat.value}</dd>
                <dd className="text-sm text-neutral-600">{stat.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="list-disc pl-5 flex flex-col gap-2">
          {studystate.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4">
          <a
            href={studystate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Try studystate.us ↗
          </a>
          <a href="#contact" className="button-secondary">
            Talk to me about it
          </a>
        </div>

        <p className="text-sm text-neutral-600">
          studystate.us is built and run by{" "}
          <a
            href={site.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {site.company.name}
          </a>
          , the company I founded in 2025.
        </p>
      </article>
    </Section>
  );
}
