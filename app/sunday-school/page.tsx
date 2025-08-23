import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SundaySchoolPage() {
  const teachers = [
    {
      name: "name 1",
      role: "",
      image: "/sunday-school-director.png",
    },
    {
      name: "name 2",
      role: "",
      image: "/adult-sunday-school-teacher.png",
    },
    {
      name: "name 3",
      role: "",
      image: "/children-sunday-school-teacher.png",
    },
    {
      name: "name 4",
      role: "",
      image: "/youth-sunday-school-teacher.png",
    },
  ]

  const classActivities = [
    {
      title: "Children's Bible Stories",
      image: "/children-bible-stories.png",
    },
    {
      title: "Youth Discussion Groups",
      image: "/youth-bible-discussion.png",
    },
    {
      title: "Adult Bible Study",
      image: "/adult-bible-study.png",
    },
    {
      title: "Family Activities",
      image: "/family-sunday-school.png",
    },
    {
      title: "Craft Time",
      image: "/sunday-school-crafts.png",
    },
    {
      title: "Prayer Circle",
      image: "/sunday-school-prayer.png",
    },
  ]

  const ageGroups = [
    {
      age: "Ages 3-5",
      title: "Little Lambs",
      time: "9:30 AM - 10:15 AM",
      description: "Bible stories, songs, and simple crafts for our youngest learners.",
    },
    {
      age: "Ages 6-10",
      title: "Growing in Faith",
      time: "9:30 AM - 10:15 AM",
      description: "Interactive Bible lessons with games and activities.",
    },
    {
      age: "Ages 11-17",
      title: "Youth Explorers",
      time: "9:30 AM - 10:15 AM",
      description: "Deep discussions about faith, life, and following Jesus.",
    },
    {
      age: "Adults",
      title: "Adult Bible Study",
      time: "9:30 AM - 10:15 AM",
      description: "In-depth study of Scripture with practical life applications.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Sunday School</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Growing in faith together through Bible study, fellowship, and learning. Join us every Sunday as we explore
            God's Word and build lasting relationships.
          </p>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Teachers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our dedicated Sunday School teachers who are passionate about sharing God's love and wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-primary mb-2">{teacher.name}</h3>
                    <p className="text-muted-foreground">{teacher.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Classes by Age Group</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer age-appropriate classes designed to meet everyone where they are in their faith journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {group.age}
                  </span>
                  <span className="text-muted-foreground text-sm">{group.time}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">{group.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Sunday School Activities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the joy of learning through engaging activities, discussions, and fellowship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classActivities.map((activity, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{activity.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Join Our Sunday School</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Everyone is welcome to join our Sunday School family. Whether you're new to faith or have been walking
              with God for years, there's a place for you here.
            </p>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">Sunday School Information</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>When:</strong> Every Sunday, 9:30 AM - 10:15 AM
                </p>
                <p>
                  <strong>Where:</strong> Church Education Building
                </p>
                <p>
                  <strong>What to Bring:</strong> Just yourself and an open heart
                </p>
                <p>
                  <strong>Age Groups:</strong> Classes for all ages from 3 to adult
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
