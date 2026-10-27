import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { QuizEngine } from "@/components/quiz/QuizEngine";

export const metadata: Metadata = {
  title: "Quiz de Carreira",
  description:
    "Responda 10 perguntas e descubra qual carreira em tecnologia mais combina com o seu perfil. Sem cadastro e sem coleta de dados.",
};

export default function QuizPage() {
  return (
    <>
      <PageHeader
        titulo="Quiz de Carreira"
        descricao="Responda 10 perguntas rápidas. Nada é salvo: o resultado é calculado só no seu navegador."
      />
      <section className="container-page py-12">
        <QuizEngine />
      </section>
    </>
  );
}
