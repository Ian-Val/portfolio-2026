import Card from "@/components/global/Card";

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
        <p className="text-center max-w-90 mx-auto">
          Check out some of my completed and ongoing web development projects.
        </p>
        <p className="my-4 text-center">↓</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <Card>
            <p className="text-neutral-900 text-center max-w-50">
              Automotive Detailing Scheduling Website
            </p>
            <button className="mt-auto bg-blue-600 block w-full py-2 rounded-lg">
              Learn More
            </button>
          </Card>
          <Card>
            <p className="text-neutral-900 text-center max-w-50">
              Recycling Facility Petition Website
            </p>
            <button className="mt-auto bg-blue-600 block w-full py-2 rounded-lg">
              Learn More
            </button>
          </Card>
          <Card>
            <p className="text-neutral-900 text-center max-w-50">
              Encryption Algorithm Electron App
            </p>
            <button className="mt-auto bg-blue-600 block w-full py-2 rounded-lg">
              Learn More
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
}
