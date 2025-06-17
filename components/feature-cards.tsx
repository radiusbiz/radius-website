import { Shield, Gamepad2, Settings, Monitor, MousePointer, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureCards() {
  const features = [
    {
      icon: <Gamepad2 className="h-8 w-8 text-primary" />,
      title: "Automatic Game Detection",
      description:
        "Radius automatically detects your launched game and securely injects the enhancement, providing a seamless and safe gaming experience.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Built-In HWID Spoofer - Ban Protection",
      description:
        "An HWID spoofer alters your device's unique hardware ID, helping bypass bans and allowing continued gameplay.",
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Save and Share Configs",
      description:
        "Save, share, and download custom enhancement configurations for personalization and optimal performance.",
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "In-Game Overlay",
      description: "The Radius Overlay allows easy mod activation without leaving the game, keeping you in the action.",
    },
    {
      icon: <MousePointer className="h-8 w-8 text-primary" />,
      title: "Easy One-Click Start",
      description:
        "No need to worry about version conflicts or constant updates. With regular community support, we're exceptional in one crucial area: our mods work flawlessly.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
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
            <Card
              key={index}
              className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  {feature.icon}
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="flex justify-center">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-medium">System Status: All Services Operational</span>
          </div>
        </div>
      </div>
    </section>
  )
}
