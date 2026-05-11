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
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center w-full gap-4 px-10 py-10 border-2 rounded-2xl border-blue-600 bg-white text-neutral-900 ">
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
              drag-and-drop work in marketing workflows by providing a
              centralized repository of pre-built, tested HTML/CSS components.
              Its core purpose is to accelerate campaign and landing page
              development, allowing marketers to assemble professional pages in
              minutes rather than hours by reusing proven components instead of
              rebuilding from scratch each time.
            </p>

            <p>Key Features:</p>

            <ul className="list-disc list-inside flex flex-col gap-5">
              <li>
                Reusable Component Library: Store pre-built HTML/CSS snippets
              </li>

              <li>Live Preview: See changes in real-time before saving</li>

              <li>
                Isolated CSS Scoping: Prevents style conflicts between
                components
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
