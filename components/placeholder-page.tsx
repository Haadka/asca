import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PlaceholderPageProps {
  title: string
  description: string
  comingSoon?: boolean
}

export function PlaceholderPage({ title, description, comingSoon = true }: PlaceholderPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-16 cultural-border">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">{title}</h1>
            <p className="max-w-3xl mx-auto text-lg text-foreground">{description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 flex-1 bg-white somaliland-pattern">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {comingSoon ? (
              <>
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">Coming Soon</h2>
                <p className="text-lg text-foreground mb-8">
                  We're currently working on this page. Please check back soon for updates!
                </p>
              </>
            ) : (
              <p className="text-lg text-foreground mb-8">
                This page is under construction. Content will be available shortly.
              </p>
            )}
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/" className="inline-flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Return to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

