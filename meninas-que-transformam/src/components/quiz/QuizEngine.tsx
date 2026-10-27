"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ResultCard } from "./ResultCard";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";
import { resolveQuiz } from "@/lib/quiz";
import type { CareerId } from "@/domain";

/**
 * Componente interativo do quiz. Roda inteiramente no navegador e não persiste
 * nem envia nenhuma informação — o resultado é calculado em memória.
 */
export function QuizEngine() {
  const questions = QUIZ_QUESTIONS;
  const total = questions.length;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(string | undefined)[]>(
    () => Array.from({ length: total }, () => undefined),
  );
  const [result, setResult] = useState<CareerId | null>(null);

  const question = questions[current];
  const selectedId = answers[current];
  const isLast = current === total - 1;
  const progress = Math.round(((current + 1) / total) * 100);

  const canAdvance = useMemo(
    () => selectedId !== undefined,
    [selectedId],
  );

  function selectOption(optionId: string) {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = optionId;
      return next;
    });
  }

  function goNext() {
    if (!canAdvance) return;
    if (isLast) {
      const { careerId } = resolveQuiz(questions, answers);
      setResult(careerId);
      return;
    }
    setCurrent((c) => Math.min(c + 1, total - 1));
  }

  function goBack() {
    setCurrent((c) => Math.max(c - 1, 0));
  }

  function restart() {
    setAnswers(Array.from({ length: total }, () => undefined));
    setCurrent(0);
    setResult(null);
  }

  if (result) {
    return <ResultCard careerId={result} onRestart={restart} />;
  }

  return (
    <Card className="mx-auto max-w-2xl">
      {/* Progresso */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm font-medium text-ink/70">
          <span>
            Pergunta {current + 1} de {total}
          </span>
          <span>{progress}%</span>
        </div>
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-full bg-lilac-light"
          role="progressbar"
          aria-valuenow={current + 1}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label="Progresso do quiz"
        >
          <div
            className="h-full rounded-full bg-lilac transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Pergunta */}
      <fieldset>
        <legend className="text-xl font-semibold">{question.pergunta}</legend>
        <div className="mt-4 space-y-3">
          {question.opcoes.map((option) => {
            const checked = selectedId === option.id;
            return (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${
                  checked
                    ? "border-lilac bg-lilac-light"
                    : "border-lilac-light hover:bg-lilac-light/50"
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={checked}
                  onChange={() => selectOption(option.id)}
                  className="h-4 w-4 accent-lilac"
                />
                <span>{option.texto}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Navegação */}
      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="secondary"
          onClick={goBack}
          disabled={current === 0}
          type="button"
        >
          Voltar
        </Button>
        <Button onClick={goNext} disabled={!canAdvance} type="button">
          {isLast ? "Ver resultado" : "Avançar"}
        </Button>
      </div>
    </Card>
  );
}
