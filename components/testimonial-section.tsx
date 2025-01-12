import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <Card className="bg-gray-900/90 border-gray-800">
      <CardContent className="pt-6">
        <Quote className="w-8 h-8 text-green-400 mb-4" />
        <p className="text-gray-300 mb-4">{quote}</p>
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-gray-400 text-sm">{role}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimonialSection() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <Testimonial
        quote="Implementing Ebot has transformed our customer service. We're now able to handle 3x the inquiries with the same team size."
        author="Sarah Johnson"
        role="Customer Success Manager"
      />
      <Testimonial
        quote="The AI capabilities are impressive. It learns from each interaction and keeps getting better at handling complex queries."
        author="Michael Chen"
        role="Technical Director"
      />
      <Testimonial
        quote="Setup was incredibly smooth, and the support team was there every step of the way. Highly recommended!"
        author="Lisa Rodriguez"
        role="Operations Lead"
      />
    </div>
  )
}

