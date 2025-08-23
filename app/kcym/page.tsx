import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function YouthMinistryPage() {
  const administrators = [
    {
      name: "Rijo John Shiji",
      role: "President",
      image: "/young-friendly-pastor.png",
    },
    {
      name: "kelvin Michacel",
      role: "Treasurey",
      image: "/young-woman-church-coordinator.png",
    },
    {
      name: "David Chen",
      role: "Youth Activities Director",
      image: "/young-man-youth-director.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Youth Counselor",
      image: "/young-woman-youth-counselor.png",
    },
  ]

  const eventImages = [
    {
      src: "/youth-bible-study.png",
      title: "Bible Study Sessions",
      description: "Weekly interactive Bible study for teens",
    },
    {
      src: "/youth-group-camping.png",
      title: "Summer Camp",
      description: "Annual youth camping and retreat",
    },
    {
      src: "/youth-community-service.png",
      title: "Community Service",
      description: "Serving our local community together",
    },
    {
      src: "/youth-worship.png",
      title: "Youth Worship",
      description: "Contemporary worship and praise sessions",
    },
    {
      src: "/youth-group-sports-games.png",
      title: "Sports & Games",
      description: "Fun activities and team building",
    },
    {
      src: "/placeholder-fbh98.png",
      title: "Mission Trips",
      description: "Local and international mission work",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Kerala Catholic Youth Congress(KCYM)</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering young hearts to grow in faith, fellowship, and service to God and community.
          </p>
        </div>
      </section>

      {/* Administrators Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Meet Our Team Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who guide and mentor our youth in their spiritual journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {administrators.map((admin, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={admin.image || "/placeholder.svg"}
                      alt={admin.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{admin.name}</h3>
                  <p className="text-secondary font-medium">{admin.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Youth Ministry Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the vibrant activities and events that bring our youth together in faith and fellowship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventImages.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={event.src || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-lg font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
