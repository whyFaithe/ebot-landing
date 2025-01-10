import { Check } from 'lucide-react'

interface BenefitProps {
  title: string
  description: string
}

function Benefit({ title, description }: BenefitProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 shrink-0">
        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
          <Check className="w-3 h-3 text-green-400" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  )
}

export function BenefitsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Benefit
        title="24/7 Availability"
        description="Never miss a lead with round-the-clock automated responses and engagement"
      />
      <Benefit
        title="Customizable Workflows"
        description="Design conversation flows that match your business processes perfectly"
      />
      <Benefit
        title="Smart Learning"
        description="AI that adapts and improves based on every interaction"
      />
      <Benefit
        title="Detailed Analytics"
        description="Track performance metrics and conversion rates in real-time"
      />
      <Benefit
        title="Seamless Integration"
        description="Works with your existing tools and CRM systems"
      />
      <Benefit
        title="Multi-channel Support"
        description="Deploy across website, messaging apps, and social media"
      />
    </div>
  )
}

