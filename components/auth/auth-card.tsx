"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AuthCardProps {
  isLoading: boolean
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
  rememberMe: boolean
  setRememberMe: (remember: boolean) => void
  onSignIn: (e: React.FormEvent) => void
  onSignUp: (e: React.FormEvent) => void
  onSocialLogin: (provider: string) => void
  onForgotPassword: () => void
}

export function AuthCard({
  isLoading,
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  onSignIn,
  onSignUp,
  onSocialLogin,
  onForgotPassword,
}: AuthCardProps) {
  const [activeTab, setActiveTab] = useState("connect")
  const [walletAddress, setWalletAddress] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleRedirect = () => {
    window.open("https://www.youtube.com/@diecastbydollarall", "_blank")
  }

  const handleConnectWallet = () => {
    onSignIn(new Event("submit") as any)
  }

  const handleCreateSlushWallet = () => {
    window.open("https://slush.finance/", "_blank")
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl w-full">
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <div className="spinning-logo">
            <img
              src="/images/design-mode/Sui_Symbol_White.png"
              alt="Sui Logo"
              width="120"
              height="120"
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Header with tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-0 mb-6 sm:mb-8 lg:mb-10">
          <div className="flex bg-black/30 backdrop-blur-sm rounded-full p-1 border border-white/10 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("connect")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === "connect"
                  ? "bg-white/20 backdrop-blur-sm text-white border border-white/20 shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Connect
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === "create"
                  ? "bg-white/20 backdrop-blur-sm text-white border border-white/20 shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Create
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-6 sm:mb-8 lg:mb-10 transition-all duration-300 break-words text-center">
          {activeTab === "connect" ? "Connect your Sui wallet" : "Create a Slush wallet"}
        </h1>

        <div className="relative overflow-hidden">
          {/* Connect Sui Wallet Tab */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "connect" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 absolute inset-0"
            }`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleConnectWallet()
              }}
              className="space-y-4 sm:space-y-5 lg:space-y-6"
            >
              {/* Wallet Address field */}
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-white/40 transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <path d="M1 10h22" />
                </svg>
                <Input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-12 sm:h-14 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-0 pl-12 text-sm sm:text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="0x..."
                />
              </div>

              {/* Connect wallet button */}
              <Button
                type="submit"
                className="w-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white font-medium rounded-2xl h-12 sm:h-14 mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                disabled={isLoading}
              >
                {isLoading ? "Connecting..." : "Connect Sui Wallet"}
              </Button>

              <p className="text-center text-white/40 text-xs sm:text-sm mt-4 sm:mt-6 lg:mt-8">
                Don't have a Sui wallet?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("create")}
                  className="text-white/70 hover:text-white underline transition-colors duration-200"
                >
                  Create a Slush wallet
                </button>
              </p>
            </form>
          </div>

          {/* Create Slush Wallet Tab - Simplified to just a link button */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "create" ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 absolute inset-0"
            }`}
          >
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <p className="text-white/60 text-sm sm:text-base text-center leading-relaxed">
                Get started with Slush by clicking the button below. Slush will guide you through creating your wallet.
              </p>

              {/* Direct link button to Slush */}
              <Button
                onClick={handleCreateSlushWallet}
                className="w-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white font-medium rounded-2xl h-12 sm:h-14 text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Create Slush Wallet
              </Button>

              <p className="text-center text-white/40 text-xs sm:text-sm">
                Already have a wallet?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("connect")}
                  className="text-white/70 hover:text-white underline transition-colors duration-200"
                >
                  Connect instead
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
