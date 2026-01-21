import { use, Suspense } from "react"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"

// Prerender locale routes at build time
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// Async component that loads messages - wrapped in Suspense
async function LocaleProvider({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export default function LocaleLayout({
  children,
  headerLeft,
  headerCenter,
  headerRight,
  params,
}: {
  children: React.ReactNode
  headerLeft: React.ReactNode
  headerCenter: React.ReactNode
  headerRight: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className="antialiased bg-background text-foreground">
        <Suspense>
          <LocaleProvider locale={locale}>
            <header className="border-b sticky top-0 bg-background z-50 px-4">
              <div className="flex h-16 items-center justify-between max-w-5xl mx-auto">
                <div className="flex items-center gap-4 min-w-[200px]">
                  <Suspense>{headerLeft}</Suspense>
                </div>
                <div className="flex-1 flex justify-center max-w-xl mx-4">
                  <Suspense>{headerCenter}</Suspense>
                </div>
                <div className="flex items-center gap-4 min-w-[200px] justify-end">
                  <Suspense>{headerRight}</Suspense>
                </div>
              </div>
            </header>
            <main>
              <Suspense>{children}</Suspense>
            </main>
          </LocaleProvider>
        </Suspense>
      </body>
    </html>
  )
}
