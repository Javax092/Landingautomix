# Breno Automix - arquitetura futura

Este documento registra a evolução recomendada depois do primeiro ciclo visual. A
base pública atual continua funcionando como vitrine; as camadas abaixo devem ser
implementadas apenas quando houver decisão sobre persistência, autenticação e
rotina operacional.

## Camadas

- Vitrine: Home, `/veiculos`, `/veiculos/[slug]`, curadoria e Lista VIP.
- Motor comercial: eventos de intenção, normalização de leads e relacionamento
  entre cliente, veículo e origem.
- Administração: operação interna para veículos, leads, mídia e divulgação.

## Eventos recomendados

- `vehicle_view`
- `curation_started`
- `curation_completed`
- `whatsapp_click`
- `vip_signup`
- `vehicle_interest`

No estado atual, esses eventos devem ser tratados como pontos de integração
futuros. Não há dashboard real de analytics, então não devem existir métricas
fictícias.

## Modelo recomendado para veículos

- Identificação: marca, modelo, versão, ano, ano modelo e slug.
- Comercial: preço, status, destaque, data de publicação e data de arquivamento.
- Especificações: quilometragem, cor, combustível, câmbio, motor e carroceria.
- Curadoria: perfil, descrição editorial, destaques e nota cadastrada por Breno.
- Mídia: capa, galeria, interior, exterior, detalhes, divulgação e alt text.

Status futuros podem seguir `DRAFT`, `AVAILABLE`, `RESERVED`, `NEGOTIATION`,
`SOLD` e `ARCHIVED`, desde que sejam adaptados ao domínio existente
`available`, `reserved`, `sold` e `coming-soon`.

## Modelo recomendado para leads

- Nome
- WhatsApp
- Veículo de interesse, quando houver
- Interesse
- Origem: `VEHICLE`, `CURATION`, `VIP`, `WHATSAPP` ou `FORM`
- Data
- Status
- Observações

Pipeline sugerido: `NOVO`, `CONTATADO`, `QUALIFICADO`, `NEGOCIACAO`, `VENDA` e
`PERDIDO`.

## Administração

Rota futura: `/admin`.

O painel deve ter linguagem operacional, sem visual cinematográfico. Estrutura
incremental recomendada:

- `/admin`: visão geral com veículos ativos, vendidos, destaques, leads e Lista
  VIP, sem métricas inventadas.
- `/admin/veiculos`: tabela com foto, veículo, preço, status, destaque e ações.
- `/admin/veiculos/novo`: cadastro de veículo.
- `/admin/leads`: leads recentes, origem, status e observações.
- `/admin/midia`: organização de capa, galeria, interior, exterior e detalhes.
- `/admin/divulgacao`: central futura de formatos comerciais.

## Central de divulgação

Não construir editor gráfico complexo nesta fase. Preparar dados para formatos
como Story 9:16, Instagram 4:5, Feed 1:1, WhatsApp e Marketplace, sempre a
partir das imagens e textos cadastrados no veículo.

## Decisões pendentes

- Persistência: arquivo, CMS, banco relacional ou headless.
- Autenticação do admin.
- Registro real de eventos.
- Política de arquivamento versus exclusão.
- Upload e otimização de mídia.
