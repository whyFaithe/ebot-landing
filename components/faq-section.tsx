import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white">How does the AI bot work?</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Our AI bots use advanced natural language processing to understand and respond to queries in real-time. They learn from interactions to provide increasingly accurate and helpful responses.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-white">What kind of businesses can benefit from Ebot?</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Ebot is designed to help any business that wants to automate customer interactions, from small startups to large enterprises. It's particularly effective for businesses with high customer inquiry volumes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-white">How long does it take to set up?</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Setup is quick and straightforward, typically taking less than 30 minutes. Our team provides comprehensive support throughout the process to ensure smooth implementation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-white">Can I customize the bot's responses?</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Yes, you have full control over your bot's responses and conversation flows. You can customize messages, tone, and behavior to match your brand voice.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

