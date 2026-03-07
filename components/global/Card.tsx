import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col items-center w-full h-full gap-4 px-4 py-4 border-2 rounded-2xl border-blue-600 bg-white">
      <div className="w-2/3 bg-amber-400 aspect-square rounded-full"></div>
      {children}
    </div>
  );
}
