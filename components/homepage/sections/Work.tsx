"use-client";
import Link from "next/link";

export default function Work() {
  return (
    <section
      id="work"
      className="
      py-15 
      font-semibold 
      items-center justify-between
      
      text-white
      bg-blue-600"
    >
      <div className="max-w-280 mx-auto px-10">
        <h2 className="mb-6 text-2xl text-center">
          My{" "}
          <span className="bg-white text-blue-600 px-2 py-1 rounded">Work</span>
        </h2>
        <p className="my-4 text-center">↓</p>
        <div className="flex">
          <div className="flex flex-col items-center w-full min-h-screen gap-4 px-10 py-10 border-2 rounded-2xl border-blue-600 bg-white text-neutral-900 ">
            <h2 className="text-3xl">AB EcoPark</h2>
            <div className="text-start w-full flex flex-col gap-5">
              <p>
                AB EcoPark is a carbon-negative waste recycling facility in the
                process of obtaining state approval. Blender was used to 3D
                model and render images of the facility. Instagram & Buffer were
                used to create social media content to drive traffic to the
                website.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-5">
                <li>
                  Frontend built with TypeScript, React.js, Tailwind CSS,
                  Next.js.
                </li>
                <li>
                  Backend built with Supabase to host a PostgreSQL database to
                  store petition data.
                </li>
                <li>
                  Deployed GitHub repository with Vercel & configured domains
                  with GoDaddy
                </li>
              </ul>
            </div>

            <ul className="mt-4 mb-2 flex gap-2 md:justify-start justify-center flex-wrap ">
              <li className="chip">Blender</li>
              <li className="chip">Instagram</li>
              <li className="chip">Buffer</li>
              <li className="chip">TypeScript</li>
              <li className="chip">React.js</li>
              <li className="chip">Tailwind CSS</li>
              <li className="chip">Next.js</li>
              <li className="chip">Supabase</li>
              <li className="chip">PostgreSQL</li>
              <li className="chip">GitHub</li>
              <li className="chip">Vercel</li>
              <li className="chip">GoDaddy</li>
            </ul>

            <iframe
              src="https://www.abecopark.com"
              width="100%"
              title="Abecopark"
              className="mt-4 outline-2 outline-neutral-300 rounded-xl md:aspect-5/4 aspect-3/5"
            />
            <Link
              href="https://www.abecopark.com"
              className="mt-6 button-primary text-neutral-900"
            >
              https://www.abecopark.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
