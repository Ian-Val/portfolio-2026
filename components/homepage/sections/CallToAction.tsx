import Section from "@/components/global/Section";
import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <Section id="cta">
      <div className="bg-white rounded-lg p-10 border-2 border-blue-600 w-full">
        <h2 className="text-center text-2xl mb-2">
          Request a{" "}
          <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded">
            Free
          </span>{" "}
          Consultation
        </h2>

        <form className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            className="rounded bg-blue-100 border border-blue-600 p-2"
            type="text"
            name="name"
            id="name"
            placeholder="First Last"
          />
          <label htmlFor="email">Email</label>
          <input
            className="rounded bg-blue-100 border border-blue-600 p-2"
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
          />
          <label htmlFor="phone">Phone</label>
          <input
            className="rounded bg-blue-100 border border-blue-600 p-2"
            type="tel"
            name="phone"
            id="phone"
            placeholder="XXX-XXX-XXXX"
          />
          <label htmlFor="description">Tell us more about your project</label>
          <textarea
            className="rounded bg-blue-100 border border-blue-600 p-2 min-h-20"
            name="description"
            id="description"
            cols={10}
            rows={4}
            placeholder="What are you looking for?"
          ></textarea>
          <button className="mt-4 bg-blue-600 text-white px-2 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
      {/* <div className="bg-amber-400 p-10 w-full flex flex-col justify-center sm:rounded-lg my-auto">
        <h2 className="mb-4 text-xl sm:text-start text-center">
          <span className="sm:inline hidden">←</span> Let's Build Something
          Awesome
        </h2>

        <ol className="list-decimal list-inside flex flex-col gap-3 sm:mx-0 mx-auto">
          <li>Fill out the form.</li>
          <li>Choose a time to meet.</li>
          <li>Discuss your website goals.</li>
        </ol>
        <span className="sm:hidden block text-center mt-6">↓</span>
      </div> */}
    </Section>
  );
}
