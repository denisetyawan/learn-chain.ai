import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[calc(50%-500px)] top-[calc(50%-500px)] w-[1000px] h-[1000px] bg-gradient-radial from-emerald-200/20 to-transparent opacity-50 dark:from-emerald-900/20"></div>
        <div className="absolute right-[calc(50%-400px)] bottom-[calc(50%-400px)] w-[800px] h-[800px] bg-gradient-radial from-blue-200/20 to-transparent opacity-50 dark:from-blue-900/20"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
            Introducing AI-Powered Learning Paths
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Master Any Subject with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
              Personalized
            </span>{" "}
            Learning Roadmaps
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            Our AI platform generates customized learning paths, comprehensive materials, and interactive quizzes for
            any field at your experience level.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/demo">
                Try Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
