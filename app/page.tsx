"use client"

import { useState } from "react"
import { RetroNavbar } from "@/components/retro-navbar"
import { RetroWindow } from "@/components/retro-window"
import { RetroFileIcon } from "@/components/file-icon"
import { RetroShortcut } from "@/components/retro-shortcut"
import { ImageIcon } from "lucide-react"

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const files = Array.from({ length: 18 }, (_, i) => ({
    id: `file_${i + 319}`,
    name: `File_${i + 319}`,
  }))

  const folders = [
    { id: "folder120", name: "Folder120", color: "black" as const },
    { id: "folder116", name: "Folder116", color: "black" as const },
    { id: "folder115", name: "Folder115", color: "black" as const },
  ]

  return (
    <div className="min-h-screen bg-[#e0a030] p-4 flex flex-col">
    <div className="max-w-9/10">
      <RetroNavbar className="mb-4" />

      <div className="flex flex-1 gap-4">
        <div className="flex flex-col gap-4">
          <RetroShortcut type="computer" name="Computer" color="beige" />
          <RetroShortcut type="globe" name="Internet" color="beige" />
          <RetroShortcut type="mail" name="e-Mail" color="beige" />
            <RetroShortcut type="trash" name="Trash" color="silver" />
        </div>

        <div className="flex-1 flex justify-center">
          <RetroWindow className="w-full max-w-3xl h-[500px]" title="Portfolio">
            <div className="grid grid-cols-6 gap-2">
              {files.map((file) => (
                <RetroFileIcon
                  key={file.id}
                  name={file.name}
                  selected={selectedFile === file.id}
                  icon={<ImageIcon className="w-4 h-4 text-[#a08060]/50 pixelated" />}
                  onClick={() => setSelectedFile(file.id)}
                />
              ))}
            </div>
          </RetroWindow>
        </div>

        <div className="flex flex-col gap-4">
          {folders.map((folder) => (
            <RetroShortcut key={folder.id} name={folder.name} color={folder.color} />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

