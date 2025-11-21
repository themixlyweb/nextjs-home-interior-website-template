"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import FoterBg from "@/assets/images/footer-bg.webp"

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  companyName?: string
  companyDescription?: string
  navigationLinks?: FooterLink[]
  quickLinks?: FooterLink[]
  backgroundImage?: string
  mapEmbedUrl?: string
  copyrightText?: string
  privacyText?: string
}

export const Footer: React.FC<FooterProps> = ({
  companyName = "Company Name",
  companyDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Projects", href: "/projects" },
    { label: "Contact us", href: "/contact-us" },
  ],
  quickLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Projects", href: "/projects" },
    { label: "Contact us", href: "/contact-us" },
  ],
  backgroundImage = FoterBg,
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24114.6543!2d-73.9855!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ0JzU0LjMiTiA3M8KwNTknMDYuMiJX!5e0!3m2!1sen!2sus!4v1690234567890",
  copyrightText = "© 2025 All rights reserved.",
  privacyText = "Privacy Policy",
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 }) // 🔁 Re-triggers when re-entering view

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerParent = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  return (
    <motion.footer
      ref={ref}
      className="relative overflow-hidden text-white"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerParent}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Top Section */}
      <div className="container relative z-10 mx-auto px-4 py-14 lg:py-16">
        <motion.div
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerParent}
        >
          {/* Company Info */}
          <motion.div className="relative space-y-4 lg:top-28" variants={fadeUp}>
            <h3 className="font-bold text-white">{companyName}</h3>
            <p className="leading-relaxed text-white opacity-90">{companyDescription}</p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-4 font-bold">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="transition-colors hover:text-[#879f9a]"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-4 font-bold">Quick links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="transition-colors hover:text-[#879f9a]"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeUp}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <iframe
              title="Company Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%)" }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="relative z-10 border-t border-white/10 bg-[#2d3e46] py-4"
        variants={fadeUp}
      >
        <motion.div
          className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row"
          variants={staggerParent}
        >
          <motion.span variants={fadeUp}>{copyrightText}</motion.span>
          <motion.a
            href="#"
            className="transition-colors hover:text-[#879f9a]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            {privacyText}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}
