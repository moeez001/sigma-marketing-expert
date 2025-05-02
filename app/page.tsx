import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { ArrowRight, Search, BarChart, Share2 } from "lucide-react"

export default function Home() {
  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies.",
      icon: <Search className="h-10 w-10 text-purple-400" />,
      link: "/services#seo",
    },
    {
      title: "Paid Advertising",
      description: "Maximize ROI with targeted paid campaigns across Google, Facebook, Instagram, and more.",
      icon: <BarChart className="h-10 w-10 text-blue-400" />,
      link: "/services#paid-advertising",
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience through strategic social media management.",
      icon: <Share2 className="h-10 w-10 text-green-400" />,
      link: "/services#social-media",
    },
  ]

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            At Sigma Marketing Expert, we leverage cutting-edge strategies and data-driven insights to elevate your
            brand's digital presence. Our mission is to deliver measurable results that drive growth and establish your
            business as an industry leader.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive marketing solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              delay={index * 0.2}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
          >
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about our work.
          </p>
        </div>

        <TestimonialCarousel />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative overflow-hidden border border-purple-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,80,255,0.2),transparent_60%)]"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Schedule a free consultation with our marketing experts and discover how we can help you achieve your
              business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
