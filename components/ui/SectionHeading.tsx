interface SectionHeadingProps {
  id: string;
  lead: string;
  highlight: string;
  inverted?: boolean;
}

export default function SectionHeading({
  id,
  lead,
  highlight,
  inverted,
}: SectionHeadingProps) {
  return (
    <>
      <h2 id={id} className="mb-6 text-2xl text-center">
        {lead}{" "}
        <span
          className={`px-2 py-1 rounded ${inverted ? "bg-white text-blue-900" : "bg-blue-600 text-white"}`}
        >
          {highlight}
        </span>
      </h2>
      <p
        className={`mb-10 text-center ${inverted ? "" : "text-blue-600"}`}
        aria-hidden="true"
      >
        ↓
      </p>
    </>
  );
}
