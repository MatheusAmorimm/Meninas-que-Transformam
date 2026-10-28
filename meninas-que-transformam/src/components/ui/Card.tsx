import type { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  style?: CSSProperties;
  /** Ativa a animação de "lift" ao passar o mouse. Padrão: true. */
  interactive?: boolean;
}

const interactiveClasses =
  "group transition-all duration-300 ease-out hover:-translate-y-1 hover:border-lilac hover:shadow-lift motion-reduce:transform-none motion-reduce:transition-colors";

/** Superfície de conteúdo reutilizável com o visual pastel do projeto. */
export function Card({
  children,
  className = "",
  as = "div",
  style,
  interactive = true,
}: CardProps) {
  const Component = as;
  return (
    <Component
      style={style}
      className={`rounded-2xl border border-lilac-light bg-white/70 p-6 shadow-soft ${
        interactive ? interactiveClasses : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}
