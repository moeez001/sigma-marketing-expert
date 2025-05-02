import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, BarChart, Share2, Mail, LineChart, Globe } from "lucide-react"
import ServiceDetailCard from "@/components/service-detail-card"
import PageHeader from "@/components/page-header"

export default function ServicesPage() {
  const services = [
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies.",
      icon: <Search className="h-12 w-12 text-purple-400" />,
      details: [
        "Comprehensive SEO audits and competitor analysis",
        "Keyword research and content optimization",
        "Technical SEO improvements and site structure optimization",
        "Local SEO strategies for businesses targeting specific locations",
        "Regular performance reporting and strategy adjustments",
      ],
    },
    {
      id: "paid-advertising",
      title: "Paid Advertising",
      description: "Maximize ROI with targeted paid campaigns across Google, Facebook, Instagram, and more.",
      icon: <BarChart className="h-12 w-12 text-blue-400" />,
      details: [
        "PPC campaign management across Google, Bing, and other platforms",
        "Social media advertising on Facebook, Instagram, LinkedIn, and Twitter",
        "Display and remarketing campaigns to capture lost conversions",
        "Budget optimization and bid management",
        "A/B testing of ad creative and landing pages",
      ],
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience through strategic social media management.",
      icon: <Share2 className="h-12 w-12 text-green-400" />,
      details: [
        "Social media strategy development aligned with business goals",
        "Content creation and publishing across platforms",
        "Community management and audience engagement",
        "Social listening and reputation management",
        "Performance analytics and growth reporting",
      ],
    },
    {
      id: "content-marketing",
      title: "Content Marketing",
      description: "Create valuable, relevant content that attracts and engages your target audience.",
      icon: <Mail className="h-12 w-12 text-yellow-400" />,
      details: [
        "Content strategy development based on audience research",
        "Blog posts, articles, and long-form content creation",
        "Email marketing campaigns and newsletters",
        "Video content production and optimization",
        "Content distribution and promotion strategies",
      ],
    },
    {
      id: "analytics",
      title: "Analytics & Reporting",
      description: "Gain valuable insights into your marketing performance with comprehensive analytics.",
      icon: <LineChart className="h-12 w-12 text-red-400" />,
      details: [
        "Custom dashboard setup for real-time performance monitoring",
        "Regular detailed reports on all marketing activities",
        "Conversion tracking and goal setup",
        "User behavior analysis and heatmapping",
        "Data-driven recommendations for strategy optimization",
      ],
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Create stunning, high-performance websites that convert visitors into customers.",
      icon: <Globe className="h-12 w-12 text-indigo-400" />,
      details: [
        "Responsive website design and development",
        "Landing page creation and optimization",
        "E-commerce website development",
        "Website speed optimization",
        "Ongoing maintenance and support",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Services"
        description="Comprehensive marketing solutions tailored to your business needs"
        gradient="from-blue-400 to-purple-500"
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <ServiceDetailCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              details={service.details}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative overflow-hidden border border-purple-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,80,255,0.2),transparent_60%)]"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Marketing Strategy?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our team of experts is ready to help you achieve your business goals with tailored marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                <Link href="/consulting">Learn About Our Consulting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
