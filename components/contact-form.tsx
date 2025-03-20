"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ContactForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
    }

    setIsSubmitting(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="text-gray-400 cursor-pointer text-xs md:text-sm">CONTACT</span>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-gray-400 text-base md:text-lg">Contact Us</DialogTitle>
        </DialogHeader>
        {isSubmitted ? (
          <div className="text-center text-gray-400 py-3 md:py-4 text-sm md:text-base">
            Thank you for your message. We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800/50 border-gray-700 text-gray-300 text-sm md:text-base"
            />
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-gray-800/50 border-gray-700 text-gray-300 min-h-[80px] md:min-h-[100px] text-sm md:text-base"
            />
            <Button
              type="submit"
              className="w-full bg-[#8c8c8c] text-black hover:bg-[#737373] text-sm md:text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

