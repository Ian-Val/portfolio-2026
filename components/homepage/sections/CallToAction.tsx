import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <>
      <section
        id="hero"
        className="
      grid items-center justify-between grid-cols-2 gap-8 
      mb-20 px-20 font-semibold text-neutral-900
      "
      >
        <div className="bg-white rounded-lg p-8 border-2 border-blue-600">
          <h3 className="text-center mb-2">
            Request a{" "}
            <span className="bg-amber-400 text-neutral-900 px-2 py-1 rounded">
              Free
            </span>
            Consultation
          </h3>
          <small className="block text-center mb-2">
            Let's Build Something Amazing Together
          </small>
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
              className="rounded bg-blue-100 border border-blue-600 p-2"
              name="description"
              id="description"
              cols={10}
              rows={4}
              placeholder="What are you looking for?"
            ></textarea>
            <button className="mt-4 bg-amber-400 text-neutral-900 px-2 py-1 rounded">
              Next
            </button>
          </form>
        </div>
        <div className="bg-amber-400 p-8 flex flex-col justify-center rounded-lg my-auto">
          <h2 className="mb-4 text-2xl">← Transform Your Digital Presence</h2>
          <small className="block mb-4 text-blue-600">In 3 Steps</small>
          <ol className="list-decimal list-inside flex flex-col gap-3">
            <li>Fill out the request form.</li>
            <li>Pick a time to meet.</li>
            <li>Let's discuss your web goals.</li>
          </ol>
        </div>
      </section>
    </>
  );
}
