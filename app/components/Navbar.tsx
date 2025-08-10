"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setHasScrolled(scrolled)

      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      setProgress(Math.min(100, Math.max(0, pct)))
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#developer-info", label: "Developer Info" },
    { href: "#technologies", label: "Technologies" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      role="navigation"
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled
          ? "border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      aria-label="Primary"
    >
      {/* Subtle gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(600px 200px at 10% 0%, rgba(16,185,129,0.25), rgba(0,0,0,0)), radial-gradient(600px 200px at 90% 0%, rgba(45,212,191,0.2), rgba(0,0,0,0))",
        }}
      />

      <div className="container mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 select-none text-2xl font-extrabold tracking-tight text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-0"
        >
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
            Digitio
          </span>
          <span className="text-white">Stack</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-xl px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            >
              <span className="relative">
                {link.label}
                {/* Underline accent */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30 transition-all hover:from-emerald-500/90 hover:to-teal-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white outline-none transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ${
          isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-neutral-950/90 px-6 pb-6 pt-2 backdrop-blur-xl">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group rounded-xl px-4 py-3 text-center text-base font-medium text-neutral-300 transition-colors hover:bg-emerald-500/10 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-center font-semibold text-white shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30 transition-colors hover:from-emerald-500/90 hover:to-teal-500/90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>
    </nav>
  )
}
