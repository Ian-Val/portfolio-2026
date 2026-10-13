import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ExternalLink from "@/components/ui/ExternalLink";
import { ventures } from "@/lib/content";

export default function Ventures() {
  return (
    <Section id="building" labelledBy="building-heading" className="bg-blue-600 text-white">
      <SectionHeading id="building-heading" lead="What I'm" highlight="Building" inverted />

      <div className="flex flex-col gap-6">
        {ventures.map((venture) => (
          <article
            key={venture.title}
            className="flex flex-col gap-5 md:p-10 p-6 rounded-2xl bg-white text-neutral-900"
          >
            <header className="flex md:flex-row flex-col md:items-end justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  {venture.role} · {venture.dates}
                </p>
                <h3 className="text-3xl font-bold">{venture.title}</h3>
              </div>
              <ExternalLink href={venture.url} />
            </header>

            <p className="text-lg">{venture.summary}</p>

            {venture.stats && (
              <dl className="grid grid-cols-3 gap-3">
                {venture.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-blue-50 p-4 text-center">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-2xl font-bold text-blue-600">{stat.value}</dd>
                    <dd className="text-sm text-neutral-600">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            )}

            <ul className="list-disc pl-5 flex flex-col gap-2">
              {venture.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
