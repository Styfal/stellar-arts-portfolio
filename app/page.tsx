import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Palette, Monitor, Code, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="cosmic-bg">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-float-slow absolute top-20 left-10 w-32 h-32 opacity-20">
            <img src="/photos/untitled(5).png" alt="" className="w-full h-full object-cover rounded-lg cosmic-glow" />
          </div>
          <div className="animate-float-medium absolute top-40 right-20 w-24 h-24 opacity-15">
            <img src="/photos/5085Thumbnail.jpg" alt="" className="w-full h-full object-cover rounded-xl cosmic-glow" />
          </div>
          <div className="animate-float-fast absolute bottom-32 left-1/4 w-28 h-28 opacity-25">
            <img src="/photos/kocho.png" alt="" className="w-full h-full object-cover rounded-xl cosmic-glow" />
          </div>
          <div className="animate-float-slow absolute bottom-20 right-1/3 w-20 h-20 opacity-20">
            <img src="/photos/GreaThumbHR.png" alt="" className="w-full h-full object-cover rounded-lg cosmic-glow" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Stellar Arts
              </span>
              <br />
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Elevating brands through stunning graphic design, intuitive UI/UX, and powerful web development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="cosmic-glow bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300"
              >
                <Link href="/portfolio">
                  View Portfolio <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500/50 text-white hover:bg-purple-500/10 bg-transparent hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative h-96">
          <div className="relative h-full overflow-hidden rounded-2xl">
            {/* Enhanced fade gradients for all columns */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10"></div>

            <div className="grid grid-cols-3 gap-4 h-full">
              {/* Column 1 - Slowest */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="animate-vertical-slide-slow flex flex-col space-y-6">
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/delta.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/cali1.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/shadow131.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/strongest8123.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img src="/photos/cor1.png" alt="" className="w-full h-full object-cover rounded-2xl cosmic-glow" />
                  </div>
                </div>
              </div>

              {/* Column 2 - Medium speed */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="animate-vertical-slide-medium flex flex-col space-y-6">
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/icon3n1.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/aomineicon.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img src="/photos/7471.png" alt="" className="w-full h-full object-cover rounded-2xl cosmic-glow" />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/Spacebuster(9).png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/JailbrokeSUPER.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                </div>
              </div>

              {/* Column 3 - Fastest (but still slow) */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="animate-vertical-slide-fast flex flex-col space-y-6">
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/tanjiro.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/foras1.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/Goldilock13.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img src="/photos/wolf.png" alt="" className="w-full h-full object-cover rounded-2xl cosmic-glow" />
                  </div>
                  <div className="flex-shrink-0 w-full h-80">
                    <img
                      src="/photos/star12.png"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl cosmic-glow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What We Create</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From concept to completion, we bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="cosmic-card hover:cosmic-glow hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Palette className="w-12 h-12 text-purple-400 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4">Graphic Design</h3>
                <p className="text-gray-400">
                  Eye-catching thumbnails, logos, icon, and banners dramatically improve your KPI perfomance like CTR and QPTR and help establish brand identity. 
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-card hover:cosmic-glow hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Monitor className="w-12 h-12 text-cyan-400 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4">UI/UX Design</h3>
                <p className="text-gray-400">
                  Intuitive aesthetic interfaces for your applications, websites, video games, with seemless integration and user-friendly navigation to improve customer experience.</p>
              </CardContent>
            </Card>

            <Card className="cosmic-card hover:cosmic-glow hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Code className="w-12 h-12 text-pink-400 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
                <p className="text-gray-400">
                  Fast, responsive, and scalable websites built with Next.JS, React, Tailwind CSS, and other frameworks to ensure top security and customization. 
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative h-96">
          {/* Horizontal carousel with edge fading */}
          <div className="relative h-full overflow-hidden">
            {/* Edge fade gradients */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

            <div className="flex animate-slide-left space-x-8 h-full">
              {/* Original set of images */}
              <div className="flex-shrink-0 w-80 h-72">
                <img
                  src="/photos/BigBoiBasket.png"
                  alt=""
                  className="w-full h-full object-cover rounded-xl cosmic-glow"
                />
              </div>
              <div className="flex-shrink-0 w-80 h-72">
                <img src="/photos/cycles.png" alt="" className="w-full h-full object-cover rounded-xl cosmic-glow" />
              </div>
              <div className="flex-shrink-0 w-80 h-72">
                <img src="/photos/fps1.png" alt="" className="w-full h-full object-cover rounded-xl cosmic-glow" />
              </div>
              <div className="flex-shrink-0 w-80 h-72">
                <img src="/photos/173Dooms.png" alt="" className="w-full h-full object-cover rounded-xl cosmic-glow" />
              </div>
              <div className="flex-shrink-0 w-80 h-72">
                <img
                  src="/photos/birhgte121.png"
                  alt=""
                  className="w-full h-full object-cover rounded-xl cosmic-glow"
                />
              </div>
              {/* Duplicated set for seamless looping */}
              <div className="flex-shrink-0 w-80 h-72">
                <img
                  src="/photos/BigBoiBasket.png"
                  alt=""
                  className="w-full h-full object-cover rounded-xl cosmic-glow"
                />
              </div>
              <div className="flex-shrink-0 w-80 h-72">
                <img src="/photos/cycles.png" alt="" className="w-full h-full object-cover rounded-xl cosmic-glow" />
              </div>
              <div className="flex-shrink-0 w-80 h-72">
                <img src="/photos/fps1.png" alt="" className="w-full h-full object-cover rounded-xl cosmic-glow" />
              </div>
              <div className="flex-shrink-0 w-80 h-72">
                <img src="/photos/173Dooms.png" alt="" className="w-full h-full object-cover rounded-xl cosmic-glow" />
              </div>
              <div className="flex-shrink-0 w-80 h-72">
                <img
                  src="/photos/birhgte121.png"
                  alt=""
                  className="w-full h-full object-cover rounded-xl cosmic-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-float-medium absolute top-10 left-20 w-16 h-16 opacity-10">
            <img src="/photos/Islandpower1.png" alt="" className="w-full h-full object-cover rounded-xl cosmic-glow" />
          </div>
          <div className="animate-float-slow absolute bottom-10 right-20 w-20 h-20 opacity-15">
            <img src="/photos/strongest8123.png" alt="" className="w-full h-full object-cover rounded-lg cosmic-glow" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Card className="cosmic-card cosmic-glow hover:scale-105 transition-all duration-300">
            <CardContent className="p-12">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6 hover:scale-110 transition-transform duration-300" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Launch Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8">Let's create something extraordinary together</p>
              <Button
                asChild
                size="lg"
                className="cosmic-glow bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">
                  Start Your Journey <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
