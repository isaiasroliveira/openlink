# Personal link profile

Página pessoal estática inspirada em um perfil fotográfico, pronta para publicação na Vercel.

## Personalização

Edite `profile.js` para alterar nome, descrição, localização e links. Substitua `assets/eu.png` para trocar a fotografia mantendo o mesmo nome de arquivo.

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
npm run dev
```

## Validação

```bash
npm test
```

## Versões

O projeto aplica versionamento semântico. Consulte `CHANGELOG.md` para acompanhar cada versão publicada.

## Publicação

Importe o repositório na Vercel e mantenha as configurações padrão. O projeto não exige comando de build.
