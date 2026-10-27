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
];
