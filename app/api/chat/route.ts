import { type NextRequest, NextResponse } from "next/server"

// Smart fallback responses for when OpenAI API is unavailable
function getSmartResponse(userMessage: string, userName: string): string {
  const message = userMessage.toLowerCase()

  // Greeting responses
  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return `Hello ${userName}! Lovely to meet you! I'm Sarah from Easy-Sprayaway. How can I help you today? Are you interested in our SuperQuilt loft insulation, roof cleaning, or maybe something else? 😊`
  }

  // Insulation related
  if (message.includes("insulation") || message.includes("loft") || message.includes("superquilt")) {
    return `Brilliant question about insulation! Our SuperQuilt is absolutely fantastic - it's perfect for Scottish homes and can save you 20-40% on your heating bills. Plus, it helps with condensation issues which is so common up here. We offer a 10-year warranty too! Would you like me to arrange a free survey for you?`
  }

  // Roof cleaning
  if (message.includes("roof") || message.includes("clean") || message.includes("moss")) {
    return `Aye, roof cleaning is one of our specialties! We use eco-friendly methods to clean your roof and can apply protective coatings that'll extend its lifespan. It's amazing the difference it makes - your home will look like new! We also do walls and driveways. Shall I get someone to pop round for a free quote?`
  }

  // Pricing questions
  if (
    message.includes("price") ||
    message.includes("cost") ||
    message.includes("quote") ||
    message.includes("how much")
  ) {
    return `Great question! Our pricing is always transparent and fair. It depends on your property size and what you need doing. The best part is we always do a free survey first - no obligation at all! That way we can give you an accurate quote. Would you like me to arrange that for you?`
  }

  // Warranty/guarantee
  if (message.includes("warranty") || message.includes("guarantee") || message.includes("cover")) {
    return `We're really proud of our warranties! You get 10 years on our SuperQuilt insulation products and 1 year on the installation work. We've been a family business since 2016, so you can trust we'll be here to honour that warranty. Quality work is what we're all about!`
  }

  // Location/area questions
  if (
    message.includes("area") ||
    message.includes("location") ||
    message.includes("where") ||
    message.includes("scotland")
  ) {
    return `We're based in Scotland and cover a good area around here! We're a proper local family business - been serving Scottish families since 2016. We even support Glasgow Elim Church FC! Where abouts are you located? I can check if we cover your area.`
  }

  // Time/availability
  if (
    message.includes("when") ||
    message.includes("time") ||
    message.includes("available") ||
    message.includes("book")
  ) {
    return `We're usually available for surveys within 3-5 working days, and the actual work typically takes 4-8 hours depending on what you're having done. We're pretty flexible with timing too! Would you like me to get someone to give you a call to arrange something?`
  }

  // Contact/callback
  if (
    message.includes("call") ||
    message.includes("phone") ||
    message.includes("contact") ||
    message.includes("speak")
  ) {
    return `I'd be happy to arrange for one of our specialists to give you a call. They can answer any technical questions and arrange a free survey if you'd like. What's the best time to reach you?`
  }

  // General/default response
  return `Thanks for your message, ${userName}! I'm here to help with any questions about our home services. We specialize in SuperQuilt loft insulation (which is brilliant for Scottish homes!), roof cleaning, wall cleaning, and driveway cleaning. We're a family-run business that's been serving Scottish families since 2016. What would you like to know more about?`
}

export async function POST(req: NextRequest) {
  try {
    console.log("Chat API endpoint called")

    const body = await req.json()
    const { messages, userInfo } = body

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid message format" }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]
    if (!lastMessage?.content) {
      return NextResponse.json({ error: "No message content" }, { status: 400 })
    }

    const userName = userInfo?.name || "there"
    console.log("Processing message:", lastMessage.content)

    // Check if OpenAI API key is available
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      console.log("No OpenAI API key - using fallback response")
      const fallbackResponse = getSmartResponse(lastMessage.content, userName)
      return NextResponse.json({
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: fallbackResponse,
        fallback: true,
      })
    }

    try {
      // Try OpenAI API first
      const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are Sarah, a friendly customer service representative for Easy-Sprayaway, a UK-based home services company established in 2016. You're chatting with a potential customer named ${userName}.

COMPANY INFORMATION:
- Family-run business based in Scotland
- Services: SuperQuilt loft insulation (main product), roof cleaning and coatings, wall and driveway cleaning, spray foam insulation
- Offers 10-year product warranty and 1-year installation warranty
- Supports Glasgow Elim Church FC
- Website: www.easy-sprayaway.co.uk
- Email: info@easy-sprayaway.co.uk

PRODUCT INFORMATION:
- SuperQuilt: Premium multifoil insulation, excellent for Scottish homes, reduces condensation, improves EPC ratings, saves 20-40% on heating bills
- Roof Cleaning: Eco-friendly methods, protective coatings, extends roof lifespan
- Wall/Driveway Cleaning: Professional soft wash and pressure washing techniques

BUSINESS PROCESS:
- Free surveys with no obligation
- Transparent pricing based on property size and requirements
- Installation typically takes 4-8 hours depending on service
- Available within 3-5 working days for surveys

YOUR PERSONALITY:
- Warm, friendly, and helpful
- Use British/Scottish terminology (e.g., "brilliant" instead of "awesome")
- Address the user by name when possible
- Be conversational and natural - use contractions, casual language
- Show enthusiasm about helping the customer
- Use £ for currency
- Occasionally use phrases like "Aye", "Lovely", "Grand", "Brilliant" to sound authentically Scottish
- Keep responses concise (1-3 sentences) and conversational

IMPORTANT: You are a real person named Sarah, not an AI or bot. Respond as if you're a human customer service representative chatting in real-time.`,
            },
            ...messages.map((msg: any) => ({
              role: msg.role,
              content: msg.content,
            })),
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      })

      if (!openaiResponse.ok) {
        const errorData = await openaiResponse.json()
        console.error("OpenAI API error:", errorData)

        // Check for specific quota exceeded error
        if (errorData.error?.code === "insufficient_quota") {
          console.log("OpenAI quota exceeded - using fallback response")
          const fallbackResponse = getSmartResponse(lastMessage.content, userName)
          return NextResponse.json({
            id: `msg-${Date.now()}`,
            role: "assistant",
            content: fallbackResponse,
            fallback: true,
            quotaExceeded: true,
          })
        }

        throw new Error(`OpenAI API error: ${errorData.error?.message || "Unknown error"}`)
      }

      const data = await openaiResponse.json()
      const assistantMessage = data.choices[0]?.message?.content

      if (!assistantMessage) {
        throw new Error("No response from OpenAI")
      }

      return NextResponse.json({
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: assistantMessage,
        fallback: false,
      })
    } catch (openaiError) {
      console.log("OpenAI API failed, using fallback response:", openaiError)
      const fallbackResponse = getSmartResponse(lastMessage.content, userName)
      return NextResponse.json({
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: fallbackResponse,
        fallback: true,
      })
    }
  } catch (error) {
    console.error("Detailed error in chat API:", error)

    return NextResponse.json(
      {
        error: "CHAT_ERROR",
        message:
          "Sorry, I'm having trouble connecting right now. Please try again or email us at info@easy-sprayaway.co.uk",
      },
      { status: 500 },
    )
  }
}
