import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">Get In Touch</h2>
              <p className="text-lg text-foreground mb-8">
                Have questions or want to learn more about ASCA? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Address</h3>
                    <p className="text-foreground">123 Community Street, Melbourne, VIC 3000, Australia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Email</h3>
                    <p className="text-foreground">info@ascaustralia.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Phone</h3>
                    <p className="text-foreground">+61 3 1234 5678</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6 bg-white p-8 rounded-lg shadow-md border border-border">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full rounded-md border border-border px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full rounded-md border border-border px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-border px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-md border border-border px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-border px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  ></textarea>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Our Location</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground">Visit our community center in Melbourne</p>
          </div>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for a map - in a real implementation, this would be a Google Maps or similar embed */}
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <p className="text-lg font-medium text-primary">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary text-center">Office Hours</h2>
            <div className="bg-white p-8 rounded-lg shadow-md border border-border">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 text-center text-muted-foreground">
                <p>Please note that our office may be closed on public holidays.</p>
                <p>For urgent inquiries outside office hours, please email us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

