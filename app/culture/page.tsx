import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Music, Utensils, Landmark, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CulturePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.42.53%20PM%20%282%29-Tq6NK4EBWEUZBGXbfDYZQMA4UGfbXL.jpeg"
          alt="Somaliland Cultural Dance"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Somaliland Culture & Heritage
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            Exploring the rich traditions, arts, and customs of Somaliland
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white somaliland-pattern">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">Our Cultural Heritage</h2>
            <p className="text-lg text-foreground mb-6">
              Somaliland has a rich cultural heritage dating back thousands of years, with traditions shaped by nomadic
              pastoralism, trade, and Islamic influences. Our culture is expressed through poetry, music, dance,
              cuisine, and crafts that have been preserved across generations.
            </p>
            <p className="text-lg text-foreground">
              At ASCA, we are committed to preserving and sharing these cultural traditions with both our community and
              the broader Australian society, fostering understanding and appreciation of Somaliland's unique heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Elements Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Elements of Our Culture</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground">
              Discover the diverse aspects of Somaliland's cultural traditions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.42.52%20PM%20%281%29-9iKcW1Dgi3AIV3p72qk307rC7fMDV7.jpeg"
                  alt="Somaliland Music"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Music className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Music & Poetry</h3>
                </div>
                <p className="text-foreground mb-4">
                  Somaliland has a rich tradition of oral poetry and music, with various forms including gabay, geeraar,
                  and buraanbur. Traditional instruments like the oud (kaban) and drums accompany performances that tell
                  stories of history, love, and social commentary.
                </p>
                <Link href="#" className="text-secondary font-medium hover:underline inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2011.42.50%20PM-pAEY8HxsBz3oAcFL8FOADNEiUvvbUm.jpeg"
                  alt="Traditional Dwelling"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Landmark className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Traditional Dwellings</h3>
                </div>
                <p className="text-foreground mb-4">
                  The nomadic heritage of Somaliland is reflected in traditional portable dwellings like the aqal, a
                  dome-shaped structure made from bent saplings covered with woven mats and animal hides. These
                  ingenious structures are designed for mobility and protection from the elements.
                </p>
                <Link href="#" className="text-secondary font-medium hover:underline inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Somaliland Cuisine"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Utensils className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Cuisine</h3>
                </div>
                <p className="text-foreground mb-4">
                  Somaliland cuisine features aromatic rice dishes, savory stews, and flatbreads. Popular dishes include
                  bariis iskukaris (rice with spices), hilib ari (goat meat), and Laxoox(sourdough pancakes). Meals
                  are often accompanied by spiced tea (shaah) and fresh fruits.
                </p>
                <Link href="#" className="text-secondary font-medium hover:underline inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Somaliland Traditional Clothing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Clothing & Crafts</h3>
                </div>
                <p className="text-foreground mb-4">
                  Traditional Somaliland clothing includes colorful dirac (dresses) for women and macawis (sarongs) with
                  shirts for men. Intricate handicrafts include woven baskets, carved wooden utensils, and leather goods
                  that showcase the artistic skills passed down through generations.
                </p>
                <Link href="#" className="text-secondary font-medium hover:underline inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}

