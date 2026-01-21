import { Button } from "@/components/ui/button"

export default function HeaderRightDefault() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">Sign in</Button>
      <Button size="sm">Sign up</Button>
    </div>
  )
}
