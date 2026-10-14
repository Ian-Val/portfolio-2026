// Checks the static site before it ships: every local link, image, stylesheet and icon in
// public/*.html and the manifest points at a file that exists.
// Usage: node scripts/check-site.mjs   (exit code 1 on problems)
import fs from "node:fs";
import path from "node:path";

const root = path.join(path.dirname(new URL(import.meta.url).pathname), "..", "public");
const problems = [];
const exists = (p) => {
  const clean = decodeURIComponent(p.split(/[?#]/)[0]).replace(/^\//, "");
  if (!clean) return fs.existsSync(path.join(root, "index.html"));
  const f = path.join(root, clean);
  // cleanUrls: /about can be about.html or about/index.html.
  return [f, f + ".html", path.join(f, "index.html")].some((x) => fs.existsSync(x) && fs.statSync(x).isFile());
};

for (const file of fs.readdirSync(root).filter((f) => f.endsWith(".html"))) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  for (const m of html.matchAll(/\s(?:href|src|srcset)="([^"]+)"/g)) {
    for (const url of m[1].split(",").map((s) => s.trim().split(/\s+/)[0])) {
      if (!url || /^(https?:|mailto:|tel:|#|data:)/.test(url)) continue;
      if (!exists(url)) problems.push(file + ": missing " + url);
    }
  }
}

const manifest = path.join(root, "manifest.webmanifest");
if (fs.existsSync(manifest)) {
  try {
    for (const icon of JSON.parse(fs.readFileSync(manifest, "utf8")).icons || []) {
      if (!exists(icon.src)) problems.push("manifest.webmanifest: missing " + icon.src);
    }
  } catch (e) {
    problems.push("manifest.webmanifest: invalid JSON (" + e.message + ")");
  }
}

if (problems.length) {
  console.log(problems.length + " problem(s):\n" + problems.join("\n"));
  process.exit(1);
}
console.log("Site OK");
