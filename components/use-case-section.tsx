import { Building2, ShoppingCart, MessageCircle, Home, Store, Hotel } from 'lucide-react'
import { Card } from '@/components/ui/card'

const useCases = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Boost conversions with product recommendations and instant customer support.'
  },
  {
    icon: MessageCircle,
    title: 'Social Media',
    description: 'Engage followers on platforms like Facebook or Instagram with automated messaging.'
  },
  {
    icon: Building2,
    title: 'Service Providers',
    description: 'Simplify appointment bookings, FAQs, and lead management.'
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Capture and qualify leads, providing property details instantly.'
  },
  {
    icon: Store,
    title: 'Retail',
    description: 'Promote products, share promotions, and assist with stock inquiries.'
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    description: 'Handle booking inquiries, suggest packages, and enhance guest experiences.'
  }
]

export function UseCaseSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {useCases.map((useCase) => {
        const Icon = useCase.icon
        return (
          <Card key={useCase.title} className="bg-gray-800/50 border-gray-800 p-6 flex flex-col items-center text-center">
            <Icon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
            <p className="text-gray-300">{useCase.description}</p>
          </Card>
        )
      })}
    </div>
  )
}

