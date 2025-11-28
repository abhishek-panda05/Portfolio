import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/abhishek-panda05",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/yourhandle",
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/yourhandle",
      color: "hover:text-pink-400",
    },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand/Logo Section */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 cursor-pointer inline-block"
            >
              <span className="text-white">&lt;</span>
              <span className="text-blue-500">AP</span>
              <span className="text-white">/&gt;</span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating elegant solutions
              to complex problems.
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} Abhishek Panda. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-3xl ${social.color} transition-colors duration-300`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              Designed & Built by{" "}
              <span className="text-blue-400 font-semibold">
                Abhishek Panda
              </span>
            </p>

            {/* Additional Links */}
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
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
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
