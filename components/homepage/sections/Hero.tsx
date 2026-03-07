import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid md:grid-cols-2 grid-cols-1 gap-8 px-10 py-15 font-semibold items-center text-neutral-900 justify-between max-w-280 mx-auto"
    >
      <div>
        <ul className="flex text-blue-600 md:justify-start justify-center">
          <li className="px-2 pl-0 border-r-2 border-amber-400">Web Apps</li>
          <li className="px-2">Websites</li>
          <li className="px-2 pr-0 border-l-2 border-amber-400">Web Addons</li>
        </ul>
        <h1 className="font-bold text-4xl my-4 md:text-start text-center">
          Ian Valeta
        </h1>
        <p className="my-6 max-w-90 md:text-start text-center md:ml-0 mx-auto">
          I craft scalable and delightful web experiences tailored to your
          business goals.
        </p>
        <Link
          href="#cta"
          className="
          inline-block
          bg-amber-400 text-neutral-900 
          py-3
          px-6
          md:w-auto
          w-full
          text-center
          rounded-lg
          "
        >
          Let's Build Something Awesome
        </Link>
      </div>
      <div>
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
    </section>
  );
}
