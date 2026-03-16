import { Target, Lightbulb, TrendingUp, Users } from "lucide-react"

const audiences = [
  {
    icon: Lightbulb,
    title: "Iniciantes",
    description: "Voce quer comecar no mercado digital mas nao sabe por onde iniciar. Este curso foi feito para guiar seus primeiros passos.",
  },
  {
    icon: TrendingUp,
    title: "Profissionais em Transicao",
    description: "Busca uma nova carreira ou quer complementar sua renda? Aprenda a monetizar seu conhecimento existente.",
  },
  {
    icon: Users,
    title: "Empreendedores",
    description: "Ja tem um negocio e quer escalar com produtos digitais? Descubra como criar uma nova fonte de receita.",
  },
  {
    icon: Target,
    title: "Criadores de Conteudo",
    description: "Produz conteudo mas nao consegue monetizar? Transforme sua audiencia em clientes fieis.",
  },
]

export function TargetAudienceSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Para quem e este curso?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Se voce se identifica com algum desses perfis, este curso foi feito para voce
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="group rounded-2xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
