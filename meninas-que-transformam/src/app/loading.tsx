/**
 * UI de carregamento global.
 *
 * Exibida instantaneamente pelo Next durante a transição entre rotas (e em
 * qualquer limite de Suspense). Dá feedback imediato de navegação em vez de
 * uma tela congelada enquanto a próxima página é preparada.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="container-page flex min-h-[40vh] flex-col items-center justify-center gap-4 py-16"
    >
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-lilac-light border-t-lilac-dark motion-reduce:animate-none"
      />
      <p className="text-sm font-medium text-ink/70">Carregando…</p>
    </div>
  );
}
