import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading" className="bg-blue-600 text-white">
      <SectionHeading id="contact-heading" lead="Get in" highlight="Touch" inverted />

      <div className="flex flex-col items-center gap-6 text-center">
        <p className="max-w-110">
          Interested in cofounding or investing in what I&apos;m building? Send
          me an email or connect with me on LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${site.email}`} className="button-inverted">
            {site.email}
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="button-inverted"
          >
            LinkedIn
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="me noopener noreferrer"
            className="button-inverted"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
