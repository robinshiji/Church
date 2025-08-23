import { Card, CardContent } from "@/components/ui/card"

export function ImageGallery() {
  const galleryImages = [
    {
     
      image: "/church-congregation-service.jpg",
     
    },
    {
      
      image: "/",
      
    },
    {
      
      image: "/",
      
    },
    {
      
      image: "/",
      
    },
    {
     
      image: "/",
     
    },
    {
     
      image: "/",
      
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">From The Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a glimpse into our vibrant church community through these moments of worship, fellowship, and service
            that define who we are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative">
              <img src={item.image || "/placeholder.svg"}  className="w-full h-70 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                   {/*} <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>*/}
                  </div>
                </div>
              </div>
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
