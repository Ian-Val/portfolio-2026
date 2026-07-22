"use-client";
import Section from "@/components/global/Section";
import Link from "next/link";

export default function Work() {
  return (
    <Section id="work" bgColor="blue-600" textColor="white">
      <h2 className="mb-6 text-2xl text-center">
        My{" "}
        <span className="bg-white text-blue-900 px-2 py-1 rounded">Work</span>
      </h2>
      <p className="my-4 text-center">↓</p>

      <div className="flex flex-col items-center w-full gap-4 px-10 py-10 border-2 rounded-2xl border-blue-600 bg-white text-neutral-900 mb-4">
        <Link
          href="https://affordable-housing-trust.vercel.app/"
          className=" text-neutral-900"
        >
          <h2 className="text-3xl">Affordable Housing Trust Website</h2>
        </Link>
        <p>
          This{" "}
          <Link
            className="underline text-blue-900"
            href="https://affordable-housing-trust.vercel.app/"
          >
            homepage
          </Link>{" "}
          is a mockup demonstrating how I would build a modern, SEO-focused
          website that helps the Bethlehem Affordable Housing Trust share its
          mission, grow community support, and connect residents with housing
          resources.
        </p>

        <p>Domain: affordablebethlaham.org for $23.99 / yr</p>

        <p>Sections:</p>

        <ul className="list-disc list-inside flex flex-col gap-5">
          <li>
            <strong>About:</strong> Explain the Trust's mission, purpose, and
            role in supporting affordable housing in Bethlehem.
          </li>

          <li>
            <strong>Current Initiatives:</strong> Highlight active programs and
            projects that show measurable community impact.
          </li>

          <li>
            <strong>Latest News:</strong> Keep residents informed about housing
            updates, announcements, and progress.
          </li>

          <li>
            <strong>Upcoming Events:</strong> Provide a central place for
            meetings, workshops, and opportunities for community involvement.
          </li>

          <li>
            <strong>Housing Fund Donation:</strong> Make it easy for supporters
            to contribute directly toward affordable housing initiatives.
          </li>

          <li>
            <strong>Newsletter:</strong> Build an ongoing communication channel
            to share updates and increase community engagement.
          </li>

          <li>
            <strong>Frequently Asked Questions:</strong> Answer common questions
            and address concerns about affordable housing.
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center w-full gap-4 px-10 py-10 border-2 rounded-2xl border-blue-600 bg-white text-neutral-900 mb-4">
        <Link
          href="https://html-snippet-library.vercel.app/"
          className=" text-neutral-900"
        >
          <h2 className="text-3xl">Snippet Library</h2>
        </Link>
        <div className="text-start w-full flex flex-col gap-5">
          <p>
            The{" "}
            <Link
              className="underline text-blue-900"
              href="https://html-snippet-library.vercel.app/"
            >
              Snippet Library
            </Link>{" "}
            is a client-side React application that eliminates repetitive
            drag-and-drop work in marketing workflows by providing a centralized
            repository of pre-built, tested HTML/CSS components. Its core
            purpose is to accelerate campaign and landing page development,
            allowing marketers to assemble professional pages in minutes rather
            than hours by reusing proven components instead of rebuilding from
            scratch each time.
          </p>

          <p>Key Features:</p>

          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>
              Reusable Component Library: Store pre-built HTML/CSS snippets
            </li>

            <li>Live Preview: See changes in real-time before saving</li>

            <li>
              Isolated CSS Scoping: Prevents style conflicts between components
            </li>

            <li>
              Responsive Testing: Toggle desktop, tablet, and mobile views
            </li>

            <li>
              One-Click Copy: Export full HTML+CSS blocks with unique IDs for
              each instance
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center w-full md:min-h-screen gap-4 px-10 py-10 border-2 rounded-2xl border-blue-600 bg-white text-neutral-900 ">
          <Link href="https://www.abecopark.com" className=" text-neutral-900">
            <h2 className="text-3xl">AB EcoPark</h2>
          </Link>
          <div className="text-start w-full flex flex-col gap-5">
            <p>
              <Link
                className="underline text-blue-900"
                href="www.abecopark.com"
              >
                AB EcoPark
              </Link>{" "}
              is a carbon-negative waste recycling facility in the process of
              obtaining state approval.{" "}
              <Link
                className="underline text-blue-900"
                href="https://www.blender.org/"
              >
                Blender
              </Link>{" "}
              was used to 3D model and render images of the facility. &{" "}
              <Link
                className="underline text-blue-900"
                href="https://buffer.com/"
              >
                Buffer
              </Link>{" "}
              was used to create social media content on{" "}
              <Link
                className="underline text-blue-900"
                href="https://www.instagram.com/abecopark/"
              >
                AB Ecopark's Instagram Account
              </Link>{" "}
              to drive traffic to the website.
            </p>
            <ul className="list-disc list-inside flex flex-col gap-5">
              <li>Frontend built with Next.js.</li>
              <ul className="mb-2 flex gap-2 md:justify-start justify-center flex-wrap ">
                <li className="chip">React.js</li>
                <li className="chip">Tailwind CSS</li>
                <li className="chip">Next.js</li>
              </ul>
              <li>Backend built with Supabase.</li>
              <ul className="mb-2 flex gap-2 md:justify-start justify-center flex-wrap ">
                <li className="chip">Supabase</li>
                <li className="chip">PostgreSQL</li>
              </ul>
              <li>Deployed on Vercel.</li>
              <ul className="mb-2 flex gap-2 md:justify-start justify-center flex-wrap ">
                <li className="chip">GitHub</li>
                <li className="chip">Vercel</li>
                <li className="chip">GoDaddy</li>
              </ul>
            </ul>
          </div>

          <iframe
            src="https://www.abecopark.com"
            width="100%"
            title="Abecopark"
            className="mt-4 outline-2 outline-neutral-300 rounded-xl md:aspect-5/4 aspect-3/5 md:block hidden"
          />
        </div>
      </div>
    </Section>
  );
}
