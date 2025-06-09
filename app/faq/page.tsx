import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I download my software after purchase?",
      answer:
        "After completing your purchase, you'll receive an email with download links and installation instructions. You can also access your downloads from your user dashboard at any time.",
    },
    {
      question: "Is the software undetectable?",
      answer:
        "Yes, our software uses advanced protection methods including HWID spoofing and sophisticated injection techniques to remain undetected. We regularly update our protection systems to stay ahead of anti-cheat measures.",
    },
    {
      question: "What happens if I get banned while using the software?",
      answer:
        "While our software is designed to be undetectable and includes ban protection features, we cannot guarantee 100% safety. Gaming involves inherent risks, and you use our software at your own discretion.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee for all purchases. If you're not satisfied with our software, contact our support team within 30 days for a full refund.",
    },
    {
      question: "How many devices can I use the software on?",
      answer:
        "Each license allows installation on one device at a time. If you need to transfer your license to a new device, contact our support team for assistance with the transfer process.",
    },
    {
      question: "Do you provide customer support?",
      answer:
        "Yes! We offer 24/7 customer support through live chat and email. Our response times are typically under 2 hours for email and instant for live chat.",
    },
    {
      question: "How often is the software updated?",
      answer:
        "We provide regular updates to ensure compatibility with the latest game versions and to enhance our protection systems. Updates are typically released within 24-48 hours of major game updates.",
    },
    {
      question: "What are the system requirements?",
      answer:
        "Minimum requirements: Windows 10/11 64-bit, 4GB RAM, 2GB free disk space, and a DirectX 11 compatible graphics card. For optimal performance, we recommend 8GB RAM or more.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use industry-standard encryption and secure payment processors to protect your financial information. We never store your payment details on our servers.",
    },
    {
      question: "Can I pause or cancel my subscription?",
      answer:
        "Yes, you can manage your subscription from your user dashboard. You can pause, cancel, or modify your subscription at any time. Changes take effect at the next billing cycle.",
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Find answers to common questions about our software and services
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Still have questions?</CardTitle>
            <CardDescription>Can't find what you're looking for? Our support team is here to help.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/support"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Contact Support
              </a>
              <a
                href="/support"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Start Live Chat
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
