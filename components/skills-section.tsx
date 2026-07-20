"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.nav.skills} title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.skills.groups.map((group) => (
            <div key={group.name} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-primary">{group.name}</h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((skill) => (
                  <li key={skill.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{skill.label}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${skill.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {t.skills.stackTitle}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {t.skills.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
