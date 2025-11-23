import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RoomCard } from "@/components/room-card"
import { Filter, Map, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function StudiosPage() {
  // Mock data
  const rooms = [
    {
      id: "1",
      title: "Neon Podcaster Suite",
      location: "Koramangala, Bangalore",
      price: 800,
      rating: 4.8,
      image: "/podcast-studio-neon-lighting.jpg",
      type: "Podcast",
      features: ["4x Shure SM7B", "4K Cams", "Soundproof"],
      instantUnlock: true,
    },
    {
      id: "2",
      title: "Daylight Reels Studio",
      location: "Indiranagar, Bangalore",
      price: 1200,
      rating: 4.9,
      image: "/bright-minimal-studio-aesthetic.jpg",
      type: "Video",
      features: ["RGB Lights", "Green Screen", "Gimbal"],
      instantUnlock: true,
    },
    {
      id: "3",
      title: "Music Production Hub",
      location: "Bandra West, Mumbai",
      price: 1500,
      rating: 4.7,
      image: "/music-recording-studio-dark.jpg",
      type: "Music",
      features: ["Vocal Booth", "Logic Pro X", "Monitors"],
      instantUnlock: false,
    },
    {
      id: "4",
      title: "Minimalist Creator Space",
      location: "HSR Layout, Bangalore",
      price: 600,
      rating: 4.5,
      image: "/minimalist-living-room-studio.jpg",
      type: "Lifestyle",
      features: ["Natural Light", "Props", "Changing Room"],
      instantUnlock: true,
    },
    {
      id: "5",
      title: "The Green Room",
      location: "Andheri, Mumbai",
      price: 950,
      rating: 4.6,
      image: "/green-screen-studio-professional.jpg",
      type: "Video",
      features: ["Chroma Key", "Teleprompter", "Lighting Grid"],
      instantUnlock: true,
    },
    {
      id: "6",
      title: "Tech Review Desk",
      location: "Whitefield, Bangalore",
      price: 500,
      rating: 4.4,
      image: "/tech-setup-youtube-studio.jpg",
      type: "Tech",
      features: ["Overhead Rig", "Product Turntable", "Macro Lens"],
      instantUnlock: true,
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 max-w-screen-2xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Find a Studio</h1>
          <p className="text-muted-foreground">Book professional spaces near you instantly.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Map className="w-4 h-4" /> Map View
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="w-4 h-4" /> Filters
          </Button>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center bg-card p-4 rounded-xl border border-border">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search by location, gear, or vibe..." className="pl-9 bg-background border-border/50" />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <Badge
            variant="secondary"
            className="px-4 py-2 cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors"
          >
            Podcast
          </Badge>
          <Badge
            variant="secondary"
            className="px-4 py-2 cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors"
          >
            Video
          </Badge>
          <Badge
            variant="secondary"
            className="px-4 py-2 cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors"
          >
            Music
          </Badge>
          <Badge
            variant="secondary"
            className="px-4 py-2 cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors"
          >
            Photography
          </Badge>
        </div>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </div>
  )
}
