# AGENTS.md — Guia de desenvolvimento da KaKa Pneus & Rodas

> Fonte de verdade para arquitetura, conteúdo, convenções e decisões técnicas do site da KaKa Pneus & Rodas. Atualize este documento quando informações forem confirmadas pela empresa ou quando o escopo mudar.

---

## 1. Visão geral

A **KaKa Pneus & Rodas** é uma loja de Feira de Santana, Bahia, voltada ao mercado automotivo. O briefing público consultado em 05/10/2026 descreve pneus, rodas, orçamento pelo WhatsApp, uma segunda unidade indicada no Instagram e conteúdos de produtos, loja e humor. Uma listagem local menciona venda de pneus e rodas, alinhamento e balanceamento.

O site deve transformar a presença no Instagram em uma vitrine clara para apresentar produtos e serviços confirmados, orientar a pessoa sobre como pedir orçamento e facilitar contato e localização.

**Atores:** visitante, cliente da loja, equipe da KaKa.  
**Conversão principal:** iniciar orçamento pelo WhatsApp oficial.  
**Idioma:** português brasileiro (`pt-BR`).  
**Escopo inicial:** landing page comercial responsiva, sem e-commerce ou sistema de estoque.

### Base de evidências e limites

Fatos observados no briefing:

- Perfil: `@kakapneuserodas_`.
- A bio indica Feira de Santana, produtos à pronta entrega, uma segunda unidade (`@kakapneuserodas.aurora`) e contato para orçamento.
- O link da bio leva ao WhatsApp.
- Destaques visíveis: Dúvidas, Localizações e Depoimentos.
- A grade mistura fotos de rodas/carros, cenas da loja e vídeos de humor.
- O perfil exibia aproximadamente 75,8 mil seguidores e 7.296 seguindo na data da consulta.

Esses dados descrevem o perfil naquele dia. Seguidores, oferta, links e conteúdos podem mudar. O número de seguidores não comprova alcance, engajamento ou vendas.

**Não publicar sem confirmação da empresa:** endereços e divisão por unidade; horários; telefone oficial; lista de produtos, marcas e medidas; preços; estoque; serviços atuais; garantias; depoimentos e autorizações de imagem.

---

## 2. Objetivos e regras de produto

1. Deixar claro em poucos segundos o que a KaKa oferece, onde atua e como pedir orçamento.
2. Levar cada visitante ao WhatsApp com contexto do produto, serviço ou unidade escolhida.
3. Mostrar produtos e trabalhos com imagens reais aprovadas.
4. Facilitar a confirmação de compatibilidade, preço, estoque e localização sem prometer resposta ou disponibilidade.
5. Começar com uma vitrine simples. Não criar carrinho, checkout, frete, estoque sincronizado ou painel sem necessidade real confirmada.
6. Distinguir fato confirmado de informação que ainda depende da equipe.
7. Manter dados comerciais centralizados e fáceis de atualizar.

---

## 3. Stack técnica

Se o repositório já tiver stack, gerenciador de pacotes ou convenções definidos, preserve-os. Para projeto novo, adotar:

| Camada | Tecnologia |
|---|---|
| Framework | Next.js com App Router |
| Linguagem | TypeScript em modo strict |
| Runtime | Node.js LTS |
| Estilos | Tailwind CSS |
| UI | Componentes próprios; shadcn/ui somente se necessário |
| Ícones | Lucide React, se necessário |
| Imagens | `next/image` |
| Fonte | `next/font` |
| Validação | Zod quando houver formulários ou dados externos |
| Testes | Vitest para lógica; Playwright para fluxos principais |
| Lint e formatação | ESLint e Prettier |
| Pacotes | pnpm em projeto novo; preservar lockfile existente |
| Hospedagem | Vercel ou hospedagem já aprovada para o projeto |
| Conteúdo MVP | arquivos TypeScript centralizados |
| Banco/Auth | Não necessários no MVP |

Não adicionar Supabase, CMS, analytics, pixels, autenticação ou backend sem requisito definido e aprovado.

---

## 4. Arquitetura

Usar arquitetura pequena, orientada a componentes e conteúdo. Páginas compõem seções; regras de URL e dados ficam em módulos reutilizáveis.

```text
.
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   │   ├── products.ts
│   │   ├── services.ts
│   │   └── locations.ts
│   ├── lib/
│   │   ├── whatsapp.ts
│   │   └── seo.ts
│   └── types/
├── public/
│   ├── images/
│   └── icons/
├── tests/
└── AGENTS.md
```

Não criar páginas internas, pastas ou abstrações até que o conteúdo e o uso justifiquem.

