import { Mail, Phone, MapPin, Clock } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple-400" />,
      title: "Email",
      details: "info@sigmamarketing.com",
      link: "mailto:info@sigmamarketing.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-400" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-400" />,
      title: "Address",
      details: "123 Marketing St, Digital City, CA 94103",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-400" />,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 5PM",
      link: null,
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our marketing experts"
        gradient="from-green-400 to-blue-500"
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-gray-300 mb-8">
              Have questions about our services or ready to start a project? Fill out the form below and one of our
              marketing experts will get back to you within 24 hours.
            </p>

            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              You can reach us through any of the following methods or visit our office during business hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-purple-500/10">
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="ml-3 font-semibold text-lg">{item.title}</h3>
                  </div>
                  {item.link ? (
                    <a href={item.link} className="text-gray-300 hover:text-white transition-colors">
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-300">{item.details}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-purple-500/10 h-64 md:h-80">
              {/* Map placeholder - would be replaced with actual map integration */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-lg">
                <p className="text-gray-400">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
