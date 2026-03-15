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
            I am a recent college graduate looking to land my first full-time
            role in software development.
          </p>
          <ul className="mt-8 mb-8 flex gap-2 md:max-w-90 md:justify-start justify-center flex-wrap ">
            <li className="chip">HTML</li>
            <li className="chip">CSS</li>
            <li className="chip">TypeScript</li>
            <li className="chip">PostgreSQL</li>
            <li className="chip">MongoDB</li>
            <li className="chip">Express.js</li>
            <li className="chip">React.js</li>
            <li className="chip">Node.js</li>
            <li className="chip">Next.js</li>
            <li className="chip">Electron.js</li>
          </ul>
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
