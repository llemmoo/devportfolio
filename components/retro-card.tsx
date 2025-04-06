import type React from "react"
import { cn } from "@/lib/utils"

interface RetroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "window" | "folder" | "file"
  title?: string
  footer?: React.ReactNode
}

export function RetroCard({ className, children, variant = "window", title, footer, ...props }: RetroCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-retro overflow-hidden retro-border retro-shadow",
        variant === "window" && "bg-[#f5f0e8]",
        variant === "folder" && "bg-[#e0d8c9]",
        variant === "file" && "bg-white",
        className,
      )}
      {...props}
    >
      {title && (
        <div className="retro-title-bar h-10 flex items-end">
          <div className="px-2 py-1 w-full">
            <div className="text-sm retro-text font-medium text-[#8b4513]">{title}</div>
          </div>
        </div>
      )}
      <div className="flex-1 p-3 retro-inset">{children}</div>
      {footer && (
        <div className="px-2 py-1 bg-[#e0d8c9] border-t border-[#a08060]">
          <div className="retro-text">{footer}</div>
        </div>
      )}
    </div>
  )
}

