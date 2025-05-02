"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Clock, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function BookingCalendar() {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const handleNextStep = () => {
    if (step === 1 && date) {
      setStep(2)
    } else if (step === 2 && timeSlot) {
      setStep(3)
    } else if (step === 3) {
      setSubmitted(true)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {!submitted ? (
        <div className="space-y-6">
          <div className="flex justify-between mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= i ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-gray-700"
                  }`}
                >
                  {i}
                </div>
                <span className="text-sm mt-2 text-gray-400">{i === 1 ? "Date" : i === 2 ? "Time" : "Details"}</span>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5 text-purple-400" />
                  Select a Date
                </h3>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border border-purple-500/20 bg-black/50"
                  disabled={(date) => {
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    return date < today || date.getDay() === 0 || date.getDay() === 6
                  }}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-purple-400" />
                  Select a Time Slot
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={timeSlot === time ? "default" : "outline"}
                      className={
                        timeSlot === time
                          ? "bg-gradient-to-r from-purple-600 to-blue-600"
                          : "border-purple-500/20 hover:bg-purple-950/50"
                      }
                      onClick={() => setTimeSlot(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-4">Your Information</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required className="bg-white/5 border-purple-500/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required className="bg-white/5 border-purple-500/20" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-white/5 border-purple-500/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" placeholder="(555) 123-4567" className="bg-white/5 border-purple-500/20" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input id="company" placeholder="Acme Inc." className="bg-white/5 border-purple-500/20" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What would you like to discuss?</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your marketing goals..."
                      className="bg-white/5 border-purple-500/20"
                    />
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button variant="outline" onClick={handlePrevStep} className="border-white/20 hover:bg-white/10">
                Back
              </Button>
            ) : (
              <div></div>
            )}

            <Button
              onClick={handleNextStep}
              disabled={(step === 1 && !date) || (step === 2 && !timeSlot)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {step === 3 ? "Book Consultation" : "Next"}
            </Button>
          </div>
        </div>
      ) : (
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Booking Confirmed!</h3>
          <p className="text-gray-300 mb-6">
            Your consultation has been scheduled for {date?.toLocaleDateString()} at {timeSlot}. We've sent a
            confirmation email with all the details.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <a href="/">Return to Homepage</a>
          </Button>
        </motion.div>
      )}
    </div>
  )
}
