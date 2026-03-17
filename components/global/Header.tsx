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
      <nav className=" flex justify-between items-center max-w-270 mx-auto px-10 gap-5">
        <Link href="/">ian-val.com</Link>
        <Link href="#work" className="link ml-auto">
          Work
        </Link>
        <Link
          href="/ian-valeta-resume.pdf"
          className="
          button-primary
          rounded-lg
          text-center
          "
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
