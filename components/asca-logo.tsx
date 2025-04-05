import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function ASCALogo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 40, height: 40 },
    md: { width: 60, height: 60 },
    lg: { width: 120, height: 120 },
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative" style={{ width: sizes[size].width, height: sizes[size].height }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/467018227_582193477822795_5511099324473018275_n.jpg-M3StSO1ktpxNCHO4cAi4STSTObjOtM.jpeg"
          alt="Association of Somaliland Community in Australia Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="ml-3 hidden md:block">
          <h1 className="font-serif text-lg font-bold leading-tight">
            Association of Somaliland
            <br />
            Community in Australia
          </h1>
        </div>
      )}
    </div>
  )
}

