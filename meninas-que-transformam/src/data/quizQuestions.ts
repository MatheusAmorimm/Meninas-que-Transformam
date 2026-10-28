import type { QuizQuestion } from "@/domain";

/**
 * Banco de perguntas do quiz de perfil de carreira.
 * DEVE conter exatamente 10 perguntas (validado em teste).
 *
 * As perguntas são sobre GOSTOS, personalidade e jeito de ser — nada técnico.
 * A proposta é mostrar que existe espaço na tecnologia para perfis variados:
 * cada opção distribui, nos bastidores, pesos de afinidade entre as carreiras.
 *
 * Equilíbrio (validado em teste): cada carreira é a principal (peso 2 ou 3)
 * em 4 ou 5 opções, pode ser a sugerida para quem responde com o seu perfil e
 * nenhuma vence mais do que a sua fatia justa quando as respostas variam.
 * Ao editar, mantenha uma carreira principal diferente por opção dentro da
 * mesma pergunta.
 *
 * Correspondência (invisível para quem responde):
 * - frontend         → gosto pelo visual, estético, por criar coisas bonitas
 * - ux-design        → empatia, pessoas, cuidar da experiência de todo mundo
 * - backend          → construir, lógica, entender como as coisas funcionam
 * - analise-dados    → investigar, pesquisar, responder perguntas com fatos
 * - ciencia-dados    → curiosidade científica, padrões, prever o que vem
 * - engenharia-dados → organizar muita informação para que flua sem falhas
 * - produto          → liderar, priorizar, tirar ideias do papel
 * - qa               → cuidado, atenção aos detalhes, perfeccionismo
 * - devops           → processos, automação, deixar tudo funcionando
 * - seguranca        → proteger, desconfiar na medida certa, investigar golpes
 * - suporte          → ajudar pessoas, paciência, resolver problemas práticos
 */
