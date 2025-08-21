"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MessageSquare, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="cosmic-bg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let Your Creation Shine Even Brighter
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch and discuss how we can collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">



          <div className="lg:col-span-2">
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <MessageSquare className="w-6 h-6 text-purple-400 mr-3" />
                  Lets Connect on Discord
                </CardTitle>
                <p className="text-gray-300 mt-2">
                  Ready to discuss your project? Join our Discord Server get started.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full cosmic-glow">
                    <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Join Our Discord Server</h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      Get instant responses, share project files, and collaborate in real-time. Perfect for ongoing
                      projects.
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="cosmic-glow bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 hover:scale-105 transition-all duration-200 text-white font-semibold px-8 py-3"
                    onClick={() => window.open("https://discord.gg/FK8YyZt9kK", "_blank")}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    Join Discord Server
                  </Button>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm">
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-gray-400">Get replies within minutes between 9AM to 5PM JST</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 bg-cyan-600/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                          />
                        </svg>
                      </div>
                      <p className="text-white font-medium">File Sharing</p>
                      <p className="text-gray-400">
                        Share designs, mockups, and project files easily within the ticket system
                      </p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-white font-medium">Real-time Updates</p>
                      <p className="text-gray-400">Get live project updates and progress reports</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
          
          <Card className="cosmic-card hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Users className="w-5 h-5 text-purple-400 mr-2" />
                  Recent Clients
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <img src="/photos/pe1.jpg" alt="" className="w-full h-full object-cover rounded-lg cosmic-glow" />
                    </div>
                    <span className="text-white text-sm font-medium">Star</span>
                    <span className="text-gray-400 text-xs">Creator</span>
                  </div>

                  <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                     <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <span className="text-white text-sm font-medium">TadanoSano</span>
                    <span className="text-gray-400 text-xs">Game Developer</span>
                  </div>

                  <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">L</span>
                    </div>
                    <span className="text-white text-sm font-medium">Luuk</span>
                    <span className="text-gray-400 text-xs">Game Developer</span>
                  </div>

                  <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <img src="/photos/foras1.png" alt="" className="w-full h-full object-cover rounded-lg cosmic-glow" />
                    </div>
                    <span className="text-white text-sm font-medium">Tamerlan</span>
                    <span className="text-gray-400 text-xs">Creator</span>
                  </div>

                  <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                       <img src="/photos/web1.png" alt="" className="w-full h-full object-cover rounded-lg cosmic-glow" />
                    </div>
                    <span className="text-white text-sm font-medium">Kozak</span>
                    <span className="text-gray-400 text-xs">Esports</span>
                  </div>

                  <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                       <img src="/photos/images.jpg" alt="" className="w-full h-full object-cover rounded-lg cosmic-glow" />
                    </div>
                    <span className="text-white text-sm font-medium">Clickster</span>
                    <span className="text-gray-400 text-xs">YouTuber</span>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-gray-700/50">
                  <p className="text-gray-400 text-sm">
                    Trusted by <span className="text-purple-400 font-semibold">100+</span> creators worldwide
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="cosmic-card cosmic-glow hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Quick Response Guaranteed</h3>
                <p className="text-gray-300 text-sm mb-4">
                  I typically respond to all inquiries within 24 hours, often much sooner!
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">24h</div>
                    <div className="text-xs text-gray-400">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">100%</div>
                    <div className="text-xs text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  )
}
