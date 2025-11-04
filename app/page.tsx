"use client"

import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { AuthCard } from "@/components/auth/auth-card"
import { WavyBackground } from "@/components/ui/wavy-background"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const { toast } = useToast()

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Wallet connected!",
        description: "Welcome to Sui ecosystem.",
      })
    }, 1500)
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Wallet created!",
        description: "Your Slush wallet has been created successfully.",
      })
    }, 1500)
  }

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} login`,
      description: `Redirecting to ${provider}...`,
    })
  }

  const handleForgotPassword = () => {
    toast({
      title: "Reset link sent",
      description: "Check your email for password reset instructions.",
    })
  }

  return (
    <>
      {/* CHANGED: Added wrapper div with relative positioning and overflow-x-hidden */}
      <div className="relative  w-full overflow-x-hidden">
        {/* CHANGED: containerClassName - removed absolute positioning so background expands with content */}
        <WavyBackground
          className="w-full min-h-screen"
          containerClassName="w-full min-h-screen"
          colors={["#38bdf8", "#0ea5e9", "#06b6d4", "#14b8a6", "#10b981"]}
          waveWidth={50}
          blur={10}
          speed="fast"
          waveOpacity={0.3}
          backgroundFill="black"
        >
          {/* CHANGED: Removed z-10, keeping content flowing naturally */}
          <div className="w-full min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
              {/* CHANGED: Reduced gap from gap-8 lg:gap-16 to gap-8 lg:gap-12 xl:gap-16 */}
              {/* CHANGED: items-center to items-start lg:items-center for better mobile layout */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
                {/* Left Side - Landing Page Content */}
                {/* CHANGED: space-y-8 to space-y-6 sm:space-y-8 for tighter mobile spacing */}
                <div className="space-y-6 sm:space-y-8 text-white order-2 lg:order-1">
                  {/* CHANGED: space-y-4 to space-y-3 sm:space-y-4 */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* CHANGED: text-4xl sm:text-5xl to text-3xl sm:text-4xl md:text-5xl for better mobile sizing */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Welcome to the
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400">
                        Sui Ecosystem
                      </span>
                    </h1>
                    {/* CHANGED: text-lg sm:text-xl to text-base sm:text-lg lg:text-xl */}
                    <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
                      Connect your wallet to access the next generation of decentralized applications built on Sui blockchain.
                    </p>
                  </div>

                  {/* CHANGED: space-y-6 to space-y-4 sm:space-y-6 */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* CHANGED: gap-4 to gap-3 sm:gap-4 */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* CHANGED: w-12 h-12 to w-10 h-10 sm:w-12 sm:h-12 for responsive icon sizing */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                        {/* CHANGED: w-6 h-6 to w-5 h-5 sm:w-6 sm:h-6 */}
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        {/* CHANGED: text-xl to text-lg sm:text-xl */}
                        {/* CHANGED: mb-2 to mb-1 sm:mb-2 */}
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Sui World News</h3>
                        {/* CHANGED: Added text-sm sm:text-base and removed ** markdown */}
                        <p className="text-sm sm:text-base text-white/70">Access real-time updates and in-depth articles covering major developments across the Sui network and its partners</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Live Metrics & Token Stats</h3>
                        {/* CHANGED: Removed ** markdown */}
                        <p className="text-sm sm:text-base text-white/70">Track the live value (TVL), token prices, usage analytics, and dynamic gas fee updates for optimal network engagement.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Community Pulse & Social Feed</h3>
                        {/* CHANGED: Removed ** markdown */}
                        <p className="text-sm sm:text-base text-white/70">Stay connected with official community articles, developer updates, and essential tweets aggregated from top voices in the Sui ecosystem</p>
                      </div>
                    </div>
                  </div>
                  {/* CHANGED: pt-4 to pt-2 sm:pt-4 */}
                  <div className="pt-2 sm:pt-4">
                    {/* CHANGED: text-sm to text-xs sm:text-sm */}
                    <p className="text-xs sm:text-sm text-white/50">
                      New to Sui? Create a Slush wallet to get started in minutes.
                    </p>
                  </div>
                </div>

                {/* Right Side - Auth Card */}
                {/* CHANGED: Added w-full for proper width constraint */}
                <div className="order-1 lg:order-2 w-full">
                  <AuthCard
                    isLoading={isLoading}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    rememberMe={rememberMe}
                    setRememberMe={setRememberMe}
                    onSignIn={handleSignIn}
                    onSignUp={handleSignUp}
                    onSocialLogin={handleSocialLogin}
                    onForgotPassword={handleForgotPassword}
                  />
                </div>
              </div>
            </div>
          </div>
        </WavyBackground>
      </div>
      <Toaster />
    </>
  )
}