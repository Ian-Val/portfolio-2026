import Section from "@/components/global/Section";
import Image from "next/image";
import Link from "next/link";

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
            I am a college graduate looking to land my first full-time role in
            software development.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/ianvaleta/"
              className="button-primary md:mx-0 md:mb-0 mx-auto mb-6"
            >
              Let's Connect on LinkedIn
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/home/hero-photo.png"
            alt="A smiling person, Ian Valeta, stands in front of a DevFest New York City backdrop, holding a name badge and wearing a lanyard, with a podium microphone visible to the right."
            width={610}
            height={773}
            className="
          border-3 border-blue-600 
          shadow-2xl rounded-3xl
          w-full"
          ></Image>
        </div>
      </div>
    </Section>
  );
}