### Princípios

- Server Components por padrão; `"use client"` somente para interações necessárias.
- Conteúdo, números de WhatsApp e links ficam em uma fonte central.
- Componentes genéricos recebem dados por props e não incorporam regras de catálogo.
- Não duplicar conteúdo e não criar estado global para dados estáticos.
- Preferir a solução mais simples que cumpra o requisito atual.

---

## 5. Domínio e dados

### Tipos sugeridos

```ts
export type Product = {
  slug: string
  name: string
  description: string
  image?: string
  category?: string
  measures?: string[]
  availability?: string
  active: boolean
}

export type Service = {
  slug: string
  name: string
  description: string
  image?: string
  locationSlugs?: string[]
  active: boolean
}

export type Location = {
  slug: string
  name: string
  address?: string
  mapUrl?: string
  whatsappNumber?: string
  hours?: string
  active: boolean
}
```

### Regras para cadastro

- Usar `src/data/` inicialmente; migrar para CMS apenas se a equipe precisar atualizar o site sem desenvolvedor.
- Não criar produto com marca, medida, preço, compatibilidade, estoque ou garantia sem confirmação.
- “Produtos à pronta entrega” é uma afirmação geral observada na bio. Não significa que toda medida ou modelo esteja disponível.
- Alinhamento e balanceamento aparecem em listagem pública, mas devem ser confirmados pela loja antes de entrar no catálogo.
- A bio cita uma segunda unidade, mas endereço, horário, serviços e contato por unidade precisam ser confirmados.
- Depoimentos só podem ser usados quando reais, autorizados e apresentados sem alterar seu sentido.

---

## 6. Landing page e conteúdo

Seções recomendadas:

```text
Header
Hero
Produtos ou categorias
Serviços confirmados
Galeria de produtos e veículos
Como pedir orçamento
Depoimentos autorizados
Unidades/localização confirmadas
Perguntas frequentes aprovadas
CTA final para WhatsApp
Footer
```

### Conteúdo

- A primeira dobra deve identificar KaKa Pneus & Rodas, Feira de Santana e o botão de orçamento.
- Organizar pneus, rodas e serviços confirmados em grupos simples.
- Cada item relevante pode ter CTA próprio com mensagem contextual.
- Orientar o visitante a informar modelo/ano do veículo e medida desejada quando souber; deixar claro que a equipe confirma compatibilidade.
- Usar perguntas frequentes somente com respostas aprovadas pela empresa.
- Não publicar endereço, horário, mapa ou contato de unidade com base apenas em cadastros não confirmados.
- Não inventar alegações como “menor preço”, “melhor da região”, “resultado garantido” ou disponibilidade total.

---

## 7. WhatsApp e conversão

O WhatsApp é o canal principal porque aparece na bio como destino para orçamento.

### Fluxo

1. O visitante escolhe um produto, serviço ou unidade.
2. O CTA abre o número oficial confirmado pela KaKa.
3. A mensagem pré-preenchida identifica o contexto e deixa a pessoa editar antes de enviar.

Exemplo:

```text
Olá! Vim pelo site da KaKa Pneus & Rodas e gostaria de um orçamento.
Meu veículo é [modelo/ano] e procuro [produto ou serviço].
```

### Regras técnicas

- Centralizar o número em configuração sem `+`, espaços ou traços.
- Codificar a mensagem com `encodeURIComponent`.
- Não deduzir nem fixar número de telefone por fonte secundária.
- Se cada unidade usar canal diferente, mostrar essa opção de forma clara.
- Não prometer resposta imediata, preço ou estoque antes da confirmação.
- Links externos abertos em nova aba devem usar `rel="noopener noreferrer"`.

---

## 8. Design, SEO e acessibilidade

O perfil mostra logotipo amarelo sobre preto. Preservar o arquivo oficial fornecido pela empresa e não redesenhar ou distorcer a marca. A direção visual completa está em `DESIGN.md`.

### Requisitos

- Layout mobile-first e boa legibilidade em telas pequenas.
- HTML semântico, hierarquia correta de títulos e foco visível.
- Navegação por teclado, textos alternativos e contraste suficiente.
- Títulos, descrição, Open Graph, canonical, sitemap e `robots.txt`.
- SEO local somente com nome, endereço, serviço e região confirmados.
- Imagens otimizadas com dimensões definidas e lazy loading abaixo da dobra.
- Reduzir JavaScript e evitar dependências/animações pesadas.
- Não instalar analytics, pixels ou ferramentas de terceiros sem requisito e revisão de privacidade.

---

## 9. Segurança e privacidade

