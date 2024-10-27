'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Twitter, MessageCircle, Send } from "lucide-react"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-indigo-300" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      <header className="absolute top-0 right-0 p-4 flex space-x-4">
        <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          <Twitter size={24} />
        </a>
        <a href="https://discord.gg/YourDiscordInvite" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          <MessageCircle size={24} />
        </a>
        <a href="https://t.me/YourTelegramGroup" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          <Send size={24} />
        </a>
      </header>
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_2-mTsDMSHLFJzYdofogbcI9B6uWLn7IB.jpg"
            alt="Raptor Logo"
            width={300}
            height={300}
            className="mx-auto rounded-full"
          />
        </div>

        <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Welcome to Raptor
        </h1>
        <p className="text-xl mb-8 text-indigo-200">Building the fiercest liquidity infrastructure</p>

        <div className="flex justify-center space-x-4 mb-12">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-indigo-100 px-8 py-3 rounded-full text-lg font-semibold tracking-wider transition-all duration-300 transform hover:scale-105">
            Soon
          </Button>
          <Button className="bg-transparent border border-indigo-600 text-indigo-100 px-8 py-3 rounded-full text-lg font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 hover:bg-indigo-600">
            Documentation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg backdrop-blur-sm border border-indigo-500 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-2 text-indigo-300">Lightning Fast</h3>
            <p className="text-indigo-200">Experience faster speeds with optimized swapping algorithms and native instruction sets</p>
          </div>
          <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg backdrop-blur-sm border border-indigo-500 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-2 text-indigo-300">Secure</h3>
            <p className="text-indigo-200">Your assets are protected by state-of-the-art blockchain technology</p>
          </div>
          <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg backdrop-blur-sm border border-indigo-500 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-2 text-indigo-300">Low Fees</h3>
            <p className="text-indigo-200">Enjoy minimal transaction costs on all your swaps</p>
          </div>
          <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg backdrop-blur-sm border border-indigo-500 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-2 text-indigo-300">Programmable</h3>
            <p className="text-indigo-200">Experience faster speeds with optimized swapping algorithms and native instruction sets</p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto mt-20 py-6 text-center text-indigo-400">
        <p>&copy; 2024 Raptor. All rights reserved.</p>
      </footer>
    </div>
  )
}