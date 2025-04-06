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
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <a
                href="mailto:info@ascaust.com.au?subject=Join%20ASCA&body=I%20am%20interested%20in%20joining%20ASCA.%20Please%20send%20me%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Community
              </a>
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
            <Button className="bg-secondary hover:bg-secondary/90">
              View Full Gallery <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
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
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a
                  href="mailto:info@ascaust.com.au?subject=Join%20ASCA&body=I%20am%20interested%20in%20joining%20ASCA.%20Please%20send%20me%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Our Community
                </a>
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
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
              >

                <a
                  href="mailto:info@ascaust.com.au?subject=Join%20ASCA&body=I%20am%20interested%20in%20joining%20ASCA.%20Please%20send%20me%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Volunteer
                </a>
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
                    {/* <p className="text-foreground">+61 3 1234 5678</p> */}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <Link target="_blank" href="https://www.facebook.com/ascaust" className="text-foreground hover:text-secondary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
                {/* <Link href="#" className="text-foreground hover:text-secondary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </Link>
                <Link href="#" className="text-foreground hover:text-secondary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-foreground hover:text-secondary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link> */}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

