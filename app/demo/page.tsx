"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import DemoRoadmap from "@/components/demo-roadmap"
import DemoMaterials from "@/components/demo-materials"
import DemoQuiz from "@/components/demo-quiz"

export default function DemoPage() {
  const [subject, setSubject] = useState("business")
  const [level, setLevel] = useState("intermediate")

  const subjects = [
    { value: "business", label: "Business" },
    { value: "computer-science", label: "Computer Science" },
    { value: "data-science", label: "Data Science" },
    { value: "design", label: "Design" },
    { value: "mathematics", label: "Mathematics" },
    { value: "languages", label: "Languages" },
  ]

  const levels = [
    { value: "basic", label: "Basic" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Try Our Learning Platform</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Experience how our AI generates personalized learning content based on your selected subject and level
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Customize Your Learning Experience</CardTitle>
              <CardDescription>Select a subject and experience level to see a demo of our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.value} value={subject.value}>
                          {subject.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Experience Level</Label>
                  <Select value={level} onValueChange={setLevel}>
                    <SelectTrigger id="level">
                      <SelectValue placeholder="Select a level" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="roadmap" className="mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="roadmap">Learning Roadmap</TabsTrigger>
              <TabsTrigger value="materials">Learning Materials</TabsTrigger>
              <TabsTrigger value="quiz">Knowledge Quiz</TabsTrigger>
            </TabsList>

            <TabsContent value="roadmap">
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Learning Roadmap</CardTitle>
                  <CardDescription>
                    A step-by-step guide to mastering {subject.replace("-", " ")} at the {level} level
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DemoRoadmap subject={subject} level={level} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Materials</CardTitle>
                  <CardDescription>Comprehensive resources to help you learn key concepts</CardDescription>
                </CardHeader>
                <CardContent>
                  <DemoMaterials subject={subject} level={level} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quiz">
              <Card>
                <CardHeader>
                  <CardTitle>Knowledge Quiz</CardTitle>
                  <CardDescription>Test your understanding with these {level} level questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <DemoQuiz subject={subject} level={level} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="bg-zinc-50 dark:bg-zinc-800 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
              Sign up today to get full access to personalized roadmaps, materials, and quizzes for any subject you want
              to learn.
            </p>
            <Button asChild size="lg">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
