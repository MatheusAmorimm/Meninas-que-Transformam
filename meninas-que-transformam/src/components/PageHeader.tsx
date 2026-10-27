interface PageHeaderProps {
  titulo: string;
  descricao?: string;
}

/** Cabeçalho padrão das páginas internas. */
export function PageHeader({ titulo, descricao }: PageHeaderProps) {
  return (
    <div className="border-b border-lilac-light bg-lilac-light/30">
      <div className="container-page py-12">
        <h1 className="text-3xl font-bold sm:text-4xl">{titulo}</h1>
        {descricao && (
          <p className="mt-3 max-w-2xl text-lg text-ink/80">{descricao}</p>
        )}
      </div>
    </div>
  );
}
