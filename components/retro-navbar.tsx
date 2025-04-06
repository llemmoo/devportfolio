"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface RetroNavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: { label: string; onClick?: () => void }[]
  showTime?: boolean
}

export function RetroNavbar({
  className,
  items = [{ label: "File" }, { label: "Edit" }, { label: "View" }, { label: "Special" }, { label: "Help" }],
  showTime = true,
  ...props
}: RetroNavbarProps) {
  const [time, setTime] = React.useState("00:00")

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-1 bg-[#e0d8c9] retro-border retro-shadow rounded-retro text-[#8b4513]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-1">
        <div className="mr-2">
          <span className="text-xl emoji-outline">🍋</span>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className="px-4 py-0.5 retro-text font-medium cursor-pointer hover:bg-[#d0c0a0]/30 rounded-sm"
            onClick={item.onClick}
          >
            {item.label}
          </div>
        ))}
      </div>
      {showTime && <div className="font-medium retro-text">{time}</div>}
    </div>
  )
}

