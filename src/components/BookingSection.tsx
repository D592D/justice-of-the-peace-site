const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Book an Appointment</h2>
        <p className="text-lg text-slate-600 mb-8">
          Schedule your Justice of the Peace service easily with our online booking tool.
        </p>
        <div className="rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://calendly.com/your-username"
            width="100%"
            height="700"
            frameBorder="0"
            className="w-full h-[700px]"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
