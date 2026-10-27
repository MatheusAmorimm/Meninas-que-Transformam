import type { Scholarship } from "@/domain";

/**
 * Instituições/empresas que oferecem bolsas de estudo em tecnologia.
 * Conteúdo curado e informativo — confira sempre os editais oficiais.
 */
export const SCHOLARSHIPS: readonly Scholarship[] = [
  {
    id: "senac-psg",
    nome: "Senac — Programa Senac de Gratuidade (PSG)",
    descricao:
      "Vagas gratuitas em cursos técnicos e livres, incluindo áreas de tecnologia, para quem atende aos critérios do programa.",
    url: "https://www.senac.br/",
  },
  {
    id: "prouni",
    nome: "ProUni",
    descricao:
      "Bolsas de estudo integrais e parciais em cursos de graduação, inclusive em Tecnologia da Informação, em instituições privadas.",
    url: "https://acessounico.mec.gov.br/prouni",
  },
  {
    id: "quero-bolsa",
    nome: "Programas de bolsas em instituições de ensino",
    descricao:
      "Diversas faculdades oferecem bolsas e descontos para cursos de tecnologia. Vale pesquisar editais afirmativos voltados a mulheres.",
    url: "https://www.querobolsa.com.br/",
  },
  {
    id: "reprograma",
    nome: "{reprograma}",
    descricao:
      "Organização sem fins lucrativos que oferece cursos gratuitos de programação voltados especialmente a mulheres.",
    url: "https://reprograma.com.br/",
  },
];
