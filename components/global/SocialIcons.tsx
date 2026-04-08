"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 md:mx-0 mx-auto mb-4 md:items-start items-center">
      <a
        className="button-primary p-1! text-4xl"
        href="https://linkedin.com/in/ianvaleta"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="button-primary p-1! text-4xl"
        href="https://github.com/Ian-Val"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
