"use client"

import { MapPin, Mail, Phone, CircleCheck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"

const icons = [MapPin, Mail, Phone, CircleCheck]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.nav.about} title={t.about.title} subtitle={t.about.lead} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <ul className="space-y-4">
              {t.about.info.map((item, i) => {
                const Icon = icons[i] ?? MapPin
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</div>
                      <div className="text-sm font-medium text-foreground">{item.value}</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
