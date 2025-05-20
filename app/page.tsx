"use client" // Add this directive at the top

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, ChevronRight, Star, BookOpen, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.44.19%20PM%20%281%29-s7rCmIHO39DDQ4ZhsQDegdOMOhoj6a.jpeg"
          alt="ASCA members at a formal event"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            The Association of Somaliland Community in Australia
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            Preserving our heritage, building our future, and strengthening the Somaliland community in Australia
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
              <Link href="/membership">Join Our Community</Link>
            </Button>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <a
                href="https://www.facebook.com/ascaust"
                target="_blank"
                rel="noopener noreferrer"
              >
                Latest on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white somaliland-pattern">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">About ASCA</h2>
              <p className="text-lg text-foreground mb-6">
                The Association of Somaliland Community in Australia (ASCA) is a vital part of the Somaliland diaspora
                in Australia, focused on cultural preservation, community support, and advocacy for Somaliland.
              </p>
              <p className="text-lg text-foreground mb-6">
                Our mission is to unite the Somaliland community in Australia, preserve our rich cultural heritage, and
                create opportunities for cultural exchange and integration.
              </p>
              <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">

                <Button className="bg-primary hover:bg-primary/90">
                  Our History<ChevronRight className="ml-2 h-4 w-4" />

                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="asca-(2).jpeg"
                alt="ASCA representatives"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Values Section */}
      <section className="py-16 bg-muted cultural-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Our Cultural Values</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground">
              Celebrating the rich heritage and traditions of Somaliland while embracing Australian multiculturalism
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Heritage</h3>
              <p className="text-foreground">
                Preserving and celebrating Somaliland's rich cultural traditions, language, and history.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Community</h3>
              <p className="text-foreground">
                Building strong connections among Somaliland Australians and the broader community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <BookOpen className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Education</h3>
              <p className="text-foreground">
                Promoting knowledge sharing and educational opportunities for our community members.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Unity</h3>
              <p className="text-foreground">Fostering unity, respect, and cooperation within our diverse community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's On Section */}
      <section id="whatson" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">What's On</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground">
              Upcoming community events and important dates.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 justify-center">
            <Card className="max-w-2xl mx-auto w-full overflow-hidden border-2 border-secondary/20 hover:border-secondary transition-colors">
              <div className="relative h-72 md:h-96"> {/* Added relative positioning and height */}
                <Image
                  src="/202518may.jpg" // Path relative to the public folder
                  alt="Reclamation of Independence Day Event"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-secondary">Reclamation of Independence</h3>
                <div className="flex items-center text-foreground mb-2">
                  <Calendar className="h-5 w-5 mr-2 text-secondary" />
                  <span>Date: May 24, 2025</span>
                </div>
                <div className="flex items-center text-foreground mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-secondary" />
                  <span>Location: Broadmeadows</span>
                </div>
                <p className="text-foreground">
                  Come celebrate Somaliland's 34th Reclamation of Independence Day with us, as we honor our history and culture in a lively in-person event!
                </p>
                <div className="mt-6 text-center">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                    <Link href="https://www.eventbrite.com.au/e/somalilands-34th-reclamation-of-independence-day-tickets-1349487887599?aff=ebdsshios&fbclid=IwY2xjawKZaOxleHRuA2FlbQIxMABicmlkETFVZTlJZU5sY2pnMG14d1BNAR6GDvlTlhtp9VZL5-iSwG9ILFPwgJ4TtrJuRc3T33bNiEF7aK8F933osPmsIw_aem_I5_RfXQhpSjwOBp7odVDAw" target="_blank" rel="noopener noreferrer">
                      View Event & Get Tickets
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Our Cultural Events</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground">
              We organize various cultural events throughout the year to celebrate and share Somaliland's rich heritage
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.42.52%20PM%20%281%29-9iKcW1Dgi3AIV3p72qk307rC7fMDV7.jpeg"
                  alt="Somaliland Cultural Night - Musical Performance"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Somaliland Cultural Night</h3>
                <p className="text-foreground mb-4">
                  An evening of traditional music, dance, and cuisine celebrating the rich cultural heritage of
                  Somaliland.
                </p>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Bi-annual</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors">
              <div className="relative h-64">
                <Image
                  src="asca-(12).jpg"
                  alt="18 May celebrations"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">18 May Celebrations</h3>
                <p className="text-foreground mb-4">
                  Honour the historic day with cultural festivities, including honorable guests, elders and community leaders.</p>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Annual Event</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors">
              <div className="relative h-64">
                <Image
                  src="asca-(11).jpg"
                  alt="Book Launch & Intellectual Evenings"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Book Launch & Intellectual Evenings</h3>
                <p className="text-foreground mb-4">
                  Engage with thought-provoking discussions, literary showcases, and book launches celebrating Somaliland’s rich intellectual and cultural heritage.
                </p>

                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Quarterly</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-secondary hover:bg-secondary/90">
              <Link target="_blank" href="https://www.facebook.com/ascaust/events" className="text-white">
                Events on Facebook
              </Link>
            </Button>
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
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.42.53%20PM-IEFiEMHx3u6o0dATqBReeKA8LaURvg.jpeg"
                alt="Musical performance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.42.52%20PM-KzApRfLKS8qAJY936MZkxJCTBkB1vS.jpeg"
                alt="Cultural performance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.42.51%20PM%20%282%29-ebo0COmFz8XThAAVqDK1IMoZiSbEQD.jpeg"
                alt="Community gathering"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.42.50%20PM%20%282%29-A9iH7zQu19wUWdayko6brUAlm297jj.jpeg"
                alt="Cultural exchange"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.42.51%20PM%20%284%29-3ffFKwPK1M28StLPlFqFUCPHid3v1W.jpeg"
                alt="Art exhibition"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.44.19%20PM%20%281%29-s7rCmIHO39DDQ4ZhsQDegdOMOhoj6a.jpeg"
                alt="Formal gathering"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="text-white">
              <Button className="bg-secondary hover:bg-secondary/90">
                View Full Gallery <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-white somaliland-pattern">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Get Involved</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground">
              Join our community and help us preserve and promote Somaliland culture in Australia
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center p-6 border-2 border-primary/20 hover:border-primary transition-colors">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Become a Member</h3>
              <p className="text-foreground mb-4">
                Join ASCA and connect with the Somaliland community in Australia. Enjoy member benefits and support our
                initiatives.
              </p>
              <Button
                asChild // Added asChild to allow Link to take over
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/membership">Join Our Community</Link>
              </Button>
            </Card>

            <Card className="text-center p-6 border-2 border-primary/20 hover:border-primary transition-colors">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Volunteer</h3>
              <p className="text-foreground mb-4">
                Contribute your skills and time to help organize our events and support community initiatives.
              </p>
              <Button
                asChild // Added asChild to allow Link to take over
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                <Link href="/membership">Volunteer</Link>
              </Button>
            </Card>

            <Card className="text-center p-6 border-2 border-primary/20 hover:border-primary transition-colors">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <MapPin className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Attend Events</h3>
              <p className="text-foreground mb-4">
                Participate in our cultural events, workshops, and community gatherings throughout Australia.
              </p>
              <Button
                variant="outline"
                className="w-full border-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <a
                  href="https://www.facebook.com/ascaust"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Upcoming Events
                </a>

              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted cultural-border">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">Contact Us</h2>
              <p className="text-lg text-foreground mb-8">
                Have questions or want to learn more about ASCA? Get in touch with us.
              </p>

              <div className="space-y-4">
                {/* <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Address</h3>
                    <p className="text-foreground">123 Community Street, Melbourne, VIC 3000, Australia</p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Email</h3>
                    <p className="text-foreground">info@ascaust.com.au</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Phone</h3>
                    <p className="text-foreground">04 5253 4377</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/membership">Join Our Community</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href="/donate">Support Our Mission</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

