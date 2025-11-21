"use client"

import React, { useRef } from "react"
import Image, { StaticImageData } from "next/image"
import Partner1 from "@/assets/images/clients.webp"
import Partner2 from "@/assets/images/clients.webp"
import Partner3 from "@/assets/images/clients.webp"
import { motion, useInView } from "framer-motion"

interface PartnersSectionItem {
  name: string
  logo?: string
  icon: string | StaticImageData
}

interface PartnersSectionProps {
  title?: string
  description?: string
  partners?: PartnersSectionItem[]
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  title = "Our Partners",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  partners = [
    { name: "Partner 1", icon: Partner1 },
    { name: "Partner 2", icon: Partner2 },
    { name: "Partner 3", icon: Partner3 },
  ],
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 }) // 🔁 Re-trigger animation on each view

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  return (
    <div ref={ref} className="container mx-auto">
      <motion.div
        className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Column */}
        <motion.div className="space-y-4" variants={fadeUp}>
          <motion.h2
            className="text-3xl font-bold text-[#2f3d46] md:text-4xl"
            variants={fadeUp}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-md max-w-md leading-relaxed text-[#2f3d46] xl:text-lg"
            variants={fadeUp}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Right Column - Partners Grid */}
        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 sm:gap-8 md:gap-10 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="rounded-fluid group flex items-center justify-center"
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                rotate: 1.5,
                transition: { type: "spring", stiffness: 250, damping: 18 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={partner.icon}
                  alt={`${partner.name} logo`}
                  width={240}
                  height={240}
                  className="max-h-full object-cover transition-transform duration-300 group-hover:scale-110 min-h-[200px] min-w-[200px]"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
