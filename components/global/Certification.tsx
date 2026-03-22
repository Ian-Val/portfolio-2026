type CertificationProps = {
  title: string;
  url: string;
  provider: string;
  issued: string;
  skills: string[];
};

export default function Certification({
  title,
  url,
  provider,
  issued,
  skills,
}: CertificationProps) {
  return (
    <li className="outline-blue-600 outline-2 p-10 rounded-lg">
      <div>
        <a
          href={url}
          target="_blank"
          className="text-lg font-bold underline text-blue-600"
        >
          {title}
        </a>
        <p>{provider}</p>
        <small>{issued}</small>

        <ul className="my-2 md:grid-cols-2 grid gap-2 flex-wrap">
          {skills.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
