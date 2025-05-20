import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RoadmapGenerator from "@/components/roadmap-generator"
import MaterialGenerator from "@/components/material-generator"
import QuizGenerator from "@/components/quiz-generator"

export default function LevelPage({
  params,
}: {
  params: { field: string; level: string }
}) {
  const fieldName = params.field.replace(/-/g, " ")
  const formattedFieldName = fieldName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const formattedLevel = params.level.charAt(0).toUpperCase() + params.level.slice(1)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href={`/fields/${params.field}`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to {formattedFieldName}
          </Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{formattedFieldName}</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-4">{formattedLevel} Level</p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Explore your personalized learning journey with roadmaps, materials, and quizzes
        </p>
      </div>

      <Tabs defaultValue="roadmap" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="materials">Learning Materials</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="roadmap">
          <Card>
            <CardHeader>
              <CardTitle>Learning Roadmap</CardTitle>
              <CardDescription>
                Your personalized path to mastering {formattedFieldName} at the {formattedLevel} level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RoadmapGenerator field={params.field} level={params.level} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials">
          <Card>
            <CardHeader>
              <CardTitle>Learning Materials</CardTitle>
              <CardDescription>Comprehensive resources to help you learn each concept</CardDescription>
            </CardHeader>
            <CardContent>
              <MaterialGenerator field={params.field} level={params.level} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quiz">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Quiz</CardTitle>
              <CardDescription>
                Test your understanding with these {formattedLevel.toLowerCase()} level questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuizGenerator field={params.field} level={params.level} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
