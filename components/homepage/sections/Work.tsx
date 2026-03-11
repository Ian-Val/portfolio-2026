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
          <div className="flex flex-col items-center w-full h-screen gap-4 px-10 py-10 border-2 rounded-2xl border-blue-600 bg-white text-neutral-900 ">
            <h2 className="text-3xl">AB EcoPark</h2>
            <p className="text-start w-full">
              I build a website for AB EcoPark: A waste recycling facility in
              the process of obtaining state approval. I developed the website
              using React.js, Next.js and deployed using Vercel. I also used
              Supabase to host a PostgreSQL database to store the petition
              signature information. I used Blender to creat the 3D renderings
              throughout the webpage with the exception of the main banner
              image. I used font awesome to get the icons throughout the
              website. And I also used Tailwind CSS to style the entire webpage.
            </p>

            <iframe
              src="https://www.abecopark.com"
              width="100%"
              height="100%"
              title="Abecopark"
              className="mt-4 outline-2 outline-neutral-300 rounded-xl"
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
