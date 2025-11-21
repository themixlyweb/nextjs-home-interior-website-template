"use client"

import React, { useState, useRef } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Image from "next/image"
import heroImage from "../assets/images/hero-2.webp"
import secondaryImage from "../assets/images/hero-1.webp"
import { toast } from "react-toastify"
import { motion, useInView } from "framer-motion"
import "react-toastify/dist/ReactToastify.css"

interface StatData {
  number: string
  label: string
}

interface HeroProps {
  statsData?: StatData[]
  title?: string
  subtitle?: string
}

export const Hero: React.FC<HeroProps> = ({
  statsData = [
    { number: "25+", label: "Experience" },
    { number: "100+", label: "Projects" },
    { number: "100+", label: "Clients" },
  ],
  title = "The Home Interior of Your Dreams",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  const [mail, setMail] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!mail) {
      toast.error("Please enter your email", { position: "bottom-right", autoClose: 5000 })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(mail)) {
      toast.error("Please enter a valid email address", {
        position: "bottom-right",
        autoClose: 5000,
      })
      return
    }
    toast.success("Form submitted successfully! We will reach out to you soon.", {
      position: "bottom-right",
      autoClose: 5000,
    })
    setMail("")
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerParent = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  return (
    <section
      ref={ref}
      className="relative flex items-end justify-end bg-gradient-to-br from-[#53766F] to-[#2F3D46] overflow-visible"
    >
      <div className="container mx-auto px-4 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <motion.div
          className="grid items-end lg:grid-cols-2 lg:gap-5"
          variants={staggerParent}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div
            className="flex flex-col items-center space-y-6 xl:space-y-10 text-center lg:items-start lg:text-start"
            variants={fadeUp}
          >
            <motion.h1 variants={fadeUp} className="font-bold leading-tight text-white">
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-md md:text-lg leading-relaxed text-white md:text-base"
            >
              {subtitle}
            </motion.p>

            {/* Email Input with Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="w-full rounded-full bg-white p-1"
              variants={fadeUp}
            >
              <div className="flex items-center">
                <Input
                  type="email"
                  value={mail}
                  required
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="Email"
                  aria-label="Email Address"
                  className="flex-1 border-none bg-transparent text-lg text-gray-600 placeholder:text-gray-500 focus:ring-0"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    type="submit"
                    aria-label="Submit for Quote"
                    className="rounded-full bg-[#53766f] px-6 py-1 text-lg text-white hover:bg-[#53766f]/90"
                  >
                    Get a Quote
                  </Button>
                </motion.div>
              </div>
            </motion.form>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-16 py-6 justify-center"
              variants={staggerParent}
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left"
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.08,
                    transition: { type: "spring", stiffness: 250, damping: 20 },
                  }}
                >
                  <p className="text-3xl text-white md:text-4xl">{stat.number}</p>
                  <p className="text-white">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Images */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={fadeUp}
          >
            <motion.div
              className="relative z-10 flex items-center gap-2 -mb-20 sm:-mb-24 md:-mb-28 lg:-mb-20"
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* Main Tall Image */}
              <motion.div
                className="h-[350px] w-[200px] rounded-t-full border border-white p-[4px] sm:h-[420px] sm:w-[260px] md:h-[500px] md:w-[300px] lg:h-[580px] lg:w-[310px] lg:p-[6px] xl:h-[580px] xl:w-[350px]"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="h-full w-full rounded-t-full border border-white p-[4px] sm:p-[5px] lg:p-[6px]">
                  <div className="relative h-full w-full overflow-hidden rounded-t-full border border-white">
                    <motion.div
                      initial={{ scale: 1.05 }}
                      animate={isInView ? { scale: 1 } : { scale: 1.05 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                      <Image
                        src={heroImage}
                        alt="Interior design showcase"
                        fill
                        priority
                        className="rounded-t-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Image */}
              <motion.div
                className="h-[200px] w-[100px] rounded-full p-[4px] sm:h-[250px] sm:w-[130px] md:h-[310px] md:w-[160px] lg:h-[280px] lg:w-[140px] lg:p-[6px] xl:h-[280px] xl:w-[160px]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="relative -top-10 lg:-top-16 h-full w-full overflow-hidden">
                  <Image
                    src={secondaryImage}
                    alt="Interior design showcase"
                    fill
                    priority
                    className="rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Overlay Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#2F3D46] via-[#2F3D46]/60 to-transparent pointer-events-none" />
    </section>
  )
}
