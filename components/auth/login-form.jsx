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

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password })
  }

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 mx-auto">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center mb-4">
          <img
            src="/welcomeback.svg"
            alt="Flock Icon"
            className="h-[84px] w-[84px] object-contain"
          />
        </div>
        <CardTitle className="text-2xl font-semibold" style={{ color: "#0D0D12" }}>
          Welcome Back
        </CardTitle>
        <CardDescription className="text-[#666D80]">
          Sign in to your logistics management account
        </CardDescription>
      </CardHeader>

      {/* 🔥 Added horizontal padding: px-6 */}
      <CardContent className="space-y-6 px-6">
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#666D80]">
              Email Address
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-3 h-10 border-gray-200 focus:border-red-500 focus:ring-red-500 text-[#666D80]"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-[#666D80]">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-3 pr-10 h-10 border-gray-200 focus:border-red-500 focus:ring-red-500 text-[#666D80]"
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
              />
              <Label htmlFor="remember" className="text-sm text-[#666D80]">
                Keep me login
              </Label>
            </div>
            <Link href="/auth/forgot-password" className="text-sm text-red-500 font-medium">
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button - Smaller */}
          <Button
            type="submit"
            className="w-full h-10 text-white font-medium"
            style={{ background: "#FBC4C6", opacity: 0.9 }}
          >
            Sign In
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center">
          <span className="text-sm text-[#666D80]">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-red-500 font-medium">
              Sign up
            </Link>
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
