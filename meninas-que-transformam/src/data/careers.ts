import type { Career, CareerId } from "@/domain";

/**
 * Catálogo curado de carreiras em tecnologia.
 * Fonte única de verdade usada pela página /carreiras e pelo resultado do quiz.
 */
export const CAREERS: readonly Career[] = [
  {
    id: "frontend",
    nome: "Desenvolvimento Front-end",
    resumo:
      "Cria as telas e a experiência visual que as pessoas usam no navegador.",
    descricao:
      "Profissionais de front-end transformam ideias e layouts em interfaces reais, cuidando de aparência, interatividade e acessibilidade. Trabalham perto de design e de produto para que tudo seja bonito e fácil de usar.",
    habilidades: [
      "HTML, CSS e JavaScript",
      "Frameworks como React",
      "Design responsivo e acessibilidade",
      "Noções de UX e atenção a detalhes visuais",
    ],
    cursosRelacionados: ["cursoemvideo-js", "fundacao-bradesco-web"],
  },
  {
    id: "backend",
    nome: "Desenvolvimento Back-end",
    resumo:
      "Constrói a lógica, as regras de negócio e as APIs que sustentam os sistemas.",
    descricao:
      "Quem atua no back-end cuida do que acontece nos bastidores: bancos de dados, APIs, autenticação e desempenho. É uma área ótima para quem gosta de resolver problemas e pensar em estruturas sólidas.",
    habilidades: [
      "Uma linguagem de servidor (ex.: Python, Node.js, Java)",
      "Bancos de dados e SQL",
      "APIs e integração entre sistemas",
      "Lógica de programação e algoritmos",
    ],
    cursosRelacionados: ["cursoemvideo-python", "fundacao-bradesco-logica"],
  },
  {
    id: "dados",
    nome: "Dados e Inteligência Artificial",
    resumo:
      "Extrai informação e insights a partir de dados para apoiar decisões.",
    descricao:
      "A área de dados reúne análise, estatística e inteligência artificial para transformar números em respostas. Combina muito bem com quem gosta de investigar padrões e contar histórias com dados.",
    habilidades: [
      "Python e bibliotecas de dados",
      "Estatística e análise de dados",
      "SQL e organização de dados",
      "Visualização e comunicação de resultados",
    ],
    cursosRelacionados: ["fundacao-bradesco-dados", "senac-tech"],
  },
  {
    id: "ux-design",
    nome: "UX / Design de Produto",
    resumo:
      "Pesquisa e desenha experiências para que os produtos sejam úteis e agradáveis.",
    descricao:
      "UX/Design une empatia e criatividade: entende as necessidades das pessoas, cria protótipos e testa soluções. É uma porta de entrada acolhedora para quem gosta de design, pesquisa e comportamento humano.",
    habilidades: [
      "Pesquisa com pessoas usuárias",
      "Prototipação (ex.: Figma)",
      "Fundamentos de design visual",
      "Testes de usabilidade e acessibilidade",
    ],
    cursosRelacionados: ["cursoemvideo-ux", "senac-tech"],
  },
  {
    id: "qa",
    nome: "Qualidade de Software (QA)",
    resumo:
      "Garante que os sistemas funcionem bem, testando e prevenindo erros.",
    descricao:
      "QA é a área que cuida da qualidade: planeja testes, encontra problemas antes das pessoas usuárias e ajuda o time a entregar com confiança. Excelente para quem é detalhista e organizado.",
    habilidades: [
      "Pensamento crítico e atenção a detalhes",
      "Testes manuais e automatizados",
      "Noções de lógica de programação",
      "Documentação e comunicação clara",
    ],
    cursosRelacionados: ["fundacao-bradesco-logica", "senac-tech"],
  },
  {
    id: "devops",
    nome: "DevOps / Infraestrutura",
    resumo:
      "Cuida da automação, da nuvem e de manter os sistemas no ar com segurança.",
    descricao:
      "DevOps aproxima desenvolvimento e operação: automatiza publicações, monitora sistemas e trabalha com nuvem. Ideal para quem gosta de automação, segurança e de ver tudo funcionando de forma estável.",
    habilidades: [
      "Linha de comando e Linux",
      "Conceitos de nuvem (ex.: AWS, Azure)",
      "Automação e integração contínua",
      "Monitoramento e segurança",
    ],
    cursosRelacionados: ["fundacao-bradesco-web", "senac-tech"],
  },
];

/** Índice por id para acesso O(1) a partir do resultado do quiz. */
const CAREER_BY_ID = new Map<CareerId, Career>(
  CAREERS.map((career) => [career.id, career]),
);

export function getCareerById(id: CareerId): Career | undefined {
  return CAREER_BY_ID.get(id);
}
