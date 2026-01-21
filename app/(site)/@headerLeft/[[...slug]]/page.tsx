"use client"

import { use } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import type { PageProps } from "@/types"

export default function HeaderLeftSlot({ params }: PageProps<"/(site)/@headerLeft/[[...slug]]">) {
  const router = useRouter()
  const { slug } = use(params)
  const path = slug?.join("/") ?? ""

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <button onClick={() => router.back()} className="p-2 hover:bg-muted rounded-md">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="font-semibold">About</span>
        </div>
      )
    case "editor":
      return (
        <button onClick={() => router.back()} className="p-2 hover:bg-muted rounded-md">
          <ArrowLeft className="h-5 w-5" />
        </button>
      )
    default:
      return (
        <Link href="/" className="font-bold text-xl">
          Acme
        </Link>
      )
  }
}
