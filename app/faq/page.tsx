import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, CreditCard, Code } from "lucide-react"

const faqCategories = [
  {
    title: "General Questions",
    icon: MessageCircle,
    questions: [
      {
        question: "What services do you offer?",
        answer:
          "We specialize in three main areas: Graphic Design (logos, thumbnails, print materials), UI/UX Design (user interfaces), and Web Development (front-end, back-end, web applications). Each service can be tailored to meet your specific needs and budget.",
      },
      {
        question: "How do I get started with a project?",
        answer:
          "First, contact us through the ticket system on the discord server with details about your project. We will schedule a consultation call or respond to your ticket discuss your needs, timeline, and budget. After that, we will provide a detailed proposal and timeline. Once approved, we can begin the project.",
      },
      {
        question: "Do you work with clients internationally?",
        answer:
          "Yes! We work with clients worldwide. Thanks to modern communication tools, we can collaborate effectively regardless of location. All meetings can be conducted via text messages or calls on our Discord Server and we flexible with different time zones to ensure smooth communication throughout the project.",
      },
      {
        question: "What makes your approach different?",
        answer:
          "we expand our reach to you through sheer results. We collaborated with 100s of partners, delivering high-quality work. We provide flexible plans and high quality services to ensure you get the best value, even after the project is complete. Our focus is on your success, not just a transaction. ",
      },
    ],
  },
  {
    title: "Project Process",
    icon: Clock,
    questions: [
      {
        question: "What is your typical project timeline?",
        answer:
          "Timelines vary by project complexity: Logo design typically takes 2-5 days, thumbnails 1-5 days, website development 3-6 weeks, and UI/UX projects 2-5 days. Rush delivery is available for an additional fee or with perks. Please provide a detailed timeline during our initial consultation.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "The number of revisions depends on your chosen package. Some have fees that apply after a certain amount. Check the pricing page for details",
      },
      {
        question: "What if I need changes after the project is complete?",
        answer:
          "Minor tweaks are available for free if revisions have not been used during the project. For larger changes, please create a new ticket on the Discord Server for a consultation.",
      },
      {
        question: "How do you handle feedback and communication?",
        answer:
          "We mainly use discord to keep you updated. You will receive regular progress updates, and we always available for questions.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    icon: CreditCard,
    questions: [
      {
        question: "How do you structure your pricing?",
        answer:
          "We offer flexible-price packages that vary in difficulty.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers, PayPal, and major credit cards. For larger projects, we typically require a full on upfront fee or 40%-60% deposit to begin work, with the remainder due upon completion. Payment plans can be arranged for larger projects upon discussion.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "All purchases are final. However, if you are not satisfied with the work, we will do our best to address concerns. If you made a partial payment, you cannot get the fund back but you do need to pay the remaining amount. Please review our packages carefully before contacting us",
      },
      {
        question: "Are there any additional costs I should know about?",
        answer:
          "All costs are outlined in your project proposal.",
      },
    ],
  },
  {
    title: "Technical Questions",
    icon: Code,
    questions: [
      {
        question: "What technologies do you use for web development?",
        answer:
          "We use modern, industry-standard technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "All websites we create are fully responsive. This means they will look and work perfectly on all devices - phones, tablets, and desktops. Mobile optimization is crucial for both user experience and search engine rankings.",
      },
      {
        question: "Do you provide hosting and domain services?",
        answer:
          "We provide hosting for additional fees. We may require you to purchase your own domain, but we can fully assist you in the process.",
      },
      {
        question: "What file formats will I receive?",
        answer:
          "For graphic design projects, you will receive all source files (PNG, PSD, JPG). For web projects, you will get the complete source code or a GitHub Repository.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="cosmic-bg min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know is here. If you have any questions that are not answered here, join the Discord Server and contact the team
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <Card key={categoryIndex} className="cosmic-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-white text-2xl">
                    <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mr-4">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-purple-500/20"
                      >
                        <AccordionTrigger className="text-left text-white hover:text-purple-300 transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Card className="cosmic-card cosmic-glow">
            <CardContent className="p-12">
              <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Not able to find the answer you are looking for? We are here to help! Reach out and we will get back to you as soon
                as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="cosmic-glow bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                >
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-500/50 text-white hover:bg-purple-500/10 bg-transparent"
                >
                  <a href="/pricing">View Pricing</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
