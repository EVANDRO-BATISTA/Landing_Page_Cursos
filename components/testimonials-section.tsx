import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Marina Silva",
    role: "Nutricionista",
    content: "Sai do zero para faturar R$15.000 por mes em apenas 4 meses. O metodo e realmente pratico e funciona!",
    initials: "MS",
  },
  {
    name: "Carlos Eduardo",
    role: "Professor de Ingles",
    content: "Ja tinha tentado outros cursos, mas esse foi o unico que me deu resultados concretos. Hoje tenho minha propria escola online.",
    initials: "CE",
  },
  {
    name: "Ana Beatriz",
    role: "Designer",
    content: "A comunidade e incrivel! Alem do conteudo excelente, o suporte e as mentorias fazem toda a diferenca.",
    initials: "AB",
  },
  {
    name: "Roberto Mendes",
    role: "Consultor Financeiro",
    content: "Lancei meu primeiro curso e faturei R$47.000 na primeira semana. Superou todas as expectativas!",
    initials: "RM",
  },
  {
    name: "Juliana Costa",
    role: "Coach de Carreira",
    content: "O passo a passo e tao claro que consegui aplicar mesmo trabalhando em tempo integral. Recomendo muito!",
    initials: "JC",
  },
  {
    name: "Fernando Alves",
    role: "Personal Trainer",
    content: "Meu faturamento triplicou depois que apliquei as estrategias do curso. Investimento que se paga rapido!",
    initials: "FA",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            O que nossos alunos dizem
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Historias reais de pessoas que transformaram suas vidas com o curso
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-background p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mb-6 text-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
