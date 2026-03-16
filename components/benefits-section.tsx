import { Check } from "lucide-react"

const benefits = [
  "Acesso vitalicio a todas as aulas e atualizacoes do curso",
  "Comunidade exclusiva com networking e suporte direto",
  "Templates prontos para copiar e personalizar",
  "Certificado de conclusao reconhecido pelo mercado",
  "Mentorias em grupo ao vivo toda semana",
  "Garantia incondicional de 7 dias",
  "Bonus: Curso de copywriting para vendas",
  "Bonus: Acesso a ferramentas premium por 30 dias",
]

export function BenefitsSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Tudo o que voce vai receber
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Um pacote completo para voce dominar o mercado de infoprodutos
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border bg-background p-4 transition-colors hover:border-primary/50"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
