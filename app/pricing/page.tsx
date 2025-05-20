import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic access to get started with learning roadmaps",
      features: ["3 learning roadmaps per month", "Basic learning materials", "5 quizzes per month", "Email support"],
      cta: "Get Started",
      href: "/signup",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Everything you need for serious learning",
      features: [
        "Unlimited learning roadmaps",
        "Comprehensive learning materials",
        "Unlimited quizzes",
        "Progress tracking",
        "Priority support",
        "Downloadable resources",
      ],
      cta: "Start Pro Plan",
      href: "/signup?plan=pro",
      popular: true,
    },
    {
      name: "Team",
      price: "$49",
      period: "per month",
      description: "Perfect for teams and organizations",
      features: [
        "All Pro features",
        "Team management dashboard",
        "Shared learning paths",
        "Team progress analytics",
        "Custom learning domains",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      href: "/contact",
      popular: false,
    },
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
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Choose the plan that's right for your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${plan.popular ? "border-emerald-500 dark:border-emerald-500 shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <div className="bg-emerald-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-zinc-500 dark:text-zinc-400 ml-1">{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${plan.popular ? "bg-emerald-500 hover:bg-emerald-600" : ""}`}>
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-zinc-50 dark:bg-zinc-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Can I switch plans later?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Yes, all paid plans come with a 14-day free trial so you can test all features before committing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How do team accounts work?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Team accounts allow you to add multiple users under one billing account with centralized management
                  and analytics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  We accept all major credit cards, PayPal, and offer invoice payment options for Team plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
