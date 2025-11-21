"use client"
import { Hero } from "@/components/Hero"
import { PartnersSection } from "@/components/PartnersSection"
import { AboutCarousal } from "@/components/AboutCarousal"
import ThumbnailImage1 from "@/assets/images/about-us-1.webp"
import ThumbnailImage2 from "@/assets/images/about-us-2.webp"
import ThumbnailImage3 from "@/assets/images/about-us-3.webp"

export default function Home() {
  return (
    <main>
      <div className="min-h-screen w-full bg-white">
        <Hero />
        <section className="py-32">
          <PartnersSection />
        </section>
        <section className="pb-32">
          <AboutCarousal
            title="About Us"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In alias recusandae esse, quasi veniam ipsum distinctio laboriosam magni, molestias illum a non repudiandae hic deserunt debitis culpa dolorem. Obcaecati eligendi possimus in vitae, voluptatum suscipit commodi corporis reiciendis inventore consequuntur animi accusantium cumque facere. Fuga doloribus molestias amet minus ullam, tempora, quae dignissimos illo hic veritatis vero quidem in similique. Quasi eligendi et quisquam placeat, ipsam totam sit nisi inventore, perferendis tempora error officia? Fuga, neque quod!."
            description2=""
            thumbnailImages={[ThumbnailImage1, ThumbnailImage2, ThumbnailImage3]}
            buttonText="Know More"
          />
        </section>
      </div>
    </main>
  )
}
