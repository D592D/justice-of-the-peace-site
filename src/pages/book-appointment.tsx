import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BookAppointment() {
  // Replace with your actual Calendly embed later
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow max-w-3xl mx-auto p-8 space-y-6">
        <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
        <p>
          Please choose a time that works best for you. We’ll confirm your booking via WhatsApp.
        </p>
        <div className="w-full h-[600px]">
          {/* Example Calendly embed: */}
          <iframe
            src="https://calendly.com/sampsonrandy1/30min"
            className="w-full h-full border-0 rounded-lg shadow"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

