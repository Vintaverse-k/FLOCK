"use client"

export default function AuthFooter() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-20 p-6">
      <div className="flex items-center justify-between text-[#666D80] text-sm">
        {/* Copyright */}
        <div>© 2025 Flock.All RIght Reserved</div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <button>Privacy</button>
          <button>Terms</button>
          <button>Get Help</button>
        </div>
      </div>
    </footer>
  )
}
