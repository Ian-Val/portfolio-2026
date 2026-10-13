import Section from "@/components/global/Section";
import Image from "next/image";
import SocialIcons from "@/components/global/SocialIcons";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="flex md:flex-row flex-col justify-between md:gap-4">
        <div className="w-full">
          <h1 className="font-bold text-4xl mb-4 md:text-start text-center">
            <span className="flex text-blue-600 text-lg mb-2 md:justify-start justify-center">
              Full Stack Web Developer
            </span>{" "}
            Ian Valeta
          </h1>
          <p className="my-6 max-w-90 md:text-start text-center md:ml-0 mx-auto font-normal">
            I&apos;m a Computer Science graduate from Eastern Connecticut State
            University who builds fast, search-friendly websites and web apps
            with React, Next.js, and TypeScript. I&apos;m looking to land my
            first full-time role in software development.
          </p>

          <SocialIcons />
        </div>
        <div className="w-full">
          <Image
            src="/images/home/hero-photo.png"
            alt="Ian Valeta smiling in front of a DevFest New York City backdrop, holding a name badge and wearing a lanyard."
            width={610}
            height={726}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="border-3 border-blue-600 shadow-2xl rounded-3xl w-full"
          />
        </div>
      </div>
    </Section>
  );
}
