import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveSection(name.toLowerCase());
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer"
          >
            <span className="text-white">&lt;</span>
            <span className="text-blue-500">AP</span>
            <span className="text-white">/&gt;</span>
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                  activeSection === item.name.toLowerCase()
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={`absolute inset-0 bg-blue-500/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 ${
                    activeSection === item.name.toLowerCase() ? "scale-100" : ""
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Desktop Resume Download */}
          <motion.a
            href="/assets/12313314cv.pdf"
            download="Abhishek_Panda_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-blue-500 text-white rounded-lg font-medium 
                       hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/30 cursor-pointer"
          >
            Resume
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href, item.name);
                  setMobileMenuOpen(false);
                }}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-lg transition-all duration-300"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Resume Download */}
            <a
              href="/assets/12313314cv.pdf"
              download="Abhishek_Panda_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-medium text-center 
                         hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
