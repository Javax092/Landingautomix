# Breno Automix — guia do projeto

Landing premium em Next.js (App Router), React, TypeScript e Tailwind CSS.

## Estrutura

- `app/`: layout global, Home e rota dinâmica `/veiculos/[slug]`.
- `components/`: blocos visuais, formulários e componentes de catálogo.
- `data/cars/`: um arquivo por veículo e registro central em `index.ts`.
- `types/car.ts`: contrato canônico `Car`.
- `lib/vehicles.ts`: adaptador compatível usado pelo catálogo e pelo match.
- `lib/whatsapp.ts`: mensagens e links dos fluxos de conversão.
- `public/images/`: imagens locais otimizadas.

## Rotas e âncoras

- `/`: Home.
- `/veiculos/[slug]`: detalhe de veículo, gerado a partir do registro central.
- `#configurador`, `#compatibilidade`, `#estoque`, `#breno`, `#lista-vip` e `#atendimento`: etapas da experiência na Home.

## Componentes principais

- `HeroPremium`: hero cinematográfico e CTAs iniciais.
- `BackgroundSection` e `SectionBanner`: composição visual de seções.
- `VehicleCard` e `VehicleGallery`: descoberta e detalhe do estoque.
- `ProfileCard`: autoridade do consultor.
- `PremiumCTA` e `TrustSection`: conversão e prova de confiança.

## Fluxo de dados

`data/cars/*.ts` → `data/cars/index.ts` (validação) → `lib/vehicles.ts` (compatibilidade) → catálogo, match e páginas de detalhe. O configurador e os formulários mantêm seus estados locais e geram a mensagem pelo módulo `lib/whatsapp.ts`.

## Comandos

```bash
npm run dev
npm run typecheck
npm run build
```

Veja também [adding-new-car.md](./adding-new-car.md), [image-guidelines.md](./image-guidelines.md) e [theme-system.md](./theme-system.md).
