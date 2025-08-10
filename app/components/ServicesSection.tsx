import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa"

const servicesData = [
  {
    icon: <FaCode className="h-12 w-12 text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]" />,
    title: "Full-Stack Development",
    description:
      "Crafting robust and scalable web applications from front to back-end with modern frameworks like Next.js and Node.js.",
  },
  {
    icon: <FaPaintBrush className="h-12 w-12 text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user interfaces that provide an exceptional user experience, focusing on usability and aesthetics.",
  },
  {
    icon: <FaRocket className="h-12 w-12 text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]" />,
    title: "Deployment & SEO",
    description:
      "Optimizing and deploying your applications for performance and visibility, ensuring a fast, secure, and search-engine-friendly final product.",
  },
]

export const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-20 md:py-24" aria-label="Services">
      {/* Background: subtle radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -right-28 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-28 h-[28rem] w-[28rem] rounded-full bg-teal-500/10 blur-3xl"
          aria-hidden="true"
        />
        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(700px 350px at 50% 0%, black, transparent)",
            WebkitMaskImage: "radial-gradient(700px 350px at 50% 0%, black, transparent)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <h2 className="mb-14 text-center text-4xl font-extrabold tracking-tight text-white md:mb-16 md:text-5xl">
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
            What I Offer
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 shadow-xl ring-1 ring-emerald-500/10 backdrop-blur transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-emerald-500/10"
            >
              {/* Gradient ring accent */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -inset-px rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.15),rgba(0,0,0,0)_30%,rgba(45,212,191,0.15),rgba(0,0,0,0)_70%,rgba(16,185,129,0.15))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Icon */}
              <div className="relative mx-auto mb-6 grid h-24 w-24 place-items-center rounded-2xl bg-neutral-950 ring-1 ring-inset ring-emerald-500/20 shadow-inner">
                {/* soft glow */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent)] blur-sm" />
                <div className="relative">{service.icon}</div>
              </div>

              <h3 className="mb-3 text-center text-xl font-semibold tracking-tight text-white md:text-2xl">
                <span className="transition-colors duration-300 group-hover:text-emerald-400">{service.title}</span>
              </h3>
              <p className="mx-auto text-center text-base leading-relaxed text-neutral-400">{service.description}</p>

              {/* bottom divider + meta */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
              <div className="mt-3 text-center text-sm text-neutral-500">Quality • Usability • Performance</div>

              {/* hover glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
