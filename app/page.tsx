import { Bot, MessageSquare, Zap, RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { FeatureCard } from '@/components/feature-card'
import { FaqSection } from '@/components/faq-section'
import { BenefitsGrid } from '@/components/benefits-grid'
import { StatsSection } from '@/components/stats-section'
import { TestimonialSection } from '@/components/testimonial-section'
import { ContactPricing } from '@/components/contact-pricing'
import { GradientGrid } from '@/components/ui/gradient-grid'
import { PlatformLogos } from '@/components/platform-logos'
import { UseCaseSection } from '@/components/use-case-section'
import { HowItWorks } from '@/components/how-it-works'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <GradientGrid />
      
      {/* Announcement Banner */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="text-center text-sm font-medium text-gray-300">
            <span className="md:inline">
              Transform your business with fully managed AI-powered bots - Get started today
            </span>
          </div>
        </div>
      </div>

      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Logo />
          <div className="space-x-8">
            <a href="#features" className="text-gray-300 hover:text-green-400 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors">How It Works</a>
            <a href="#use-cases" className="text-gray-300 hover:text-green-400 transition-colors">Use Cases</a>
            <Button 
              className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20"
            >
              Contact Us
            </Button>
          </div>
        </nav>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-xl p-1 pr-4 mb-8">
                <span className="inline-flex items-center justify-center rounded-full bg-green-500/10 p-1 text-green-400 text-xs font-medium leading-5 mr-2">
                  New
                </span>
                <span className="text-gray-300 text-sm">Fully Managed AI Bots</span>
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Fully Managed AI-Powered Bots for{' '}
                <span className="text-green-400">Small Businesses</span>
              </h1>
              <p className="text-xl text-gray-300/90 mb-8 leading-relaxed">
                E-Bots provides fully managed, AI-powered bots tailored to your business needs. Our team designs, implements, and monitors your bots, ensuring seamless integration with your existing platforms and continuous optimization for maximum efficiency.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-800 text-gray-300 hover:bg-gray-800"
                >
                  View Use Cases
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-900"
                      src={`/placeholder.svg?height=32&width=32`}
                      alt=""
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  Trusted by 1000+ customers
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-8">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e-bot_head%202.PNG-L0fuDlm3JtQHS08e0hRUgtz0rLpMGu.png"
                  alt="Ebot Illustration"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Platform Logos Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <PlatformLogos />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">
              Key Features
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Fully managed AI solutions designed to streamline your business operations
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={MessageSquare}
                title="Platform Flexibility"
                description="Seamlessly integrate E-Bots with your existing platforms, including Shopify, WordPress, Facebook, and more."
              />
              <FeatureCard
                icon={Zap}
                title="Tailored AI Solutions"
                description="Custom-designed bots that align perfectly with your business processes and customer needs."
              />
              <FeatureCard
                icon={Bot}
                title="Lead Capture & Delivery"
                description="Efficiently capture and deliver leads to your preferred tools based on your specific requirements."
              />
              <FeatureCard
                icon={RefreshCcw}
                title="Continuous Optimization"
                description="Our team monitors and iterates on your bots, ensuring peak performance and adaptability to your evolving business needs."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">
              How It Works
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Our streamlined process ensures you get a custom E-Bot solution tailored to your needs
            </p>
            <HowItWorks />
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">
              Use Cases for Small Businesses
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Discover how E-Bots can transform different aspects of your business
            </p>
            <UseCaseSection />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Why Choose E-Bots?
            </h2>
            <BenefitsGrid />
          </div>
        </section>

        {/* Automation Section */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-3xl blur-2xl" />
                <img 
                  src="/placeholder.svg?height=400&width=400" 
                  alt="Automation Illustration"
                  className="relative w-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Seamless{' '}
                <span className="text-green-400">automation</span>{' '}
                and integration
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team handles all aspects of bot management, from design to implementation and ongoing optimization, ensuring your business processes are streamlined and efficient.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="container mx-auto px-4 py-20 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              What Our Customers Say
            </h2>
            <TestimonialSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <ContactPricing />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container mx-auto px-4 py-20 border-t border-gray-800">
          <FaqSection />
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8">
            <a href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-green-400 transition-colors">Terms of Use</a>
            <a href="/contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
          <div className="mt-8">
            <p>&copy; 2024 E-Bots by WhyFaithe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

