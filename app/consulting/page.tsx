import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"
import ConsultingStep from "@/components/consulting-step"
import BookingCalendar from "@/components/booking-calendar"

export default function ConsultingPage() {
  const consultingSteps = [
    {
      number: 1,
      title: "Discovery Call",
      description:
        "We start with a 30-minute discovery call to understand your business, goals, and current marketing efforts.",
      color: "from-purple-500 to-blue-500",
    },
    {
      number: 2,
      title: "Strategy Development",
      description:
        "Our team analyzes your business and develops a customized marketing strategy tailored to your specific needs.",
      color: "from-blue-500 to-green-500",
    },
    {
      number: 3,
      title: "Proposal Presentation",
      description:
        "We present our findings and recommendations, outlining the proposed strategy, timeline, and expected results.",
      color: "from-green-500 to-yellow-500",
    },
    {
      number: 4,
      title: "Implementation",
      description: "Once approved, we begin implementing the strategy, with regular updates and adjustments as needed.",
      color: "from-yellow-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Marketing Consulting"
        description="Expert guidance to transform your marketing strategy"
        gradient="from-purple-400 to-blue-500"
      />

      {/* Consulting Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How Our Consulting Works</h2>
          <p className="text-lg text-gray-300 mb-8">
            Our consulting services are designed to provide you with expert guidance and actionable strategies to
            achieve your marketing goals. We work closely with you to understand your business, identify opportunities,
            and develop a customized plan for success.
          </p>

          <div className="space-y-8 mt-12">
            {consultingSteps.map((step, index) => (
              <ConsultingStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                colorGradient={step.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Benefits of Our Consulting
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Working with Sigma Marketing Expert gives you access to industry-leading expertise and proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Customized strategies tailored to your specific business needs",
            "Access to experienced marketing professionals with industry expertise",
            "Data-driven approach with measurable results and ROI tracking",
            "Ongoing support and guidance throughout implementation",
            "Cost-effective alternative to hiring an in-house marketing team",
            "Stay ahead of the competition with cutting-edge marketing tactics",
          ].map((benefit, index) => (
            <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-gray-200">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Schedule Your Free Strategy Call</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards transforming your marketing strategy. Book a free 30-minute consultation with
              one of our marketing experts.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
            <BookingCalendar />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Prefer to contact us directly?</p>
            <Button
              asChild
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
            >
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
