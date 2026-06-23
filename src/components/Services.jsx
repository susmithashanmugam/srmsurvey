import { services } from "../data/services";

const serviceIcons = {
  "Topographic Survey": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="32"
      height="32"
    >
      <polygon points="24,6 44,38 4,38" />
      <polyline points="14,38 24,20 34,38" />
    </svg>
  ),

  "Contour Survey": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      width="32"
      height="32"
    >
      <ellipse cx="24" cy="24" rx="20" ry="10" />
      <ellipse cx="24" cy="24" rx="13" ry="6" />
      <ellipse cx="24" cy="24" rx="6" ry="3" />
    </svg>
  ),

  "Quantity Survey": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      width="32"
      height="32"
    >
      <rect x="8" y="6" width="32" height="36" rx="2" />
      <line x1="14" y1="16" x2="34" y2="16" />
      <line x1="14" y1="22" x2="34" y2="22" />
      <line x1="14" y1="28" x2="26" y2="28" />
      <rect x="28" y="30" width="8" height="8" rx="1" />
    </svg>
  ),

  "Buildings As-built Survey": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      width="32"
      height="32"
    >
      <rect x="6" y="16" width="20" height="26" />
      <rect x="26" y="8" width="16" height="34" />
    </svg>
  ),

  "Buildings Marking": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      width="32"
      height="32"
    >
      <rect x="8" y="18" width="24" height="24" />
      <polyline points="8,18 20,8 32,18" />
      <circle cx="38" cy="14" r="5" />
    </svg>
  ),

  "Bridges Marking": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      width="32"
      height="32"
    >
      <line x1="4" y1="28" x2="44" y2="28" />
      <path d="M4,28 Q12,14 24,14 Q36,14 44,28" />
    </svg>
  ),

  "FMB Boundary Marking": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      width="32"
      height="32"
    >
      <path d="M24 6 C24 6 38 16 38 28 C38 36 31.7 42 24 42 C16.3 42 10 36 10 28 C10 16 24 6 24 6Z" />
      <circle cx="24" cy="28" r="5" />
    </svg>
  ),

  "Land Partition": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      width="32"
      height="32"
    >
      <rect x="6" y="6" width="36" height="36" />
      <line x1="24" y1="6" x2="24" y2="42" />
      <line x1="6" y1="24" x2="42" y2="24" />
    </svg>
  ),

  "Land Registration Third Party Checking": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      width="32"
      height="32"
    >
      <rect x="8" y="4" width="24" height="32" rx="2" />
      <circle cx="34" cy="34" r="8" />
      <polyline points="30,34 33,37 38,31" />
    </svg>
  ),

  "Real Estate Plots Marking": (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      width="32"
      height="32"
    >
      <rect x="4" y="4" width="18" height="18" />
      <rect x="26" y="4" width="18" height="18" />
      <rect x="4" y="26" width="18" height="18" />
      <rect x="26" y="26" width="18" height="18" />
    </svg>
  ),
};

function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#f8faf8]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#2c8f46]">
          Our Services
        </h2>

        <div className="w-20 h-1 bg-[#74c476] mx-auto mt-4 mb-12 md:mb-16 rounded-full" />

        {/* 2 cards on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="
                bg-white
                p-4 md:p-5
                rounded-2xl
                shadow-sm
                border border-gray-100
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
                h-full
              "
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#e8f5e9] text-[#2c8f46] flex items-center justify-center mb-3 overflow-hidden">
                {serviceIcons[service.title]}
              </div>

              <h3 className="text-xs md:text-sm font-bold text-gray-800 mb-2 leading-snug">
                {service.title}
              </h3>

              <p className="text-[10px] md:text-xs text-gray-600 leading-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;