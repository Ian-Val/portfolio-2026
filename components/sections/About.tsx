import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { highlights, skills } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" labelledBy="about-heading" className="bg-blue-600 text-white">
      <SectionHeading id="about-heading" lead="About" highlight="Me" inverted />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 md:p-10 p-6 rounded-2xl bg-white text-neutral-900">
          <h3 className="text-xl font-bold">Highlights</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-neutral-600">
            Outside of code, I&apos;ve worked in sales, finance, and university
            admissions. That taught me how to explain technical ideas clearly
            and work directly with clients.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:p-10 p-6 rounded-2xl bg-white text-neutral-900">
          <h3 className="text-xl font-bold">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
          <p className="text-neutral-600">Languages: English, Spanish (elementary)</p>
        </div>
      </div>
    </Section>
  );
}
