import type { QuizQuestion } from "@/domain";

/**
 * Banco de perguntas do quiz de perfil de carreira.
 * DEVE conter exatamente 10 perguntas (validado em teste).
 *
 * Cada opção distribui pesos de afinidade entre as carreiras. Os pesos foram
 * calibrados para que cada carreira possa vencer com um conjunto coerente de
 * respostas.
 */
export const QUIZ_QUESTIONS: readonly QuizQuestion[] = [
  {
    id: "q1",
    pergunta: "Em um projeto, o que mais te empolga?",
    opcoes: [
      { id: "q1a", texto: "Montar a tela bonita que as pessoas vão usar", pesos: { frontend: 3, "ux-design": 1 } },
      { id: "q1b", texto: "Fazer a lógica por trás funcionar certinho", pesos: { backend: 3 } },
      { id: "q1c", texto: "Entender os dados e tirar conclusões", pesos: { dados: 3 } },
      { id: "q1d", texto: "Garantir que nada quebre para o usuário", pesos: { qa: 3 } },
    ],
  },
  {
    id: "q2",
    pergunta: "Como você prefere resolver um problema?",
    opcoes: [
      { id: "q2a", texto: "Conversando com pessoas para entender a necessidade", pesos: { "ux-design": 3 } },
      { id: "q2b", texto: "Quebrando em passos lógicos e estruturando", pesos: { backend: 2, qa: 1 } },
      { id: "q2c", texto: "Olhando números e evidências", pesos: { dados: 3 } },
      { id: "q2d", texto: "Automatizando para não repetir trabalho", pesos: { devops: 3 } },
    ],
  },
  {
    id: "q3",
    pergunta: "Qual atividade você faria com prazer por horas?",
    opcoes: [
      { id: "q3a", texto: "Ajustar cores, espaçamentos e animações", pesos: { frontend: 3 } },
      { id: "q3b", texto: "Desenhar como as telas conversam entre si", pesos: { "ux-design": 3 } },
      { id: "q3c", texto: "Explorar planilhas e gráficos", pesos: { dados: 3 } },
      { id: "q3d", texto: "Configurar servidores e ambientes", pesos: { devops: 3 } },
    ],
  },
  {
    id: "q4",
    pergunta: "Um elogio que combina com você:",
    opcoes: [
      { id: "q4a", texto: "Você é super detalhista e atenta", pesos: { qa: 3 } },
      { id: "q4b", texto: "Você é criativa e sensível às pessoas", pesos: { "ux-design": 3 } },
      { id: "q4c", texto: "Você é ótima resolvendo problemas difíceis", pesos: { backend: 3 } },
      { id: "q4d", texto: "Você é organizada e gosta de processos", pesos: { devops: 2, qa: 1 } },
    ],
  },
  {
    id: "q5",
    pergunta: "Com qual frase você mais se identifica?",
    opcoes: [
      { id: "q5a", texto: "Amo quando algo fica visualmente lindo", pesos: { frontend: 3 } },
      { id: "q5b", texto: "Gosto de descobrir padrões escondidos", pesos: { dados: 3 } },
      { id: "q5c", texto: "Curto construir a base sólida de um sistema", pesos: { backend: 3 } },
      { id: "q5d", texto: "Fico feliz quando tudo roda sem falhas", pesos: { devops: 2, qa: 1 } },
    ],
  },
  {
    id: "q6",
    pergunta: "Em trabalho em grupo, você costuma:",
    opcoes: [
      { id: "q6a", texto: "Defender a experiência de quem vai usar", pesos: { "ux-design": 3 } },
      { id: "q6b", texto: "Revisar tudo para evitar erros", pesos: { qa: 3 } },
      { id: "q6c", texto: "Cuidar da parte técnica mais complexa", pesos: { backend: 2, devops: 1 } },
      { id: "q6d", texto: "Trazer dados para apoiar as decisões", pesos: { dados: 3 } },
    ],
  },
  {
    id: "q7",
    pergunta: "O que mais te atrai em tecnologia?",
    opcoes: [
      { id: "q7a", texto: "Criar coisas que as pessoas veem e tocam", pesos: { frontend: 3 } },
      { id: "q7b", texto: "Automatizar e escalar sistemas", pesos: { devops: 3 } },
      { id: "q7c", texto: "Usar IA e dados para prever cenários", pesos: { dados: 3 } },
      { id: "q7d", texto: "Entender profundamente como tudo funciona", pesos: { backend: 3 } },
    ],
  },
  {
    id: "q8",
    pergunta: "Qual desafio parece mais divertido?",
    opcoes: [
      { id: "q8a", texto: "Deixar um site rápido e acessível para todos", pesos: { frontend: 2, "ux-design": 1 } },
      { id: "q8b", texto: "Encontrar o bug que ninguém achou", pesos: { qa: 3 } },
      { id: "q8c", texto: "Modelar um banco de dados eficiente", pesos: { backend: 3 } },
      { id: "q8d", texto: "Construir um painel que conta uma história", pesos: { dados: 2, "ux-design": 1 } },
    ],
  },
  {
    id: "q9",
    pergunta: "Como você gosta de aprender algo novo?",
    opcoes: [
      { id: "q9a", texto: "Testando e prototipando ideias rápido", pesos: { "ux-design": 2, frontend: 1 } },
      { id: "q9b", texto: "Lendo a documentação a fundo", pesos: { backend: 3 } },
      { id: "q9c", texto: "Experimentando até quebrar e consertar", pesos: { devops: 3 } },
      { id: "q9d", texto: "Comparando resultados e medindo", pesos: { dados: 2, qa: 1 } },
    ],
  },
  {
    id: "q10",
    pergunta: "Daqui a alguns anos, você gostaria de:",
    opcoes: [
      { id: "q10a", texto: "Liderar o design de produtos incríveis", pesos: { "ux-design": 3 } },
      { id: "q10b", texto: "Ser referência técnica em desenvolvimento", pesos: { backend: 2, frontend: 1 } },
      { id: "q10c", texto: "Trabalhar com inteligência artificial e dados", pesos: { dados: 3 } },
      { id: "q10d", texto: "Cuidar da infraestrutura e da segurança", pesos: { devops: 2, qa: 1 } },
    ],
  },
];
