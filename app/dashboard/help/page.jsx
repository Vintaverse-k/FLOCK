import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function HelpPage() {
  const faqs = [
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
      </div>

    <div className="grid gap-6 md:grid-cols-3 mb-8">
  <Card className="text-left">
    <CardContent className="pt-6 ml-6">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <img
          src="/chats.svg"
          alt="message"
          className="h-48 w-48"
        />
      </div>
      <h3 className="font-semibold mb-2">Chat to support</h3>
      <p className="text-sm text-muted-foreground mb-2">We're here to help.</p>
      <p className="text-sm font-medium">support@flock.com</p>
    </CardContent>
  </Card>

  <Card className="text-left">
    <CardContent className="pt-6 ml-6">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <img
          src="/visit.svg"
          alt="location"
          className="h-48 w-48"
        />
      </div>
      <h3 className="font-semibold mb-2">Visit us</h3>
      <p className="text-sm text-muted-foreground mb-2">Visit our office HQ.</p>
      <p className="text-sm font-medium">New York, USA</p>
    </CardContent>
  </Card>

  <Card className="text-left">
    <CardContent className="pt-6 ml-6">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <img
          src="/callus.svg"
          alt="phone"
          className="h-48 w-48"
        />
      </div>
      <h3 className="font-semibold mb-2">Call us</h3>
      <p className="text-sm text-muted-foreground mb-2">Mon-Fri from 8am to 5pm.</p>
      <p className="text-sm font-medium">+555 234-5678</p>
    </CardContent>
  </Card>
</div>


      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          {faqs.slice(0, 3).map((faq, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 text-left hover:bg-muted/50">
                <span className="font-medium">{faq.question}</span>
                <img
                  src="/downarw.svg"
                  alt="expand"
                  className="h-4 w-4 shrink-0 transition-transform duration-200"
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4 pt-2">
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <div className="space-y-4">
          {faqs.slice(3, 6).map((faq, index) => (
            <Collapsible key={index + 3}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 text-left hover:bg-muted/50">
                <span className="font-medium">{faq.question}</span>
                <img
                  src="/downarw.svg"
                  alt="expand"
                  className="h-4 w-4 shrink-0 transition-transform duration-200"
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4 pt-2">
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  )
}
