"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, RefreshCw } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface MaterialGeneratorProps {
  field: string
  level: string
}

export default function MaterialGenerator({ field, level }: MaterialGeneratorProps) {
  const [materials, setMaterials] = useState<{ topic: string; content: string }[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const generateMaterials = async () => {
    setLoading(true)
    setError(null)

    try {
      const fieldName = field.replace(/-/g, " ")
      const formattedField = fieldName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      const formattedLevel = level.charAt(0).toUpperCase() + level.slice(1)

      const prompt = `Generate learning materials for a ${formattedLevel.toLowerCase()} level student in ${fieldName}. 
      
      First, identify 5 key topics that are essential for this level. Then, for each topic, provide:
      1. A brief introduction to the topic
      2. Key concepts and definitions
      3. Practical examples or case studies
      4. Common challenges and how to overcome them
      5. Recommended resources for further learning
      
      Format your response as a JSON array with objects containing 'topic' and 'content' fields. The content should be in markdown format.`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt,
      })

      // Parse the JSON response
      const parsedMaterials = JSON.parse(text)
      setMaterials(parsedMaterials)
    } catch (err) {
      console.error("Error generating materials:", err)
      setError("Failed to generate learning materials. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    generateMaterials()
  }, [field, level])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-zinc-500 mb-4" />
        <p className="text-zinc-600 dark:text-zinc-400">Generating your learning materials...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={generateMaterials} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" /> Try Again
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Accordion type="single" collapsible className="mb-6">
        {materials.map((material, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{material.topic}</AccordionTrigger>
            <AccordionContent>
              <div className="prose dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: material.content.replace(/\n/g, "<br>") }} />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-end">
        <Button onClick={generateMaterials} variant="outline" className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" /> Regenerate
        </Button>
      </div>
    </div>
  )
}
