import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function MassTimings() {
  const massSchedule = [
    { day: "Sunday", times: ["6:00 AM", "7:15 AM", "09:15 AM", "4:00 PM"] },
    { day: "Monday - Friday", times: ["6:00 AM"] },
    { day: "Saturday", times: ["06:00 AM", "07:00 AM "] },
  ]

  return (
    <section id="mass-timings" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Holy Mass Timings</h2>
          <p className="text-lg text-muted-foreground">
            Join us for worship and fellowship at any of our scheduled services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
                Weekly Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {massSchedule.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between p-4 rounded-lg bg-muted/30"
                  >
                    <div className="font-semibold text-lg mb-2 md:mb-0 md:w-1/3">{schedule.day}</div>
                    <div className="flex flex-wrap gap-2 md:w-2/3 md:justify-end">
                      {schedule.times.map((time, timeIndex) => (
                        <span
                          key={timeIndex}
                          className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
