"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blogs", href: "/blogs" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
          <div
          className={`font-bold text-xl md:text-2xl 2xl:text-3xl  transition-all duration-500 ${
            scrolled
              ? "bg-gradient-to-r from-[#2f3d46] to-[#53766f] bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          Livique
        </div>

            {/* Desktop Nav */}
            <div className="hidden items-center md:flex" style={{ gap: "clamp(1rem, 2vw, 4rem)" }}>
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-xl transition-colors sm:text-xl md:text-lg"
                  style={{
                    color: scrolled ? "#000" : "#fff",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact-us">
                <Button
                  className={`rounded-full transition-colors sm:text-xl md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl 5xl:text-2xl`}
                  style={{
                    backgroundColor: scrolled ? "#53766f" : "#879F9A",
                    color: "#fff",
                  }}
                >
                  Contact us
                </Button>
              </Link>
            </div>

            {/* Mobile / Tablet */}
            <div className="flex items-center space-x-3 md:hidden">
              <Link href="/contact-us">
                <Button
                  className="rounded-full transition-colors sm:text-xl md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl 5xl:text-2xl"
                  style={{
                    backgroundColor: scrolled ? "#53766f" : "#879F9A",
                    color: "#fff",
                  }}
                >
                  Contact us
                </Button>
              </Link>
              <button
                className="rounded-md py-2 ps-2 hover:bg-white/10"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open Menu"
                aria-expanded={sidebarOpen ? "true" : "false"}
                aria-controls="sidebar-menu"
              >
                <Menu className={`h-6 w-6 ${scrolled ? "text-black" : "text-white"}`} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar-menu"
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-6 py-5">
        <div
          className={`font-bold text-xl md:text-2xl 2xl:text-3xl  transition-all duration-500 bg-gradient-to-r from-[#2f3d46] to-[#53766f] bg-clip-text text-transparent ${"bg-gradient-to-r from-[#2f3d46] to-[#53766f] bg-clip-text text-transparent"}`}
        >
          Livique
        </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-md p-2 hover:bg-gray-100"
            aria-label="Close Menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6 py-6">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="text-gray-700 transition-colors hover:text-[#53766f]"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact-us">
            <Button
              className="mt-4 rounded-full bg-[#53766f] px-6 py-2 text-white hover:bg-[#879F9A] sm:text-xl md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl 5xl:text-2xl"
              onClick={() => setSidebarOpen(false)}
            >
              Contact us
            </Button>
          </Link>
        </nav>
      </aside>
    </>
  )
}
