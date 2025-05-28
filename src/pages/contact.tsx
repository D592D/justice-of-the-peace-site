// src/pages/contact.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=5926977944&text=Hello%21+I+would+like+to+inquire+about+Justice+of+the+Peace+services.&type=phone_number&app_absent=0";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Let’s Chat on WhatsApp
        </h1>
        <p className="mb-8 text-lg text-slate-600 text-center max-w-md">
          Click the button below to start a conversation with Randy Sampson,
          Justice of the Peace.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </main>

      <Footer />
    </div>
  );
}
