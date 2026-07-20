"use client"

import { GraduationCap, BadgeCheck, Trophy, Languages } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section id="education" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.nav.education} title={t.education.title} subtitle={t.education.subtitle} />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-primary">
              <GraduationCap className="size-4" />
              {t.nav.education}
            </h3>
            <ul className="mt-5 space-y-5">
              {t.education.degrees.map((d) => (
                <li key={d.title} className="border-l-2 border-secondary pl-4">
                  <div className="text-sm font-semibold text-foreground">{d.title}</div>
                  <div className="text-sm text-muted-foreground">{d.school}</div>
                  <div className="font-mono text-xs text-muted-foreground">{d.period}</div>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-primary">
              <Languages className="size-4" />
              {t.education.languagesTitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {t.education.languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{l.name}</span>
                  <span className="text-muted-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-primary">
                <BadgeCheck className="size-4" />
                {t.education.certsTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {t.education.certs.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-primary">
                <Trophy className="size-4" />
                {t.education.awardsTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {t.education.awards.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
