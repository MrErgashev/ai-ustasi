import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import "@fontsource-variable/inter"
import "@fontsource-variable/lora"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Ustasi — Sun'iy Intellekt O'quv Platformasi",
  description:
    "O'zbek tilida birinchi to'liq interaktiv AI o'quv platformasi. 30 dars, 5 modul, bepul.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="uz"
      className={`${GeistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="flex min-h-screen flex-col">{children}</div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
