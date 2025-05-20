import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Server,
  LineChart,
  Palette,
  Calculator,
  Microscope,
  GraduationCap,
  Briefcase,
  Heart,
  Scale,
  Globe,
  Leaf,
} from "lucide-react"

export default function SubjectGrid() {
  const subjects = [
    { name: "Computer Science", icon: <Code className="h-6 w-6" />, slug: "computer-science" },
    { name: "Data Science", icon: <LineChart className="h-6 w-6" />, slug: "data-science" },
    { name: "Business", icon: <Briefcase className="h-6 w-6" />, slug: "business" },
    { name: "Design", icon: <Palette className="h-6 w-6" />, slug: "design" },
    { name: "Mathematics", icon: <Calculator className="h-6 w-6" />, slug: "mathematics" },
    { name: "Medicine", icon: <Heart className="h-6 w-6" />, slug: "medicine" },
    { name: "Law", icon: <Scale className="h-6 w-6" />, slug: "law" },
    { name: "Languages", icon: <Globe className="h-6 w-6" />, slug: "languages" },
    { name: "Engineering", icon: <Server className="h-6 w-6" />, slug: "engineering" },
    { name: "Science", icon: <Microscope className="h-6 w-6" />, slug: "science" },
    { name: "Education", icon: <GraduationCap className="h-6 w-6" />, slug: "education" },
    { name: "Environmental Studies", icon: <Leaf className="h-6 w-6" />, slug: "environmental-studies" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {subjects.map((subject) => (
        <Link key={subject.slug} href={`/subjects/${subject.slug}`} className="block">
          <Card className="h-full hover:shadow-md transition-shadow border-zinc-200 dark:border-zinc-800">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3 text-emerald-600 dark:text-emerald-400">
                {subject.icon}
              </div>
              <p className="font-medium text-sm">{subject.name}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
