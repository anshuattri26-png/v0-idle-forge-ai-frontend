"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Hexagon, Upload, CheckCircle2 } from "lucide-react"

export default function AuthPage() {
  const [step, setStep] = useState(1) // 1: Auth, 2: Creator Type, 3: KYC
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
    }, 1000)
  }

  const handleCreatorType = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 bg-muted/20">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Hexagon className="h-10 w-10 text-primary fill-primary/20" />
            <span className="text-2xl font-bold tracking-tight">Idle-Forge AI</span>
          </div>
        </div>

        {step === 1 && (
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="login">Log In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome back</CardTitle>
                  <CardDescription>Enter your credentials to access your account.</CardDescription>
                </CardHeader>
                <form>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="text-xs text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="password" type="password" required />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Log In</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>Start your journey with Idle-Forge today.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSignup}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input id="signup-email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input id="signup-password" type="password" required />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Continue"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        {step === 2 && (
          <Card className="animate-in fade-in slide-in-from-bottom-4">
            <CardHeader>
              <CardTitle>What kind of creator are you?</CardTitle>
              <CardDescription>We'll personalize your studio recommendations.</CardDescription>
            </CardHeader>
            <form onSubmit={handleCreatorType}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Primary Content Type</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reels">Short Form (Reels/TikTok)</SelectItem>
                      <SelectItem value="podcast">Podcast / Audio</SelectItem>
                      <SelectItem value="course">Course / Education</SelectItem>
                      <SelectItem value="music">Music Production</SelectItem>
                      <SelectItem value="stream">Live Streaming</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Experience Level</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button type="button" variant="outline" className="text-xs bg-transparent">
                      Beginner
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="text-xs border-primary bg-primary/5 text-primary"
                    >
                      Intermediate
                    </Button>
                    <Button type="button" variant="outline" className="text-xs bg-transparent">
                      Pro
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit">Next Step</Button>
              </CardFooter>
            </form>
          </Card>
        )}

        {step === 3 && (
          <Card className="animate-in fade-in slide-in-from-bottom-4">
            <CardHeader>
              <CardTitle>Verify Identity (KYC)</CardTitle>
              <CardDescription>Upload a government ID or College ID to unlock studios.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium mb-1">Upload ID Card</h3>
                <p className="text-sm text-muted-foreground">PNG, JPG or PDF up to 5MB</p>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <p>Your data is encrypted and only used for verification.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" onClick={() => setStep(2)}>
                Back
              </Button>
              <Link href="/profile">
                <Button className="w-full ml-2">Submit & Finish</Button>
              </Link>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
