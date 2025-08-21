"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Esports Website",
    category: "Web Development",
    description: "A modern ESports platform with team profile, match schedules and live score updates.",
    image: "/photos/web1.png",
    tags: ["React", "Next.js", "Stripe", "Tailwind"],
    type: "website",
    websiteUrl: "https://acesports.gg",
    featured: true,
  },
  {
    id: 2,
    title: "Black Winds Thumbnail",
    category: "Graphic Design",
    description: "Upcoming FPS game created by Ayman. Planning a launch in 2025",
    image: "/photos/ZoneofTerritory(1).png",
    tags: ["Branding", "Thumbnail", "GFX"],
    type: "design",
    projectUrl: "https://discord.gg/tGg3KM3QbY",
    featured: true,
  },
  {
    id: 3,
    title: "Basketball Mirage Boost UI",
    category: "UI/UX Design",
    description: "Game UI for a Basketball Game created by Phoasen",
    image: "/photos/abilityspins.png",
    tags: ["Mobile UI", "UX", "Figma", "Illustrator"],
    type: "design",
    projectUrl: "https://www.roblox.com/games/114429014843014/Basketball-Mirage#!/about",
    featured: true,
  },
  {
    id: 4,
    title: "SaaS Quiz platform",
    category: "Web Development",
    description: "AI powered quiz platform with real-time analytics and user management",
    image: "/photos/web3.png",
    tags: ["React", "Firebase", "TypeScript", "API Integration"],
    type: "website",
    websiteUrl: "https://memocurve.com",
  },
  {
    id: 5,
    title: "Sports drink brand identity",
    category: "Graphic Design",
    description:
      "Presentation Design for a sponsorship presentation for a beverage drink company vitameau. Drink design created using Photoshop.",
    image: "/photos/vit.png",
    tags: ["Brand Identity", "Graphic Design", "Photoshop"],
    type: "design",
    projectUrl: "https://drinkvitameau.com",
  },
  {
    id: 6,
    title: "Basketball Mirage HUD UI",
    category: "UI/UX Design",
    description: "Patient management system with focus on accessibility and ease of use.",
    image: "/photos/sound.png",
    tags: ["Game UI", "Photoshop", "Illustrator"],
    type: "design",
    projectUrl: "https://www.roblox.com/games/114429014843014/Basketball-Mirage#!/about"
  },
  {
    id: 7,
    title: "Anime Game Icon",
    category: "Graphic Design",
    description: "Icon designed for a Korean anime game",
    image: "/photos/foras1.png",
    tags: ["Game Design", "Icon Design", "Digital Art"],
    type: "design",
  },
  {
    id: 8,
    title: "Shadow Ops Game Icon",
    category: "Graphic Design",
    description: "Upcoming FPS Game developed by Twist",
    image: "/photos/shadow131.jpg",
    tags: ["3D Rendering", "Game Design", "GFX"],
    type: "design",
  },
  {
    id: 9,
    title: "Marvel Rivals Thumbnail",
    category: "Graphic Design",
    description: "Thumbnail commission for a Marvel Rivals Esports Event",
    image: "/photos/ultika13.png",
    tags: ["Esports Design", "Thumbnail Design", "Digital Art"],
    type: "design",
  },
  {
    id: 10,
    title: "FPS Unreal Render",
    category: "Graphic Design",
    description: "Thumbnail design for a highly anticipated FPS game",
    image: "/photos/fps1.png",
    tags: ["3D Rendering", "Game Design", "Photoshop"],
    type: "design",
  },
  {
    id: 11,
    title: "Effects UI",
    category: "UI/UX Design",
    description: "UI and the ability effects for a basketball game",
    image: "/photos/effects.png",
    tags: ["Game UI", "Effects Design", "Interactive Design"],
    type: "design",
    projectUrl: "https://www.roblox.com/games/114429014843014/Basketball-Mirage#!/about",
  },
  {
    id: 12,
    title: "Horror Game Sneak Peak",
    category: "Graphic Design",
    description: "Highly detailed render of a horror game environment fully designed and modeled using Blender",
    image: "/photos/cycles.png",
    tags: ["3D Modeling", "Blender", "Environment Design"],
    type: "design",
  },
  {
    id: 13,
    title: "Clickster YouTuber Channel Thumbnail",
    category: "Graphic Design",
    description: "Iron Man Simulator Gameplay Thumbnail for a YouTube Video. Hits 200k Views",
    image: "/photos/5085Thumbnail.jpg",
    tags: ["YouTube Design", "Thumbnail Design", "Digital Art"],
    type: "design",
    projectUrl: "https://www.youtube.com/channel/UCscKnGM_aTTHJbt-fc_vfmg",
  },
  {
    id: 14,
    title: "Unreal Captain Tsubasa Render",
    category: "Graphic Design",
    description: "More Information about the render is not available",
    image: "/photos/birhgte121.png",
    tags: ["3D Rendering", "Character Design", "Photoshop"],
    type: "design",
  },
  {
    id: 15,
    title: "Fifa Card UI",
    category: "UI/UX Design",
    description: "More Information about the render is not available",
    image: "/photos/fifa.png",
    tags: ["Sports UI", "Card Design", "Game Interface"],
    type: "design",
  },
]

