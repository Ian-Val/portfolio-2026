import Image from "next/image";
import Section from "@/components/ui/Section";
import SocialIcons from "@/components/ui/SocialIcons";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="flex md:flex-row flex-col items-center justify-between md:gap-10 gap-8">
        <div className="w-full">
          <h1 className="font-bold text-4xl mb-4 md:text-start text-center">
            <span className="flex text-blue-600 text-lg mb-2 md:justify-start justify-center">
              Founder, Jobspank LLC
            </span>{" "}
            Ian Valeta
          </h1>
          <p className="my-6 max-w-110 md:text-start text-center md:ml-0 mx-auto">
            I&apos;m building{" "}
            <a
              href="https://www.studystate.us"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              studystate.us
            </a>
            , which shows students every public college program in Connecticut
            and New York and what a year there actually costs. I&apos;m a
            full stack developer and a Magna Cum Laude Computer Science
            graduate of Eastern Connecticut State University.
          </p>
          <p className="mb-8 max-w-110 md:text-start text-center md:ml-0 mx-auto text-neutral-600">
            Based in Connecticut. Open to conversations with potential
            cofounders and investors.
          </p>

          <div className="flex flex-wrap gap-4 mb-8 md:justify-start justify-center">
            <a href="#building" className="button-primary">
              See What I&apos;m Building
            </a>
            <a href="#contact" className="button-secondary">
              Get in Touch
            </a>
          </div>

          <SocialIcons />
        </div>
        <div className="w-full md:max-w-100">
          <Image
            src={site.image}
            alt="Ian Valeta smiling in front of a DevFest New York City backdrop, holding a name badge and wearing a lanyard."
            width={610}
            height={726}
            priority
            sizes="(min-width: 768px) 400px, 100vw"
            className="border-3 border-blue-600 shadow-2xl rounded-3xl w-full"
          />
        </div>
      </div>
    </Section>
  );
}
