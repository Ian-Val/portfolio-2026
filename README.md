# Ian Valeta's Portfolio

**Live Site:** [www.ian-val.com](https://www.ian-val.com)

## About Me

Full stack web developer and Magna Cum Laude Computer Science graduate from Eastern Connecticut State University, building fast, SEO-friendly websites and web apps with React, Next.js, and TypeScript.

## Tech Stack

- **Frontend:** Plain HTML and CSS, no framework, no build step, no JavaScript
- **Deployment:** Vercel (static files from `public/`), GoDaddy

## Key Projects

- **AB EcoPark:** Petition website built with Next.js and Supabase to collect signatures for a carbon-negative recycling facility.
- **Jobspank:** Free job application tracker and one-click browser extension for entry-level job seekers.

## Editing Content

Everything is in `public/`:

- `index.html`: all page content (projects, experience, skills, education, certifications)
- `css/style.css`: all styles; colors are variables at the top
- `images/`: WebP screenshots. Projects use a 1440px and an 800px version (`name.webp`, `name-800.webp`)
- `404.html`, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`

Update the copyright year in the footer and `lastmod` in `sitemap.xml` when you make changes.

Security headers (CSP, clickjacking protection, etc.) and caching live in `vercel.json`. The CSP blocks all scripts, so adding JavaScript means updating `script-src` there.

## Contact

- **Email:** [valeta.iac@gmail.com](mailto:valeta.iac@gmail.com)
- **LinkedIn:** [linkedin.com/in/ianvaleta/](https://www.linkedin.com/in/ianvaleta/)
- **GitHub:** [github.com/ian-val](https://github.com/ian-val)

## Getting Started

To preview locally, serve the `public` folder:

```bash
python3 -m http.server 3000 --directory public
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
