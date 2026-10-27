/**
 * Configuração de navegação — fonte única das rotas do site.
 *
 * Mantida fora dos componentes (Navbar/Footer) para respeitar a separação de
 * responsabilidades: a UI consome a configuração, não a define.
 */
export interface NavLink {
  readonly href: string;
  readonly label: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/quiz", label: "Quiz de Carreira" },
  { href: "/carreiras", label: "Carreiras em Tech" },
  { href: "/bolsas-e-cursos", label: "Bolsas e Cursos" },
  { href: "/parceiros", label: "Parceiros" },
] as const;
