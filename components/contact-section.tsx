"use client"

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/section-heading"
import { links } from "@/lib/content"

export function ContactSection() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: links.email,
      href: `mailto:${links.email}`,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: links.phone,
      href: `tel:${links.phoneHref}`,
    },
    {
      icon: LinkedInIcon,
      label: t.contact.linkedinLabel,
      value: "in/lucaspires-ti",
      href: links.linkedin,
    },
    {
      icon: GitHubIcon,
      label: t.contact.portfolioLabel,
      value: "lfpires1993.github.io",
      href: links.portfolio,
    },
  ]

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.nav.contact} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cards.map((c) => {
            const external = c.href.startsWith("http")
            return (
              <a
                key={c.label}
                href={c.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                  <c.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
                  <div className="truncate text-sm font-medium text-foreground">{c.value}</div>
                </div>
                <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            )
          })}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 text-primary" />
          {t.contact.location}
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lucas Pires. {t.footer.rights}
        </p>
        <p className="font-mono text-xs text-muted-foreground">{t.footer.builtWith}</p>
      </div>
    </footer>
  )
}
