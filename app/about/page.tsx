import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 font-serif">
            About St. John Baptist Church
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A community of faith, hope, and love serving God and our neighbors since 1952
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                St. John Baptist Church was founded in 1952 by a small group of faithful believers who had a vision to
                create a welcoming community where people could grow in their relationship with God and serve others
                with love and compassion.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Over the decades, we have grown from a humble congregation of 25 members to a thriving community of over
                500 families. Our church has been a beacon of hope and faith in our neighborhood, providing spiritual
                guidance, community support, and outreach programs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to honor our founding principles while embracing modern ways to connect with our
                community and spread God's love to all who seek it.
              </p>
            </div>
            <div>
              <img
                src="/historic-church-stained-glass.png"
                alt="St. John Baptist Church building"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8 font-serif">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Worship</h3>
                <p className="text-gray-600">To glorify God through meaningful worship, prayer, and spiritual growth</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Fellowship</h3>
                <p className="text-gray-600">To build a loving community where all are welcomed and supported</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Service</h3>
                <p className="text-gray-600">To serve our community and spread God's love through acts of compassion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center font-serif">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Faith</h3>
                <p className="text-gray-700">
                  We believe in the transformative power of faith in Jesus Christ and the importance of growing in our
                  relationship with God.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Community</h3>
                <p className="text-gray-700">
                  We value the strength that comes from being united as one body in Christ, supporting and caring for
                  one another.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Compassion</h3>
                <p className="text-gray-700">
                  We are called to show Christ's love through acts of kindness, mercy, and service to those in need.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We strive to live with honesty, authenticity, and moral uprightness in all aspects of our lives and
                  ministry.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Growth</h3>
                <p className="text-gray-700">
                  We encourage continuous spiritual, emotional, and intellectual growth through study, prayer, and
                  fellowship.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Welcome</h3>
                <p className="text-gray-700">
                  We open our doors and hearts to all people, regardless of background, creating an inclusive and loving
                  environment.
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
