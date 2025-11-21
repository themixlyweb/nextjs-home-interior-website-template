"use client"

import * as React from "react"
import { ThemeProvider } from "@/components/custom/theme-provider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
