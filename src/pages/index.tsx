
// src/pages/index.tsx
import Navigation from "../components/Navigation";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import BookingSection from "../components/BookingSection";
import { MessageCircle, FileText, FileX } from "lucide-react";
import { services } from "../data/services";  // ← import shared data

const Index = () => {
  const whatsappNumber = "5926977944";
  const whatsappMessage =
    "Hello! I would like to inquire about Justice of the Peace services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Randy Sampson</h1>
          <p className="text-xl md:text-2xl text-amber-400 font-medium mb-8">
            Justice of the Peace/Commissioner of Oaths to Affidavits
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Serving the community of Guyana with integrity, professionalism, and
            dedication to justice. Your trusted partner for essential legal
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-300 transition duratioñn-300 shadow-lg"
            >
              View Our Services
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We provide essential legal services to individuals and businesses
              throughout Guyana, ensuring accessible justice and professional
              support for all your documentation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((svc, idx) => (
              <ServiceCard
                key={idx}
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
              />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Additional Responsibilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Peace &amp; Order
                  </h4>
                  <p className="text-slate-600">
                    Assisting in community safety and order through official
                    intervention when necessary.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 p-2 rounded-full">
                  <FileX className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Judicial Duties
                  </h4>
                  <p className="text-slate-600">
                    Carrying out responsibilities as appointed by the President
                    of Guyana to ensure legal fairness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
<BookingSection />

{/* Call to Action */}
<section className="bg-slate-900 text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
      Contact us today to schedule an appointment for any of our
      professional legal services. We&apos;re here to assist you with
      integrity and care.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://calendly.com/sampsonrandy1/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-300 transition duration-300"
      >
        Schedule a 30 Min Call
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        Chat on WhatsApp
      </a>
    </div>
  </div>
</section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

