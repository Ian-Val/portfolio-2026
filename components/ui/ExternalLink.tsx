export default function ExternalLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link underline shrink-0"
    >
      Visit {new URL(href).hostname.replace(/^www\./, "")} ↗
    </a>
  );
}
