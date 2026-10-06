# Site KaKa Pneus & Rodas

Objetivo: vitrine responsiva em português, com categorias, orçamento e espaços para fotos e vídeos adicionados posteriormente pelo proprietário.

Direção: preto/grafite e amarelo, títulos fortes, composição editorial automotiva. Sem fotos de terceiros, logo inventado, preços, estoque, serviços ou endereços não confirmados. A marca é identificada por texto até receber o logo oficial.

Arquitetura: Next.js App Router, TypeScript strict, Tailwind, Server Components. Conteúdo em src/data; regras de links e mídia em src/lib. Menu móvel é a única interação React necessária. Acordeões usam HTML nativo. Sem backend, formulários, analytics ou pixels.

Plano:
- [x] Configurar aplicação e dependências com pnpm.
- [x] Testar validação de contato e mídias antes de implementar as funções.
- [x] Criar seções, cartões e áreas de mídia responsivos.
- [x] Documentar inserção de mídia, contatos e dados oficiais.
- [x] Conferir testes, lint, build, navegação e cinco larguras.

## Animação

- `src/components/ui/split-text.tsx` divide em caracteres o título da primeira dobra sem perder as três linhas ou a cor de destaque. O `aria-label` do H1 preserva a frase para tecnologias assistivas.
- `src/components/layout/scroll-motion.tsx` aplica entradas em cascata ao restante do conteúdo e parallax progressivo às imagens, aos elementos de galeria e aos números dos passos. O `scrub` acompanha a rolagem ao descer e ao subir.
- `prefers-reduced-motion: reduce` desativa as duas animações; o texto renderizado no servidor continua visível antes da hidratação.

Mídias ausentes: manter espaços visuais intencionais conforme pedido explícito do usuário. Quando configuradas, imagens usam next/image e vídeos usam controles nativos, sem autoplay, com preload none. Não publicar endereço/WhatsApp por inferência. Sem WhatsApp, os CTAs levam à seção de contato e ao perfil informado no briefing, com rótulo honesto.

Entrega: aplicação local pronta para revisão. Publicação comercial depende dos dados oficiais pendentes registrados no AGENTS.md.
