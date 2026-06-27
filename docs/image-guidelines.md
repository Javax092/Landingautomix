# Diretrizes de imagens

| Uso | Dimensão | Proporção |
| --- | ---: | ---: |
| Hero | 1920 × 1080 | 16:9 |
| Banner | 1600 × 900 | 16:9 |
| Card | 1200 × 800 | 3:2 |
| Miniatura | 600 × 400 | 3:2 |

- Formato: `.webp`.
- Compressão: 80%.
- Cor: preservar detalhes nas sombras, sem preto esmagado.
- Enquadramento: veículo inteiro, com respiro lateral; evitar cortes em rodas e frente.
- Hero: carro visto à distância em ambiente premium, com área negativa para texto.
- Nomes: minúsculos, sem espaços ou acentos, usando o slug do veículo.
- Peso recomendado: até 350 KB para cards e 700 KB para hero/banner.

As imagens são servidas por `next/image`, com formatos AVIF/WebP, lazy loading padrão, placeholder desfocado e fallback visual.
