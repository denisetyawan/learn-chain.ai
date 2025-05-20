import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const fields = [
  {
    title: "Database Management",
    description: "Learn to design, implement, and manage database systems",
    slug: "database-management",
  },
  {
    title: "IT Infrastructure",
    description: "Master networking, cloud computing, and system administration",
    slug: "it-infrastructure",
  },
  {
    title: "System Analyst",
    description: "Analyze and design information systems to meet business needs",
    slug: "system-analyst",
  },
  {
    title: "Product Management",
    description: "Guide product development from conception to launch",
    slug: "product-management",
  },
  {
    title: "Frontend Developer",
    description: "Create responsive and interactive user interfaces",
    slug: "frontend-developer",
  },
  {
    title: "Backend Developer",
    description: "Build server-side logic and APIs for web applications",
    slug: "backend-developer",
  },
  {
    title: "UI/UX Designer",
    description: "Design intuitive and engaging user experiences",
    slug: "ui-ux-designer",
  },
  {
    title: "Cybersecurity",
    description: "Protect systems and data from security threats",
    slug: "cybersecurity",
  },
  {
    title: "Data Scientist",
    description: "Extract insights and knowledge from structured and unstructured data",
    slug: "data-scientist",
  },
  {
    title: "Data Engineer",
    description: "Build and maintain data pipelines and infrastructure",
    slug: "data-engineer",
  },
  {
    title: "AI Engineer",
    description: "Develop and implement artificial intelligence solutions",
    slug: "ai-engineer",
  },
  {
    title: "Mobile Developer",
    description: "Create applications for iOS, Android, and cross-platform",
    slug: "mobile-developer",
  },
  {
    title: "Quality Assurance",
    description: "Ensure software quality through testing and automation",
    slug: "quality-assurance",
  },
]

export default function FieldsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your IT Field</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Select the field you want to learn about to get a personalized roadmap
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fields.map((field) => (
          <Link key={field.slug} href={`/fields/${field.slug}`} className="block">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{field.title}</CardTitle>
                <CardDescription>{field.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Select
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
