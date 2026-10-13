import Section from "@/components/global/Section";
import { ReactNode } from "react";

const cardClass =
  "flex flex-col items-center w-full gap-4 px-10 py-10 rounded-2xl bg-white text-neutral-900";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-900"
    >
      {children}
    </a>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mb-2 flex gap-2 md:justify-start justify-center flex-wrap">
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Work() {
  return (
    <Section id="work" className="bg-blue-600 text-white">
      <h2 className="mb-6 text-2xl text-center">
        My{" "}
        <span className="bg-white text-blue-900 px-2 py-1 rounded">Work</span>
      </h2>
      <p className="my-4 text-center" aria-hidden="true">
        ↓
      </p>

      <div className="flex flex-col gap-4">
        <article className={cardClass}>
          <h3 className="text-3xl">
            <a href="https://www.abecopark.com" target="_blank" rel="noopener noreferrer">
              AB EcoPark
            </a>
          </h3>
          <div className="text-start w-full flex flex-col gap-5">
            <p>
              <ExternalLink href="https://www.abecopark.com">AB EcoPark</ExternalLink>{" "}
              is a carbon-negative waste recycling facility in the process of
              obtaining state approval. I built the website,{" "}
              used <ExternalLink href="https://www.blender.org/">Blender</ExternalLink>{" "}
              to 3D model and render images of the facility, and used{" "}
              <ExternalLink href="https://buffer.com/">Buffer</ExternalLink> to
              create social media content for{" "}
              <ExternalLink href="https://www.instagram.com/abecopark/">
                AB EcoPark&apos;s Instagram account
              </ExternalLink>{" "}
              to drive traffic to the website.
            </p>
            <ul className="list-disc list-inside flex flex-col gap-5">
              <li>
                Frontend built with Next.js.
                <Chips items={["React.js", "Tailwind CSS", "Next.js"]} />
              </li>
              <li>
                Backend built with Supabase.
                <Chips items={["Supabase", "PostgreSQL"]} />
              </li>
              <li>
                Deployed on Vercel.
                <Chips items={["GitHub", "Vercel", "GoDaddy"]} />
              </li>
            </ul>
          </div>

          <iframe
            src="https://www.abecopark.com"
            width="100%"
            title="Live preview of the AB EcoPark website"
            loading="lazy"
            className="mt-4 outline-2 outline-neutral-300 rounded-xl md:aspect-5/4 aspect-3/5 md:block hidden"
          />
        </article>

        <article className={cardClass}>
          <h3 className="text-3xl">
            <a
              href="https://html-snippet-library.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Snippet Library
            </a>
          </h3>
          <div className="text-start w-full flex flex-col gap-5">
            <p>
              The{" "}
              <ExternalLink href="https://html-snippet-library.vercel.app/">
                Snippet Library
              </ExternalLink>{" "}
              is a client-side React application that eliminates repetitive
              drag-and-drop work in marketing workflows by providing a
              centralized repository of pre-built, tested HTML/CSS components.
              Marketers can assemble professional campaign and landing pages in
              minutes rather than hours by reusing proven components instead of
              rebuilding from scratch each time.
            </p>

            <p>Key features:</p>
            <ul className="list-disc list-inside flex flex-col gap-5">
              <li>Reusable component library of pre-built HTML/CSS snippets</li>
              <li>Live preview of changes before saving</li>
              <li>Isolated CSS scoping to prevent style conflicts</li>
              <li>Responsive testing across desktop, tablet, and mobile views</li>
              <li>
                One-click copy of full HTML+CSS blocks with unique IDs for each
                instance
              </li>
            </ul>
            <Chips items={["React.js", "HTML", "CSS", "Vercel"]} />
          </div>
        </article>
      </div>
    </Section>
  );
}
