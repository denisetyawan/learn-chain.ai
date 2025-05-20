import Link from "next/link"
import { ArrowRight, BookOpen, Map, FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FeatureSection from "@/components/feature-section"
import TestimonialSection from "@/components/testimonial-section"
import HeroSection from "@/components/hero-section"
import SubjectGrid from "@/components/subject-grid"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Platform Works</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Our AI-powered platform generates personalized learning experiences tailored to your field and experience
              level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="bg-emerald-100 dark:bg-emerald-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                </div>
                <CardTitle>Personalized Roadmaps</CardTitle>
                <CardDescription>
                  AI-generated learning paths tailored to your chosen field and experience level
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Our advanced AI analyzes the most effective learning sequences and creates a step-by-step roadmap with
                  estimated completion times and prerequisites.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle>Learning Materials</CardTitle>
                <CardDescription>Comprehensive resources and tutorials to help you master each concept</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Access detailed explanations, examples, case studies, and recommended resources for each topic in your
                  learning journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileQuestion className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <CardTitle>Interactive Quizzes</CardTitle>
                <CardDescription>
                  Test your knowledge with AI-generated quizzes and get immediate feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Reinforce your learning with adaptive quizzes that adjust to your knowledge level and provide detailed
                  explanations for each answer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FeatureSection />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Learning Paths Across All Fields</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Our platform supports learning in any subject area, from academic disciplines to professional skills
            </p>
          </div>

          <SubjectGrid />

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/subjects">
                View All Subjects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <CTASection />
    </div>
  )
}
