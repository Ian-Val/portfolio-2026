import { ReactNode } from "react";

interface CardProps {
  outline?: boolean;
  color?: "blue" | "yellow";
  children?: ReactNode;
}

export default function Card({ children, outline, color }: CardProps) {
  const circleClass = ` w-2/3 border-2 ${outline ? (color === "yellow" ? "border-amber-400" : "border-blue-600") : color === "yellow" ? "bg-amber-400 border-none" : "bg-blue-600 border-none"} aspect-square rounded-full`;
  return (
    <div className="flex flex-col items-center w-full h-full gap-4 px-10 py-10 border-2 rounded-2xl border-blue-600 bg-white">
      <div className={circleClass}></div>
      {children}
    </div>
  );
}
