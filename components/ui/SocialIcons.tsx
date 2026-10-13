"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { site } from "@/lib/site";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 mb-8 md:justify-start justify-center">
      <a
        className="block button-primary p-1! text-4xl"
        href={site.socials.linkedin}
        aria-label="Ian Valeta on LinkedIn"
        rel="me noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="block button-primary p-1! text-4xl"
        href={site.socials.github}
        aria-label="Ian Valeta on GitHub"
        rel="me noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
