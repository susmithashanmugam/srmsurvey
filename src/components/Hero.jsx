import hero from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 text-white">
        <div className="max-w-3xl text-left">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Professional Land Survey Services
          </h1>

          <p className="text-lg md:text-2xl text-gray-200">
            Precision in Every Measurement, Excellence in Every Project.
            Professional land and construction surveying services with
            modern technology and experienced surveyors.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition duration-300 w-fit"
            >
              Get Quote
            </a>

            <a
              href="tel:+919843638119"
              className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold transition duration-300 w-fit"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;