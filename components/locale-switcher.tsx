"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import Cookies from "js-cookie"

const locales = ["en", "es", "de"] as const

export function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { path: "/" })
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <Button
          key={loc}
          variant={locale === loc ? "secondary" : "ghost"}
          size="sm"
          className="h-7 px-2 text-xs uppercase"
          onClick={() => switchLocale(loc)}
          disabled={isPending}
        >
          {loc}
        </Button>
      ))}
    </div>
  )
}
