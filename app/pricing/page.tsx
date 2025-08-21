import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, CreditCard, Building2 } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Thumbnail",
    price: "$35+",
    period: "per frame",
    description: "Perfect for small businesses and startups",
    icon: Zap,
    popular: false,
    features: [
      "3D and 2D Digital Art",
      "High-Quality Render",
      "Unlimited Revisions (Fees apply",
      "Full Asset Support",
      "Final Files (PNG, JPG, PSD)",
      "Any Format",
      "1-3 day Delivery",
    ],
    category: "Graphic Design",
  },
  {
    name: "Icon",
    price: "$30+",
    period: "per frame",
    description: "Top Choice",
    icon: Star,
    popular: true,
    features: [
      "Logo Included",
      "High-Quality Render",
      "Full Asset Support",
      "Final Files (PNG, JPG, PSD)",
      "Unlimited Revisions (Fees apply)",
      "All File Formats",
      "1-2 day Delivery",
    ],
    category: "Graphic Design",
  },
  {
    name: "Enterprise",
    price: "Contact",
    period: "Sales Team",
    description: "For established companies",
    icon: Crown,
    popular: false,
    features: [
      "Multiple Designs",
      "Logos Included",
      "Full Asset Support",
      "Unlimited Concepts",
      "Unlimited Revisions",
      "Priority Support",
      "Dedicated Support",
      "Rush Delivery Available",
    ],
    category: "Graphic Design",
  },
]

const webDevPlans = [
  {
    name: "Portfolio Website",
    price: "$80",
    period: "Starter Package",
    description: "Standout among your competitors",
    icon: Zap,
    popular: false,
    features: [
      "Fully Responsive Design",
      "Contact Form",
      "External Links",
      "Unlimited Edits",
      "API Integration (Fees Apply)",
      "1 Month Support",
      "10 Pages",
    ],
    category: "Web Development",
  },
  {
    name: "Business Website",
    price: "$500+",
    period: "one-time",
    description: "Professional Website for your Business Expansion",
    icon: Star,
    popular: true,
    features: [
      "All features of Portfolio with more",
      "Free API Integration",
      "Database Integration",
      "SEO Optimization",
      "Analytics and Tracking",
      "Payment Integration",
      "Unlimited Pages (fees apply)",
      "Login System",
    ],
    category: "Web Development",
  },
  {
    name: "Enterprise",
    price: "Contact",
    period: "Sales Team",
    description: "Full online Enterprise solution",
    icon: Crown,
    popular: false,
    features: [
      "All features of Business and more",
      "Full Domain Support",
      "Full Moderation Support",
      "Order Management",
      "Scale-up Architecture",
      "6 Months Support",
      "Full Security Features",
      "Performance Optimization",
    ],
    category: "Web Development",
  },
]

const uiuxPlans = [
  {
    name: "UI/UX Starter",
    price: "$15+",
    period: "Per Frame",
    description: "Kickstart your Game",
    icon: Zap,
    popular: false,
    features: [
      "Up to 10 Screens",
      "Photoshop, Illustrator Usage",
      "Aesthetics Focused",
      "High Resolution Mockups",
      "PSD Files",
      "3 Free Revisions",
      "Developer Handoff",
    ],
    category: "UI/UX Design",
  },
  {
    name: "UI/UX Premium",
    price: "$20+",
    period: "per frame",
    description: "Complete UX solution with research",
    icon: Star,
    popular: true,
    features: [
      "Up to 20 Screens",
      "Photoshop, Illustrator Usage",
      "Aesthetics Focused",
      "High Resolution Mockups",
      "PSD Files",
      "5 Free Revisions",
      "Rush Delivery",
    ],
    category: "UI/UX Design",
  },
  {
    name: "UI/UX Enterprise",
    price: "Contact",
    period: "Sales Team",
    description: "End-to-end product design",
    icon: Crown,
    popular: false,
    features: [
      "Unlimited Frames",
      "Information Architecture",
      "Wireframes & Prototypes",
      "UI Design System using Figma",
      "A/B Testing",
      "High Render Mockups",
      "Developer Support",
      "Unlimited Revisions",
    ],
    category: "UI/UX Design",
  },
]

function PricingCard({ plan }: { plan: any }) {
  const IconComponent = plan.icon

  return (
    <Card
      className={`cosmic-card transition-all duration-300 relative ${
        plan.popular ? "cosmic-glow scale-105" : "hover:cosmic-glow"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1">Most Popular</Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
            <IconComponent className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
        <p className="text-gray-400 text-sm">{plan.description}</p>
        <div className="mt-4">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {plan.price}
          </span>
          <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-gray-300">
              <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full ${
            plan.popular
              ? "cosmic-glow bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              : "border-purple-500/50 text-white hover:bg-purple-500/10 bg-transparent"
          }`}
          variant={plan.popular ? "default" : "outline"}
        >
          <Link href="/contact" className="w-full text-center">
            {plan.popular ? "Kickstart" : "Get Started"} 
          </Link>
  
        </Button>
      </CardContent>
    </Card>
  )
}

export default function PricingPage() {
  return (
    <div className="cosmic-bg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible and negotiable pricing for any of the services from beginner developers to experienced creators.{""}
              Note that purchases are either <span className="font-bold">upfront or partially upfront</span>. Additionally, prices listed
              below are <span className="font-bold">base prices</span>, meaning that prices may increase depending on difficulty and time
              taken. Talk to the Sales team if you have inquiries about the payment. 
 
          </p>
        </div>

        {/* Payment Options Section */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-bold text-white mb-6">Payment Options</h2>
          <p className="text-gray-400 mb-8">We accept multiple payment methods for your convenience</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* PayPal Option */}
            <div className="flex items-center space-x-4 p-4 rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                <CreditCard className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">PayPal</h3>
                <p className="text-sm text-gray-400">Secure online payments</p>
              </div>
            </div>

            {/* Bank Transfer Option */}
            <div className="flex items-center space-x-4 p-4 rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300">
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30">
                <Building2 className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">Bank Transfer</h3>
                <p className="text-sm text-gray-400">Direct bank payments</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            All payments are processed securely. Contact us for specific payment arrangements.
          </p>
        </div>

        {/* Graphic Design Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Graphic Design</h2>
            <p className="text-gray-400">Professional branding and visual identity solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>

        {/* Web Development Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Web Development</h2>
            <p className="text-gray-400">Modern, responsive websites that convert</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webDevPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>

        {/* UI/UX Design Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">UI/UX Design</h2>
            <p className="text-gray-400">User-centered design that drives engagement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uiuxPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>

        {/* Custom Projects CTA */}
        <div className="text-center">
          <Card className="cosmic-card cosmic-glow max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Need Something Custom?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Every project is unique. Let&apos;s discuss your specific requirements and create a tailored solution that
                fits your budget and timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="cosmic-glow bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                >
                  <a href="/contact">Get Custom Quote</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-500/50 text-white hover:bg-purple-500/10 bg-transparent"
                >
                  <a href="/faq">View FAQ</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
