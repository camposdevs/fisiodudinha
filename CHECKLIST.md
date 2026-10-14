# Checklist de lançamento: site da Dudinha

Marque com [x] conforme for concluindo.

## 1. Conteúdo (`src/data/content.js`)
- [ ] Faculdade, semestre atual e previsão de formatura
- [ ] Textos do 1º semestre, do 2º semestre e dos planos futuros
- [ ] Disciplinas (etiquetas) de cada semestre
- [ ] Formação e experiências: só o que é real; apagar os itens que ainda não tem
- [ ] Dica de estudo no card do Instagram (ou trocar o texto)
- [ ] Nenhum `[colchete]` sobrando no site

## 2. Fotos (pasta `public/`)
- [ ] Foto do hero (de jaleco) e retrato do "Quem sou eu" (menos de ~300 KB cada)
- [ ] `og-image.png` (1200x630), se quiser uma foto dela na prévia do link
- [ ] Sem fotos de pacientes ou de terceiros sem autorização

## 3. Contato e privacidade
- [ ] Decidir qual WhatsApp divulgar (pessoal ou Business)
- [ ] Aprovar o nome "Eduarda", a frase da oração e os textos escritos em nome dela
- [ ] Revisar o aviso do rodapé do contato (site pessoal e informativo, sem atendimento)

## 4. Configuração na Netlify
- [ ] `VITE_WHATSAPP` com o número real, só dígitos (55 + DDD + número)
- [ ] `VITE_INSTAGRAM` e `VITE_WHATSAPP_MESSAGE`
- [ ] `VITE_SITE_URL` com o endereço final, sem barra no fim
- [ ] Novo deploy após mudar qualquer variável (Clear cache and deploy site)

## 5. Testes no celular de verdade
- [ ] Abrir no iPhone e no Android
- [ ] Menu hambúrguer abre, fecha e leva às seções
- [ ] Botão do WhatsApp abre a conversa com a mensagem pronta e o número certo
- [ ] Botões do Instagram abrem o perfil `@fisiodudinha`
- [ ] Colar o link no WhatsApp e conferir a prévia (imagem, título, descrição)
- [ ] Testar um endereço errado (ex.: `/teste`) e ver a página 404
- [ ] Modo escuro do celular ligado: texto continua legível

## 6. Divulgação
- [ ] Colocar o link na bio do Instagram
- [ ] Enviar o `sitemap.xml` no Google Search Console
- [ ] Escolher o nome do site na Netlify (Site configuration > Change site name)

## Depois, com calma (opcional)
- [ ] Domínio próprio
- [ ] Contador de visitas simples
