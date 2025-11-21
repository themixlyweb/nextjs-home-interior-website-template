import "./globals.css"
import Providers from "@/components/custom/providers"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ToastContainer } from "react-toastify"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta Tags for SEO and Open Graph */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Livique – React & Next.js Template for Home Décor, Interior Design & Lifestyle Brands
        </title>
        <meta
          name="description"
          content="A Morden React & Next.js template for home décor, interior design agencies, and lifestyle brands — minimal design, fast performance, responsive layout, and Tailwind CSS powered."
        />
        <link
          rel="canonical"
          href="https://themixly.com/preview/2200/livique-minimal-home-lifestyle-interior-theme/"
        />

        <meta name="author" content="Livique" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Livique" />
        <meta
          property="og:title"
          content="Livique – React & Next.js Template for Home Décor, Interior Design & Lifestyle Brands"
        />
        <meta
          property="og:description"
          content="A Morden React & Next.js template for home décor, interior design agencies, and lifestyle brands — minimal design, fast performance, responsive layout, and Tailwind CSS powered."
        />
        <meta
          property="og:url"
          content="https://themixly.com/preview/2200/livique-minimal-home-lifestyle-interior-theme/"
        />
        <meta
          property="og:image"
          content="https://themixly.com/wp-content/uploads/2025/10/Artboard-3-1-scaled.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Livique – React & Next.js Template for Home Décor, Interior Design & Lifestyle Brands"
        />
        <meta
          name="twitter:description"
          content="A Morden React & Next.js template for home décor, interior design agencies, and lifestyle brands — minimal design, fast performance, responsive layout, and Tailwind CSS powered."
        />
        <meta
          name="twitter:url"
          content="https://themixly.com/preview/2200/livique-minimal-home-lifestyle-interior-theme/"
        />
        <meta
          name="twitter:image"
          content="https://themixly.com/wp-content/uploads/2025/10/Artboard-3-1-scaled.jpg"
        />

        {/* Preconnect Links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Stylesheets */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  )
}
