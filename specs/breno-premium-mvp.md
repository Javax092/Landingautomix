# Breno Automix Manaus Premium MVP

## Objetivo

Criar uma landing page/vitrine pessoal premium para Breno, consultor automotivo da Automix Manaus, destacando autoridade consultiva, curadoria de veiculos e contato rapido por WhatsApp.

## Escopo

- Pagina inicial unica com hero, autoridade, catalogo, formulario de interesse, diferenciais, confianca e CTA final.
- Catalogo inicial com seis veiculos mockados.
- Acoes de WhatsApp com mensagens pre-preenchidas por veiculo e por formulario.
- Formulario compacto sem persistencia em banco.
- Stack: Next.js App Router, TypeScript e Tailwind CSS.

## Fora do Escopo

- Banco de dados, Prisma, autenticacao ou API propria.
- Integracao real com estoque da loja.
- Avaliacoes reais de clientes.
- Checkout, financiamento online ou simulacao formal.

## Criterios de Aceitacao

- O layout transmite visual premium, discreto e confiavel, com boa experiencia mobile.
- O hero contem nome, cargo, loja, frase principal, subfrase e CTAs solicitados.
- O catalogo renderiza os seis veiculos especificados com ano, preco, km, cambio, combustivel, destaques e CTA.
- O CTA "Tenho interesse" abre WhatsApp com a mensagem do veiculo selecionado.
- O formulario valida campos obrigatorios antes de abrir WhatsApp com mensagem formatada.
- A pagina inclui diferenciais, prova social mockada generica e CTA final.
- `npm run build` conclui sem erros.

## Plano Tecnico

1. Inicializar a base Next.js com App Router, TypeScript e Tailwind.
2. Criar dados mockados em `lib/vehicles.ts` e helper de WhatsApp em `lib/whatsapp.ts`.
3. Implementar componentes de hero, autoridade/catalogo, card de veiculo, formulario, diferenciais, confianca e CTA final.
4. Compor a pagina em `app/page.tsx` com layout responsivo mobile-first.
5. Validar com typecheck/build e ajustar erros encontrados.
