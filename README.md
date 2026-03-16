# Landing Page para Infoprodutos

## O Problema

Profissionais do marketing digital e infoprodutores precisam de landing pages de alta conversao para vender cursos online e captar leads para webinars. Muitas vezes, as solucoes disponiveis sao complexas, caras ou nao oferecem a flexibilidade necessaria para personalizar a experiencia do usuario.

## A Solucao

Uma landing page moderna, responsiva e otimizada para conversao, construida com as melhores praticas do mercado:

- **Headline forte** - Mensagem clara e persuasiva que captura a atencao
- **Video de vendas** - Secao destacada para apresentacao do conteudo
- **Lista de beneficios** - Checkmarks visuais que comunicam valor rapidamente
- **Secao "Para quem e"** - Identificacao clara do publico-alvo
- **Depoimentos** - Prova social com historias de alunos reais
- **CTA em destaque** - Botoes de acao visiveis e persuasivos
- **Design limpo** - Visual profissional que nao distrai da mensagem principal

## Tecnologias Embarcadas

| Tecnologia | Descricao |
|------------|-----------|
| **Next.js 16** | Framework React com App Router, SSR e otimizacoes de performance |
| **React 19** | Biblioteca para construcao de interfaces |
| **TypeScript** | Tipagem estatica para maior seguranca e manutencao |
| **Tailwind CSS** | Framework CSS utility-first para estilizacao rapida |
| **shadcn/ui** | Componentes acessiveis e customizaveis |
| **Lucide React** | Biblioteca de icones consistente e leve |

## Estrutura do Projeto

```
app/
  layout.tsx      # Layout principal com metadata SEO
  page.tsx        # Pagina principal da landing page
  globals.css     # Tokens de design e estilos globais

components/
  header.tsx            # Navegacao responsiva
  hero-section.tsx      # Secao principal com headline e video
  benefits-section.tsx  # Lista de beneficios do curso
  target-audience-section.tsx  # Para quem e o curso
  testimonials-section.tsx     # Depoimentos de alunos
  cta-section.tsx       # Chamada para acao final
  footer.tsx            # Rodape com links
```

## Como Usar

1. Clone o repositorio
2. Instale as dependencias: `pnpm install`
3. Execute o servidor de desenvolvimento: `pnpm dev`
4. Acesse `http://localhost:3000`

## Personalizacao

- Altere os textos diretamente nos componentes
- Modifique as cores no arquivo `globals.css` (tokens de design)
- Adicione ou remova secoes conforme necessidade
- Substitua o placeholder do video por um embed real (YouTube, Vimeo, etc.)

## Licenca

MIT
