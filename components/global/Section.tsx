import Link from "next/link";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  bgColor?: string;
  textColor?: string;
  children?: ReactNode;
}

export default function Section({
  id,
  bgColor,
  textColor,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`w-full bg-${bgColor}`}>
      <div
        className={`text-${textColor} md:max-w-280 md:p-10 md:py-15 py-15 w-full p-5 mx-auto`}
      >
        {children}
      </div>
    </section>
  );
}
