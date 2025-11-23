"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Loader2 } from "lucide-react"

interface BookingModalProps {
  roomPrice: number
  roomTitle: string
}

export function BookingModal({ roomPrice, roomTitle }: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleBooking = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <Dialog open={true} onOpenChange={(open) => !open && setIsSuccess(false)}>
        <DialogTrigger asChild>
          <Button size="lg" className="w-full text-lg">
            Book Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] text-center">
          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
            </div>
            <DialogTitle className="text-2xl">Booking Confirmed!</DialogTitle>
            <DialogDescription>
              Your slot for {roomTitle} is locked. You will receive the cabinet unlock code 15 minutes before your
              session.
            </DialogDescription>
            <Button className="w-full mt-4" onClick={() => (window.location.href = "/profile")}>
              View My Bookings
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full text-lg font-bold">
          Book for ₹{roomPrice}/hr
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book {roomTitle}</DialogTitle>
          <DialogDescription>Select your preferred date and time slot.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-2 block">Select Date</Label>
              <div className="border rounded-md p-1 bg-card/50">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-0"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block">Duration</Label>
                <Select defaultValue="2">
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Hour</SelectItem>
                    <SelectItem value="2">2 Hours</SelectItem>
                    <SelectItem value="4">4 Hours (Half Day)</SelectItem>
                    <SelectItem value="8">8 Hours (Full Day)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 block">Start Time</Label>
                <Select onValueChange={setTimeSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="14:00">02:00 PM</SelectItem>
                    <SelectItem value="16:00">04:00 PM</SelectItem>
                    <SelectItem value="19:00">07:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Label className="mb-2 block">Payment Summary</Label>
                <div className="bg-muted/50 p-3 rounded-md space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Rate (2 hrs)</span>
                    <span>₹{roomPrice * 2}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Service Fee</span>
                    <span>₹50</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Insurance (Micro)</span>
                    <span>₹20</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold text-primary text-base">
                    <span>Total</span>
                    <span>₹{roomPrice * 2 + 70}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => {}}>
            Cancel
          </Button>
          <Button onClick={handleBooking} disabled={!date || !timeSlot || isProcessing}>
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Pay & Confirm"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
