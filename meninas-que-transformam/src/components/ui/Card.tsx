import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}

/** Superfície de conteúdo reutilizável com o visual pastel do projeto. */
export function Card({ children, className = "", as = "div" }: CardProps) {
  const Component = as;
  return (
    <Component
      className={`rounded-2xl border border-lilac-light bg-white/70 p-6 shadow-soft ${className}`}
    >
      {children}
    </Component>
  );
}
