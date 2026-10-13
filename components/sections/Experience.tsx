import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { otherRoles, techRoles } from "@/lib/content";

export default function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading id="experience-heading" lead="My" highlight="Experience" />

      <h3 className="text-xl font-bold mb-6">Software & Technical</h3>
      <ol className="border-l-2 border-blue-600 ml-2 flex flex-col gap-10 mb-15">
        {techRoles.map((role) => (
          <li key={role.title + role.org} className="relative pl-8">
            <span
              className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-blue-600 ring-4 ring-white"
              aria-hidden="true"
            />
            <p className="text-sm font-semibold text-blue-600">{role.dates}</p>
            <h4 className="text-lg font-bold">{role.title}</h4>
            <p className="text-neutral-600 mb-2">
              {role.org} · {role.location}
            </p>
            {role.points && (
              <ul className="list-disc pl-5 flex flex-col gap-1">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>

      <h3 className="text-xl font-bold mb-6">Leadership, Sales & Education</h3>
      <ul className="grid md:grid-cols-2 gap-4">
        {otherRoles.map((role) => (
          <li
            key={role.title + role.dates}
            className="outline-2 outline-blue-600 rounded-lg p-5"
          >
            <h4 className="font-bold">{role.title}</h4>
            <p className="text-neutral-600">{role.org}</p>
            <p className="text-sm text-blue-600">{role.dates}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
