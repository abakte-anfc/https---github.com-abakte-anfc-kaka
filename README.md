# KaKa Pneus & Rodas

Vitrine comercial em Next.js, TypeScript e Tailwind. Sem banco de dados, rastreamento ou checkout.

## Rodar

Requer Node.js 22.12+ e pnpm 10.

```bash
pnpm install
pnpm dev
```

Abra http://127.0.0.1:3000. Se o pnpm ainda não estiver instalado, execute `npx pnpm@10 dev` depois de instalar as dependências com `npx pnpm@10 install`.

## Fotos e vídeos

1. Copie fotos para `public/images/` e vídeos para `public/videos/`. As pastas `fotos/` e `videos/` na raiz podem continuar como armazenamento dos originais; a aplicação serve apenas os arquivos em `public/`.
2. Abra `src/data/site.ts`: preencha `hero.src` e os campos `src` da galeria. Use caminhos como `/images/carro.webp` e `/videos/loja.mp4`.
3. Fotos dos cards de pneus e rodas: `src/data/products.ts` → `media.src`.
4. Para vídeo, defina `kind: 'video'`; a imagem de capa é opcional em `poster: '/images/capa.webp'`. Use MP4 ou WebM, com controles, sem reprodução automática. Uma capa ajuda a exibir o vídeo antes do play.
5. Atualize os textos `alt` para descrever o conteúdo real da foto/vídeo. Os campos `label` dão contexto à mídia.
6. Logo oficial: preencha `site.logo` em `src/data/site.ts` com um PNG ou WebP em `/images/`.

Os espaços reservados são substituídos automaticamente quando `src` é preenchido. Use nomes sem espaços/acentos. Fotos recomendadas: WebP/AVIF; 1400 px de largura para destaque e 900 px para galeria. Reserve vídeos leves e autorizados; evite vídeos longos. A aplicação mantém as proporções dos espaços para não deslocar o conteúdo.

## WhatsApp e domínio

Copie `.env.example` para `.env.local` e preencha:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=NUMERO_OFICIAL_APENAS_DIGITOS_COM_DDI_DDD
NEXT_PUBLIC_SITE_URL=https://DOMINIO_OFICIAL
```

Não use os valores ilustrativos acima literalmente. O número precisa ter de 10 a 15 dígitos. Sem número, os botões levam ao contato; lá o visitante acessa o perfil informado no briefing e usa o link da bio. Com número, passam a abrir diretamente o WhatsApp com mensagem específica de pneus/rodas. Reinicie o servidor ou faça novo build depois de alterar essas variáveis.

Sem domínio, a página fica fora de indexação e o sitemap não inventa URLs. Com domínio configurado, canonical, sitemap e robots passam a usá-lo. Antes de publicar, revise fotos, textos, contato e identidade visual com a empresa.

## Serviços e unidades

`src/data/services.ts` e `src/data/locations.ts` estão prontos para receber dados oficiais. As seções aparecem apenas quando houver registros ativos. Não foram inventados endereços, horários ou serviços. Depoimentos devem ser adicionados somente quando houver material autorizado.

## Verificação

```bash
pnpm test
pnpm lint
pnpm build
pnpm test:e2e
```

Os testes E2E verificam navegação móvel, contato, teclado e ausência de rolagem horizontal em 360, 390, 768, 1024 e 1440 px. Antes de executá-los, instale o Chromium com `pnpm exec playwright install chromium`.
