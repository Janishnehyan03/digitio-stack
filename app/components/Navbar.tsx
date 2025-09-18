"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
// Assuming you'll provide an actual logo for Digitio Stack

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
          ? "border-b border-gray-200 bg-white/70 backdrop-blur-xl shadow-sm" // CHANGE 2: Lighter border, white/70 background, and a subtle shadow
          : "border-b border-transparent bg-transparent"
      }`}
      aria-label="Primary"
    >
      {/* Subtle gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1]" // CHANGE 3: Reduced opacity for the glow
        style={{
          // CHANGE 4: Lighter gradient colors for background glow
          backgroundImage:
            "radial-gradient(600px 200px at 10% 0%, rgba(6,182,212,0.1), rgba(255,255,255,0)), radial-gradient(600px 200px at 90% 0%, rgba(13,148,136,0.08), rgba(255,255,255,0))",
        }}
      />

      <div className="container mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo */}
        {/* CHANGE 5: Updated Logo for light theme - removed text-white from DigitioStack, added optional Image component */}
        <Link
          href="/"
          className="relative z-10 select-none flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-0"
        >
          {/* OPTIONAL: Replace text logo with an actual image logo for better branding */}
          {/* If you have a square logo image, place it here */}
          {/* <Image
            src="/path/to/your-digitio-stack-logo.svg" // Replace with your logo path
            alt="Digitio Stack Logo"
            width={32} // Adjust as needed
            height={32} // Adjust as needed
            className="rounded-full" // Example styling for a circular logo
          /> */}
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 bg-clip-text text-transparent">
              Digitio
            </span>
            <span className="text-gray-900">Stack</span> {/* Darker text for "Stack" */}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // CHANGE 6: Nav links text color for light theme
              className="group relative rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60"
            >
              <span className="relative">
                {link.label}
                {/* Underline accent - colors remain good */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
          <Link
            href="#contact"
            // CHANGE 7: "Get a Quote" button styling. Keeps gradient, adjusts shadow for light theme.
            className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-teal-500/20 ring-1 ring-teal-500/40 transition-all hover:from-emerald-500/90 hover:to-teal-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60"
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
            // CHANGE 8: Mobile menu button color for light theme
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 outline-none transition hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-teal-400/60"
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
        {/* CHANGE 9: Mobile menu background for light theme */}
        <div className="bg-white/90 px-6 pb-6 pt-2 backdrop-blur-xl border-t border-gray-100"> {/* Added border-t */}
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                // CHANGE 10: Mobile link text color and hover for light theme
                className="group rounded-xl px-4 py-3 text-center text-base font-medium text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              // CHANGE 11: Mobile "Get a Quote" button styling.
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-center font-semibold text-white shadow-md shadow-teal-500/20 ring-1 ring-teal-500/40 transition-colors hover:from-emerald-500/90 hover:to-teal-500/90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]">
        {/* Scroll progress bar gradient remains excellent */}
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>
    </nav>
  )
}