import type { Partner } from "@/domain";

/** Instituições parceiras do projeto. */
export const PARTNERS: readonly Partner[] = [
  {
    id: "puc-sp",
    nome: "PUC-SP",
    descricao:
      "Pontifícia Universidade Católica de São Paulo, instituição realizadora do projeto, comprometida com educação e impacto social.",
  },
  {
    id: "instituto-pedro-henrique",
    nome: "Instituto Pedro Henrique",
    descricao:
      "Parceiro do projeto, atua no apoio a iniciativas educacionais e de inclusão, somando esforços para abrir portas na tecnologia.",
    url: "https://institutopedrohenrique.org.br/",
  },
];
