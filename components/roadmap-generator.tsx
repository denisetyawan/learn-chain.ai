"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, RefreshCw } from "lucide-react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface RoadmapGeneratorProps {
  field: string
  level: string
}

export default function RoadmapGenerator({ field, level }: RoadmapGeneratorProps) {
  const [roadmap, setRoadmap] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const generateRoadmap = async () => {
    setLoading(true)
    setError(null)

    try {
      const fieldName = field.replace(/-/g, " ")
      const formattedField = fieldName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      const formattedLevel = level.charAt(0).toUpperCase() + level.slice(1)

      const prompt = `Create a detailed learning roadmap for a ${formattedLevel.toLowerCase()} level ${fieldName} student. 
      The roadmap should include:
      1. A sequential list of topics to learn
      2. Key skills to develop at each stage
      3. Estimated time to complete each section
      4. Prerequisites for each topic
      5. Recommended resources (books, courses, websites)
      
      Format the roadmap in markdown with clear sections and bullet points.`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt,
      })

      setRoadmap(text)
    } catch (err) {
      console.error("Error generating roadmap:", err)
      setError("Failed to generate roadmap. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    generateRoadmap()
  }, [field, level])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-zinc-500 mb-4" />
        <p className="text-zinc-600 dark:text-zinc-400">Generating your personalized roadmap...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={generateRoadmap} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" /> Try Again
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="prose dark:prose-invert max-w-none mb-6">
        <div dangerouslySetInnerHTML={{ __html: roadmap.replace(/\n/g, "<br>") }} />
      </div>
      <div className="flex justify-end">
        <Button onClick={generateRoadmap} variant="outline" className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" /> Regenerate
        </Button>
      </div>
    </div>
  )
}
