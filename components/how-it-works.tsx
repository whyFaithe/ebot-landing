import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Settings, BarChart, RefreshCw } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We discuss your business needs and how an E-Bot can help streamline your operations."
  },
  {
    icon: Settings,
    title: "Custom Design",
    description: "Our team designs a bot tailored to your specific requirements and integrations."
  },
  {
    icon: BarChart,
    title: "Implementation & Monitoring",
    description: "We set up your E-Bot and continuously monitor its performance."
  },
  {
    icon: RefreshCw,
    title: "Ongoing Optimization",
    description: "Regular updates and refinements ensure your E-Bot evolves with your business."
  }
]

export function HowItWorks() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
    
      {steps.map((step, index) => {
        const Icon = step.icon
        return (
          <Card key={step.title} className="bg-gray-900/90 backdrop-blur-xl border-gray-800 flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex flex-col items-center justify-center">
                <Icon className="w-6 h-6 text-green-400" />
              </div>
              <CardTitle className="text-white">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{step.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

