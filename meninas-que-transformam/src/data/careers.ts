import type { Career, CareerId } from "@/domain";

/**
 * Catálogo curado de carreiras em tecnologia.
 * Fonte única de verdade usada pela página /carreiras e pelo resultado do quiz.
 */
export const CAREERS: readonly Career[] = [
  {
    id: "frontend",
    nome: "Desenvolvimento Front-end e Mobile",
    resumo:
      "Cria as telas de sites e aplicativos que as pessoas usam no dia a dia.",
    descricao:
      "Profissionais de front-end e mobile transformam ideias e layouts em interfaces reais, no navegador ou no celular, cuidando de aparência, interatividade e acessibilidade. Trabalham perto de design e de produto para que tudo seja bonito e fácil de usar.",
    habilidades: [
      "HTML, CSS e JavaScript",
      "Frameworks como React (web) e React Native ou Flutter (apps)",
      "Design responsivo e acessibilidade",
      "Noções de UX e atenção a detalhes visuais",
    ],
    cargos: [
      "Desenvolvedora Front-end (Front-end Developer)",
      "Desenvolvedora Mobile (Mobile Developer)",
      "Desenvolvedora Web",
    ],
    cursosRelacionados: ["cursoemvideo-js", "fundacao-bradesco-web"],
  },
  {
    id: "backend",
    nome: "Desenvolvimento Back-end",
    resumo:
      "Constrói a lógica, as regras de negócio e as APIs que sustentam os sistemas.",
    descricao:
      "Quem atua no back-end cuida do que acontece nos bastidores: bancos de dados, APIs, autenticação e desempenho. É uma área ótima para quem gosta de resolver problemas e pensar em estruturas sólidas. Quem domina front-end e back-end atua como full-stack.",
    habilidades: [
      "Uma linguagem de servidor (ex.: Python, Node.js, Java)",
      "Bancos de dados e SQL",
      "APIs e integração entre sistemas",
      "Lógica de programação e algoritmos",
    ],
    cargos: [
      "Desenvolvedora Back-end (Back-end Developer)",
      "Desenvolvedora Full-stack (Full-stack Developer)",
      "Engenheira de Software (Software Engineer)",
    ],
    cursosRelacionados: ["cursoemvideo-python", "fundacao-bradesco-logica"],
  },
  {
    id: "analise-dados",
    nome: "Análise de Dados e BI",
    resumo:
      "Transforma dados em respostas e painéis que ajudam a tomar decisões.",
    descricao:
      "Quem trabalha com análise de dados e BI (Business Intelligence) investiga números para responder perguntas do dia a dia de uma empresa: o que vende mais, onde estão os gargalos, o que mudou. Monta relatórios e painéis claros e conta histórias com dados. É uma ótima porta de entrada para quem é curiosa e gosta de comunicar descobertas.",
    habilidades: [
      "Planilhas (Excel ou Google Sheets)",
      "SQL para consultar bancos de dados",
      "Ferramentas de BI (ex.: Power BI, Looker Studio)",
      "Estatística básica e comunicação de resultados",
    ],
    cargos: [
      "Analista de Dados (Data Analyst)",
      "Analista de BI (BI Analyst)",
      "Analista de Inteligência de Mercado",
    ],
    cursosRelacionados: ["fundacao-bradesco-power-bi", "fundacao-bradesco-dados"],
  },
  {
    id: "ciencia-dados",
    nome: "Ciência de Dados e Inteligência Artificial",
    resumo:
      "Usa estatística e aprendizado de máquina para encontrar padrões e fazer previsões.",
    descricao:
      "A ciência de dados vai além de descrever o que aconteceu: cria modelos estatísticos e de inteligência artificial que preveem o que pode acontecer, recomendam caminhos e automatizam decisões. Combina com quem é questionadora, gosta de testar hipóteses e não se assusta com matemática.",
    habilidades: [
      "Python e bibliotecas como pandas e scikit-learn",
      "Estatística e probabilidade",
      "Machine learning e fundamentos de IA",
      "SQL e preparação de dados",
    ],
    cargos: [
      "Cientista de Dados (Data Scientist)",
      "Engenheira de Machine Learning (ML Engineer)",
      "Engenheira de IA (AI Engineer)",
    ],
    cursosRelacionados: [
      "cisco-ciencia-dados",
      "kaggle-machine-learning",
      "cursoemvideo-python",
    ],
  },
  {
    id: "engenharia-dados",
    nome: "Engenharia de Dados",
    resumo:
      "Constrói os caminhos que levam dados organizados e confiáveis até quem precisa deles.",
    descricao:
      "Engenheiras de dados constroem a estrutura por trás da análise e da inteligência artificial: coletam dados de várias fontes, limpam, organizam e automatizam os fluxos (pipelines) que os entregam prontos para uso. É a área certa para quem gosta de construir, de organização e de ver grandes volumes de informação funcionando sem falhas.",
    habilidades: [
      "SQL e modelagem de bancos de dados",
      "Python para automatizar o tratamento de dados",
      "Pipelines e ferramentas de ETL/ELT",
      "Nuvem e data warehouses (ex.: AWS, Azure, BigQuery)",
    ],
    cargos: [
      "Engenheira de Dados (Data Engineer)",
      "Analytics Engineer",
      "Administradora de Banco de Dados (DBA)",
    ],
    cursosRelacionados: [
      "cursoemvideo-mysql",
      "cursoemvideo-python",
      "microsoft-learn-nuvem",
    ],
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
    cargos: [
      "UX Designer",
      "UI Designer",
      "Product Designer",
      "Pesquisadora de UX (UX Researcher)",
    ],
    cursosRelacionados: ["cursoemvideo-ux", "senac-tech"],
  },
  {
    id: "produto",
    nome: "Gestão de Produto e Agilidade",
    resumo:
      "Decide o que construir e organiza o time para entregar o que as pessoas precisam.",
    descricao:
      "Quem trabalha com produto conecta as necessidades das pessoas usuárias, os objetivos do negócio e o time de tecnologia: define prioridades, planeja entregas e acompanha resultados. Na agilidade, o foco é ajudar o time a trabalhar bem junto, com métodos como Scrum e Kanban. Combina com quem gosta de liderar, organizar pessoas e tomar decisões.",
    habilidades: [
      "Comunicação e negociação",
      "Priorização e visão de negócio",
      "Métodos ágeis (Scrum, Kanban)",
      "Noções de métricas e de pesquisa com pessoas usuárias",
    ],
    cargos: [
      "Product Manager (PM)",
      "Product Owner (PO)",
      "Scrum Master / Agilista",
      "Analista de Negócios (Business Analyst)",
    ],
    cursosRelacionados: ["fundacao-bradesco-gestao-projetos", "enap-scrum"],
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
    cargos: [
      "Analista de QA (QA Analyst)",
      "Analista de Testes",
      "Engenheira de Qualidade / QA Automation (QA Engineer)",
    ],
    cursosRelacionados: ["fundacao-bradesco-logica", "senac-tech"],
  },
  {
    id: "devops",
    nome: "DevOps, Cloud e Infraestrutura",
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
    cargos: [
      "Engenheira DevOps (DevOps Engineer)",
      "Engenheira de Cloud (Cloud Engineer)",
      "SRE (Site Reliability Engineer)",
      "Analista de Infraestrutura",
    ],
    cursosRelacionados: ["microsoft-learn-nuvem", "senac-tech"],
  },
  {
    id: "seguranca",
    nome: "Segurança da Informação",
    resumo:
      "Protege pessoas, sistemas e dados contra golpes, vazamentos e ataques.",
    descricao:
      "A segurança da informação (ou cibersegurança) previne e investiga ataques: monitora alertas, encontra falhas antes dos criminosos, cria regras de proteção e orienta as pessoas para evitar golpes. É uma área em crescimento, com muita demanda e ainda poucas mulheres. Combina com quem gosta de investigar, desconfia na medida certa e quer proteger quem está por perto.",
    habilidades: [
      "Redes e sistemas operacionais (Linux, Windows)",
      "Fundamentos de cibersegurança",
      "Análise de riscos e resposta a incidentes",
      "Proteção de dados e LGPD",
    ],
    cargos: [
      "Analista de Segurança da Informação",
      "Analista de SOC (monitoramento de segurança)",
      "Pentester / Analista de Testes de Intrusão",
      "Analista de GRC (Governança, Risco e Conformidade)",
    ],
    cursosRelacionados: ["cisco-ciberseguranca", "microsoft-learn-seguranca"],
  },
  {
    id: "suporte",
    nome: "Suporte e Operações de TI",
    resumo:
      "Ajuda pessoas e empresas a manter computadores, sistemas e redes funcionando.",
    descricao:
      "O suporte de TI é a porta de entrada de muitas carreiras em tecnologia: atende quem está com problema, diagnostica falhas em computadores, sistemas e redes e resolve com paciência e clareza. Com experiência, abre caminho para infraestrutura, redes, segurança ou nuvem. Combina com quem gosta de ajudar e de resolver problemas práticos.",
    habilidades: [
      "Fundamentos de hardware, sistemas operacionais e redes",
      "Diagnóstico e resolução de problemas",
      "Atendimento e comunicação clara",
      "Registro de chamados e documentação",
    ],
    cargos: [
      "Analista de Suporte Técnico (Help Desk)",
      "Analista de Service Desk",
      "Técnica de Suporte em TI",
    ],
    cursosRelacionados: ["fundacao-bradesco-fundamentos-ti", "cisco-hardware"],
  },
];

/** Índice por id para acesso O(1) a partir do resultado do quiz. */
const CAREER_BY_ID = new Map<CareerId, Career>(
  CAREERS.map((career) => [career.id, career]),
);

export function getCareerById(id: CareerId): Career | undefined {
  return CAREER_BY_ID.get(id);
}
