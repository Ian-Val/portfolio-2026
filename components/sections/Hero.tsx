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
              Full Stack Web Developer
            </span>{" "}
            Ian Valeta
          </h1>
          <p className="my-6 max-w-110 md:text-start text-center md:ml-0 mx-auto">
            I build fast, search-friendly websites and web apps with React,
            Next.js, and TypeScript. I graduated Magna Cum Laude in Computer
            Science from Eastern Connecticut State University, founded the
            startup Jobspank, and built the AB EcoPark petition site.
          </p>
          <p className="mb-8 max-w-110 md:text-start text-center md:ml-0 mx-auto text-neutral-600">
            Based in Connecticut. Open to conversations with potential
            cofounders and investors.
          </p>

          <div className="flex flex-wrap gap-4 mb-8 md:justify-start justify-center">
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href={site.resume} className="button-secondary">
              Resume
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