export const QUIZ_QUESTIONS: readonly QuizQuestion[] = [
  {
    id: "q1",
    pergunta: "Num dia livre, o que te daria mais prazer?",
    opcoes: [
      { id: "q1a", texto: "Decorar um cantinho da casa ou montar um look", pesos: { frontend: 3 } },
      { id: "q1b", texto: "Organizar um encontro e reunir as pessoas", pesos: { produto: 2, "ux-design": 1 } },
      { id: "q1c", texto: "Mergulhar num documentário ou num quebra-cabeça", pesos: { "ciencia-dados": 3 } },
      { id: "q1d", texto: "Pôr a casa em ordem e planejar a semana", pesos: { devops: 3 } },
      { id: "q1e", texto: "Ajudar alguém a configurar o celular ou o computador novo", pesos: { suporte: 3 } },
    ],
  },
  {
    id: "q2",
    pergunta: "Qual elogio te deixa mais feliz?",
    opcoes: [
      { id: "q2a", texto: "Você tem um ótimo senso estético", pesos: { frontend: 3 } },
      { id: "q2b", texto: "Você entende muito bem as pessoas", pesos: { "ux-design": 3 } },
      { id: "q2c", texto: "Você é super atenta aos detalhes", pesos: { qa: 3 } },
      { id: "q2d", texto: "Você resolve até os problemas mais difíceis", pesos: { backend: 2, devops: 1 } },
      { id: "q2e", texto: "Com você, as ideias saem do papel", pesos: { produto: 3 } },
    ],
  },
  {
    id: "q3",
    pergunta: "Ganhou um dia para aprender algo novo. Você escolhe:",
    opcoes: [
      { id: "q3a", texto: "Um curso de comunicação ou psicologia", pesos: { "ux-design": 2, suporte: 1 } },
      { id: "q3b", texto: "Uma aula sobre como investigar e analisar coisas", pesos: { "analise-dados": 3 } },
      { id: "q3c", texto: "Uma oficina de marcenaria ou de montar e consertar coisas", pesos: { backend: 2, suporte: 1 } },
      { id: "q3d", texto: "Um curso para se proteger de golpes na internet", pesos: { seguranca: 3 } },
      { id: "q3e", texto: "Uma oficina para deixar arquivos, fotos e documentos sempre fáceis de achar", pesos: { "engenharia-dados": 3 } },
    ],
  },
  {
    id: "q4",
    pergunta: "Numa viagem com amigas, qual papel é o seu?",
    opcoes: [
      { id: "q4a", texto: "A que planeja o roteiro e os horários", pesos: { produto: 2, devops: 1 } },
      { id: "q4b", texto: "A que cuida para ninguém ficar de fora", pesos: { "ux-design": 3 } },
      { id: "q4c", texto: "A que acha os melhores lugares pesquisando bastante", pesos: { "analise-dados": 3 } },
      { id: "q4d", texto: "A que guarda os documentos e fica de olho na segurança de todas", pesos: { seguranca: 3 } },
      { id: "q4e", texto: "A que resolve os perrengues: wi-fi, reserva, celular sem bateria", pesos: { suporte: 3 } },
    ],
  },
  {
    id: "q5",
    pergunta: "O que mais te incomoda no dia a dia?",
    opcoes: [
      { id: "q5a", texto: "Um pequeno erro que passou despercebido", pesos: { qa: 3 } },
      { id: "q5b", texto: "Processos bagunçados e tarefas repetitivas", pesos: { devops: 2, "engenharia-dados": 1 } },
      { id: "q5c", texto: "Quando ninguém entende o que o outro precisa", pesos: { produto: 2, "ux-design": 1 } },
      { id: "q5d", texto: "Informação espalhada, repetida e difícil de achar", pesos: { "engenharia-dados": 3 } },
      { id: "q5e", texto: "Senhas fracas e gente que clica em qualquer link", pesos: { seguranca: 3 } },
    ],
  },
  {
    id: "q6",
    pergunta: "Qual dessas frases mais tem a ver com você?",
    opcoes: [
      { id: "q6a", texto: "Amo quando as coisas ficam bonitas e harmônicas", pesos: { frontend: 2, qa: 1 } },
      { id: "q6b", texto: "Adoro descobrir o porquê escondido das coisas", pesos: { "analise-dados": 2, "ciencia-dados": 1 } },
      { id: "q6c", texto: "Gosto de construir algo do zero com minhas mãos", pesos: { backend: 3 } },
      { id: "q6d", texto: "Fico satisfeita quando tudo funciona sem imprevistos", pesos: { devops: 3 } },
      { id: "q6e", texto: "Adoro tentar prever o que vai acontecer", pesos: { "ciencia-dados": 3 } },
    ],
  },
  {
    id: "q7",
    pergunta: "Você se considera uma pessoa mais:",
    opcoes: [
      { id: "q7a", texto: "Criativa e cheia de ideias", pesos: { frontend: 2, produto: 1 } },
      { id: "q7b", texto: "Curiosa e questionadora", pesos: { "ciencia-dados": 2, "analise-dados": 1 } },
      { id: "q7c", texto: "Lógica e boa em montar o raciocínio passo a passo", pesos: { backend: 3 } },
      { id: "q7d", texto: "Metódica e organizada", pesos: { "engenharia-dados": 2, devops: 1 } },
      { id: "q7e", texto: "Prestativa e paciente", pesos: { suporte: 3 } },
    ],
  },
  {
    id: "q8",
    pergunta: "Qual jogo ou passatempo mais te atrai?",
    opcoes: [
      { id: "q8a", texto: "Jogos de montar, LEGO ou estratégia", pesos: { backend: 2, "engenharia-dados": 1 } },
      { id: "q8b", texto: "Jogo dos 7 erros ou caça-palavras", pesos: { qa: 3 } },
      { id: "q8c", texto: "Pintura, colagem ou algo bem visual", pesos: { frontend: 3 } },
      { id: "q8d", texto: "Escape room, enigmas e histórias de detetive", pesos: { seguranca: 2, "analise-dados": 1 } },
      { id: "q8e", texto: "Sudoku, charadas de lógica ou desafios de matemática", pesos: { "ciencia-dados": 2, backend: 1 } },
    ],
  },
  {
    id: "q9",
    pergunta: "Trabalhando em grupo, você naturalmente:",
    opcoes: [
      { id: "q9a", texto: "Cuida para que todo mundo seja ouvido", pesos: { "ux-design": 3 } },
      { id: "q9b", texto: "Revisa tudo no final para nada sair errado", pesos: { qa: 3 } },
      { id: "q9c", texto: "Organiza quem faz o quê e quando", pesos: { produto: 3 } },
      { id: "q9d", texto: "Traz fatos e pesquisas para a conversa", pesos: { "analise-dados": 2, "ciencia-dados": 1 } },
      { id: "q9e", texto: "Ajuda quem está travada em alguma parte", pesos: { suporte: 3 } },
    ],
  },
  {
    id: "q10",
    pergunta: "O que faria você sentir orgulho do seu trabalho?",
    opcoes: [
      { id: "q10a", texto: "Entender pessoas e facilitar a vida delas", pesos: { "ux-design": 2, produto: 1 } },
      { id: "q10b", texto: "Encontrar uma resposta que ninguém tinha percebido", pesos: { "ciencia-dados": 2, "analise-dados": 1 } },
      { id: "q10c", texto: "Garantir que tudo funcione todos os dias, sem ninguém notar o esforço", pesos: { devops: 3 } },
      { id: "q10d", texto: "Proteger as pessoas de golpes e ataques", pesos: { seguranca: 3 } },
      { id: "q10e", texto: "Construir uma base sólida que sustenta tudo", pesos: { "engenharia-dados": 3 } },
    ],
  },
];
