import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const administrators = [
    {
      name: "Rev.Fr Thomas Cheruparambil",
      role: "Vicar",
      image: "/fr. cheruparambil.jpg",
    },
    {
      name: "Rev.Fr Paul Choorathotty",
      role: "Assistant Vicar",
      image: "/",
    },
    {
      name: "",
      role: "",
      image: "/",
    },
    {
      name: "",
      role: "",
      image: "/",
    },
  ]

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            St. John Baptist Church has been serving our community for over 50 years, providing spiritual guidance,
            fellowship, and support to all who seek God's love and grace.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold text-center mb-8">Our Administrators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {administrators.map((admin, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={admin.image || "/placeholder.svg"}
                      alt={admin.name}
                      className="w-90 h-90 mx-auto "
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{admin.name}</h4>
                  <p className="text-muted-foreground">{admin.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
