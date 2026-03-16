"use client"

import { Button } from "@/components/ui/button"
import { Shield, Clock, Award } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-foreground py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-background md:text-4xl lg:text-5xl">
          Pronto para transformar sua vida?
        </h2>
        <p className="mb-8 text-lg text-background/80">
          Junte-se a mais de 10.000 alunos que ja estao construindo seus negocios digitais
        </p>
        
        <div className="mb-10">
          <div className="mb-2 text-background/60 line-through">
            De R$ 1.997,00
          </div>
          <div className="mb-1 text-5xl font-bold text-background md:text-6xl">
            R$ 497
          </div>
          <div className="text-background/80">
            ou 12x de R$ 49,70
          </div>
        </div>
        
        <Button
          size="lg"
          className="mb-8 h-16 px-12 text-xl font-bold shadow-lg transition-transform hover:scale-105"
        >
          Garantir Minha Vaga Agora
        </Button>
        
        <div className="flex flex-col items-center justify-center gap-6 text-background/80 sm:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            <span>Certificado incluso</span>
          </div>
        </div>
      </div>
    </section>
  )
}
