"use client"
import { useState } from "react"
import type React from "react"

import { Send } from "lucide-react"

export const ContactSection = () => {
  const [status, setStatus] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const name = data.get("name")?.toString()
    const email = data.get("email")?.toString()
    const message = data.get("message")?.toString()

    if (!name || !email || !message) {
      setStatus("Please fill all fields.")
      return
    }

    const whatsappMessage = `Hi, I'm ${name} (${email}).\n${message}`
    const whatsappURL = `https://wa.me/918086996655?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappURL, "_blank")
    setStatus("Redirecting to WhatsApp...")
    form.reset()
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 md:py-24"
      aria-label="Contact"
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(800px 400px at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(800px 400px at 50% 0%, black, transparent)",
        }}
      />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-44 -left-44 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <h2 className="mb-3 text-center text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
          Let{"'"}s Build Something{" "}
          <span className="bg-gradient-to-r from-teal-400 via-teal-600 to-teal-500 bg-clip-text text-transparent">
            Amazing
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-neutral-600 md:mb-12">
          Have a project in mind or just want to say hello? Send me a WhatsApp message directly!
        </p>

        {/* Form card */}
        <div className="mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl ring-1 ring-teal-500/10 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-800 shadow-inner outline-none transition-all placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/30"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-800 shadow-inner outline-none transition-all placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/30"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-800 shadow-inner outline-none transition-all placeholder:text-neutral-500 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/30"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="group relative mx-auto inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-8 py-3 font-semibold text-white shadow-lg shadow-teal-500/20 ring-1 ring-teal-500/30 transition-all hover:from-teal-500 hover:to-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60"
              >
                {/* Shimmer */}
                <span className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center">
                  Send via WhatsApp
                  <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
              <p className="mt-3 text-xs text-neutral-500">You’ll be redirected to WhatsApp to send the message.</p>
            </div>
          </form>

          {status && (
            <p
              role="status"
              aria-live="polite"
              className="mt-6 rounded-xl border border-neutral-200 bg-neutral-100 p-3 text-center text-sm text-neutral-600"
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}