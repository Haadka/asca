import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-16 cultural-border">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">Contact Us</h1>
            <p className="max-w-3xl mx-auto text-lg text-foreground">
              Get in touch with ASCA for inquiries, support, or to learn more about our community.
            </p>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="py-16 bg-muted cultural-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Gallery</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground">
              Moments captured from our community events and activities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(26)].map((_, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`/asca- (${index + 1}).jpeg`}
                  alt={`Event image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"

                />
              </div>
            ))}
          </div>



          <div className="text-center mt-12">
            <Link href="/" className="flex items-center justify-center">

              <Button className="bg-secondary hover:bg-secondary/90">
                Back to homepage <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

