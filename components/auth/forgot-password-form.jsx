"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-500 p-3 rounded-lg">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900">FLOCK</span>
          </div>
          <CardTitle className="text-2xl font-semibold text-gray-900">Check Your Email</CardTitle>
          <CardDescription className="text-gray-600">We've sent password reset instructions to {email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">Didn't receive the email? Check your spam folder or try again.</p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full h-12 border-gray-200 hover:bg-gray-50"
            >
              Try Different Email
            </Button>
          </div>

          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full bg-white/95 backdrop-blur-sm shadow-2xl border-0">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-500 p-3 rounded-lg">
            <Truck className="h-8 w-8 text-white" />
          </div>
          <span className="ml-3 text-2xl font-bold text-gray-900">FLOCK</span>
        </div>
        <CardTitle className="text-2xl font-semibold text-gray-900">Forgot Password?</CardTitle>
        <CardDescription className="text-gray-600">
          Enter your email address and we'll send you instructions to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-medium">
            Send Reset Instructions
          </Button>
        </form>

        <div className="text-center">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
