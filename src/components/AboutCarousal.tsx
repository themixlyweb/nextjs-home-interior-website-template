"use client"

import React, { useState, useRef } from "react"
import { Button } from "./ui/button"
import Image, { StaticImageData } from "next/image"
import { motion, useInView } from "framer-motion"

export interface AboutCarousalProps {
  title: string
  description: string
  description2?: string
  thumbnailImages: (string | StaticImageData)[]
  buttonText?: string
}

export const AboutCarousal: React.FC<AboutCarousalProps> = ({
  title,
  description,
  description2 = "",
  thumbnailImages,
  buttonText,
}) => {
  const [currentImage, setCurrentImage] = useState<string | StaticImageData>(thumbnailImages[0])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 }) // 🔁 re-trigger every time it comes into view

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  return (
    <div ref={ref} className="container rounded-xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="rounded-xl bg-gradient-to-br from-[#2f3d46] to-[#53766f] px-4 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="3xl:gap-20 4xl:gap-24 5xl:gap-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-14 2xl:gap-16">
          {/* Left - Main Image + Thumbnails */}
          <motion.div
            className="flex flex-col items-center gap-6 lg:mb-0"
            variants={staggerContainer}
          >
            {/* Main Image */}
            <motion.div
              className="relative -ml-[calc((40px+(100vw-100%)/2))] w-full md:-ml-[calc((80px+(100vw-100%)/2))] lg:w-[calc(530px+((100vw-100%)/2))]"
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="3xl:h-[440px] 4xl:h-[500px] 5xl:h-[580px] h-[220px] overflow-hidden rounded-r-full border border-white p-[4px] sm:h-[260px] md:h-[300px] lg:h-[330px] 2xl:h-[380px]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="h-full w-full rounded-r-full border border-white p-[4px]">
                  <div className="relative h-full w-full overflow-hidden rounded-r-full border border-white">
                    <motion.div
                      key={String(currentImage)} // triggers transition on image change
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={currentImage}
                        alt="About us main"
                        fill
                        className="rounded-r-full object-cover transition-opacity duration-300"
                        style={{ objectPosition: "center" }}
                        priority
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Thumbnails */}
            <motion.div
              className="flex w-full justify-center gap-2 lg:gap-4 xl:gap-0 gap-1overflow-x-auto py-5 sm:py-6 md:py-7 lg:grid lg:grid-cols-3 lg:overflow-visible lg:py-0"
              variants={staggerContainer}
            >
              {thumbnailImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ scale: 1.08, rotate: 1.5 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={112}
                    height={80}
                    className={`h-16 w-20 flex-shrink-0 cursor-pointer rounded-lg object-cover shadow-md transition-transform sm:h-20 sm:w-24 md:h-24 md:w-32 lg:h-28 lg:w-32 xl:h-28 xl:w-40 ${
                      currentImage === image ? "ring-2 ring-white" : ""
                    }`}
                    onClick={() => setCurrentImage(image)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="space-y-6 text-center text-white lg:text-left 2xl:space-y-4"
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-white">
              {title}
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white">
              {description}
            </motion.p>

            {description2 && (
              <motion.p variants={fadeUp} className="text-white">
                {description2}
              </motion.p>
            )}

            {buttonText && (
              <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button className="rounded-full bg-[#879f9a] px-6 py-2 text-sm text-white hover:bg-[#879f9a]/90 sm:px-8 sm:py-3 md:px-10 md:py-4 md:text-lg lg:px-10 lg:py-5 2xl:py-6">
                  {buttonText}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
