import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex K.",
      avatar: "AK",
      title: "Professional Gamer",
      content:
        "Radius has completely transformed my gameplay. The customization options are incredible, and the performance boost is noticeable without any FPS drops.",
    },
    {
      name: "Sarah L.",
      avatar: "SL",
      title: "Twitch Streamer",
      content:
        "I've tried many enhancement tools, but Radius stands out for its reliability and undetectable nature. My viewers love the improved gameplay!",
    },
    {
      name: "Mike T.",
      avatar: "MT",
      title: "Competitive Player",
      content:
        "The support team is amazing. Any time I've had an issue, they've responded quickly and resolved it. The software itself is top-notch.",
    },
  ]

  return (
    <section className="container py-20 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
        <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
          Join thousands of satisfied gamers who have elevated their gameplay with Radius
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.title}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
