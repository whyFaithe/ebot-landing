import Image from 'next/image'
import { Card } from '@/components/ui/card'

const platforms = [
  { name: 'Shopify', icon: '/brands/shopify_logo.svg' },
  { name: 'WordPress', icon: '/brands/wordpress_logo.svg' },
  { name: 'Wix', icon: '/brands/wix_logo.svg' },
  { name: 'BigCommerce', icon: '/brands/bigcommerce_logo.svg' },
  { name: 'Webflow', icon: '/brands/webflow_logo.svg' },
]

export function PlatformLogos() {
  return (
    <Card className="bg-gradient-to-r from-[#101827]/90 via-purple-500 via-60% to-[#101827]/90 border-gray-800 p-8 backdrop-blur-xl">
      <div className="text-center mb-6">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Works with all of your favorite platforms
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-6">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all"
          >
            <Image
              src={platform.icon}
              alt={platform.name}
              height={40}
              width={40}
              className="h-8 w-auto object-contain bg-transparent brightness-200 invert opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </Card>
  )
}

