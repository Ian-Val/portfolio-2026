import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="flex justify-center py-4 text-white bg-blue-900">
      <small>
        &copy; {new Date().getFullYear()} {site.name}. All Rights Reserved.
      </small>
    </footer>
  );
}
