"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ASCALogo } from "./asca-logo"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <ASCALogo showText={false} size="sm" />
            <span className="hidden font-serif text-xl font-bold text-white md:inline-block">
              Association of Somaliland Community in Australia
            </span>
            <span className="font-serif text-xl font-bold text-white md:hidden">ASCA</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white hover:text-accent transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-accent transition-colors font-medium">
            About Us
          </Link>
          <Link href="/events" className="text-white hover:text-accent transition-colors font-medium">
            Events
          </Link>
          <Link href="/gallery" className="text-white hover:text-accent transition-colors font-medium">
            Gallery
          </Link>
          <Link href="/resources" className="text-white hover:text-accent transition-colors font-medium">
            Resources
          </Link>
          <Link href="/contact" className="text-white hover:text-accent transition-colors font-medium">
            Contact
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-primary">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Somali</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-secondary hover:bg-secondary/90">Join Us</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="container py-4 flex flex-col gap-2">
            <Link
              href="/"
              className="text-white hover:text-accent py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/events"
              className="text-white hover:text-accent py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-accent py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-accent py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-accent py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex items-center gap-4 pt-2 border-t border-primary-foreground/10 mt-2">
              <Button variant="ghost" size="sm" className="text-white hover:text-accent hover:bg-primary">
                <Globe className="h-4 w-4 mr-2" />
                English
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-accent hover:bg-primary">
                <Globe className="h-4 w-4 mr-2" />
                Somali
              </Button>
            </div>

            <Button className="bg-secondary hover:bg-secondary/90 mt-2">Join Us</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

