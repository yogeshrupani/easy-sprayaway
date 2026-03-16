"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  variant?: "primary" | "light" | "accent"
  intensity?: "subtle" | "medium" | "strong"
  className?: string
}

export default function AnimatedBackground({
  variant = "primary",
  intensity = "subtle",
  className = "",
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Get colors based on variant
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          background: "hsl(215, 50%, 23%)",
          particles: "hsl(215, 50%, 93%)",
        }
      case "light":
        return {
          background: "hsl(210, 50%, 98%)",
          particles: "hsl(215, 50%, 23%)",
        }
      case "accent":
        return {
          background: "hsl(185, 75%, 40%)",
          particles: "hsl(185, 75%, 95%)",
        }
      default:
        return {
          background: "hsl(215, 50%, 23%)",
          particles: "hsl(215, 50%, 93%)",
        }
    }
  }

  // Get opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case "subtle":
        return 0.1
      case "medium":
        return 0.2
      case "strong":
        return 0.3
      default:
        return 0.1
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle properties
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
    const particles: {
      x: number
      y: number
      radius: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * getOpacity() + 0.05,
      })
    }

    // Animation loop
    const colors = getColors()
    let animationFrameId: number

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${colors.particles}`
        ctx.globalAlpha = particle.opacity
        ctx.fill()
      })

      // Draw connections
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = colors.particles
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [variant, intensity])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" style={{ opacity: getOpacity() * 2 }} />
    </div>
  )
}
