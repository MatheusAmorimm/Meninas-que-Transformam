import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CarreirasPage from "./page";
import { CAREERS } from "@/data/careers";

describe("página Carreiras em Tech", () => {
  it("tem uma âncora por carreira, usada pelos links do resultado do quiz", () => {
    const { container } = render(<CarreirasPage />);

    for (const career of CAREERS) {
      const card = container.querySelector(`[id="${career.id}"]`);
      expect(card, `âncora #${career.id}`).not.toBeNull();
      expect(card).toHaveTextContent(career.nome);
    }
  });

  it("mostra como cada carreira aparece nos anúncios de vagas", () => {
    const { container } = render(<CarreirasPage />);

    for (const career of CAREERS) {
      const card = container.querySelector(`[id="${career.id}"]`);
      for (const cargo of career.cargos) {
        expect(card).toHaveTextContent(cargo);
      }
    }
  });
});
