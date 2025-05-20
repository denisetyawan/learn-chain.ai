import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "This platform completely transformed how I approach learning new subjects. The personalized roadmap saved me countless hours of research.",
      author: "Sarah Johnson",
      role: "Marketing Professional",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a lifelong learner, I've tried many educational platforms. This one stands out for its ability to create truly customized learning experiences.",
      author: "Michael Chen",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The quizzes and materials adapt perfectly to my knowledge level. I'm learning faster than ever before with this platform.",
      author: "Emily Rodriguez",
      role: "Medical Student",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Thousands of learners are accelerating their education with our AI-powered platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mb-4 text-zinc-600 dark:text-zinc-400">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
