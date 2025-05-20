"use client"

import { useState, useEffect } from "react"
import { Loader2, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface DemoQuizProps {
  subject: string
  level: string
}

export default function DemoQuiz({ subject, level }: DemoQuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [showResults, setShowResults] = useState<boolean>(false)

  // Sample quiz questions for business
  const businessQuestions = [
    {
      question: "Which of the following is NOT typically included in a SWOT analysis?",
      options: ["Market trends", "Organizational weaknesses", "Potential threats", "Company strengths"],
      correctAnswer: 0,
      explanation:
        "A SWOT analysis includes Strengths, Weaknesses, Opportunities, and Threats. Market trends would typically be analyzed as part of the external environment analysis, which might inform the Opportunities and Threats sections of SWOT, but are not directly part of the SWOT framework itself.",
    },
    {
      question: "What is the primary purpose of a balance sheet?",
      options: [
        "To show a company's revenue and expenses over a period of time",
        "To show a company's assets, liabilities, and equity at a specific point in time",
        "To show a company's cash inflows and outflows",
        "To show a company's market position relative to competitors",
      ],
      correctAnswer: 1,
      explanation:
        "A balance sheet provides a snapshot of a company's financial position at a specific point in time, showing its assets, liabilities, and shareholders' equity. It follows the accounting equation: Assets = Liabilities + Equity.",
    },
    {
      question: "Which pricing strategy involves setting a high initial price and then lowering it over time?",
      options: ["Penetration pricing", "Value-based pricing", "Price skimming", "Cost-plus pricing"],
      correctAnswer: 2,
      explanation:
        "Price skimming involves setting a high initial price for a product or service and then lowering it over time as competition increases or market saturation occurs. This strategy is often used for innovative products or services where early adopters are willing to pay premium prices.",
    },
    {
      question: "What does ROI stand for in business?",
      options: ["Return On Investment", "Rate Of Inflation", "Risk Of Insolvency", "Revenue Operating Index"],
      correctAnswer: 0,
      explanation:
        "ROI stands for Return On Investment. It's a performance measure used to evaluate the efficiency or profitability of an investment, calculated by dividing the benefit (return) of an investment by its cost.",
    },
    {
      question: "Which of the following best describes a mission statement?",
      options: [
        "A detailed plan for achieving specific business objectives",
        "A statement of a company's long-term aspirations",
        "A statement of a company's purpose and primary objectives",
        "A financial forecast for the next fiscal year",
      ],
      correctAnswer: 2,
      explanation:
        "A mission statement is a concise explanation of an organization's purpose and primary objectives. It describes what the company does, who it serves, and its unique value proposition. A vision statement, by contrast, describes a company's long-term aspirations.",
    },
  ]

  // Sample quiz questions for computer science
  const computerScienceQuestions = [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correctAnswer: 1,
      explanation:
        "Binary search has a time complexity of O(log n) because it repeatedly divides the search interval in half. With each step, the algorithm eliminates half of the remaining elements, resulting in a logarithmic time complexity.",
    },
    {
      question: "Which data structure operates on a LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Linked List", "Binary Tree"],
      correctAnswer: 1,
      explanation:
        "A stack operates on the Last In, First Out (LIFO) principle, meaning the last element added to the stack is the first one to be removed. Common operations include push (add an element) and pop (remove the most recently added element).",
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Question Language",
        "System Quality Language",
        "Sequential Query Logic",
      ],
      correctAnswer: 0,
      explanation:
        "SQL stands for Structured Query Language. It is a domain-specific language used for managing and manipulating relational databases, allowing users to query, insert, update, and delete data.",
    },
    {
      question: "Which of the following is NOT a principle of object-oriented programming?",
      options: ["Encapsulation", "Inheritance", "Normalization", "Polymorphism"],
      correctAnswer: 2,
      explanation:
        "Normalization is a database design technique used to organize tables to reduce redundancy and improve data integrity. It is not a principle of object-oriented programming. The main principles of OOP are encapsulation, inheritance, polymorphism, and abstraction.",
    },
    {
      question: "What is the purpose of a RESTful API?",
      options: [
        "To manage database transactions",
        "To provide a standardized way for applications to communicate over HTTP",
        "To encrypt data for secure transmission",
        "To optimize code execution speed",
      ],
      correctAnswer: 1,
      explanation:
        "A RESTful API (Representational State Transfer) provides a standardized way for applications to communicate over HTTP. It uses standard HTTP methods (GET, POST, PUT, DELETE) and follows principles like statelessness and resource-based architecture to enable interoperability between different systems.",
    },
  ]

  useEffect(() => {
    setLoading(true)
    setUserAnswers([])
    setShowResults(false)

    // Simulate API call with timeout
    setTimeout(() => {
      // Select questions based on subject
      if (subject === "business") {
        setQuestions(businessQuestions)
      } else if (subject === "computer-science") {
        setQuestions(computerScienceQuestions)
      } else {
        // Default placeholder questions
        setQuestions([
          {
            question: `What is a key principle in ${subject.replace("-", " ")}?`,
            options: ["Principle A", "Principle B", "Principle C", "Principle D"],
            correctAnswer: 2,
            explanation: `This is a placeholder explanation for a question about ${subject.replace("-", " ")}. In a real quiz, this would provide detailed information about why the correct answer is "Principle C" and explain the concept in depth.`,
          },
          {
            question: `Which methodology is most effective for ${subject.replace("-", " ")}?`,
            options: ["Methodology X", "Methodology Y", "Methodology Z", "None of the above"],
            correctAnswer: 1,
            explanation: `This is a placeholder explanation about methodologies in ${subject.replace("-", " ")}. In a real quiz, this would explain why Methodology Y is the most effective approach and provide context about its applications.`,
          },
        ])
      }

      setUserAnswers(new Array(questions.length).fill(null))
      setLoading(false)
    }, 1500)
  }, [subject, level])

  useEffect(() => {
    // Reset user answers when questions change
    setUserAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
  }, [questions])

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...userAnswers]
    newAnswers[questionIndex] = answerIndex
    setUserAnswers(newAnswers)
  }

  const handleSubmit = () => {
    if (userAnswers.some((answer) => answer === null)) {
      alert("Please answer all questions before submitting.")
      return
    }
    setShowResults(true)
  }

  const calculateScore = () => {
    if (!showResults) return 0
    return userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-zinc-500 mb-4" />
        <p className="text-zinc-600 dark:text-zinc-400">Generating your quiz questions...</p>
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
            <Button
              onClick={() => {
                setUserAnswers(new Array(questions.length).fill(null))
                setShowResults(false)
              }}
              variant="outline"
              className="flex items-center gap-2"
            >
              Try Again
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
