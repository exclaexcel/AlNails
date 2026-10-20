# AL Nails — cartão de visita digital

Página única (Next.js + Tailwind), sem banco e sem login.

## Rodar no computador
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # teste de produção
```

## Onde mexer
- **Textos, valores, horário, links:** `src/content/content.ts` (único arquivo de conteúdo).
- **Cores da Ana:** `src/app/globals.css` (bloco `@theme`).
- **Fotos e logo:** `public/images/`.

## Pendências com a Ana

Resolvidas (formulário de briefing assinado em 08/10/2026): frase principal ("autoestima"), horário (só sábado, 9h-17h), localização (Almirante Tamandaré/PR), esmaltação (inclusa na manicure tradicional) e o texto de remarcação ("pelo menos 24h").

Em aberto (19/10/2026):
- **Horário estendido** — Ana cogitou (ainda não confirmou) atender também de segunda a sexta até 19h, mantendo sábado 9h-17h. Não mudar `hours` em `content.ts` sem ela confirmar de verdade.
- **Automação de repetição de modelos** — evitar selecionar a mesma pessoa como modelo (vagas de conteúdo, painel "Vagas para modelo do mês") em meses seguidos. Depende da Dany ter acesso à planilha do Google Sheets da Ana; a automação mexe só na planilha, o formulário (Google Forms) continua como está.
