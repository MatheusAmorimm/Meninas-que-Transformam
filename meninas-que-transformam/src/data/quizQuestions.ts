import type { QuizQuestion } from "@/domain";

/**
 * Banco de perguntas do quiz de perfil de carreira.
 * DEVE conter exatamente 10 perguntas (validado em teste).
 *
 * As perguntas são sobre GOSTOS, personalidade e jeito de ser — nada técnico.
 * A proposta é mostrar que existe espaço na tecnologia para perfis variados:
 * cada opção distribui, nos bastidores, pesos de afinidade entre as carreiras.
 * Os pesos foram calibrados para que cada carreira possa vencer com um conjunto
 * coerente de respostas.
 *
 * Correspondência (invisível para quem responde):
 * - frontend  → gosto pelo visual, estético, por criar coisas bonitas
 * - ux-design → empatia, pessoas, organizar experiências
 * - dados     → curiosidade, padrões, investigar o porquê das coisas
 * - backend   → construir, entender como as coisas funcionam por dentro
 * - qa        → cuidado, atenção aos detalhes, perfeccionismo
 * - devops    → organização, processos, deixar tudo funcionando
 */
export const QUIZ_QUESTIONS: readonly QuizQuestion[] = [
  {
    id: "q1",
    pergunta: "Num dia livre, o que te daria mais prazer?",
    opcoes: [
      { id: "q1a", texto: "Decorar um cantinho da casa ou montar um look", pesos: { frontend: 3 } },
      { id: "q1b", texto: "Organizar um encontro e reunir as pessoas", pesos: { "ux-design": 3 } },
      { id: "q1c", texto: "Mergulhar num documentário ou num quebra-cabeça", pesos: { dados: 2, backend: 1 } },
      { id: "q1d", texto: "Pôr a casa em ordem e planejar a semana", pesos: { devops: 2, qa: 1 } },
    ],
  },
  {
    id: "q2",
    pergunta: "Qual elogio te deixa mais feliz?",
    opcoes: [
      { id: "q2a", texto: "Você tem um ótimo senso estético", pesos: { frontend: 3 } },
      { id: "q2b", texto: "Você entende muito bem as pessoas", pesos: { "ux-design": 3 } },
      { id: "q2c", texto: "Você é super atenta aos detalhes", pesos: { qa: 3 } },
      { id: "q2d", texto: "Você resolve até os problemas mais difíceis", pesos: { backend: 3 } },
    ],
  },
  {
    id: "q3",
    pergunta: "Ganhou um dia para aprender algo novo. Você escolhe:",
    opcoes: [
      { id: "q3a", texto: "Uma oficina de desenho, fotografia ou edição", pesos: { frontend: 3 } },
      { id: "q3b", texto: "Um curso de comunicação ou psicologia", pesos: { "ux-design": 3 } },
      { id: "q3c", texto: "Uma aula sobre como investigar e analisar coisas", pesos: { dados: 3 } },
      { id: "q3d", texto: "Uma oficina de marcenaria ou de montar/consertar", pesos: { backend: 2, devops: 1 } },
    ],
  },
  {
    id: "q4",
    pergunta: "Numa viagem com amigas, qual papel é o seu?",
    opcoes: [
      { id: "q4a", texto: "A que planeja o roteiro e os horários", pesos: { devops: 2, qa: 1 } },
      { id: "q4b", texto: "A que cuida para ninguém ficar de fora", pesos: { "ux-design": 3 } },
      { id: "q4c", texto: "A que acha os melhores lugares pesquisando bastante", pesos: { dados: 3 } },
      { id: "q4d", texto: "A que registra tudo em fotos e vídeos bonitos", pesos: { frontend: 3 } },
    ],
  },
  {
    id: "q5",
    pergunta: "O que mais te incomoda no dia a dia?",
    opcoes: [
      { id: "q5a", texto: "Coisas tortas, desalinhadas ou mal-acabadas", pesos: { frontend: 2, qa: 1 } },
      { id: "q5b", texto: "Um pequeno erro que passou despercebido", pesos: { qa: 3 } },
      { id: "q5c", texto: "Processos bagunçados e tarefas repetitivas", pesos: { devops: 3 } },
      { id: "q5d", texto: "Quando ninguém entende o que o outro precisa", pesos: { "ux-design": 3 } },
    ],
  },
  {
    id: "q6",
    pergunta: "Qual dessas frases mais tem a ver com você?",
    opcoes: [
      { id: "q6a", texto: "Amo quando as coisas ficam bonitas e harmônicas", pesos: { frontend: 3 } },
      { id: "q6b", texto: "Adoro descobrir o porquê escondido das coisas", pesos: { dados: 3 } },
      { id: "q6c", texto: "Gosto de construir algo do zero com minhas mãos", pesos: { backend: 3 } },
      { id: "q6d", texto: "Fico satisfeita quando tudo funciona sem imprevistos", pesos: { devops: 2, qa: 1 } },
    ],
  },
  {
    id: "q7",
    pergunta: "Você se considera uma pessoa mais:",
    opcoes: [
      { id: "q7a", texto: "Criativa e cheia de ideias", pesos: { frontend: 2, "ux-design": 1 } },
      { id: "q7b", texto: "Curiosa e questionadora", pesos: { dados: 3 } },
      { id: "q7c", texto: "Lógica e boa em montar o raciocínio passo a passo", pesos: { backend: 3 } },
      { id: "q7d", texto: "Metódica e organizada", pesos: { devops: 2, qa: 1 } },
    ],
  },
  {
    id: "q8",
    pergunta: "Qual jogo ou passatempo mais te atrai?",
    opcoes: [
      { id: "q8a", texto: "Jogos de montar, LEGO ou estratégia", pesos: { backend: 3 } },
      { id: "q8b", texto: "Jogo dos 7 erros ou caça-palavras", pesos: { qa: 3 } },
      { id: "q8c", texto: "Pintura, colagem ou algo bem visual", pesos: { frontend: 3 } },
      { id: "q8d", texto: "Enigmas e mistérios para desvendar", pesos: { dados: 3 } },
    ],
  },
  {
    id: "q9",
    pergunta: "Trabalhando em grupo, você naturalmente:",
    opcoes: [
      { id: "q9a", texto: "Cuida para que todo mundo seja ouvido", pesos: { "ux-design": 3 } },
      { id: "q9b", texto: "Revisa tudo no final para nada sair errado", pesos: { qa: 3 } },
      { id: "q9c", texto: "Organiza quem faz o quê e quando", pesos: { devops: 3 } },
      { id: "q9d", texto: "Traz fatos e pesquisas para a conversa", pesos: { dados: 3 } },
    ],
  },
  {
    id: "q10",
    pergunta: "O que faria você sentir orgulho do seu trabalho?",
    opcoes: [
      { id: "q10a", texto: "Criar algo lindo que as pessoas adorem usar", pesos: { frontend: 2, "ux-design": 1 } },
      { id: "q10b", texto: "Entender pessoas e facilitar a vida delas", pesos: { "ux-design": 3 } },
      { id: "q10c", texto: "Encontrar uma resposta que ninguém tinha percebido", pesos: { dados: 3 } },
      { id: "q10d", texto: "Construir uma base sólida que sustenta tudo", pesos: { backend: 2, devops: 1 } },
    ],
  },
];
