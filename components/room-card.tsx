import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Lock } from "lucide-react"

interface RoomCardProps {
  id: string
  title: string
  location: string
  price: number
  rating: number
  image: string
  type: string
  features: string[]
  instantUnlock?: boolean
}

export function RoomCard({ id, title, location, price, rating, image, type, features, instantUnlock }: RoomCardProps) {
  return (
    <Card className="overflow-hidden group flex flex-col h-full border-border bg-card hover:border-primary/50 transition-all">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {instantUnlock && (
            <Badge className="bg-green-500/90 hover:bg-green-500 text-white border-none backdrop-blur-sm">
              <Lock className="w-3 h-3 mr-1" /> Instant Unlock
            </Badge>
          )}
          <Badge variant="secondary" className="backdrop-blur-md bg-background/60">
            {type}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg leading-tight mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {location}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <Star className="w-3 h-3 fill-primary text-primary" />
            {rating}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-1">
        <div className="flex flex-wrap gap-1 mb-3">
          {features.slice(0, 3).map((feature, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              {feature}
            </span>
          ))}
          {features.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              +{features.length - 3}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between border-t border-border/50 mt-auto pt-4">
        <div>
          <span className="text-xl font-bold text-primary">₹{price}</span>
          <span className="text-xs text-muted-foreground">/hour</span>
        </div>
        <Link href={`/rooms/${id}`}>
          <Button size="sm">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
