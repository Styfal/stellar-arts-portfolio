import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Clock, CreditCard } from "lucide-react"

const termsSection = [
  {
    title: "1. Services and Scope",
    icon: FileText,
    content: [
      "Stellar Arts provides graphic design, UI/UX design, and web development services as outlined in individual project proposals and pricing plans.",
      "All work will be performed according to the specifications agreed upon in contract between the client and StellarArts.",
      "Any changes to the original scope of work must be agreed upon in writing and may result in additional charges depending on the plans purchased.",
      "Rush Delivery (projects with timelines shorter than standard) may incur additional fees of 25-50% of the project cost unless you purchased plans with free rush delivery.",
    ],
  },
  {
    title: "2. Payment Terms",
    icon: CreditCard,
    content: [
      "A fully upfront or 40-60% deposit is required before the contract begins on any project. The remaining balance is due upon project completion.",
      "Invoices are due within 30 days of receipt unless otherwise specified in the project agreement.",
      "Late payments may incur additional service charge on the outstanding balance.",
      "All prices are quoted in USD and do not include applicable taxes unless specifically stated. FtoF transactions are preferred when possible",
      "Refunds are not available. All purchases are final. Partial Payments are non-refundable but the remaining amount does not have to be paid.",
      "Refusing to purchase, or attempt to scam, defame, harrass, or otherwise damage the integrity of Stellar Arts will result in the pursuit of legal action indefinitely. Contact local authorities if you require contract enforcement."
    ],
  },
  {
    title: "3. Timeline and Delivery",
    icon: Clock,
    content: [
      "Project timelines are estimates based on the agreed scope of work and client responsiveness.",
      "Delays in client feedback or approval may extend the project timeline accordingly.",
      "StellarArts will make reasonable efforts to meet agreed-upon deadlines but is not liable for delays caused by circumstances beyond our control.",
      "Final files will be delivered electronically via email or file sharing service upon full payment.",
      "If creators of Stellar Arts suspends work on their own volition, the client will be refunded the full amount of the project.",
    ],
  },
  {
    title: "4. Intellectual Property",
    icon: Shield,
    content: [
      "Upon full payment, the client will own the final approved designs and have full rights to use them for their intended purpose.",
      "Stellar Arts retains the right to display completed work in portfolios, case studies, and promotional materials without watermarking unless otherwise agreed upon. It is imperative that the client does not use the work for any illegal or unethical purppose.",
      "Stellar Arts is not resposiible for any illegal or unethical use of the work by the client.",
      "The client is responsible for obtaining any necessary licenses for third-party assets used in the project.",
      "Any stock photos, fonts, or third-party assets used in the project may require separate licensing by the client.",
      "Stellar Arts retains ownership of all preliminary designs, concepts, and work-in-progress materials not included in the final deliverables.",
      "Legal actions may be pursued against any individual or entity that attempts to use, copy, or distribute Stellar Arts content as their own, or otherwise infringes on the intellectual property rights of Stellar Arts."
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="cosmic-bg min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Please read these terms carefully before engaging our services
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: August 2025</p>
        </div>

        <Card className="cosmic-card mb-8">
          <CardContent className="p-8">
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of services provided by Stellar Arts (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). By engaging our services, you (&quot;Client&quot; or &quot;you&quot;) agree to be bound by these Terms. Please read
              them carefully before proceeding with any project.
            </p>
          </CardContent>
        </Card>

    
        <div className="space-y-8">
          {termsSection.map((section, index) => {
            const IconComponent = section.icon
            return (
              <Card key={index} className="cosmic-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-white text-xl">
                    <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mr-4">
                      <IconComponent className="w-5 h-5 text-purple-400" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 leading-relaxed">
                        <span className="text-purple-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="space-y-8 mt-8">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="text-white text-xl">5. Revisions and Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  The number of revisions included depends on the selected service package as outlined in our pricing.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Additional revisions beyond the included amount will be charged accordingly.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  All revisions must be based on the original project scope and requirements.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Client approval is required at each major milestone before proceeding to the next phase.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="text-white text-xl">6. Client Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Provide all necessary materials, content, and information required for the project in a timely manner.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Respond to requests for feedback and approval within the agreed timeframe (typically 3-5 business
                  days).
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Ensure all provided content is original or properly licensed and does not infringe on third-party
                  rights.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Make payments according to the agreed schedule and terms.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="text-white text-xl">7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Stellar Art&apos;s liability is limited to the total amount paid for the specific project in question.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  We are not liable for any indirect, incidental, or consequential damages arising from our services.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  We do not guarantee specific business results or outcomes from our design work.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Any claims must be made within 30 days of project completion.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="text-white text-xl">8. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Either party may terminate the project with written notice.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Upon termination, the client will pay for all work completed up to the termination date.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Stellar Arts will provide all completed work upon receipt of payment for services rendered.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Deposits are non-refundable once work has commenced, except as specified in our refund policy.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="text-white text-xl">9. General Provisions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  These Terms constitute the entire agreement between the parties and supersede all prior agreements.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  Any modifications to these Terms must be made in writing and agreed upon by both parties.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  These Terms are governed according to the geographic location of the client and the employee.
                </li>
                <li>
                  <span className="text-purple-400 mr-2">•</span>
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in
                  full force and effect.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="cosmic-card cosmic-glow mt-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please do not hesitate to contact us.
            </p>
            <div className="text-gray-400">
              <p>Email: Use Discord Private Dms for now</p>
              <p>Phone: Not Applicable</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
