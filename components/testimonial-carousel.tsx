"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      quote:
        "Sigma Marketing Expert transformed our online presence. Their SEO strategies increased our organic traffic by 150% in just three months.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "The team at Sigma is incredibly knowledgeable and responsive. Their paid advertising campaigns delivered a 300% ROI for our e-commerce business.",
      author: "Michael Chen",
      position: "Marketing Director, ShopEasy",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "Working with Sigma Marketing has been a game-changer for our brand. Their social media strategies helped us build a loyal community around our products.",
      author: "Jessica Williams",
      position: "Founder, EcoLife Products",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full bg-black/50 border-white/10 hover:bg-black/70"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="overflow-hidden py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Card className="max-w-3xl bg-white/5 backdrop-blur-sm border-purple-500/20">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-purple-400 mb-4 opacity-50" />
                <p className="text-xl mb-8 text-gray-200 italic">"{testimonials[currentIndex].quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                    />
                    <AvatarFallback>
                      {testimonials[currentIndex].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-gray-400">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full bg-black/50 border-white/10 hover:bg-black/70"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrentIndex(index)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-purple-500" : "w-2 bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
