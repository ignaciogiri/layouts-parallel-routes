"use client"

import Link from "next/link"
import type { Route } from "next"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import { SearchBox } from "@/components/search-box"
import { MountIndicator } from "@/components/mount-indicator"

export default function HeaderCenterSlot() {
  const params = useParams<{ slug: string[] }>()
  const t = useTranslations("header")
  const path = params.slug?.join("/") ?? ""

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-muted rounded text-xs font-medium">{t("aboutPage")}</span>
          <span className="text-sm text-muted-foreground">{t("customCenterSlot")}</span>
          <MountIndicator />
        </div>
      )
    case "editor":
      return (
        <div className="flex items-center gap-2">
          <Link href={"/" as Route} className="font-bold text-xl">
            Acme
          </Link>
          <MountIndicator />
        </div>
      )
    default:
      return <SearchBox />
  }
}
