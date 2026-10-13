import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center gap-x-4 gap-y-1 py-4 text-white bg-blue-900">
      <small>
        &copy; {new Date().getFullYear()} {site.name}. All Rights Reserved.
      </small>
      <small>
        <a href={site.resume} className="underline">
          Resume (PDF)
        </a>
      </small>
    </footer>
  );
}
