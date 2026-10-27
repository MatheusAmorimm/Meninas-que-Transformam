# Meninas que Transformam

Website informativo e de apoio à inserção de **mulheres na tecnologia**.
Projeto oficial da **PUC-SP** em parceria com o **Instituto Pedro Henrique**.

O site apresenta a iniciativa e oferece: um **quiz de perfil** que sugere uma
carreira em tecnologia, orientações sobre **o que as vagas pedem**, **bolsas de
estudo** e **cursos gratuitos** (Fundação Bradesco, Curso em Vídeo, Senac).

> **Privacidade:** o site é estático e **não coleta dados pessoais**. O quiz é
> calculado inteiramente no navegador e nada é salvo nem enviado.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Tailwind CSS (paleta pastel lilás)
- Vitest + Testing Library (testes)
- Yarn 4 (gerenciador de pacotes)

## Pré-requisitos

- Node.js 20+
- Yarn 4 (via Corepack): `corepack enable`

## Como rodar

```bash
yarn install        # instala as dependências
yarn dev            # ambiente de desenvolvimento (http://localhost:3000)
```

## Scripts

| Script           | Descrição                                   |
| ---------------- | ------------------------------------------- |
| `yarn dev`       | Servidor de desenvolvimento                 |
| `yarn build`     | Build de produção                           |
| `yarn start`     | Sobe o build de produção                    |
| `yarn lint`      | ESLint (next/core-web-vitals)               |
| `yarn typecheck` | Checagem de tipos com `tsc --noEmit`        |
| `yarn test`      | Testes (Vitest, execução única)             |
| `yarn test:watch`| Testes em modo observação                   |

## Arquitetura (clean architecture em camadas)

```
src/
  domain/       # tipos e contratos centrais (sem dependências de framework)
  data/         # conteúdo curado (carreiras, cursos, bolsas, parceiros, quiz)
  lib/          # lógica de aplicação pura (pontuação do quiz) + testes
  config/       # configuração (navegação)
  components/   # UI (Navbar, Footer, ui/, quiz/) + testes de componente
  app/          # rotas do App Router (páginas)
```

A dependência flui de fora para dentro: `app` → `components` → `lib`/`data` →
`domain`. O domínio não conhece React nem Next.js.

## Segurança

- Cabeçalhos HTTP em `next.config.mjs`: Content-Security-Policy, HSTS,
  `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, Permissions-Policy.
- `X-Powered-By` desativado.
- Links externos usam `rel="noopener noreferrer"`.
- Sem backend e sem coleta de dados.

## CI/CD

O workflow `.github/workflows/ci.yml` roda em cada push/PR para `main`:
`yarn install --immutable` → `lint` → `typecheck` → `test` → `build`.

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em [vercel.com](https://vercel.com), importe o repositório.
3. Defina o **Root Directory** como `meninas-que-transformam`.
4. A Vercel detecta o Next.js automaticamente. Não há variáveis de ambiente.
5. Deploy. 🎉

## Conteúdo

Todo o conteúdo é curado em `src/data/`. Para atualizar cursos, bolsas, parceiros,
carreiras ou perguntas do quiz, edite os arquivos `.ts` correspondentes — eles são
tipados e validados por testes de integridade.
