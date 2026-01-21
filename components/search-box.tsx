"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

const suggestions = [
  "Search for items",
  "Find vintage clothing",
  "Discover electronics",
  "Look for furniture",
]

export function SearchBox() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    if (inputValue) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % suggestions.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [inputValue])

  const showPlaceholder = !inputValue

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
      <Input
        placeholder=""
        className="pl-10 w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {showPlaceholder && (
        <div className="pointer-events-none absolute inset-y-0 left-10 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground text-sm"
            >
              {suggestions[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