const categories = ["All", "Web Development", "UI/UX Design", "Graphic Design"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredItems = (
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)
  ).sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <div className="cosmic-bg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of our latest work out of the <span className="text-red-500"> 250</span> total services we
            provided in Graphic Design, UI/UX, and Web Development
          </p>
          <p className="text-ml mx-auto text-gray-500 max-w-3xl mt-4">
            We worked on Graphic Designs and Web Development for over <span className="text-blue-500">5 Years</span>{" "}
            {""}
            we worked with clients from all over the world, delivering high-quality work to developers, designers,
            business owners and more. {""}
            Our expertise has generated over 6 figures in revenue for all our clients combined, and contributed to over{" "}
            <span className="text-yellow-600">1 Billion</span> {""}
            visits and top scores in the respective KPI metrics. We are proud to work with amazing creators such as{" "}
            <span className="text-purple-500">Ayman</span>, <span className="text-cyan-500">Phoasen</span> and{" "}
            <span className="text-green-500">Clickster</span> and many more. {""}
            We are always looking for new challenges and opportunities to create stunning designs for you. Down below
            are some of our works out of the 250 total projects we successfully completed.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "cosmic-glow bg-gradient-to-r from-purple-600 to-cyan-600"
                  : "border-purple-500/50 text-white hover:bg-purple-500/10 bg-transparent"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className={`cosmic-card hover:cosmic-glow transition-all duration-300 group relative ${
                item.featured ? "ring-2 ring-purple-400/50 shadow-lg shadow-purple-500/25" : ""
              }`}
            >
              <CardContent className="p-0">
                {item.featured && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative">
                      <Badge className="bg-transparent border-2 border-transparent bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-purple-500/30 text-white font-semibold text-sm px-4 py-2 shadow-2xl backdrop-blur-sm">
                        <span className="relative z-10 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-bold">
                          Featured
                        </span>
                      </Badge>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md opacity-60 -z-10"></div>
                    </div>
                  </div>
                )}

                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={500}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs"
                    >
                      {item.category}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-3 text-sm">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-cyan-500/30 text-cyan-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {item.type === "website" && item.websiteUrl && (
                    <div className="flex justify-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/50 text-white hover:bg-purple-500/10 bg-transparent"
                        asChild
                      >
                        <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="mr-2" />
                          Visit Website
                        </a>
                      </Button>
                    </div>
                  )}

                  {item.type === "design" && item.projectUrl && (
                    <div className="flex justify-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white hover:bg-cyan-500/10 bg-transparent"
                        asChild
                      >
                        <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="mr-2" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="cosmic-card cosmic-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Like What You See?</h2>
              <p className="text-gray-300 mb-6">Let&apos;s discuss your next project and bring your vision to life</p>
              <Button
                asChild
                size="lg"
                className="cosmic-glow bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                <a href="/contact">Start a Project</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
