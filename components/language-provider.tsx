"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { content, type Dictionary, type Locale } from "@/lib/content"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "lucas-portfolio-locale"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY)) as Locale | null
    if (stored === "en" || stored === "pt") {
      setLocaleState(stored)
      return
    }
    if (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("pt")) {
      setLocaleState("pt")
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "pt" ? "pt-BR" : "en"
    }
  }, [locale])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: content[locale] }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
