"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface RetroWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
  showControls?: boolean
}

export function RetroWindow({
  className,
  children,
  title,
  onClose,
  onMinimize,
  onMaximize,
  showControls = true,
  ...props
}: RetroWindowProps) {
  return (
    <div
      className={cn("flex flex-col retro-border retro-shadow rounded-retro overflow-hidden bg-[#f5f0e8]", className)}
      {...props}
    >
      <div className="retro-title-bar h-10 flex items-end justify-between pb-1 pr-1">
        {title && (
          <div className="flex justify-between items-center">
            <div className="retro-text font-medium text-[#8b4513] pl-3" style={{msUserSelect:"none", WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none"}}>{title}</div>
          </div>
          )}
        <div className="justify-end">
        {showControls && (
          <div className="flex gap-1">
            <button onClick={onMinimize} className="window-control flex items-center justify-center hover:bg-[#e0d8c9]">
              <div className="w-4 h-0.5 bg-[#a08060]" />
            </button>
            <button onClick={onMaximize} className="window-control flex items-center justify-center hover:bg-[#e0d8c9]">
              <div className="w-4 h-4 border border-[#a08060]" />
            </button>
            <button onClick={onClose} className="window-control flex items-center justify-center hover:bg-[#e0d8c9]">
              <X className="w-4 h-4 text-[#a08060]" />
            </button>
          </div>
        )}
        </div>
      </div>

        <div className="flex-1 p-2 overflow-auto retro-inset">{children}</div>
      </div>
  )
}

