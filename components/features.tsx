import { Shield, Zap, BarChart, Layers, Lock, Cpu, Star, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized for performance with minimal impact on your system resources and game FPS.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Undetectable",
      description: "Advanced protection systems keep you safe from anti-cheat detection.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Customizable",
      description: "Fine-tune every aspect of your enhancement to match your personal playstyle.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Multi-Game Support",
      description: "Compatible with all major titles and regularly updated for new releases.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Secure & Private",
      description: "Your data and activity are protected with industry-leading security protocols.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Cutting-Edge Tech",
      description: "Built with the latest technology for maximum reliability and performance.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Trusted by Gamers",
      description: "Thousands of satisfied users rely on Radius for their competitive edge.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "24/7 Support",
      description: "Our expert team is always available to help you with any questions or issues.",
    },
  ]

  return (
    <section className="container py-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Radius</h2>
        <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
          Our software is designed with gamers in mind, providing the tools you need to succeed
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:bg-card/80 transition-colors"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
