# Personal link profile

Página pessoal estática inspirada em um perfil fotográfico, pronta para publicação na Vercel.

## Personalização

Edite `profile.ts` para alterar nome, descrição, localização e links. Substitua `public/assets/eu.png` para trocar a fotografia mantendo o mesmo nome de arquivo.

### Tag opcional

O perfil fica sem tag por padrão:

```js
tag: null,
```

Informe qualquer texto para exibir uma tag acima do nome:

```js
tag: "Aberto a colaborações",
```

### Descrição dos links

Cada link aceita uma descrição opcional pelo campo `caption`. Remova o campo quando quiser exibir somente o nome da rede.

## Uso local

```bash
npm ci
npm run dev
```

O código usa React e TypeScript em modo estrito. Vite atualiza a página durante o desenvolvimento. `npm run build` verifica os tipos e gera a versão de produção em `dist/`; `npm run preview` permite conferir esse resultado localmente.

A interface fica em `App.tsx`, os ícones em `icons.tsx` e a inicialização em `main.tsx`. O arquivo `index.html` contém apenas o ponto de entrada e os metadados. `style.css` define os estilos; o navegador recebe JavaScript compilado no build.

## Validação

```bash
npm run check
```

Os testes em `tests/App.test.tsx` verificam renderização, campos opcionais, destinos dos links, compartilhamento e página 404. `npm run typecheck` verifica os tipos, e `npm test` executa somente os testes.

## Versões

O projeto aplica versionamento semântico. Consulte `CHANGELOG.md` para acompanhar cada versão publicada.

## Publicação

Importe o repositório na Vercel. `vercel.json` define o comando `npm run build` e o diretório de publicação `dist/`.
