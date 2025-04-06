import type React from "react"
import { cn } from "@/lib/utils"
import { FolderOpenIcon, ComputerIcon, GlobeIcon, MailIcon, TrashIcon, Trash2Icon } from "lucide-react"

interface RetroFolderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  selected?: boolean 
  color?: "beige" | "orange" | "black" | "white" | "silver" | "default"
  type?: "folder" | "computer" | "globe" | "mail" | "trash"
}

export function RetroShortcut({ className, name, type, selected = false, color = "default", ...props }: RetroFolderProps) {
  const colorClasses = {
    orange: "text-[#ff7300]",
    beige: "text-[#e0d8c9]",
    black: "text-[#000000]",
    white: "text-[#ffffff]",
    silver: "text-[#2b2b2b]",
    default: "text-[#6080c0]",
  }

  const getIcon= () =>{
    switch (type){
      case "computer":
        return<ComputerIcon className={cn("w-16 h-16", colorClasses[color])} />
      case "folder":
        return <FolderOpenIcon className={cn("w-16 h-16", colorClasses[color])} />
      case "globe": 
        return<GlobeIcon className={cn("w-16 h-16", colorClasses[color])} />
      case "mail": 
        return <MailIcon className={cn("w-16 h-16", colorClasses[color])} />
      case "trash": 
        return <Trash2Icon className={cn("w-16 h-16", colorClasses[color])} />
      default:
        return <FolderOpenIcon className={cn("w-16 h-16", colorClasses[color])} />
    }
  } 

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 p-2 cursor-pointer rounded-sm",
        selected && "bg-[#d0c0a0]/30",
        className,
      )}
      {...props}
    >
      {getIcon()}
        <div className="text-s text-center retro-text text-[#000000] max-w-[80px] truncate">{name}</div>
    </div>
  )
}

