import { RetroCard } from "@/components/retro-card"
import { RetroPaper } from "@/components/retro-paper"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#e0a030] p-8 pixel-bg">
      <h1 className="text-2xl font-bold text-[#8b4513] mb-6 pixel-text pixelated">Retro UI Components</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#8b4513] retro-text pixelated">Retro Cards</h2>

          <RetroCard title="Window Card" className="max-w-md">
            <p className="text-[#8b4513] retro-text pixelated">
              This card resembles the classic window style with a title bar.
            </p>
          </RetroCard>

          <RetroCard variant="folder" title="Folder Card" className="max-w-md">
            <p className="text-[#8b4513] retro-text pixelated">
              This card has a folder-like appearance with a slightly different background.
            </p>
          </RetroCard>

          <RetroCard
            variant="file"
            title="File Card"
            className="max-w-md"
            footer={<div className="text-xs text-[#8b4513]">Last modified: 04/06/2025</div>}
          >
            <p className="text-[#8b4513] retro-text pixelated">
              This card represents a file with a white background and includes a footer.
            </p>
          </RetroCard>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#8b4513] retro-text pixelated">Retro Papers</h2>

          <RetroPaper className="max-w-md">
            <p className="text-[#8b4513] retro-text pixelated">
              This is the default cream paper component that resembles old document pages.
            </p>
          </RetroPaper>

          <RetroPaper variant="white" className="max-w-md">
            <p className="text-[#8b4513] retro-text pixelated">
              A white paper variant that still maintains the retro feel.
            </p>
          </RetroPaper>

          <RetroPaper variant="amber" className="max-w-md">
            <p className="text-[#8b4513] retro-text pixelated">
              An amber-colored paper that matches the system's menu bar color.
            </p>
          </RetroPaper>

          <RetroPaper bordered={false} className="max-w-md">
            <p className="text-[#8b4513] retro-text pixelated">
              A borderless paper variant that can be used for more subtle containers.
            </p>
          </RetroPaper>
        </div>
      </div>
    </div>
  )
}

