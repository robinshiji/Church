import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ChoirPage() {
  const choirMembers = [
    {
      name: "img1",
      role: "",
      image: "/placeholder-logo.png",
    },
    {
      name: "img2",
      role: "",
      image: "/friendly-music-minister.png",
    },
    {
      name: "img3",
      role: "",
      image: "/young-soprano-choir.png",
    },
    {
      name: "img4",
      role: "",
      image: "/mature-bass-singer-church.png",
    },
  ]

  const choirEvents = [
    {
      title: "Sunday Worship Service",
      image: "/church-choir-congregation.png",
    },
    {
      title: "Christmas Concert",
      image: "/church-choir-christmas.png",
    },
    {
      title: "Easter Celebration",
      image: "/easter-choir.png",
    },
    {
      title: "Community Outreach Concert",
      image: "/outdoor-choir-performance.png",
    },
    {
      title: "Choir Practice Session",
      image: "/choir-rehearsal.png",
    },
    {
      title: "Wedding Ceremony",
      image: "/church-wedding-choir.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">CML</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, saepe perspiciatis! Dignissimos sapiente quia, tempora vitae quae perferendis perspiciatis nam obcaecati quas voluptatem illum quaerat esse, ad sequi odio dolorum!
          
          </p>
        </div>
      </section>

      {/* Choir Leadership Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
           The strengths of Our Community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {choirMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-primary mb-2">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choir Events Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Events</h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {choirEvents.map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{event.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  )
}
