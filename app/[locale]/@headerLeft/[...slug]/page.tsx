"use client"

import Link from "next/link"
import type { Route } from "next"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import { MountIndicator } from "@/components/mount-indicator"
import { BackButton } from "@/components/back-button"

export default function HeaderLeftSlot() {
  const params = useParams<{ slug: string[] }>()
  const t = useTranslations("common")
  const path = params.slug?.join("/") ?? ""

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <BackButton />
          <span className="font-semibold">{t("about")}</span>
          <MountIndicator />
        </div>
      )
    case "editor":
      return (
        <div className="flex items-center gap-2">
          <BackButton />
          <MountIndicator />
        </div>
      )
    default:
      return (
        <div className="flex items-center gap-2">
          <Link href={"/" as Route} className="font-bold text-xl">
            Acme
          </Link>
          <MountIndicator />
        </div>
      )
  }
}
