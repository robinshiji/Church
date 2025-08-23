import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/church-sanctuary.png"
          alt="St John Baptist Church sanctuary"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
          St. John Baptist Church
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">A Place of Faith and Fellowship</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Join Us This Sunday
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  )
}
