"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// Add this function after the imports
function isConsentValid(timestamp: string): boolean {
  try {
    // Check if consent is older than 6 months (180 days)
    const consentDate = new Date(timestamp)
    const now = new Date()
    const sixMonthsInMs = 180 * 24 * 60 * 60 * 1000
    return now.getTime() - consentDate.getTime() < sixMonthsInMs
  } catch (error) {
    return false
  }
}

export default function CookieConsentPopup() {
  const [showConsent, setShowConsent] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already consented
    try {
      const storedConsent = localStorage.getItem("cookieConsent")
      if (storedConsent) {
        const consentData = JSON.parse(storedConsent)

        // Check if consent is still valid
        if (consentData.timestamp && isConsentValid(consentData.timestamp)) {
          // Update preferences state with stored values
          setPreferences({
            necessary: true, // Always necessary
            analytics: consentData.analytics || false,
            marketing: consentData.marketing || false,
          })
        } else {
          // Consent expired, show popup again
          setShowConsent(true)
        }
      } else {
        // Show the consent popup after a short delay
        const timer = setTimeout(() => {
          setShowConsent(true)
        }, 2000)
        return () => clearTimeout(timer)
      }
    } catch (error) {
      console.error("Error reading cookie consent:", error)
      // Show the consent popup if there's an error
      setShowConsent(true)
    }
  }, [])

  const handleAcceptAll = () => {
    try {
      setPreferences({
        necessary: true,
        analytics: true,
        marketing: true,
      })
      localStorage.setItem(
        "cookieConsent",
        JSON.stringify({
          necessary: true,
          analytics: true,
          marketing: true,
          timestamp: new Date().toISOString(),
        }),
      )
      setShowConsent(false)
    } catch (error) {
      console.error("Error saving cookie consent:", error)
    }
  }

  const handleRejectAll = () => {
    try {
      setPreferences({
        necessary: true,
        analytics: false,
        marketing: false,
      })
      localStorage.setItem(
        "cookieConsent",
        JSON.stringify({
          necessary: true,
          analytics: false,
          marketing: false,
          timestamp: new Date().toISOString(),
        }),
      )
      setShowConsent(false)
    } catch (error) {
      console.error("Error saving cookie consent:", error)
    }
  }

  const handleSavePreferences = () => {
    try {
      localStorage.setItem(
        "cookieConsent",
        JSON.stringify({
          ...preferences,
          timestamp: new Date().toISOString(),
        }),
      )
      setShowConsent(false)
      setShowCustomize(false)
    } catch (error) {
      console.error("Error saving cookie preferences:", error)
    }
  }

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    if (key === "necessary") return // Necessary cookies can't be disabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-opacity duration-300 ease-in-out opacity-100">
      {!showCustomize ? (
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-800">Cookie Settings</h3>
            <button onClick={handleAcceptAll} className="text-xs text-gray-500 hover:text-gray-700">
              Accept all
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. Read our{" "}
            <a href="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCustomize(true)}
              className="text-xs h-8 px-3 py-1"
            >
              Customize
            </Button>
            <Button variant="outline" size="sm" onClick={handleRejectAll} className="text-xs h-8 px-3 py-1">
              Reject All
            </Button>
            <Button
              size="sm"
              onClick={handleAcceptAll}
              className="bg-primary hover:bg-primary-dark text-white text-xs h-8 px-3 py-1"
            >
              Accept All
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative bg-white p-4 text-sm">
          <div className="flex items-center justify-between mb-4 border-b pb-2">
            <h3 className="text-sm font-semibold text-gray-800">Cookie Preferences</h3>
            <button onClick={() => setShowCustomize(false)} className="text-gray-400 hover:text-gray-600">
              <X size={18} />
            </button>
          </div>
          <div className="space-y-4 mb-4 max-h-[300px] overflow-y-auto pr-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Necessary Cookies</h4>
                <p className="text-sm text-gray-600">
                  Essential cookies that help our website function properly and remember your basic preferences.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.necessary}
                disabled
                className="h-4 w-4 text-primary rounded border-gray-300"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Analytics Cookies</h4>
                <p className="text-sm text-gray-600">
                  These help us understand how visitors use our website, allowing us to improve our services and your
                  experience.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handlePreferenceChange("analytics")}
                className="h-4 w-4 text-primary rounded border-gray-300"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Marketing Cookies</h4>
                <p className="text-sm text-gray-600">
                  These help us provide relevant information about our home improvement services that may interest you.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => handlePreferenceChange("marketing")}
                className="h-4 w-4 text-primary rounded border-gray-300"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 border-t pt-3 mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCustomize(false)}
              className="text-xs h-8 px-3 py-1"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleSavePreferences}
              className="bg-primary hover:bg-primary-dark text-white text-xs h-8 px-3 py-1"
            >
              Save Preferences
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
