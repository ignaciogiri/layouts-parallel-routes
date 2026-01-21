import React from "react"

export default function SiteLayout({
  children,
  headerLeft,
  headerCenter,
  headerRight,
}: {
  children: React.ReactNode
  headerLeft: React.ReactNode
  headerCenter: React.ReactNode
  headerRight: React.ReactNode
}) {
  return (
    <>
      <header className="border-b sticky top-0 bg-background z-50 px-4">
        <div className="flex h-16 items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-4 min-w-[200px]">
            {headerLeft}
          </div>
          <div className="flex-1 flex justify-center max-w-xl mx-4">
            {headerCenter}
          </div>
          <div className="flex items-center gap-4 min-w-[200px] justify-end">
            {headerRight}
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}
