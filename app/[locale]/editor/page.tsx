import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"

export default function EditorPage({ params }: PageProps<"/[locale]/editor">) {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations("pages.editor")

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p className="text-muted-foreground">{t("description")}</p>
    </div>
  )
}
