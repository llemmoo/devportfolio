"use client"

import { useState, useEffect } from "react"
import { RetroNavbar } from "@/components/retro-navbar"
import { RetroWindow } from "@/components/retro-window"
import { RetroFileIcon } from "@/components/file-icon"
import { RetroShortcut } from "@/components/retro-shortcut"
import { CodeIcon, FileTextIcon, GithubIcon, LinkedinIcon } from "lucide-react"

export default function Home() {

  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  // Window visibility state
  const [windowStates, setWindowStates] = useState({
    aboutMe: true,
    portfolio: true,
    picture1: true,
    picture2: true,
    bachelorProject: false,
  })

  // Window z-index management
  const [windowOrder, setWindowOrder] = useState(["aboutMe", "portfolio", "picture1", "picture2"])

  // Function to bring a window to the front
  const bringToFront = (windowId: string) => {
    setWindowOrder((prev) => [...prev.filter((id) => id !== windowId), windowId])
  }

   // Toggle window visibility
   const toggleWindow = (windowId: keyof typeof windowStates) => {
    setWindowStates((prev) => ({
      ...prev,
      [windowId]: !prev[windowId],
    }))

    if (!windowStates[windowId]) {
      bringToFront(windowId)
    }
  }

    // Screen size detection
    const [screenSize, setScreenSize] = useState({
      width: typeof window !== "undefined" ? window.innerWidth : 1920,
      height: typeof window !== "undefined" ? window.innerHeight : 1080,
    })

  // Update screen size on resize
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

    // Close window
    const closeWindow = (windowId: keyof typeof windowStates) => {
      setWindowStates((prev) => ({
        ...prev,
        [windowId]: false,
      }))
    }

  // Portfolio files
  const portfolioFiles = [
    { id: "bachelorProject", name: "BachelorThesis", icon: <CodeIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "project2", name: "Project 2", icon: <CodeIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "project3", name: "Project 3", icon: <CodeIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "resume", name: "Resume.pdf", icon: <FileTextIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "github", name: "GitHub", icon: <GithubIcon className="w-4 h-4 text-[#a08060]/80" /> },
    { id: "linkedin", name: "LinkedIn", icon: <LinkedinIcon className="w-4 h-4 text-[#a08060]/80" /> },
  ]

  // Folders for the sidebar
  const folders = [
    { id: "documents", name: "Documents", type: "folder" as const, color: "black" as const },
    { id: "images", name: "Images", type: "folder" as const, color: "black" as const },
    { id: "music", name: "Music", type: "folder" as const, color: "black" as const },
    { id: "videos", name: "Videos", type: "folder" as const, color: "black" as const },
    { id: "downloads", name: "Downloads", type: "folder" as const, color: "black" as const },
    { id: "projects", name: "Projects", type: "folder" as const, color: "black" as const },
  ]

    // Calculate window positions based on screen size
    const getWindowStyles = () => {
      const isMobile = screenSize.width < 768
      const containerWidth = isMobile ? screenSize.width * 0.95 : screenSize.width * 0.8
    // Base styles for all windows
    const baseStyles = {
      aboutMe: {
        width: isMobile ? "95%" : "40%",
        height: isMobile ? "300px" : "500px",
        position: "absolute" as const,
        left: isMobile ? "2.5%" : "30%",
        top: isMobile ? "80px" : "100px",
        zIndex: windowOrder.indexOf("aboutMe") + 1,
      },
      portfolio: {
        width: isMobile ? "95%" : "35%",
        height: isMobile ? "350px" : "350px",
        position: "absolute" as const,
        left: isMobile ? "2.5%" : "31%",
        top: isMobile ? "400px" : "42%",
        zIndex: windowOrder.indexOf("portfolio") + 2,
      },
      picture1: {
        width: isMobile ? "95%" : "30%",
        height: isMobile ? "250px" : "300px",
        position: "absolute" as const,
        left: isMobile ? "2.5%" : "58%",
        top: isMobile ? "770px" : "40%",
        zIndex: windowOrder.indexOf("picture1") + 1,
      },
      picture2: {
        width: isMobile ? "95%" : "35%",
        height: isMobile ? "250px" : "400px",
        position: "absolute" as const,
        left: isMobile ? "2.5%" : "15%",
        top: isMobile ? "1040px" : "60%",
        zIndex: windowOrder.indexOf("picture2") + 1,
      },
    }

    // Adjust for larger screens
    if (screenSize.width >= 1440) {
      baseStyles.aboutMe.width = "30%"
      baseStyles.portfolio.width = "25%"
      baseStyles.picture1.width = "15%"
      baseStyles.picture2.width = "15%"
    }

    // Adjust for 4K screens
    if (screenSize.width >= 2560) {
      baseStyles.aboutMe.width = "30%"
      baseStyles.aboutMe.height = "500px"
      baseStyles.portfolio.width = "20%"
      baseStyles.portfolio.height = "400px"
      baseStyles.picture1.width = "10%"
      baseStyles.picture1.height = "500px"
      baseStyles.picture2.width = "10%"
      baseStyles.picture2.height = "400px"
    }

    return baseStyles
  }

  const windowStyles = getWindowStyles()

  return (
    <div className="min-h-screen bg-[#e0a030] p-4 flex flex-col relative">
      {/* Navbar */}
      <RetroNavbar className="mb-4 z-50 relative" />

      {/* Desktop Icons */}
      <div className="flex flex-col md:flex-row flex-1 gap-4 z-0">
        {/* Left sidebar */}
        <div className="flex flex-row md:flex-col gap-4 mb-4 md:mb-0">
          <RetroShortcut name="Computer" type="computer" onClick={() => toggleWindow("aboutMe")} />
          <RetroShortcut name="Internet" type="globe" onClick={() => toggleWindow("portfolio")} />
          <RetroShortcut name="e-Mail" type="mail" onClick={() => toggleWindow("picture1")} />
          <div className="hidden md:block mt-auto">
            <RetroShortcut name="Trash" type="trash" onClick={() => toggleWindow("picture2")} />
          </div>
        </div>

        {/* Main content area - empty to allow for absolute positioning of windows */}
        <div className="flex-1 relative min-h-[80vh]">
          {/* About Me Window */}
          {windowStates.aboutMe && (
            <RetroWindow
              className="overflow-hidden"
              style={windowStyles.aboutMe}
              title="AboutMe.txt"
              onClose={() => closeWindow("aboutMe")}
              onMinimize={() => closeWindow("aboutMe")}
              onMaximize={() => bringToFront("aboutMe")}
              onClick={() => bringToFront("aboutMe")}
            >
              <div className="p-4 h-full overflow-auto">
                <h2 className="text-lg font-semibold retro-text mb-3 text-[#8b4513]">John Doe</h2>
                <p className="retro-text text-[#8b4513] mb-2">
                  Frontend Developer with a passion for creating beautiful, responsive user interfaces.
                </p>
                <p className="retro-text text-[#8b4513] mb-2">
                  Specializing in React, TypeScript, and modern CSS techniques. I love building applications that are
                  both functional and aesthetically pleasing.
                </p>
                <p className="retro-text text-[#8b4513] mb-2">
                  When I'm not coding, you can find me exploring vintage technology, playing retro video games, or
                  experimenting with pixel art.
                </p>
                <h3 className="text-md font-semibold retro-text mt-4 mb-2 text-[#8b4513]">Skills</h3>
                <ul className="list-disc pl-5 retro-text text-[#8b4513]">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>UI/UX Design</li>
                  <li>Responsive Web Development</li>
                </ul>
              </div>
            </RetroWindow>
          )}

          {/* Portfolio Window */}
          {windowStates.portfolio && (
            <RetroWindow
              className="overflow-hidden"
              style={windowStyles.portfolio}
              title="Portfolio"
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
                    onDoubleClick={() => (toggleWindow("bachelorProject"))}
                  />
                ))}
              </div>
            </RetroWindow>
          )}

          {/* Picture Window 1 */}
          {windowStates.picture1 && (
            <RetroWindow
              className="overflow-hidden"
              style={windowStyles.picture1}
              title="MeInShibuya.png"
              onClose={() => closeWindow("picture1")}
              onMinimize={() => closeWindow("picture1")}
              onMaximize={() => bringToFront("picture1")}
              onClick={() => bringToFront("picture1")}
            >
              <div className="h-full flex items-center justify-center bg-[#f5f0e8] p-2">
              <img src="images/pixelate12.png" alt="Mochi.png" style={{maxWidth: 350}}/>

              </div>
            </RetroWindow>
          )}

          {/* Picture Window 2 */}
          {windowStates.picture2 && (
            <RetroWindow
              className="overflow-hidden"
              style={windowStyles.picture2}
              title="Mochi.png"
              onClose={() => closeWindow("picture2")}
              onMinimize={() => closeWindow("picture2")}
              onMaximize={() => bringToFront("picture2")}
              onClick={() => bringToFront("picture2")}
            >
              <div className="h-full flex items-center justify-center bg-[#f5f0e8] p-2">
                <picture>
                <img src="images/pixelatePoch12.png" alt="Mochi.png" style={{maxWidth: 400}}/>
                </picture>
              </div>
            </RetroWindow>
          )}
        </div>

        {/* Right sidebar */}
        <div className="flex flex-row md:flex-col gap-4 mt-4 md:mt-0">
          {folders.map((folder) => (
            <RetroShortcut key={folder.id} name={folder.name} type={folder.type} color={folder.color} />
          ))}
          <div className="md:hidden ml-auto">
            <RetroShortcut name="Trash" type="trash" onClick={() => toggleWindow("picture2")} />
          </div>
        </div>
      </div>

      {/* Mobile-only folder dock at bottom */}
      <div className="md:hidden flex justify-center gap-4 mt-4 pt-4 border-t border-[#a08060]/30">
        <RetroShortcut name="Home" type="folder" />
        <RetroShortcut name="Settings" type="folder" />
        <RetroShortcut name="Calendar" type="folder" />
      </div>
    </div>
  )
}

