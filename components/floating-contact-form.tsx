"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Send, User, AlertTriangle, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  fallback?: boolean
}

interface UserInfo {
  name: string
  email: string
  phone: string
}

export function FloatingContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "", phone: "" })
  const [currentStep, setCurrentStep] = useState<"info" | "chat">("info")
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [quotaExceeded, setQuotaExceeded] = useState(false)
  const [usingFallback, setUsingFallback] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [initialMessageSent, setInitialMessageSent] = useState(false)
  const [typingDots, setTypingDots] = useState(1)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Typing animation
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isLoading) {
      interval = setInterval(() => {
        setTypingDots((prev) => (prev < 3 ? prev + 1 : 1))
      }, 500)
    }
    return () => clearInterval(interval)
  }, [isLoading])

  // Send welcome message when chat starts
  useEffect(() => {
    if (currentStep === "chat" && !initialMessageSent) {
      const welcomeMessage: Message = {
        id: "welcome-" + Date.now(),
        role: "assistant",
        content: `Hi ${userInfo.name}! I'm Sarah from Easy-Sprayaway. Lovely to meet you! How can I help you today with your home improvement needs? Whether it's loft insulation, roof cleaning, or anything else, I'm here to chat! 😊`,
        timestamp: new Date(),
      }

      setMessages([welcomeMessage])
      setInitialMessageSent(true)
    }
  }, [currentStep, initialMessageSent, userInfo.name])

  const toggleForm = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Reset to initial state when opening
      setMessages([])
      setCurrentStep("info")
      setUserInfo({ name: "", email: "", phone: "" })
      setInitialMessageSent(false)
      setError(null)
      setQuotaExceeded(false)
      setUsingFallback(false)
      setInput("")
    }
  }

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInfo.name && userInfo.email && userInfo.phone) {
      setCurrentStep("chat")
    }
  }

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return

    setError(null)
    setIsLoading(true)

    // Add user message
    const userMessage: Message = {
      id: "user-" + Date.now(),
      role: "user",
      content: messageContent,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    try {
      // Prepare messages for API
      const apiMessages = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: apiMessages,
          userInfo,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to get response")
      }

      // Check if this is a fallback response
      if (data.fallback) {
        setUsingFallback(true)
        if (data.quotaExceeded) {
          setQuotaExceeded(true)
        }
      }

      // Add bot response
      const botMessage: Message = {
        id: data.id || "bot-" + Date.now(),
        role: "assistant",
        content: data.content,
        timestamp: new Date(),
        fallback: data.fallback,
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      setError(error instanceof Error ? error.message : "An error occurred")

      // Add error message
      const errorMessage: Message = {
        id: "error-" + Date.now(),
        role: "assistant",
        content: `Sorry ${userInfo.name}, I'm having a wee bit of trouble with my connection right now. Could you try again in a moment? Or feel free to email us directly at info@easy-sprayaway.co.uk - we'd love to help!`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      await sendMessage(input)
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Header */}
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="/smiling-scottish-woman-avatar.png"
                      alt="Sarah from Easy-Sprayaway"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Sarah from Easy-Sprayaway</h3>
                    <p className="text-xs opacity-90">
                      {isLoading ? "Typing..." : usingFallback ? "Smart mode" : "Online"}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleForm}
                  className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* OpenAI Quota Message */}
              {quotaExceeded && (
                <div className="bg-orange-50 border-b border-orange-200 p-3">
                  <div className="flex items-start gap-2">
                    <CreditCard className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-orange-800">
                      <p className="font-medium">OpenAI Quota Exceeded</p>
                      <p className="mt-1">
                        Your OpenAI API quota has been exceeded. Please check your billing at{" "}
                        <a
                          href="https://platform.openai.com/account/billing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          platform.openai.com
                        </a>
                        . Don't worry - I'm still here to help with smart responses!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Fallback Mode Message */}
              {usingFallback && !quotaExceeded && (
                <div className="bg-blue-50 border-b border-blue-200 p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-blue-800">
                      <p className="font-medium">Smart Mode Active</p>
                      <p className="mt-1">I'm using my built-in knowledge to help you. Still happy to chat!</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col max-h-[calc(100vh-12rem)]">
                {currentStep === "info" ? (
                  /* User Info Collection */
                  <div className="p-4 flex-1 flex flex-col justify-start overflow-y-auto">
                    <div className="flex items-start gap-2 mb-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/smiling-scottish-woman-avatar.png"
                          alt="Sarah from Easy-Sprayaway"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        <p>
                          Hello! I'm Sarah from Easy-Sprayaway. 👋 Please share your details to start chatting about
                          your home improvement needs.
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleUserInfoSubmit} className="space-y-3 flex-shrink-0">
                      <Input
                        placeholder="Your name"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="text-sm"
                      />
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="text-sm"
                      />
                      <Input
                        type="tel"
                        placeholder="Your phone number"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo((prev) => ({ ...prev, phone: e.target.value }))}
                        required
                        className="text-sm"
                      />
                      <Button type="submit" className="w-full text-sm bg-blue-600 hover:bg-blue-700">
                        Start Chat
                      </Button>
                    </form>
                  </div>
                ) : (
                  /* Chat Interface */
                  <>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={cn("flex items-start gap-2", message.role === "user" ? "flex-row-reverse" : "")}
                        >
                          {message.role === "user" ? (
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="h-4 w-4 text-white" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src="/smiling-scottish-woman-avatar.png"
                                alt="Sarah from Easy-Sprayaway"
                                width={32}
                                height={32}
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div
                            className={cn(
                              "rounded-lg p-3 text-sm max-w-[80%]",
                              message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100",
                            )}
                          >
                            {message.content}
                          </div>
                        </div>
                      ))}

                      {isLoading && (
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src="/smiling-scottish-woman-avatar.png"
                              alt="Sarah from Easy-Sprayaway"
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 text-sm">
                            <span className="text-gray-500">{"●".repeat(typingDots)}</span>
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t flex-shrink-0">
                      <form onSubmit={handleChatSubmit} className="flex gap-2">
                        <Input
                          placeholder="Type your message..."
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          className="flex-1 text-sm"
                          disabled={isLoading}
                        />
                        <Button
                          type="submit"
                          size="icon"
                          disabled={isLoading || !input.trim()}
                          className="flex-shrink-0 bg-blue-600 hover:bg-blue-700"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleForm}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-4 shadow-lg flex items-center justify-center relative overflow-hidden group"
          aria-label="Chat with Sarah from Easy-Sprayaway"
        >
          <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
          <MessageCircle className="h-6 w-6 relative z-10" />
          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
            />
          )}
        </motion.button>
      </div>
    </>
  )
}

export default FloatingContactForm
