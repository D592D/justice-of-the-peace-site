// src/pages/about-us.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  FileCheck, 
  User, 
  FileText, 
  FileX, 
  Signature 
} from "lucide-react";

export default function AboutUs() {
  const responsibilities = [
    {
      icon: Signature,
      title: "Witnessing Signatures",
      description:
        "Certifying legal documents and agreements with official witness verification.",
    },
    {
      icon: User,
      title: "Administering Oaths",
      description: "Officially verifying affidavits and statements under oath.",
    },
    {
      icon: FileCheck,
      title: "Certifying Documents",
      description:
        "Attesting to the authenticity of important paperwork and documentation.",
    },
    {
      icon: FileText,
      title: "Preserving Peace & Order",
      description:
        "Assisting in the suppression of riots and affrays to maintain community safety.",
    },
    {
      icon: FileX,
      title: "Judicial Duties",
      description:
        "Carrying out responsibilities granted by the President of Guyana to ensure legal fairness and accessibility.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Welcome to Randy Sampson
          </h1>
          <h2 className="text-xl text-amber-400 font-medium mb-6">
            Justice of the Peace Services
          </h2>
          <div className="mx-auto w-24 h-1 bg-amber-400 mb-8" />
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Randy Sampson Justice of the Peace Services, we’re dedicated to serving Guyana’s community
            by providing accessible legal services with integrity and professionalism. Our mission is to
            uphold justice, ensure peace, and assist you with essential legal matters.
          </p>
        </div>

        {/* Our Role */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Our Role
          </h3>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            We offer a full suite of services to support individuals and businesses in their legal affairs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {responsibilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-amber-400 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-slate-900 p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h4 className="ml-4 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Why Choose Us?
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            We believe in fairness, integrity, and dedication to justice. Whether you need help with legal
            documentation or guidance on judicial matters, we’re here to serve you with professionalism
            and care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-amber-600" />
              </div>
              <h5 className="font-semibold text-lg text-slate-900 mb-2">Integrity</h5>
              <p className="text-slate-600">
                Committed to honest and ethical service in all our dealings.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-amber-600" />
              </div>
              <h5 className="font-semibold text-lg text-slate-900 mb-2">Professionalism</h5>
              <p className="text-slate-600">
                Delivering services with the highest standards of conduct.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Signature className="h-8 w-8 text-amber-600" />
              </div>
              <h5 className="font-semibold text-lg text-slate-900 mb-2">Accessibility</h5>
              <p className="text-slate-600">
                Making legal services accessible to all members of our community.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
