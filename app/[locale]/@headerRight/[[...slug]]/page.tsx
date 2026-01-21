"use client"

import { use } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Share } from "lucide-react"
import { LocaleSwitcher } from "@/components/locale-switcher"

export default function HeaderRightSlot({ params }: { params: Promise<{ slug?: string[] }> }) {
  const t = useTranslations("common")
  const { slug } = use(params)
  const path = slug?.join("/") ?? ""

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-2" />
            {t("share")}
          </Button>
          <LocaleSwitcher />
        </div>
      )
    default:
      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">{t("signIn")}</Button>
          <LocaleSwitcher />
        </div>
      )
  }
}
