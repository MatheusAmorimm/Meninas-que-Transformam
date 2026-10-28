import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { ResultCard } from "./ResultCard";
import { getCareerById } from "@/data/careers";

const noop = () => {};

describe("ResultCard", () => {
  it("mostra como a carreira sugerida aparece nos anúncios de vagas", () => {
    render(<ResultCard careerId="engenharia-dados" afins={[]} onRestart={noop} />);

    const vagas = screen.getByRole("region", { name: "Como aparece nas vagas" });
    for (const cargo of getCareerById("engenharia-dados")!.cargos) {
      expect(within(vagas).getByText(cargo)).toBeInTheDocument();
    }
  });

  it("sugere as carreiras afins com link para a seção de cada uma", () => {
    render(
      <ResultCard
        careerId="engenharia-dados"
        afins={["ciencia-dados", "devops"]}
        onRestart={noop}
      />,
    );

    const afins = screen.getByRole("region", { name: "Também combina com você" });
    const links = within(afins).getAllByRole("link");
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "/carreiras#ciencia-dados",
      "/carreiras#devops",
    ]);
    expect(links[0]).toHaveTextContent(getCareerById("ciencia-dados")!.nome);
  });

  it("não mostra a seção de afins quando nenhuma outra carreira pontuou", () => {
    render(<ResultCard careerId="qa" afins={[]} onRestart={noop} />);

    expect(
      screen.queryByRole("region", { name: "Também combina com você" }),
    ).not.toBeInTheDocument();
  });
});
