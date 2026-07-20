"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/content"

const options: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className="flex items-center gap-1 rounded-md border border-border bg-secondary/60 p-1"
      role="group"
      aria-label="Select language"
    >
      <Globe className="mx-1 size-4 text-muted-foreground" aria-hidden="true" />
      {options.map((opt) => {
        const active = locale === opt.code
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={active}
            className={cn(
              "rounded px-2 py-1 font-mono text-xs font-semibold transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
