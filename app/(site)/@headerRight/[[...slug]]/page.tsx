import { use } from "react"
import { Button } from "@/components/ui/button"
import { Share } from "lucide-react"
import type { PageProps } from "@/types"

export default function HeaderRightSlot({ params }: PageProps<"/(site)/@headerRight/[[...slug]]">) {
  const { slug } = use(params)
  const path = slug?.join("/") ?? ""

  switch (path) {
    case "about":
      return (
        <Button variant="outline" size="sm">
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
      )
    default:
      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Sign up</Button>
        </div>
      )
  }
}
