"use client"

import { useState, useEffect } from "react"
import { RetroNavbar } from "@/components/retro-navbar"
import { RetroWindow } from "@/components/retro-window"
import { RetroFileIcon } from "@/components/file-icon"
import { RetroShortcut } from "@/components/retro-shortcut"
import { CodeIcon, FileTextIcon, GithubIcon, LinkedinIcon } from "lucide-react"

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const [windowStates, setWindowStates] = useState({
    aboutMe: true,
    portfolio: true,
    picture1: true,
    picture2: true,
    bachelorProject: false,
  })

  const [windowOrder, setWindowOrder] = useState(["aboutMe", "portfolio", "picture1", "picture2"])

  const bringToFront = (windowId: string) => {
    setWindowOrder((prev) => [...prev.filter((id) => id !== windowId), windowId])
  }

  const handleDoubleClick = (windowId?: keyof typeof windowStates, linkRef?: string) => {
    if (windowId) toggleWindow(windowId)
    if (linkRef) window.open(linkRef, "_blank")?.focus()
  }

  const toggleWindow = (windowId: keyof typeof windowStates) => {
    setWindowStates((prev) => ({
      ...prev,
      [windowId]: !prev[windowId],
    }))

    if (!windowStates[windowId]) bringToFront(windowId)
  }

  const closeWindow = (windowId: keyof typeof windowStates) => {
    setWindowStates((prev) => ({
      ...prev,
      [windowId]: false,
    }))
  }

  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const portfolioFiles = [
    { id: "bachelorProject", name: "BachelorThesis", icon: <CodeIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "project2", name: "Project 2", icon: <CodeIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "project3", name: "Project 3", icon: <CodeIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "resume", name: "Resume.pdf", icon: <FileTextIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "github", name: "GitHub", url: "https://github.com/llemmoo", icon: <GithubIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "linkedin", name: "LinkedIn", url: "https://linkedin.com/in/oliver-lemonakis", icon: <LinkedinIcon className="w-4 h-4 text-[#a08060]/80" /> },
  ]

  const folders = [
    { id: "documents", name: "Documents", type: "folder" as const, color: "black" as const },
    { id: "images", name: "Images", type: "folder" as const, color: "black" as const },
    { id: "music", name: "Music", type: "folder" as const, color: "black" as const },
    { id: "videos", name: "Videos", type: "folder" as const, color: "black" as const },
    { id: "downloads", name: "Downloads", type: "folder" as const, color: "black" as const },
    { id: "projects", name: "Projects", type: "folder" as const, color: "black" as const },
  ]

  const getWindowStyles = () => {
    const { width } = screenSize

    const isMobile = width < 768
    const isTablet = width >= 768 && width < 1024
    const isDesktop = width >= 1024 && width < 1920
    const isLargeDesktop = width >= 1920

    const commonStyle = { position: "absolute" as const }

    return {
      aboutMe: {
        ...commonStyle,
        width: isMobile ? "90vw" : isTablet ? "60vw" : isLargeDesktop ? "35vw" : "35vw",
        height: isMobile ? "300px" : "500px",
        left: isMobile ? "5vw" : "25vw",
        top: "0px",
        zIndex: windowOrder.indexOf("aboutMe") + 1,
      },
      portfolio: {
        ...commonStyle,
        width: isMobile ? "90vw" : isTablet ? "50vw" : "30vw",
        height: "300px",
        left: isMobile ? "5vw" : "30vw",
        top: isMobile ? "400px" : "450px",
        zIndex: windowOrder.indexOf("portfolio") + 1,
      },
      picture1: {
        ...commonStyle,
        width: isMobile ? "90vw" : isTablet ? "40vw" : "20vw",
        height: "300px",
        left: isMobile ? "5vw" : "61vw",
        top: isMobile ? "750px" : "200px",
        zIndex: windowOrder.indexOf("picture1") + 1,
      },
      picture2: {
        ...commonStyle,
        width: isMobile ? "90vw" : isTablet ? "40vw" : "20vw",
        height: "300px",
        left: isMobile ? "5vw" : "7vw",
        top: isMobile ? "1080px" : "400px",
        zIndex: windowOrder.indexOf("picture2") + 1,
      },
      bachelorProject: {
        ...commonStyle,
        width: isMobile ? "90vw" : isTablet ? "70vw" : "50vw",
        height: isMobile ? "300px" : "850px",
        left: isMobile ? "5vw" : "20vw",
        top: isMobile ? "50%" : "10%",
        zIndex: windowOrder.indexOf("bachelorProject") + 1,
      },
    }
  }

  const windowStyles = getWindowStyles()

  return (
    <div className="min-h-screen w-full bg-[#e0a030] p-4 flex flex-col relative overflow-hidden">
      <RetroNavbar className="mb-4 z-50 relative" />

      <div className="flex flex-col md:flex-row flex-1 gap-4 z-0">
        <div className="flex flex-row md:flex-col gap-4 mb-4 md:mb-0">
          <RetroShortcut name="Computer" type="computer" onClick={() => toggleWindow("aboutMe")} />
          <RetroShortcut name="Internet" type="globe" onClick={() => toggleWindow("portfolio")} />
          <RetroShortcut name="e-Mail" type="mail" onClick={() => toggleWindow("picture1")} />
          <div className="hidden md:block mt-auto">
            <RetroShortcut name="Trash" type="trash" onClick={() => toggleWindow("picture2")} />
          </div>
        </div>

        <div className="flex-1 relative min-h-[80vh]">
          {windowStates.aboutMe && (
            <RetroWindow
              style={windowStyles.aboutMe}
              title="AboutMe.txt"
              onClose={() => closeWindow("aboutMe")}
              onMinimize={() => closeWindow("aboutMe")}
              onMaximize={() => bringToFront("aboutMe")}
              onClick={() => bringToFront("aboutMe")}
            >
              <div className="p-4 h-full overflow-auto text-[#8b4513]">
                <h2 className="text-lg font-semibold retro-text mb-3">John Doe</h2>
                <p className="retro-text mb-2">Frontend Developer with a passion for creating beautiful UIs.</p>
                <p className="retro-text mb-2">Specialized in React, TypeScript, and Tailwind CSS.</p>
                <p className="retro-text mb-2">Enjoys retro games, pixel art, and hardware hacking.</p>
                <h3 className="text-md font-semibold retro-text mt-4 mb-2">Skills</h3>
                <ul className="list-disc pl-5 retro-text">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>UI/UX Design</li>
                  <li>Responsive Web Dev</li>
                </ul>
              </div>
            </RetroWindow>
          )}

          {windowStates.portfolio && (
            <RetroWindow
              style={windowStyles.portfolio}
              title="Portfolio.links"
              onClose={() => closeWindow("portfolio")}
              onMinimize={() => closeWindow("portfolio")}
              onMaximize={() => bringToFront("portfolio")}
              onClick={() => bringToFront("portfolio")}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2">
                {portfolioFiles.map((file) => (
                  <RetroFileIcon
                    key={file.id}
                    name={file.name}
                    selected={selectedFile === file.id}
                    icon={file.icon}
                    onClick={() => setSelectedFile(file.id)}
                    onDoubleClick={() => {
                      if (file.id in windowStates) {
                        handleDoubleClick(file.id as keyof typeof windowStates)
                      } else {
                        handleDoubleClick(undefined, file.url)
                      }
                    }}
                  />
                ))}
              </div>
            </RetroWindow>
          )}

          {windowStates.picture1 && (
            <RetroWindow
              style={windowStyles.picture1}
              title="MeInShibuya.png"
              onClose={() => closeWindow("picture1")}
              onMinimize={() => closeWindow("picture1")}
              onMaximize={() => bringToFront("picture1")}
              onClick={() => bringToFront("picture1")}
            >
              <div className="h-full flex items-center justify-center bg-[#f5f0e8] p-2">
                <img
                  src="/images/pixelate12.png"
                  alt="Me in Shibuya"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </RetroWindow>
          )}

          {windowStates.picture2 && (
            <RetroWindow
              style={windowStyles.picture2}
              title="Mochi.png"
              onClose={() => closeWindow("picture2")}
              onMinimize={() => closeWindow("picture2")}
              onMaximize={() => bringToFront("picture2")}
              onClick={() => bringToFront("picture2")}
            >
              <div className="h-full flex items-center justify-center bg-[#f5f0e8] p-2">
                <img
                  src="/images/pixelatePoch12.png"
                  alt="Mochi"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </RetroWindow>
          )}

          {windowStates.bachelorProject && (
            <RetroWindow
              style={windowStyles.bachelorProject}
              title="BachelorProject"
              onClose={() => closeWindow("bachelorProject")}
              onMinimize={() => closeWindow("bachelorProject")}
              onMaximize={() => bringToFront("bachelorProject")}
              onClick={() => bringToFront("bachelorProject")}
            >
              <div className="h-full flex items-center justify-center bg-[#f5f0e8] p-2">
                <img
                  src="/images/pixelatePoch12.png"
                  alt="Bachelor Project"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </RetroWindow>
          )}
        </div>

        <div className="flex flex-row md:flex-col gap-4 mt-4 md:mt-0">
          {folders.map((folder) => (
            <RetroShortcut key={folder.id} name={folder.name} type={folder.type} color={folder.color} />
          ))}
          <div className="md:hidden ml-auto">
            <RetroShortcut name="Trash" type="trash" onClick={() => toggleWindow("picture2")} />
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-center gap-4 mt-4 pt-4 border-t border-[#a08060]/30">
        <RetroShortcut name="Home" type="folder" />
        <RetroShortcut name="Settings" type="folder" />
        <RetroShortcut name="Calendar" type="folder" />
      </div>
    </div>
  )
}
