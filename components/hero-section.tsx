"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Vagas Limitadas - Turma de Marco
          </span>
          
          <h1 className="mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Transforme seu conhecimento em um negocio lucrativo
          </h1>
          
          <p className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Descubra o metodo comprovado que ja ajudou mais de 10.000 alunos a criar e vender infoprodutos de sucesso, mesmo comecando do zero.
          </p>
          
          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold">
              Quero Comecar Agora
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
              Saiba Mais
            </Button>
          </div>
          
          {/* Video Section */}
          <div className="relative w-full max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
                <button className="group flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110">
                  <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/90 px-3 py-1.5 text-sm font-medium backdrop-blur">
                Assista a aula gratuita
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
