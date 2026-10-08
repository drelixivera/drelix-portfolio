import { motion } from "motion/react"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { useReducedMotion } from "../../hooks/useReducedMotion"
import { staggerContainer, riseIn, scaleIn } from "../../lib/motion"
import heroImage from "/daniel.jpg"

export function Hero() {
  const prefersReduced = useReducedMotion()

  // When user prefers reduced motion, skip animations entirely
  const animProps = prefersReduced
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" }

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: text */}
          <motion.div
            variants={staggerContainer}
            {...animProps}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <motion.div variants={riseIn}>
              <SectionLabel>frontend developer +  Automation</SectionLabel>
            </motion.div>

            <motion.h1
              variants={riseIn}
              className="font-display text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.9] tracking-tight mt-6"
            >
              Drelix
              <br />
              Ivera
            </motion.h1>

            <motion.p
              variants={riseIn}
              className="mt-8 text-lg md:text-xl text-text-muted max-w-md leading-relaxed"
            >
              I build fast, clean, considered web experiences & automations that solve specific problems —{" "}
              <span className="text-text">always learning, always shipping.</span>
            </motion.p>

            <motion.div
              variants={riseIn}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-accent text-accent-ink font-medium px-6 py-3 rounded-full hover:bg-accent-hover transition-colors"
              >
                View work
                <ArrowDown
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full hover:border-text transition-colors"
              >
                Get in touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            variants={scaleIn}
            {...animProps}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface">
              {/* Replace with your photo */}
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
                {/* Hero Image */}
              <img
                src={heroImage}
                alt="Drelix Ivera — frontend developer"
                loading="eager"
                className="w-full h-full object-cover"
              />

            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
          scroll
        </span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}