- Não coletar dados pessoais por formulário no MVP se o WhatsApp iniciado pelo visitante for suficiente.
- Validar e codificar links externos.
- Não registrar conteúdo de mensagens ou dados pessoais em analytics.
- Se formulário ou analytics forem adicionados, documentar finalidade e dados tratados, validar no servidor e revisar aviso de privacidade antes de publicar.
- Nunca colocar segredos em variáveis públicas ou no código cliente.
- Usar apenas imagens, vídeos e depoimentos autorizados.

---

## 10. Testes e qualidade

Verificar os fluxos reais sem escrever testes que apenas repitam conteúdo estático.

### Antes de concluir

- [ ] Todos os CTAs abrem o WhatsApp oficial correto.
- [ ] Mensagens pré-preenchidas identificam produto/serviço sem bloquear edição.
- [ ] Links de redes, mapas e contatos foram conferidos.
- [ ] Conteúdos comerciais publicados foram confirmados pela KaKa.
- [ ] Layout foi conferido em 360, 390, 768, 1024 e 1440 px.
- [ ] Navegação por teclado, foco e contraste foram verificados.
- [ ] Imagens carregam corretamente e não causam deslocamento de layout.
- [ ] Não há links quebrados, conteúdo placeholder ou erros visíveis.
- [ ] `pnpm lint` e `pnpm build` passam, se o projeto usar pnpm.
- [ ] Testes relevantes passam.

---

## 11. Pendências antes da publicação

- [ ] Confirmar nome e arquivos oficiais da marca.
- [ ] Confirmar catálogo atual: produtos, marcas, medidas e preços (se serão exibidos).
- [ ] Confirmar serviços e unidade responsável por cada um.
- [ ] Confirmar endereço, horário, mapa e WhatsApp de cada unidade.
- [ ] Selecionar fotos próprias e autorizadas.
- [ ] Confirmar quais depoimentos podem ser publicados.
- [ ] Definir se a equipe atualizará o conteúdo por meio de código ou CMS.
- [ ] Definir domínio e hospedagem.
- [ ] Revisar política de privacidade se forem usados analytics, formulário ou pixels.

---

## 12. Roadmap

### Fase 1 — Vitrine comercial

- Landing page responsiva.
- Produtos e serviços confirmados.
- CTA contextual para WhatsApp.
- Unidades e mapa depois de confirmação.
- SEO local básico e links oficiais.

### Fase 2 — Catálogo ampliado

- Páginas individuais de produtos/serviços se houver conteúdo e procura suficientes.
- Filtros por medida/categoria somente com dados atualizados.
- Atualização de conteúdo por CMS caso o processo manual vire gargalo.

### Fase 3 — Integrações

Considerar estoque, agendamento, CRM ou analytics somente quando a KaKa identificar o problema operacional e aprovar o escopo.

---

## 13. Instruções para agentes de código

1. Leia este documento e as instruções do repositório antes de alterar a aplicação.
2. Leia `DESIGN.md` para decisões visuais e de experiência.
3. Preserve o escopo da vitrine comercial e não implemente checkout ou estoque integrado sem autorização.
4. Não trate hipótese ou informação de diretório como dado confirmado.
5. Mantenha pendências explícitas até a equipe confirmar os dados.
6. Use a marca e as imagens aprovadas pela empresa.
7. Atualize este documento se a stack, o escopo ou as regras comerciais mudarem.

## 14. Decisões da implementação — 05/10/2026

- O proprietário solicitou construir o site e adicionar fotos/vídeos posteriormente. Espaços de mídia vazios são intencionais nesta versão de revisão, com dimensões reservadas; não usar imagens genéricas como estoque real.
- Mídias e textos ficam em `src/data/`, com arquivos em `public/images/` e `public/videos/`. Vídeos terão controles nativos, sem autoplay e `preload="none"`.
- Sem número oficial configurado, os CTAs levam à seção de contato, que direciona ao perfil informado no briefing. Não apresentar esse link como se abrisse diretamente o WhatsApp.
- Serviços e unidades só entram como cards após confirmação. A estrutura de dados fica preparada, sem inventar dados operacionais.
- A identificação textual da empresa é provisória até receber o arquivo de logotipo oficial; não se apresenta como redesenho do logo.
- Usar Next.js 16, React 19, Tailwind 4, pnpm e Node.js disponível no ambiente. Sem backend ou rastreamento.
- Domínio ausente: não inventar canonical nem domínio do sitemap; configurar após informar `NEXT_PUBLIC_SITE_URL`. Versão de revisão sem domínio fica fora de indexação.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
