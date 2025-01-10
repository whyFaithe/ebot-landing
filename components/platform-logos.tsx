import Image from 'next/image'
import { Card } from '@/components/ui/card'

const platforms = [
  { name: 'Shopify', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'WordPress', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Facebook', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Instagram', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Google Sheets', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Zapier', icon: '/placeholder.svg?height=40&width=40' },
]

export function PlatformLogos() {
  return (
    <Card className="bg-gray-900/50 border-gray-800 p-8 backdrop-blur-xl">
      <div className="text-center mb-6">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Works with your favorite platforms
        </h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all"
          >
            <Image
              src={platform.icon}
              alt={platform.name}
              width={40}
              height={40}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </Card>
  )
}

