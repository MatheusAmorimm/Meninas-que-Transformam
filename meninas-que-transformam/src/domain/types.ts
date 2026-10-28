/**
 * Camada de domínio — contratos e tipos centrais do projeto.
 *
 * Esta é a camada mais interna da arquitetura: não depende de React, Next.js,
 * nem de nenhuma fonte de dados concreta. Tudo acima (data, lib, components)
 * depende destes tipos, nunca o contrário.
 */

/** Identificadores estáveis das carreiras em tecnologia cobertas pelo site. */
export type CareerId =
  | "frontend"
  | "backend"
  | "dados"
  | "ux-design"
  | "qa"
  | "devops";

/** Lista canônica e ordenada de carreiras — usada para desempate determinístico. */
export const CAREER_IDS: readonly CareerId[] = [
  "frontend",
  "backend",
  "dados",
  "ux-design",
  "qa",
  "devops",
] as const;

/** Uma carreira em tecnologia apresentada no site. */
export interface Career {
  readonly id: CareerId;
  readonly nome: string;
  readonly resumo: string;
  readonly descricao: string;
  readonly habilidades: readonly string[];
  /** IDs de cursos relacionados (referência para a camada de dados de cursos). */
  readonly cursosRelacionados: readonly string[];
}

/** Pesos de afinidade que uma opção de resposta adiciona a cada carreira. */
export type CareerWeights = Partial<Record<CareerId, number>>;

/** Uma opção de resposta de uma pergunta do quiz. */
export interface QuizOption {
  readonly id: string;
  readonly texto: string;
  readonly pesos: CareerWeights;
}

/** Uma pergunta do quiz de perfil de carreira. */
export interface QuizQuestion {
  readonly id: string;
  readonly pergunta: string;
  readonly opcoes: readonly QuizOption[];
}

/** Resultado do quiz: carreira vencedora e o ranking completo de pontuação. */
export interface QuizResult {
  readonly careerId: CareerId;
  readonly pontuacao: Record<CareerId, number>;
}

/** Um curso gratuito indicado pelo site. */
export interface Course {
  readonly id: string;
  readonly nome: string;
  readonly instituicao: string;
  readonly descricao: string;
  readonly url: string;
}

/** Uma instituição/empresa que oferece bolsas de estudo. */
export interface Scholarship {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
  readonly url: string;
}

/** Uma instituição parceira do projeto. */
export interface Partner {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
  /** URL opcional para o site oficial da instituição. */
  readonly url?: string;
  /** Caminho opcional para o logo (reservado para uso futuro). */
  readonly logo?: string;
}
