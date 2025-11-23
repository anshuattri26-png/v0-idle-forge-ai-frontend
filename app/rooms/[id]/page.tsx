import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { BookingModal } from "@/components/booking-modal"
import { Star, MapPin, ShieldCheck, Wifi, MonitorPlay, Mic, Lock, Info } from "lucide-react"

// Mock data fetcher
const getRoom = (id: string) => {
  return {
    id,
    title: "Neon Podcaster Suite",
    location: "Koramangala, Bangalore",
    address: "4th Block, near Sony Signal, Koramangala, Bangalore - 560034",
    price: 800,
    rating: 4.8,
    reviews: 124,
    images: [
      "/podcast-studio-neon-lighting.jpg",
      "/placeholder.svg?height=400&width=600&text=Studio+View+2",
      "/placeholder.svg?height=400&width=600&text=Equipment",
    ],
    type: "Podcast",
    description:
      "A fully soundproofed podcast haven designed for up to 4 people. Equipped with industry-standard Shure microphones and 4K cameras for video podcasts. Features customizable RGB lighting to match your brand vibe.",
    features: ["Soundproof", "4K Video Recording", "RGB Mood Lights", "High-Speed WiFi", "Air Conditioned"],
    equipment: [
      "4x Shure SM7B Microphones",
      "RodeCaster Pro II Console",
      "3x Sony A7IV Cameras",
      "Aputure Lighting Kit",
      "55-inch 4K Monitor",
    ],
    rules: [
      "No smoking inside the studio",
      "No food or drinks near equipment",
      "Please reset lighting to default before leaving",
      "Max occupancy: 5 people",
    ],
  }
}

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const room = getRoom(id)

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Image Grid */}
      <div className="h-[40vh] md:h-[60vh] w-full relative grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="relative h-full w-full">
          <Image src={room.images[0] || "/placeholder.svg"} alt={room.title} fill className="object-cover" priority />
        </div>
        <div className="hidden md:grid grid-rows-2 gap-1">
          <div className="relative h-full w-full">
            <Image src={room.images[1] || "/placeholder.svg"} alt="Studio Detail" fill className="object-cover" />
          </div>
          <div className="relative h-full w-full">
            <Image src={room.images[2] || "/placeholder.svg"} alt="Equipment" fill className="object-cover" />
            <Button variant="secondary" className="absolute bottom-4 right-4 z-10">
              View all photos
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto -mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{room.type}</Badge>
                      <Badge variant="outline" className="text-green-500 border-green-500/50 bg-green-500/10">
                        <ShieldCheck className="w-3 h-3 mr-1" /> Verified Owner
                      </Badge>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{room.title}</h1>
                    <div className="flex items-center text-muted-foreground gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {room.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" /> {room.rating} ({room.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="mb-4 w-full justify-start overflow-x-auto">
                    <TabsTrigger value="about">About Space</TabsTrigger>
                    <TabsTrigger value="gear">Gear Cabinet</TabsTrigger>
                    <TabsTrigger value="rules">House Rules</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{room.description}</p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Wifi className="w-5 h-5 text-primary" />
                        <span>Fast WiFi</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Lock className="w-5 h-5 text-primary" />
                        <span>Smart Lock</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <MonitorPlay className="w-5 h-5 text-primary" />
                        <span>4K Monitors</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Mic className="w-5 h-5 text-primary" />
                        <span>Sound Treated</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="gear">
                    <div className="border rounded-xl p-6 bg-card/50">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Lock className="w-4 h-4 text-primary" />
                        Locked in Smart Cabinet
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {room.equipment.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 p-4 bg-primary/10 rounded-lg text-sm flex gap-3">
                        <Info className="w-5 h-5 text-primary shrink-0" />
                        <p>
                          Cabinet automatically unlocks via the app 5 minutes before your booking starts. Items are
                          tracked via RFID.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="rules">
                    <ul className="space-y-3">
                      {room.rules.map((rule, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="font-bold text-primary">{i + 1}.</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar / Booking Widget */}
          <div className="lg:w-[380px] shrink-0">
            <div className="sticky top-24 space-y-4">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">₹{room.price}</span>
                      <span className="text-muted-foreground">/hour</span>
                    </div>
                    <Badge variant="outline" className="text-green-500 border-green-500 bg-green-500/5">
                      Available Now
                    </Badge>
                  </div>

                  <BookingModal roomPrice={room.price} roomTitle={room.title} />

                  <div className="text-xs text-center text-muted-foreground">
                    You won't be charged until you confirm the booking.
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 border-dashed">
                <CardContent className="p-4 flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm">Micro-Insurance Included</h4>
                    <p className="text-xs text-muted-foreground">
                      Every booking is insured against accidental equipment damage up to ₹50,000.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
