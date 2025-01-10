import { Bot, MessageSquare, Zap, RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { FeatureCard } from '@/components/feature-card'
import { FaqSection } from '@/components/faq-section'
import { BenefitsGrid } from '@/components/benefits-grid'
import { StatsSection } from '@/components/stats-section'
import { TestimonialSection } from '@/components/testimonial-section'
import { ContactPricing } from '@/components/contact-pricing'
import { PlatformLogos } from '@/components/platform-logos'
import { UseCaseSection } from '@/components/use-case-section'
import { HowItWorks } from '@/components/how-it-works'
import { TexturedBackground } from '@/components/ui/textured-background'
import { SectionDivider } from '@/components/ui/section-divider'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <TexturedBackground />
      
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
        <HeroSection />

        {/* Platform Logos Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <PlatformLogos />
          </div>
        </section>
        
        <SectionDivider />

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

        <SectionDivider />

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

        <SectionDivider />

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

        <SectionDivider />

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Why Choose E-Bots?
            </h2>
            <BenefitsGrid />
          </div>
        </section>

        <SectionDivider />

        {/* Automation Section */}
        <section className="container mx-auto px-4 py-20">
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

        <SectionDivider />

        {/* Testimonials Section */}
        <section id="testimonials" className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              What Our Customers Say
            </h2>
            <TestimonialSection />
          </div>
        </section>

        <SectionDivider />

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <ContactPricing />
          </div>
        </section>

        <SectionDivider />

        {/* FAQ Section */}
        <section id="faq" className="container mx-auto px-4 py-20">
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

