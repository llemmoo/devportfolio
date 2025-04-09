import type React from "react"
import { cn } from "@/lib/utils"
import { FileIcon } from "lucide-react"
import "@/styles/globals.css"

interface RetroFileIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  selected?: boolean
  icon?: React.ReactNode
}

export function RetroFileIcon({ className, name, selected = false, icon, ...props }: RetroFileIconProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 p-2 cursor-pointer rounded-sm",
        selected && "bg-[#d0c0a0]/30",
        className,
      )}
      {...props}
    >
      <div className="w-12 h-16 flex items-center justify-center retro-border retro-shadow rounded-md bg-[#f5f0e8] relative pixelated">
        <FileIcon className="w-8 h-8 text-[#a08060]" />
        <div className="absolute inset-0 flex items-center justify-center">{icon}</div>
      </div>
      <div className="text-xs text-center retro-text text-[#8b4513] max-w-[80px] truncate" style={{userSelect: "none"}}>{name}</div>
    </div>
  )
}

