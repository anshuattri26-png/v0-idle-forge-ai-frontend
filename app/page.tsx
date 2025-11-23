import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mic, Video, Music, MonitorPlay, ShieldCheck, Clock, Zap, Hexagon } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10"></div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <Badge variant="outline" className="px-4 py-1 rounded-full text-primary border-primary/30 bg-primary/10">
              Now Live in Mumbai & Bangalore
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground max-w-4xl">
              Create at the Speed of <span className="text-primary">Inspiration</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              The fastest way to book professional studios for Reels, Podcasts, and Courses. Unlock smart studios
              instantly with your phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link href="/studios">
                <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                  Book a Studio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-12 px-8 bg-transparent">
                  How it Works
                </Button>
              </Link>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Verified Spaces</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Instant Unlock</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>24/7 Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-card/50 border-y border-border/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to create</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional grade equipment and acoustically treated spaces, accessible on demand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Video className="h-8 w-8 text-primary" />}
              title="Content Studios"
              description="Perfect lighting and backdrops for Reels, Shorts, and TikToks."
            />
            <FeatureCard
              icon={<Mic className="h-8 w-8 text-primary" />}
              title="Podcast Suites"
              description="Professional mics, soundproofing, and 4K camera setups."
            />
            <FeatureCard
              icon={<MonitorPlay className="h-8 w-8 text-primary" />}
              title="Course Recording"
              description="Teleprompters, smart boards, and distraction-free environments."
            />
            <FeatureCard
              icon={<Music className="h-8 w-8 text-primary" />}
              title="Music Production"
              description="Sound-treated rooms with monitors and recording interfaces."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none"></div>
            <div className="flex flex-col md:flex-row items-center p-8 md:p-16 gap-8 md:gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to start creating?</h2>
                <p className="text-muted-foreground text-lg">
                  Join thousands of creators who use Idle-Forge to produce high-quality content without the overhead.
                </p>
                <div className="flex gap-4">
                  <Link href="/signup">
                    <Button size="lg">Get Started Free</Button>
                  </Link>
                  <Link href="/studios">
                    <Button size="lg" variant="secondary">
                      View Locations
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                {/* Abstract visual representation */}
                <div className="relative w-full max-w-sm aspect-square rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center animate-pulse">
                    <Hexagon className="w-20 h-20 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-background border-border hover:border-primary/50 transition-colors group">
      <CardHeader>
        <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
