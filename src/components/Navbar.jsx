import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="SRM Surveys Logo"
            className="h-15 w-25 object-contain rounded-full"
          />

          <h1 className="text-2xl font-bold text-green-700">
            SRM Land Surveys
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-green-700">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-green-700">
              Services
            </a>
          </li>
          <li>
            <a href="#why" className="hover:text-green-700">
              Why Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-700">
              Contact
            </a>
          </li>
        </ul>

        {/* Call Button */}
        <a
          href="tel:+919843638119"
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
        >
          📞 Call Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;