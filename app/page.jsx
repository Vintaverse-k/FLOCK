import { LoginForm } from "@/components/auth/login-form"
import AuthNavbar from "@/components/auth/auth-navbar"
import AuthFooter from "@/components/auth/auth-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative bg-white">
      <AuthNavbar />

      {/* Background overlay removed to make image fully visible */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0 bg-[url('/Background.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}
