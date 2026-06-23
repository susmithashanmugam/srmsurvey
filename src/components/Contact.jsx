function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#2c8f46] mb-12">
          Contact Us
        </h2>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
          {/* Map Section */}
          <div className="h-[350px] md:h-auto">
            <iframe
              title="SRM Surveys Location"
              src="https://maps.google.com/maps?q=SRM%20Land%20Surveys,%20Ramanathapuram&z=17&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Contact Details */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#2c8f46] mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Address
                  </h4>
                  <p className="text-gray-600 leading-7">
                    SRM  Land Surveys
                    <br />
                    4/139, South 1st Street,
                    <br />
                    Kattoorani,
                    <br />
                    Ramanathapuram,
                    <br />
                    Tamil Nadu - 623504
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+919843638119"
                    className="text-gray-600 hover:text-[#2c8f46]"
                  >
                    +91 98436 38119
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:srmlandsurveys@gmail.com"
                    className="text-gray-600 hover:text-[#2c8f46]"
                  >
                    srmlandsurveys@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919843638119"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 bg-[#2c8f46] text-white px-6 py-3 rounded-xl w-fit hover:bg-[#24753a] transition-all duration-300"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;