import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Clock, HelpCircle, ExternalLink } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Link from "next/link"

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
                Get help with your Radius software. Our support team is here to assist you.
              </p>
            </div>

            {/* Discord Banner */}
            <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors mb-8">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <FaDiscord className="h-12 w-12 text-[#5865F2]" />
                    <div>
                      <h3 className="text-xl font-semibold">Join Our Discord Community</h3>
                      <p className="text-muted-foreground">Get instant support and connect with other users</p>
                    </div>
                  </div>
                  <Link 
                    href="https://discord.gg/radius" 
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    <Button className="bg-[#5865F2] hover:bg-[#4752C4] flex items-center gap-2">
                      Join Discord
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Methods */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FaDiscord className="h-5 w-5" />
                      Discord Support
                    </CardTitle>
                    <CardDescription>Get instant help from our community</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">Join our Discord server for:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>24/7 Community Support</li>
                      <li>Direct Access to Staff</li>
                      <li>Updates & Announcements</li>
                      <li>Tips & Tricks</li>
                    </ul>
                    <Link 
                      href="https://discord.gg/radius" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full mt-2">Join Server</Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email Support
                    </CardTitle>
                    <CardDescription>For non-urgent inquiries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">support@radius.com</p>
                    <p className="text-xs text-muted-foreground">For faster support, please use our Discord server.</p>
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
                      <span className="text-sm">Discord Support:</span>
                      <span className="text-sm font-medium text-green-500">{"< 5 minutes"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Email Support:</span>
                      <span className="text-sm font-medium">{"< 24 hours"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Priority Support:</span>
                      <span className="text-sm font-medium text-blue-500">{"< 1 hour"}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      * Response times may vary during peak hours
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Need help? For fastest support, join our Discord server. Otherwise, fill out this form and we'll get back to you via email.
                    </CardDescription>
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
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        For urgent support, please use our Discord server for faster response times.
                      </p>
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
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Quick answers to common questions. Can't find what you're looking for?{" "}
                <Link 
                  href="https://discord.gg/radius" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Ask in our Discord
                </Link>
              </p>
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
                    access downloads from your dashboard. Need help? Join our Discord for instant assistance.
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
                    protection systems. For the latest status and updates, check our Discord announcements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5" />
                    What if I have technical issues?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join our Discord server for immediate technical support. Our community managers and support staff are available
                    24/7 to help resolve any issues you encounter.
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
                    We offer a 24-hour money-back guarantee for all purchases. Contact our support team on Discord for the fastest
                    refund processing.
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
