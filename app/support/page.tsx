import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Clock, HelpCircle } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Background overlays for seamless effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.15),transparent_50%)] z-0" />
      <div className="relative z-10 flex flex-col">
        {/* Support Center Section */}
        <section className="min-h-screen flex flex-col justify-center py-20">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Center</h1>
              <p className="mt-4 text-muted-foreground max-w-[700px]">
                Get help with your Radius software. Our support team is here to assist you 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Methods */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Live Chat
                    </CardTitle>
                    <CardDescription>Get instant help from our support team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Start Live Chat</Button>
                  </CardContent>
                </Card>

                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email Support
                    </CardTitle>
                    <CardDescription>Send us a detailed message</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">support@radius.com</p>
                  </CardContent>
                </Card>

                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Response Times
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Live Chat:</span>
                      <span className="text-sm font-medium">Instant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Email:</span>
                      <span className="text-sm font-medium">{"< 2 hours"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Priority Support:</span>
                      <span className="text-sm font-medium">{"< 30 minutes"}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help?" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Describe your issue or question..." className="min-h-[120px]" />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="min-h-screen flex flex-col justify-center py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">Quick answers to common questions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5" />
                    How do I download my software?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    After purchase, you'll receive an email with download links and installation instructions. You can also
                    access downloads from your dashboard.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5" />
                    Is the software undetectable?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes, our software uses advanced protection methods to remain undetected. We regularly update our
                    protection systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5" />
                    What if I get banned?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    While our software is designed to be undetectable, we cannot guarantee 100% safety. Use at your own
                    risk.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5" />
                    Can I get a refund?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We offer a 30-day money-back guarantee for all purchases. Contact support for refund requests.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
