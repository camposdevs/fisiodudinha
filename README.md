# Site da Dudinha (React + Vite)

## Rodar no computador
1. Instale o Node.js 20+ (https://nodejs.org) e o Git (https://git-scm.com).
2. Na pasta do projeto: `npm install`
3. Copie o arquivo de configuração: `cp .env.example .env` (Windows: `copy .env.example .env`)
4. Abra o `.env` e coloque o WhatsApp real: `VITE_WHATSAPP=5511987654321` (DDI 55 + DDD + número, só dígitos)
5. `npm run dev` e abra o endereço mostrado (http://localhost:5173)

## Onde editar
- `src/data/content.js`: textos, faculdade, semestres, fotos (a Dudinha edita só este arquivo)
- Formação e experiências: no mesmo arquivo, bloco `experiences`. Apague os itens que ainda não tem; grupo sem itens (ou a seção toda) some do site.
- `.env`: WhatsApp, mensagem pronta e Instagram
- `public/`: coloque as fotos aqui (ex.: `public/foto-hero.jpg`) e use `"/foto-hero.jpg"` no content.js

## Subir no GitHub
1. Crie um repositório vazio em https://github.com/new (ex.: `site-dudinha`), sem README.
2. No terminal, dentro da pasta:
```
git init
git add .
git commit -m "Primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/site-dudinha.git
git push -u origin main
```

## Publicar na Netlify
1. https://app.netlify.com > Add new site > Import an existing project > GitHub > escolha o repositório.
2. Build command: `npm run build` | Publish directory: `dist` (já vem do netlify.toml).
3. Antes do deploy, clique em Add environment variables e crie:
   - `VITE_WHATSAPP` = 5511987654321
   - `VITE_WHATSAPP_MESSAGE` = Oi, Dudinha! Vim pelo seu site e queria trocar uma ideia.
   - `VITE_INSTAGRAM` = https://instagram.com/fisiodudinha
   - `VITE_SITE_URL` = https://nome-do-seu-site.netlify.app (sem barra no fim; é o endereço final do site)
4. Deploy. Depois: Site configuration > Change site name para escolher o endereço.

## Mudar o WhatsApp depois
Netlify > Site configuration > Environment variables > edite `VITE_WHATSAPP` > Deploys > Trigger deploy > Clear cache and deploy site.
(As variáveis entram no site na hora do build, por isso precisa de um novo deploy.)

## Atualizar o site
Edite os arquivos, depois: `git add .` > `git commit -m "Atualiza textos"` > `git push`. A Netlify publica sozinha.

## Prévia ao compartilhar o link (WhatsApp/Instagram)
- A imagem fica em `public/og-image.png` (1200x630). Troque por uma foto ou arte da Dudinha com o mesmo nome e tamanho.
- Depois que o endereço final existir, confira `VITE_SITE_URL` na Netlify e faça um novo deploy.
- Para testar, cole o link no WhatsApp. Se mostrar a prévia antiga, o cache pode demorar; teste em https://developers.facebook.com/tools/debug/ e clique em "Scrape again".

## Google, favicon e página 404
- `robots.txt` e `sitemap.xml` são gerados sozinhos no build, com o endereço de `VITE_SITE_URL` (confira a variável na Netlify).
- Para o Google encontrar o site: entre em https://search.google.com/search-console, adicione o endereço do site e envie o `sitemap.xml`.
- Ícones em `public/` (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`): troque pelos da Dudinha mantendo os nomes.
- `public/404.html` é a página de erro; a Netlify usa ela sozinha para endereços que não existem.
