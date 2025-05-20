import { Brain, Sparkles, Users, Zap, Globe, Clock } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Advanced AI Technology",
      description: "Powered by state-of-the-art large language models to create human-quality learning content",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Personalized Experience",
      description: "Content tailored to your specific learning goals, experience level, and preferred learning style",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert-Verified Content",
      description: "Learning materials reviewed by subject matter experts to ensure accuracy and quality",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Adaptive Learning",
      description: "Quizzes and materials that adapt to your progress and focus on areas that need improvement",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Universal Subject Coverage",
      description: "Support for virtually any field of study or professional development area",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time-Optimized Paths",
      description: "Learning sequences designed to maximize knowledge acquisition in minimal time",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Platform</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Our AI-powered learning platform offers unique advantages that traditional learning resources can't match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
