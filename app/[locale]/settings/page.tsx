import { getTranslations } from "next-intl/server"

export default async function SettingsPage() {
  const t = await getTranslations("pages.settings")

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p className="text-muted-foreground">{t("description")}</p>
    </div>
  )
}
