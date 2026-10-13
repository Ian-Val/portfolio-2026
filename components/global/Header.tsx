import Link from "next/link";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="top-0 fixed w-full py-4 text-neutral-900 bg-neutral-50 font-semibold shadow-md">
      <nav
        aria-label="Main"
        className="flex justify-between items-center max-w-270 mx-auto md:px-10 px-5 sm:gap-5 gap-3"
      >
        <Link href="/">ian-val.com</Link>
        <Link href="#work" className="link ml-auto">
          Work
        </Link>
        <Link href="#background" className="link sm:inline hidden">
          Background
        </Link>
        <a href={site.resume} className="button-primary">
          Resume
        </a>
      </nav>
    </header>
  );
}
