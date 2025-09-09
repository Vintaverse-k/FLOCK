"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Signup attempt:", formData)
    router.push("/auth/verify-otp")
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 mx-auto">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center mb-4">
          <div>
            <img
              src="/welcomeback.svg"
              alt="Flock Icon"
              className="h-[84px] w-[84px] object-contain"
            />
          </div>
        </div>
        <CardTitle className="text-2xl font-semibold" style={{ color: "#0D0D12" }}>
          Create Account
        </CardTitle>
        <CardDescription className="text-[#666D80]">
          Sign up to manage your logistics account
        </CardDescription>
      </CardHeader>

      {/* 🔥 Added left/right padding: px-6 */}
      <CardContent className="space-y-6 px-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium" style={{ color: "#0D0D12" }}>
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="h-10 border-gray-200 focus:border-red-500 focus:ring-red-500 text-[#0D0D12]"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium" style={{ color: "#0D0D12" }}>
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-10 border-gray-200 focus:border-red-500 focus:ring-red-500 text-[#0D0D12]"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium" style={{ color: "#0D0D12" }}>
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="pr-10 h-10 border-gray-200 focus:border-red-500 focus:ring-red-500 text-[#0D0D12]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-10 text-white font-medium"
            style={{ background: "#FBC4C6", opacity: 0.9 }}
          >
            Create Account
          </Button>
        </form>

        <div className="text-center">
          <span className="text-sm text-[#666D80]">
            Already have an account?{" "}
            <Link href="/" className="text-red-500 font-medium">
              Sign in
            </Link>
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
