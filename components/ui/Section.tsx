import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  labelledBy?: string;
  children?: ReactNode;
}

export default function Section({
  id,
  className = "",
  labelledBy,
  children,
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`w-full ${className}`}>
      <div className="md:max-w-270 md:p-10 md:py-20 py-15 w-full p-5 mx-auto">
        {children}
      </div>
    </section>
  );
}
