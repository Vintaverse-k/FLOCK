"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function OTPVerificationForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const inputRefs = useRef([])
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleInputChange = (index, value) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    if (value && index < 5) inputRefs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const otpCode = otp.join("")
    if (otpCode.length === 6) {
      console.log("OTP verification:", otpCode)
      router.push("/auth/create-password")
    }
  }

  const handleResendOTP = () => {
    setTimeLeft(300)
    setOtp(["", "", "", "", "", ""])
    inputRefs.current[0]?.focus()
    console.log("Resending OTP...")
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

        <CardTitle className="text-2xl font-semibold text-gray-900">Verify Your Email</CardTitle>
        <CardDescription className="text-gray-600">
          We've sent a verification code to your email address
        </CardDescription>
      </CardHeader>

      {/* ✅ px-6 added for horizontal padding */}
      <CardContent className="space-y-6 px-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Inputs */}
          <div className="flex justify-center space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-red-500 focus:outline-none"
              />
            ))}
          </div>

          {/* ✅ Button height changed to h-10 */}
          <Button
            type="submit"
            disabled={otp.join("").length !== 6}
            className="w-full h-10 bg-red-500 hover:bg-red-600 text-white font-medium disabled:bg-gray-300"
          >
            Verify Email
          </Button>

          {/* Time Remaining + Resend OTP */}
          <div className="text-center mt-2">
            <p className="text-sm text-gray-600 mb-2">
              Time remaining: <span className="font-semibold text-red-500">{formatTime(timeLeft)}</span>
            </p>
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={timeLeft > 0}
              className={`text-sm font-medium ${timeLeft === 0 ? "text-red-500 hover:text-red-600" : "text-gray-400 cursor-not-allowed"}`}
            >
              Resend OTP
            </button>
          </div>
        </form>

        <div className="text-center">
          <Link href="/auth/signup" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
