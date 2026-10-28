# Meninas que Transformam

Website informativo e de apoio à inserção de **mulheres na tecnologia**.
Projeto oficial da **PUC-SP** em parceria com o **Instituto Pedro Henrique**.

O site apresenta a iniciativa e oferece: um **quiz de perfil** que sugere uma
carreira em tecnologia entre 11 áreas (de Front-end a Ciência e Engenharia de
Dados, Segurança da Informação, Produto e Suporte de TI) e mais duas que também
combinam, orientações sobre **o que as vagas pedem** e **como cada carreira
aparece nos anúncios**, **bolsas de estudo** e **cursos gratuitos** (Fundação
Bradesco, Curso em Vídeo, Senac, Cisco, Microsoft Learn e outros).

> **Privacidade:** o site é estático e **não coleta dados pessoais**. O quiz é
> calculado inteiramente no navegador e nada é salvo nem enviado.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack) + React 19
- TypeScript
- Tailwind CSS (paleta pastel lilás)
- Vitest + Testing Library (testes)
- Yarn 4 (gerenciador de pacotes)

## Pré-requisitos

- Node.js 22+ (recomendado: 24 LTS)
- Yarn 4 (via Corepack): `corepack enable`

## Como rodar

```bash
yarn install        # instala as dependências
yarn dev            # ambiente de desenvolvimento (http://localhost:3000)
```

> **Velocidade de navegação:** no `yarn dev` cada página é compilada na primeira
> visita e não há prefetch, então a primeira troca para cada aba leva algumas
> centenas de milissegundos. Para avaliar a velocidade real (troca de abas em
> ~30 ms, com prefetch das páginas estáticas), use `yarn build && yarn start`.
> Desde o Next 16, `dev` e `build` usam pastas separadas (`.next/dev` e `.next`)
> e podem rodar ao mesmo tempo.

## Scripts

| Script           | Descrição                                   |
| ---------------- | ------------------------------------------- |
| `yarn dev`       | Servidor de desenvolvimento (Turbopack)     |
| `yarn build`     | Build de produção                           |
| `yarn start`     | Sobe o build de produção                    |
| `yarn lint`      | ESLint (flat config, `eslint.config.mjs`)   |
| `yarn typecheck` | Checagem de tipos com `tsc --noEmit`        |
| `yarn test`      | Testes (Vitest, execução única)             |
| `yarn test:watch`| Testes em modo observação                   |

## Arquitetura (clean architecture em camadas)

```
src/
  domain/       # tipos e contratos centrais (sem dependências de framework)
  data/         # conteúdo curado (carreiras, cursos, bolsas, parceiros, quiz)
  lib/          # lógica de aplicação pura (pontuação do quiz) + testes
  config/       # configuração (navegação e cabeçalhos de segurança)
  components/   # UI (Navbar, Footer, ui/, quiz/) + testes de componente
  app/          # rotas do App Router (páginas)
```

A dependência flui de fora para dentro: `app` → `components` → `lib`/`data` →
`domain`. O domínio não conhece React nem Next.js.

## Segurança

- Cabeçalhos HTTP montados em `src/config/securityHeaders.mjs` (com testes):
  Content-Security-Policy, HSTS, `Cross-Origin-Opener-Policy`,
  `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, Permissions-Policy.
- A CSP só autoriza o próprio domínio. Em `script-src` ela precisa de
  `'unsafe-inline'`: o App Router do Next injeta scripts inline em todas as
  páginas e, sem eles, o site fica em branco. A alternativa (nonce) obrigaria a
  renderizar cada página por requisição, perdendo o HTML estático e o prefetch.
- O otimizador de imagens (`/_next/image`) só aceita os PNGs locais, sem query
  string e numa única qualidade.
- `X-Powered-By` desativado.
- Links externos usam `rel="noopener noreferrer"` e `https` (validado em teste).
- Sem backend e sem coleta de dados.
- Dependências: rode `yarn npm audit --all --recursive` periodicamente e
  mantenha o Next na versão mais recente da linha 16.

## CI/CD

O workflow `.github/workflows/ci.yml`, na **raiz do repositório** (o GitHub
Actions só lê workflows de lá), roda em cada push/PR para `main`:
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

Os testes do quiz também garantem que **toda carreira pode ser a sugerida** para
quem responde com o seu perfil e que **nenhuma domina o resultado** quando as
respostas variam. Se um deles falhar depois de mexer nos pesos, reequilibre: cada
carreira deve ser a principal em 4 ou 5 opções.
