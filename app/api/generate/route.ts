import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  try {
    const { prompt, type, field, level } = await req.json()

    const fieldName = field.replace(/-/g, " ")
    const formattedField = fieldName
      .split(" ")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    const formattedLevel = level.charAt(0).toUpperCase() + level.slice(1)

    let systemPrompt = ""

    switch (type) {
      case "roadmap":
        systemPrompt = `You are an expert IT educator specializing in ${formattedField}. 
        Create a detailed learning roadmap for a ${formattedLevel.toLowerCase()} level student.`
        break
      case "material":
        systemPrompt = `You are an expert IT educator specializing in ${formattedField}. 
        Create comprehensive learning materials for a ${formattedLevel.toLowerCase()} level student.`
        break
      case "quiz":
        systemPrompt = `You are an expert IT educator specializing in ${formattedField}. 
        Create challenging but fair quiz questions for a ${formattedLevel.toLowerCase()} level student.`
        break
      default:
        systemPrompt = `You are an expert IT educator specializing in ${formattedField}.`
    }

    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in generate route:", error)
    return new Response(JSON.stringify({ error: "Failed to generate content" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
