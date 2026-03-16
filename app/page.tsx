import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <section id="beneficios">
        <BenefitsSection />
      </section>
      <section id="para-quem">
        <TargetAudienceSection />
      </section>
      <section id="depoimentos">
        <TestimonialsSection />
      </section>
      <CtaSection />
      <Footer />
    </main>
  )
}
