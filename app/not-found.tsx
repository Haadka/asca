import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-24 flex-1 bg-white somaliland-pattern">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold tracking-tight mb-6 text-primary">404</h1>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">Page Not Found</h2>
            <p className="text-lg text-foreground mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
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

