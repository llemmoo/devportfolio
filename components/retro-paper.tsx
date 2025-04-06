import type React from "react"
import { cn } from "@/lib/utils"

interface RetroPaperProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "cream" | "white" | "amber"
  bordered?: boolean
}

export function RetroPaper({ className, children, variant = "cream", bordered = true, ...props }: RetroPaperProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-retro retro-shadow super-pixelated",
        variant === "cream" && "bg-[#f5f0e8]",
        variant === "white" && "bg-[#faf8f5]",
        variant === "amber" && "bg-[#e0d8c9]",
        bordered && "retro-border",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

