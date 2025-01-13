import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from 'lucide-react'

export function ContactPricing() {
  return (
    <Card className="bg-gray-800/50 border-gray-800">
      <CardContent className="p-8 text-center">
        <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          Contact us for custom pricing tailored to your business needs. Our team will create a perfect solution for you.
        </p>
        
        <Button 
          size="lg" 
          className="bg-green-500 text-white hover:bg-green-600"
        >
        <Link href="https://whyfaithe.jotform.com/250055040868959">Contact for Pricing</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

