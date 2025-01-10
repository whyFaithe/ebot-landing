import { TypeIcon as type, type LucideIcon, Zap, RefreshCcw } from 'lucide-react'
import { FloatingCard } from './ui/floating-card'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <FloatingCard>
      <div className="p-6 rounded-2xl border border-gray-800/50 bg-gray-900/90 backdrop-blur-xl">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-purple-500/20 p-2.5 mb-4">
          <Icon className="w-full h-full text-green-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300/90">{description}</p>
      </div>
    </FloatingCard>
  )
}

