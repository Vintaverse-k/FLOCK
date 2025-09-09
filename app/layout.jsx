import { Inter, JetBrains_Mono } from "next/font/google"  // valid fonts
import "./globals.css"

const geistSans = Inter({   // replaces Geist
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = JetBrains_Mono({  // replaces Geist_Mono
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "FLOCK - Logistics Management System",
  description: "Complete logistics and shipment management solution",
  generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
