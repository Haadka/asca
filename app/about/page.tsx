import Image from "next/image"
import { ChevronRight } from "lucide-react"


import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-16 cultural-border">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">About ASCA</h1>
            <p className="max-w-3xl mx-auto text-lg text-foreground">
              The Association of Somaliland Community in Australia (ASCA) is dedicated to preserving Somaliland culture,
              supporting our community, and building bridges between Somaliland and Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Our Logo Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/467018227_582193477822795_5511099324473018275_n.jpg-M3StSO1ktpxNCHO4cAi4STSTObjOtM.jpeg"
                alt="Association of Somaliland Community in Australia Logo"
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">Our Logo</h2>
              <p className="text-lg text-foreground mb-4">
                Our logo symbolizes the cultural fusion between Somaliland and Australia:
              </p>
              <ul className="space-y-3 text-foreground mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The <strong className="text-secondary">red antelope</strong> represents Somaliland's wildlife and
                    cultural heritage
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The <strong className="text-accent-foreground">yellow kangaroo</strong> symbolizes Australia, our
                    new home
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The <strong className="text-primary">green shield and star</strong> reflect Somaliland's national
                    symbols
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Together, they represent our community's dual identity and cultural pride</span>
                </li>
              </ul>
              <p className="text-lg text-foreground mb-6">
                This emblem stands for our mission to preserve Somaliland heritage while embracing Australian
                multiculturalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-muted somaliland-pattern">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-primary">Our Mission</h2>
              <p className="text-foreground mb-4">
                To unite the Somaliland community in Australia, preserve our rich cultural heritage, and create
                opportunities for cultural exchange and integration.
              </p>
              <p className="text-foreground">
                We strive to support community members through education, advocacy, and social services while promoting
                awareness of Somaliland's unique identity and aspirations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-primary">Our Vision</h2>
              <p className="text-foreground mb-4">
                A thriving Somaliland-Australian community that celebrates its cultural heritage, contributes positively
                to Australian society, and maintains strong connections to Somaliland.
              </p>
              <p className="text-foreground">
                We envision a future where our community members achieve their full potential while serving as cultural
                ambassadors between Somaliland and Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary text-center">Our History</h2>
            <div className="space-y-8">
              <div className="relative pl-10 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2 text-primary">Founding (2022)</h3>
                <p className="text-foreground">
                  ASCA was established by a small group of Asutralian Somalilanders in Melbourne who recognized the need
                  for a community organization to preserve cultural identity and provide support to new arrivals.
                </p>
              </div>

              <div className="relative pl-10 border-l-2 border-primary/30">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2 text-primary">Growth & Development (2022-2024)</h3>
                <p className="text-foreground">
                  During these formative years, ASCA expanded its membership and established key programs including
                  18 May celebrations, cultural events, and community support services.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2 text-primary">Present Day</h3>
                <p className="text-foreground">
                  Today, ASCA continues to grow and evolve, focusing on youth engagement, cultural preservation, and
                  advocacy while strengthening ties between Somaliland and Australia through cultural diplomacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-muted cultural-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Our Leadership</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground">
              Meet the dedicated team guiding our community organization
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 overflow-hidden rounded-full">
                <Image src="/pres.png?height=160&width=160" alt="Secretary" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-primary">Ahmed Shawky</h3>
              <p className="text-secondary font-medium mb-3">Secretary</p>
              <p className="text-foreground text-sm">
                Leading ASCA's mission to preserve Somaliland culture and support our community in Australia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/vice.png?height=160&width=160"
                  alt="Vice Chairperson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-primary">Hamse Mohamud Mohamed (Hamse Afyare)</h3>
              <p className="text-secondary font-medium mb-3">President</p>
              <p className="text-foreground text-sm">
                Coordinating ASCA's programs and initiatives to strengthen our community connections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 overflow-hidden rounded-full">
                <Image src="/sec.png?height=160&width=160" alt="Secretary" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-primary">Hamza Kilas</h3>
              <p className="text-secondary font-medium mb-3">Vice President</p>
              <p className="text-foreground text-sm">
                Managing ASCA's communications and administrative functions to serve our members effectively.
              </p>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <Button className="bg-secondary hover:bg-secondary/90">
              Meet Our Full Team <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </section>


    </div>
  )
}

