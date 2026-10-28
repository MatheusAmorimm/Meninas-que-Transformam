import type { Course } from "@/domain";

/**
 * Cursos gratuitos curados. Fonte única usada pela página /bolsas-e-cursos
 * e referenciada pelas carreiras (campo cursosRelacionados).
 */
export const COURSES: readonly Course[] = [
  {
    id: "cursoemvideo-js",
    nome: "JavaScript do zero",
    instituicao: "Curso em Vídeo",
    descricao:
      "Curso gratuito e didático para dar os primeiros passos em JavaScript e desenvolvimento web.",
    url: "https://www.cursoemvideo.com/curso/javascript/",
  },
  {
    id: "cursoemvideo-python",
    nome: "Python para iniciantes",
    instituicao: "Curso em Vídeo",
    descricao:
      "Introdução à lógica e à programação com Python, uma das linguagens mais acessíveis para começar.",
    url: "https://www.cursoemvideo.com/curso/python-3-mundo-1/",
  },
  {
    id: "cursoemvideo-ux",
    nome: "Fundamentos de HTML e CSS",
    instituicao: "Curso em Vídeo",
    descricao:
      "Base de estrutura e estilo de páginas, útil para quem quer seguir para front-end ou design.",
    url: "https://www.cursoemvideo.com/curso/html5-css3/",
  },
  {
    id: "fundacao-bradesco-web",
    nome: "Desenvolvimento Web",
    instituicao: "Fundação Bradesco (Escola Virtual)",
    descricao:
      "Trilhas gratuitas de tecnologia com certificado, incluindo desenvolvimento e ferramentas digitais.",
    url: "https://www.ev.org.br/",
  },
  {
    id: "fundacao-bradesco-logica",
    nome: "Lógica de Programação",
    instituicao: "Fundação Bradesco (Escola Virtual)",
    descricao:
      "Curso introdutório para construir a base de raciocínio necessária em qualquer área de tecnologia.",
    url: "https://www.ev.org.br/",
  },
  {
    id: "fundacao-bradesco-dados",
    nome: "Análise de Dados",
    instituicao: "Fundação Bradesco (Escola Virtual)",
    descricao:
      "Conteúdo gratuito sobre dados e planilhas, um bom ponto de partida para a área de dados.",
    url: "https://www.ev.org.br/",
  },
  {
    id: "senac-tech",
    nome: "Cursos livres de Tecnologia",
    instituicao: "Senac",
    descricao:
      "O Senac oferece cursos e trilhas de tecnologia, com opções gratuitas e bolsas pelo PSG.",
    url: "https://www.senac.br/",
  },
  // Links abaixo verificados em 28/10/2026 (todos pedem cadastro gratuito).
  {
    id: "fundacao-bradesco-power-bi",
    nome: "Introdução à Análise de Dados com Power BI",
    instituicao: "Fundação Bradesco (Escola Virtual)",
    descricao:
      "Curso gratuito e com certificado para dar os primeiros passos em análise de dados e painéis no Power BI.",
    url: "https://www.ev.org.br/cursos/introducao-a-analise-de-dados-microsoft-power-bi",
  },
  {
    id: "cisco-ciencia-dados",
    nome: "Introdução à Ciência de Dados",
    instituicao: "Cisco Networking Academy",
    descricao:
      "Curso on-line gratuito e em português com os conceitos básicos de ciência de dados, com selo digital de conclusão.",
    url: "https://www.netacad.com/courses/introduction-data-science?courseLang=pt-BR",
  },
  {
    id: "kaggle-machine-learning",
    nome: "Intro to Machine Learning",
    instituicao: "Kaggle Learn",
    descricao:
      "Curso curto, gratuito e prático de aprendizado de máquina com Python, em inglês e com certificado.",
    url: "https://www.kaggle.com/learn/intro-to-machine-learning",
  },
  {
    id: "cursoemvideo-mysql",
    nome: "Banco de Dados MySQL",
    instituicao: "Curso em Vídeo",
    descricao:
      "Aulas gratuitas de bancos de dados e SQL, base para engenharia e análise de dados (o certificado é pago).",
    url: "https://www.cursoemvideo.com/curso/mysql/",
  },
  {
    id: "microsoft-learn-nuvem",
    nome: "Descrever conceitos de nuvem",
    instituicao: "Microsoft Learn",
    descricao:
      "Trilha gratuita, em português, com os conceitos básicos de computação em nuvem — primeira etapa da preparação para a certificação AZ-900.",
    url: "https://learn.microsoft.com/pt-br/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
  },
  {
    id: "cisco-ciberseguranca",
    nome: "Introduction to Cybersecurity",
    instituicao: "Cisco Networking Academy",
    descricao:
      "Curso on-line gratuito da Cisco, com versão em português, sobre ameaças digitais, proteção de dados e privacidade.",
    url: "https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=pt-BR",
  },
  {
    id: "microsoft-learn-seguranca",
    nome: "Conceitos de segurança cibernética",
    instituicao: "Microsoft Learn",
    descricao:
      "Trilha gratuita para iniciantes, em português, com os conceitos básicos de segurança cibernética.",
    url: "https://learn.microsoft.com/pt-br/training/paths/describe-basic-concepts-of-cybersecurity/",
  },
  {
    id: "fundacao-bradesco-gestao-projetos",
    nome: "Introdução à Gestão de Projetos",
    instituicao: "Fundação Bradesco (Escola Virtual)",
    descricao:
      "Curso gratuito e com certificado sobre planejar, organizar e acompanhar projetos — base para produto e agilidade.",
    url: "https://www.ev.org.br/cursos/introducao-a-gestao-de-projetos",
  },
  {
    id: "enap-scrum",
    nome: "Scrum no Contexto do Serviço Público",
    instituicao: "ENAP (Escola Virtual de Governo)",
    descricao:
      "Curso aberto a qualquer pessoa, gratuito e com certificado, sobre o Scrum, um dos métodos ágeis mais usados por times de tecnologia.",
    url: "https://www.escolavirtual.gov.br/curso/395",
  },
  {
    id: "fundacao-bradesco-fundamentos-ti",
    nome: "Fundamentos de TI: Hardware e Software",
    instituicao: "Fundação Bradesco (Escola Virtual)",
    descricao:
      "Curso gratuito e com certificado sobre computadores, programas e sistemas operacionais — base para o suporte de TI.",
    url: "https://www.ev.org.br/cursos/fundamentos-de-ti-hardware-e-software",
  },
  {
    id: "cisco-hardware",
    nome: "Noções básicas de hardware de computador",
    instituicao: "Cisco Networking Academy",
    descricao:
      "Curso on-line gratuito e em português sobre os componentes do computador, com selo digital de conclusão.",
    url: "https://www.netacad.com/courses/computer-hardware-basics?courseLang=pt-BR",
  },
];
