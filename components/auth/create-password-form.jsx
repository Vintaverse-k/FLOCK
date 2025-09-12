"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function CreatePasswordForm() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    router.push("/dashboard")
  }

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 mx-auto">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-500 p-3 rounded-lg">
            <Truck className="h-8 w-8 text-white" />
          </div>
        </div>

        <CardTitle className="text-2xl font-semibold text-gray-900">Create Password</CardTitle>
        <CardDescription className="text-gray-600">
          Enter your email to proceed
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 px-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="space-y-2">
            <Button
              type="submit"
              disabled={!email}
              className="w-full h-10 bg-red-500 hover:bg-red-600 text-white font-medium disabled:bg-gray-300"
            >
              Submit
            </Button>

            <Link
              href="/auth/login"
              className="w-full inline-flex justify-center items-center h-10 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Back to Login
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-2">
            Don't have access anymore? <span className="text-red-500 font-medium">Try another method</span>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
