function WhyChooseUs() {
  const reasons = [
    "Accurate Measurements",
    "Experienced Professionals",
    "Modern Survey Equipment",
    "Timely Project Delivery",
  ];

  return (
    <section id="why" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-8 bg-green-50 rounded-xl shadow"
            >
              <div className="text-5xl mb-4">✅</div>

              <h3 className="font-semibold text-lg">
                {reason}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;