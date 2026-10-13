import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { highlights, skills } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" labelledBy="about-heading" className="bg-blue-600 text-white">
      <SectionHeading id="about-heading" lead="About" highlight="Me" inverted />

      <div className="flex flex-col gap-3 mb-6 md:p-10 p-6 rounded-2xl bg-white text-neutral-900">
        <h3 className="text-xl font-bold">What I&apos;m Doing Now</h3>
        <p>
          I&apos;m learning C++ while building{" "}
          <a
            href="https://www.studystate.us"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            studystate.us
          </a>
          {" "}under Jobspank LLC. By day, I&apos;m an Admissions Counselor at
          Eastern Connecticut State University, helping students and families
          through the college search.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 md:p-10 p-6 rounded-2xl bg-white text-neutral-900">
          <h3 className="text-xl font-bold">Highlights</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-neutral-600">
            Roles in door-to-door sales, financial services, and university
            admissions taught me to pitch and to listen to the people I&apos;m
            building for.
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
          <p className="text-neutral-600">
            Fun fact: I&apos;m hopelessly addicted to{" "}
            <a
              href="https://orteil.dashnet.org/cookieclicker/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Cookie Clicker
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
