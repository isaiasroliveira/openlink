# Perfil de links pessoais

## Problem Statement

O proprietário precisa reunir suas redes sociais em uma página pessoal, visual e rápida, pronta para publicação na Vercel. A página deve usar a fotografia fornecida como elemento central e seguir a linguagem visual da referência enviada.

## Solution

Criar uma página estática responsiva com retrato em tela cheia, identidade pessoal, descrição curta, cartões para redes sociais e ação de compartilhamento. O conteúdo editável ficará concentrado em uma configuração simples.

## User Stories

1. Como visitante, quero identificar o proprietário da página de imediato, para confirmar que acessei o perfil correto.
2. Como visitante, quero abrir cada rede social com um toque, para escolher o canal mais adequado.
3. Como visitante em celular, quero usar a página sem zoom ou rolagem lateral, para acessar os links com conforto.
4. Como visitante que usa teclado ou leitor de tela, quero navegar por controles nomeados e visíveis, para acessar o mesmo conteúdo.
5. Como proprietário, quero trocar textos e destinos em um único local, para manter o perfil atualizado.
6. Como proprietário, quero compartilhar a página, para divulgar meu endereço em outros canais.
7. Como proprietário, quero publicar arquivos estáticos na Vercel, para evitar configuração de servidor.

## Implementation Decisions

- Usar HTML, CSS e JavaScript sem dependências de runtime.
- Aplicar a foto fornecida em uma camada de imagem dedicada, com recorte responsivo.
- Usar uma superfície central limitada em telas grandes e ocupar toda a tela em celulares.
- Renderizar os links a partir de um objeto de configuração com chaves em inglês.
- Usar SVGs locais para os ícones e evitar chamadas externas.
- Implementar compartilhamento nativo com fallback para cópia da URL.
- Respeitar redução de movimento, contraste, foco visível e áreas de toque.

## Testing Decisions

- Testar o comportamento externo no nível mais alto possível: a composição final dos arquivos publicados.
- Validar metadados essenciais, landmarks, texto alternativo, configuração dos links, segurança de novas abas e presença da foto.
- Usar o executor de testes nativo do Node.js, sem instalar bibliotecas.

## Out of Scope

- Painel administrativo, analytics, autenticação, banco de dados e encurtador de URLs.
- Cadastro definitivo de perfis sociais que não foram informados.
- Publicação automática na conta da Vercel.

## Further Notes

Os destinos sociais iniciais são exemplos explícitos e devem ser substituídos na configuração antes da publicação definitiva.
