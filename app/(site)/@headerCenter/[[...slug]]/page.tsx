import { use } from "react"
import Link from "next/link"
import { SearchBox } from "@/components/search-box"
import type { PageProps } from "@/types"

export default function HeaderCenterSlot({ params }: PageProps<"/(site)/@headerCenter/[[...slug]]">) {
  const { slug } = use(params)
  const path = slug?.join("/") ?? ""

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-muted rounded text-xs font-medium">About page</span>
          <span className="text-sm text-muted-foreground">Custom center slot</span>
        </div>
      )
    case "editor":
      return (
        <Link href="/" className="font-bold text-xl">
          Acme
        </Link>
      )
    default:
      return <SearchBox />
  }
}
