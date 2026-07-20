"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Download, Mail } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons"
import { useLanguage } from "@/components/language-provider"
import { links, type Locale } from "@/lib/content"

function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles])

  return (
    <span key={index} className="inline-block animate-in fade-in slide-in-from-bottom-2 text-primary">
      {roles[index]}
    </span>
  )
}

export function HeroSection() {
  const { t } = useLanguage()
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const downloadLinks: Record<Locale, string> = {
    en: "/cv/en/Lucas_Pires_Resume.pdf",
    pt: "/cv/pt/Curriculo_Lucas_Pires_PT.pdf",
  }

  const handleDownload = (locale: Locale) => {
    const href = downloadLinks[locale]
    const anchor = document.createElement("a")
    anchor.href = href
    anchor.download = href.split("/").pop() ?? "resume.pdf"
    anchor.target = "_blank"
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    setIsDownloadModalOpen(false)
  }

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t.hero.availableForWork}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <span className="text-muted-foreground">{t.hero.greeting}</span> {t.hero.name}
          </h1>

          <p className="mt-3 font-mono text-lg text-foreground sm:text-xl">
            <RoleRotator roles={t.hero.roles} />
          </p>

          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{t.hero.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDownloadModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-4" />
              {t.hero.downloadCv}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {t.hero.getInTouch}
              <ArrowRight className="size-4" />
            </a>
          </div>
          {isDownloadModalOpen ? (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="download-cv-title"
              onClick={() => setIsDownloadModalOpen(false)}
            >
              <div
                className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <p id="download-cv-title" className="text-base font-semibold text-foreground">
                  {t.hero.chooseCvLanguage}
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => handleDownload("en")}
                    className="rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {t.hero.downloadCvEnglish}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownload("pt")}
                    className="rounded-md border border-border bg-secondary px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/90"
                  >
                    {t.hero.downloadCvPortuguese}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsDownloadModalOpen(false)}
                    className="rounded-md px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    {t.hero.cancel}
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex items-center gap-3">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedInIcon className="size-5" />
            </a>
            <a
              href={links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub / Portfolio"
              className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={`mailto:${links.email}`}
              aria-label="Email"
              className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/lucas-pires.jpg"
              alt="Portrait of Lucas Pires"
              width={480}
              height={560}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/70 to-transparent p-4">
              <p className="font-mono text-xs text-muted-foreground">Gravataí, RS — Brazil</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-3 gap-4 px-4 sm:px-6">
        {t.hero.stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card/50 p-4 text-center sm:p-6">
            <div className="font-mono text-2xl font-bold text-primary sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
