import Image from "next/image"
import NewsletterForm from "@/components/newsletter-form"
import ContactForm from "@/components/contact-form"
import Countdown from "@/components/countdown"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-sacha-moreau-334685363-16933823.jpg-pVlwYW4KTaDPje1JiGdCYTGoEN98PB.jpeg"
          alt="Sunset countryside road"
          fill
          priority
          className="object-cover brightness-[0.8]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/50" />

      {/* Content Container */}
      <div className="relative z-20 flex min-h-screen w-full flex-col items-center justify-between px-4 py-4 md:px-8 md:py-6">
        {/* Section 1: Header with Logo */}
        <header className="w-full pt-2 md:pt-4">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <svg
              width="60"
              height="39"
              viewBox="0 0 80 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-3 md:mb-4 md:w-[80px] md:h-[52px]"
            >
              <path d="M0 52L40 0L80 52H0Z" fill="#8c8c8c" rx="4" />
              <path d="M0 52L40 17.3333L80 52H0Z" fill="#737373" />
              <path d="M0 52L40 34.6667L80 52H0Z" fill="#5c5c5c" />
            </svg>
            <div className="text-xl md:text-2xl font-bold text-[#8c8c8c]">HIGHBROW ENGINEERING</div>
          </div>
        </header>

        {/* Section 2: Main Content */}
        <div className="max-w-3xl text-center mt-8 md:mt-0">
          <div className="mb-4 md:mb-6 text-lg font-normal leading-snug sm:text-xl md:text-2xl lg:text-3xl text-gray-100">
            <span className="block mb-3 md:mb-4 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              AN AWESOME BIKE IS COMING
            </span>
            <p>
              The fastest upright bike ever made that can carry 60 liters of luggage. Frame and bags are designed as one
              integrated system.
            </p>

            <div className="mt-4 md:mt-6 flex justify-center">
              <div className="text-left inline-block pl-0">
                <p className="mb-2">➤ Superior aerodynamics</p>
                <p className="mb-2">➤ Zero bag rattling</p>
                <p className="mb-2">➤ Low center of gravity</p>
                <p className="mb-2">➤ Balanced front-rear weight distribution</p>
                <p className="mb-2">➤ Purpose-built handlebar enabling distinctly different hand and body positions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Countdown Timer */}
        <div className="text-3xl md:text-4xl font-light text-gray-300 mt-8 md:mt-0">
          <Countdown />
        </div>

        {/* Section 4: Newsletter and Contact */}
        <div className="w-full max-w-md space-y-3 md:space-y-4 pb-2 md:pb-4 mt-8 md:mt-0">
          <NewsletterForm />
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}

