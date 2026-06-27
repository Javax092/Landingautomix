# Sistema visual premium

## Fundamentos

- Base: `#050505`, grafite `#0B0B0D`, carbono `#111114`.
- Acento: vermelho profundo `#7F1D1D`; brilho apenas em ações e pequenos indicadores.
- Texto: branco para títulos, zinc-300/400 para conteúdo e zinc-500 para metadados.
- Display: Playfair Display; interface e formulários: Inter.

## Superfícies

- `premium-panel`: vidro escuro com borda sutil e blur.
- `premium-button`: ação principal; limitar a uma ação dominante por bloco.
- `premium-background-image`: tratamento escuro e dessaturado para fundos.
- Bordas: branco entre 10% e 20%; vermelho apenas em foco, seleção ou status.

## Movimento

- Transições entre 220 e 700 ms.
- Zoom de imagem limitado a 2,5%–5%.
- Parallax/cinematic drift somente em desktop e desativado por `prefers-reduced-motion`.

## Espaçamento e acessibilidade

- Seções: 64 px no mobile e 96 px no desktop.
- Áreas clicáveis: mínimo de 44 px.
- Foco visível em links, botões e campos.
- Contraste de texto garantido por overlays; nunca posicionar texto diretamente sobre imagem clara.
