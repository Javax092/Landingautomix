# Adicionar um novo veículo

Tempo estimado: menos de 2 minutos quando as imagens já estão prontas.

1. Adicione capa e galeria em `public/images/vehicles/`, em `.webp`.
2. Duplique um arquivo em `data/cars/` e renomeie para o slug, por exemplo `bmw-320i.ts`.
3. Preencha todos os campos do contrato `Car`. `id` e `slug` devem ser únicos; `coverImage` e cada item de `gallery` devem começar com `/images/`.
4. Importe o veículo em `data/cars/index.ts` e adicione-o ao array `registry`.
5. Rode `npm run typecheck` e `npm run build`.
6. Publique pelo fluxo de deploy existente.

O registro central valida campos essenciais, duplicidade de ID/slug e caminhos de imagem antes da renderização. Não altere `lib/vehicles.ts`: ele é o adaptador que preserva o configurador e o match.
