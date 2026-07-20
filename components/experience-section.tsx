"use client"

import { Briefcase } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.nav.experience} title={t.experience.title} subtitle={t.experience.subtitle} />

        <ol className="mt-12 space-y-6 border-l border-border pl-6 sm:pl-8">
          {t.experience.items.map((item) => (
            <li key={item.role + item.company} className="relative">
              <span className="absolute -left-[calc(1.5rem+1px)] top-1.5 grid size-4 -translate-x-1/2 place-items-center rounded-full border border-primary bg-background sm:-left-[calc(2rem+1px)]">
                <span className="size-1.5 rounded-full bg-primary" />
              </span>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm font-medium text-primary">
                  <Briefcase className="size-4" />
                  {item.company}
                </div>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
