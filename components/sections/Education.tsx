import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Chips from "@/components/ui/Chips";
import { certifications, education } from "@/lib/content";

export default function Education() {
  return (
    <Section id="education" labelledBy="education-heading" className="bg-neutral-50">
      <SectionHeading id="education-heading" lead="My" highlight="Education" />

      <ul className="grid md:grid-cols-2 gap-4 mb-15">
        {education.map((item) => (
          <li key={item.school} className="bg-white outline-2 outline-blue-600 rounded-lg p-6">
            <h3 className="text-lg font-bold">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  {item.school}
                </a>
              ) : (
                item.school
              )}
            </h3>
            <p>{item.degree}</p>
            <p className="text-sm text-neutral-600">{item.dates}</p>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-6">Certifications</h3>
      <ul className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <li
            key={cert.title}
            className="flex flex-col gap-2 bg-white outline-2 outline-blue-600 rounded-lg p-6"
          >
            <h4>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline text-blue-600"
              >
                {cert.title}
              </a>
            </h4>
            <p className="text-sm text-neutral-600">
              {cert.provider} · {cert.issued}
            </p>
            <Chips items={cert.skills} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
