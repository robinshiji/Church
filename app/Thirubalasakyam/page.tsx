import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CharityWorksPage() {
  const charityLeaders = [
    {
      name: "name1",
      role: "",
      image: "/charity-director.png",
    },
    {
      name: "name2",
      role: "",
      image: "/food-bank-coordinator.png",
    },
    {
      name: "name3",
      role: "",
      image: "/community-outreach-leader.png",
    },
    {
      name: "name4",
      role: "",
      image: "/volunteer-coordinator.png",
    },
  ]

  const charityPrograms = [
    {
      title: "Food Bank Distribution",
      image: "/food-bank-distribution.png",
    },
    {
      title: "Clothing Drive",
      image: "/clothing-drive.png",
    },
    {
      title: "Homeless Shelter Support",
      image: "/homeless-shelter-support.png",
    },
    {
      title: "Senior Care Visits",
      image: "/senior-care-visits.png",
    },
    {
      title: "Children's Toy Drive",
      image: "/toy-drive.png",
    },
    {
      title: "Community Garden",
      image: "/community-garden.png",
    },
  ]

  const programs = [
    {
      title: "Weekly Food Bank",
      schedule: "Every Saturday, 10:00 AM - 2:00 PM",
      description: "Providing groceries and essential items to families in need within our community.",
      impact: "Serves 150+ families monthly",
    },
    {
      title: "Clothing Ministry",
      schedule: "First Sunday of each month",
      description: "Free clothing distribution for all ages, including professional attire for job seekers.",
      impact: "Helped 500+ individuals this year",
    },
    {
      title: "Homeless Outreach",
      schedule: "Every Friday evening",
      description: "Hot meals, blankets, and care packages distributed to our homeless neighbors.",
      impact: "Serves 75+ meals weekly",
    },
    {
      title: "Senior Support",
      schedule: "Ongoing visits and assistance",
      description: "Regular visits, grocery shopping, and companionship for elderly community members.",
      impact: "Supporting 40+ seniors",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Thirubalasakyam</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering young hearts to grow in faith, fellowship, and service to God and community.
          </p>
        </div>
      </section>

      {/* Charity Leadership Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Team</h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {charityLeaders.map((leader, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-primary mb-2">{leader.name}</h3>
                    <p className="text-muted-foreground">{leader.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Charity Activities Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Events</h2>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {charityPrograms.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{program.title}</h3>
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
