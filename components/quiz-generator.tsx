"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, RefreshCw, Check, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizGeneratorProps {
  field: string
  level: string
}

export default function QuizGenerator({ field, level }: QuizGeneratorProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [showResults, setShowResults] = useState<boolean>(false)

  const generateQuiz = async () => {
    setLoading(true)
    setError(null)
    setUserAnswers([])
    setShowResults(false)

    try {
      const fieldName = field.replace(/-/g, " ")
      const formattedField = fieldName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      const formattedLevel = level.charAt(0).toUpperCase() + level.slice(1)

      const prompt = `Create a quiz with 5 multiple-choice questions for a ${formattedLevel.toLowerCase()} level student in ${fieldName}.
      
      For each question:
      1. The question should be clear and specific
      2. Provide 4 options (A, B, C, D)
      3. Indicate which option is correct (0-based index)
      4. Include a brief explanation of why the answer is correct
      
      Format your response as a JSON array with objects containing 'question', 'options' (array), 'correctAnswer' (number), and 'explanation' fields.`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt,
      })

      // Parse the JSON response
      const parsedQuestions = JSON.parse(text)
      setQuestions(parsedQuestions)
      setUserAnswers(new Array(parsedQuestions.length).fill(null))
    } catch (err) {
      console.error("Error generating quiz:", err)
      setError("Failed to generate quiz. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    generateQuiz()
  }, [field, level])

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...userAnswers]
    newAnswers[questionIndex] = answerIndex
    setUserAnswers(newAnswers)
  }

  const handleSubmit = () => {
    if (userAnswers.includes(null)) {
      alert("Please answer all questions before submitting.")
      return
    }
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++
      }
    })
    return correct
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-zinc-500 mb-4" />
        <p className="text-zinc-600 dark:text-zinc-400">Generating your quiz...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={generateQuiz} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" /> Try Again
        </Button>
      </div>
    )
  }

  return (
    <div>
      {questions.map((question, qIndex) => (
        <Card key={qIndex} className="mb-6">
          <CardContent className="pt-6">
            <div className="mb-4">
              <p className="font-medium mb-2">
                Question {qIndex + 1}: {question.question}
              </p>
              <RadioGroup
                value={userAnswers[qIndex]?.toString() || ""}
                onValueChange={(value) => handleAnswerChange(qIndex, Number.parseInt(value))}
                disabled={showResults}
              >
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={oIndex.toString()} id={`q${qIndex}-o${oIndex}`} />
                    <Label htmlFor={`q${qIndex}-o${oIndex}`} className="flex-1">
                      {option}
                    </Label>
                    {showResults && oIndex === question.correctAnswer && <Check className="h-5 w-5 text-green-500" />}
                    {showResults && userAnswers[qIndex] === oIndex && oIndex !== question.correctAnswer && (
                      <X className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                ))}
              </RadioGroup>
            </div>

            {showResults && (
              <div className="mt-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                <p className="font-medium mb-2">Explanation:</p>
                <p>{question.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-between items-center">
        {!showResults ? (
          <Button onClick={handleSubmit} className="ml-auto">
            Submit Answers
          </Button>
        ) : (
          <>
            <div className="text-lg font-medium">
              Score: {calculateScore()}/{questions.length}
            </div>
            <Button onClick={generateQuiz} variant="outline" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" /> New Quiz
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
