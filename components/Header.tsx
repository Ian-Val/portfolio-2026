import Link from "next/link";
import { navLinks } from "@/lib/site";

export default function Header() {
  return (
    <header className="top-0 fixed z-10 w-full py-4 text-neutral-900 bg-neutral-50 font-semibold shadow-md">
      <nav
        aria-label="Main"
        className="flex justify-between items-center max-w-270 mx-auto md:px-10 px-5 sm:gap-6 gap-3"
      >
        <Link href="/" className="mr-auto">
          ian-val.com
        </Link>
        {navLinks.map(({ href, label }, i) => (
          <a
            key={href}
            href={href}
            className={`link ${i === 0 ? "sm:inline hidden" : "md:inline hidden"}`}
          >
            {label}
          </a>
        ))}
        <a href="#contact" className="button-primary">
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
