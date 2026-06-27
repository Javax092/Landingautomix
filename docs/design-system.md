# Design system — Breno Automix

## Hero

A Hero é renderizada por `components/HeroPremium.tsx`. Os textos principais, os dois CTAs e os três indicadores de confiança são alterados diretamente nesse arquivo. Preserve os destinos `#configurador` e `#estoque`, pois eles conectam a Hero às seções existentes.

A imagem atual está em `public/images/brenoauto.webp`. Para substituí-la, mantenha o mesmo nome de arquivo ou atualize a propriedade `image` em `HeroPremium.tsx`. O enquadramento por breakpoint fica nas regras `.hero-premium-image` de `app/globals.css`; ajuste `object-position` separadamente para desktop, tablet e celular, sempre verificando que o rosto não seja cortado.

Recomendações para a imagem da Hero:

- proporção 16:9;
- 2560 × 1440 px como tamanho recomendado (1920 × 1080 px no mínimo);
- WebP ou AVIF, preferencialmente abaixo de 500 KB;
- sujeito principal fora da área reservada ao texto;
- contraste e nitidez naturais, sem aplicar escurecimento permanente no arquivo.

Apenas a imagem da Hero deve usar `priority`. As demais imagens permanecem com o carregamento lazy padrão do `next/image`.

## Conteúdo e CTAs

- Hero: `components/HeroPremium.tsx`.
- Navegação e CTA do cabeçalho: `components/site-header.tsx`.
- Bloco institucional: `components/AboutBreno.tsx`.
- Mensagens e número do WhatsApp: `lib/whatsapp.ts`.

Ao editar CTAs, altere somente o rótulo quando o objetivo for visual. Não troque URLs, âncoras ou a função `buildWhatsappUrl` sem validar todos os fluxos.

## Veículos

Os veículos ficam em arquivos individuais dentro de `data/cars/`. O registro que controla quais veículos aparecem no site está em `data/cars/index.ts`. `lib/vehicles.ts` é somente a camada de compatibilidade usada pelos componentes existentes.

Para adicionar um veículo com segurança:

1. Adicione as imagens em `public/images/`, usando WebP ou AVIF e nomes sem espaços.
2. Crie um arquivo em `data/cars/` a partir de um cadastro existente.
3. Preencha todos os campos obrigatórios definidos em `types/car.ts`; use `id` e `slug` únicos.
4. Use caminhos absolutos iniciados por `/images/` em `coverImage` e `gallery`.
5. Importe o cadastro em `data/cars/index.ts` e inclua-o no array `registry`.
6. Ajuste `imagePosition` para preservar o foco da foto nos cards.
7. Rode `npm run typecheck` e `npm run build`.

Não altere dados de um veículo existente para reutilizar seu slug. Slugs alimentam as rotas de detalhe e devem permanecer estáveis.
