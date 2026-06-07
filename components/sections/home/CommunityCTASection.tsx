import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { Button } from "@/components/ui/Button";

export function CommunityCTASection() {
  return (
    <section className="bg-terracotta py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl text-balance">
            Une femme qui connaît sa valeur devient{" "}
            <span className="italic">impossible à ignorer</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/90">
            Elle ne demande plus la permission. Elle choisit. Rejoins
            l&apos;École des Pussycat Queens™️ — et contacte-moi directement
            pour commencer.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppCTA label="Me contacter sur WhatsApp" />
            <Button
              href="/rejoindre"
              variant="secondary"
              className="!border-cream !text-cream hover:!bg-cream/10"
            >
              Découvrir l&apos;école
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
