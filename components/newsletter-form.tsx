"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Failed to submit form")
      }
    } catch (error) {
      console.error(error)
    }

    setIsLoading(false)
    setEmail("")
  }

  return (
    <div className="w-full p-4 md:p-6 backdrop-blur-sm bg-transparent">
      <h2 className="mb-1 text-center text-lg md:text-xl font-semibold text-gray-400">Stay Updated</h2>
      {isSubmitted ? (
        <div className="rounded-md p-3 md:p-4 text-center text-emerald-400 font-medium">
          Thank you for subscribing! We&apos;ll keep you updated on our launch.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div className="space-y-2">
            <p className="text-xs md:text-sm text-gray-400 text-center">
              Sign up to receive updates about our launch (the above countdown is based on my current launch estimate)
            </p>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-gray-700 bg-[#8c8c8c] bg-opacity-20 text-gray-300 placeholder:text-gray-500 text-sm md:text-base"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#8c8c8c] text-black hover:bg-[#737373] text-sm md:text-base"
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
    </div>
  )
}

