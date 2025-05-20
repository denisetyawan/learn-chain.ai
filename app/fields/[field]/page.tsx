import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FieldPage({ params }: { params: { field: string } }) {
  const fieldName = params.field.replace(/-/g, " ")
  const formattedFieldName = fieldName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/fields" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Fields
          </Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{formattedFieldName}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Choose your experience level to get a personalized learning roadmap
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Link href={`/fields/${params.field}/basic`}>
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>For beginners with little to no experience in the field</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">
                Select
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link href={`/fields/${params.field}/intermediate`}>
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Intermediate</CardTitle>
              <CardDescription>For those with some experience who want to deepen their knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">
                Select
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link href={`/fields/${params.field}/advanced`}>
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Advanced</CardTitle>
              <CardDescription>For experienced professionals looking to master advanced concepts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">
                Select
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
