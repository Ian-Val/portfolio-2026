import Link from "next/link";

export default function Nav() {
  return (
    <header
      className="
    py-4 px-20
    text-neutral-900 bg-neutral-50
    font-semibold shadow-md
    "
    >
      <nav className="flex justify-between items-center">
        <Link href="/">ian-val.com</Link>
        <ul className="flex justify-center gap-4">
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
          py-3
          px-6
          rounded-lg
          "
        >
          Consultation Request
        </Link>
      </nav>
    </header>
  );
}
