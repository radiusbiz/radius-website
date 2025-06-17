import { Shield, Gamepad2, Settings, Monitor, MousePointer, CheckCircle } from "lucide-react"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export function FeatureCards() {
  const features = [
    {
      icon: <Gamepad2 className="h-6 w-6 text-red-500" />,
      title: "Automatic Game Detection",
      description:
        "Radius automatically detects your launched game and securely injects the enhancement, providing a seamless and safe gaming experience.",
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: "Built-In HWID Spoofer - Ban Protection",
      description:
        "An HWID spoofer alters your device's unique hardware ID, helping bypass bans and allowing continued gameplay.",
    },
    {
      icon: <Settings className="h-6 w-6 text-red-500" />,
      title: "Save and Share Configs",
      description:
        "Save, share, and download custom enhancement configurations for personalization and optimal performance.",
    },
    {
      icon: <Monitor className="h-6 w-6 text-red-500" />,
      title: "In-Game Overlay",
      description: "The Radius Overlay allows easy mod activation without leaving the game, keeping you in the action.",
    },
    {
      icon: <MousePointer className="h-6 w-6 text-red-500" />,
      title: "Easy One-Click Start",
      description:
        "No need to worry about version conflicts or constant updates. With regular community support, we're exceptional in one crucial area: our mods work flawlessly.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-red-500" />,
      title: "Successful Injection",
      description:
        "Real-time status monitoring ensures you know when the enhancement is successfully injected and ready to use.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Advanced technology designed to enhance your gaming experience while keeping you protected
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="border-border/5 bg-white dark:bg-black shadow-sm"
              spotlightColor="rgba(239, 68, 68, 0.1)"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/50 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Status Indicator */}

      </div>
    </section>
  )
}
