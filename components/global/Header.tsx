import Link from "next/link";

export default function Nav() {
  return (
    <header
      className="
      top-0
      fixed
      w-full
    py-4
    text-neutral-900 bg-neutral-50
    font-semibold shadow-md
    "
    >
      <nav className=" flex justify-between items-center max-w-280 mx-auto  px-10">
        <Link href="/">ian-val.com</Link>
        <ul className="md:flex justify-center gap-4 hidden">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
        </ul>
        <Link
          href="cta"
          className="
          bg-blue-600 text-white 
          sm:py-3
          sm:px-6
          py-2
          px-4
          rounded-lg
          text-center
          "
        >
          Consultation Request
        </Link>
      </nav>
    </header>
  );
}
