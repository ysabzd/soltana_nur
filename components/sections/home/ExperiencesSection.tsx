import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { experiences } from "@/lib/content/experiences";
import {
  EXPERIENCE_FORMATION,
  EXPERIENCE_COACHING,
  EXPERIENCE_RETREAT,
} from "@/lib/images";

const experienceImages = [
  EXPERIENCE_FORMATION,
  EXPERIENCE_COACHING,
  EXPERIENCE_RETREAT,
];

export function ExperiencesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Expériences"
            title="Choisis ton chemin"
            description="Formation, coaching ou immersion. Chaque porte mène à la même destination : ta souveraineté incarnée."
            className="mb-16"
          />
        </ScrollReveal>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.href} delay={i * 0.1}>
              <FeatureCard
                title={exp.title}
                description={exp.description}
                href={exp.href}
                eyebrow={exp.eyebrow}
                image={experienceImages[i]}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
