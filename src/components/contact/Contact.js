import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus(""), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "abhishekpanda1605@gmail.com",
      link: "mailto:abhishekpanda1605@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 8917361597",
      link: "tel:+918917361597",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Rourkela, Odisha",
      link: null,
    },
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
      url: "https://linkedin.com/in/abhishekpanda05",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/heyy.abhishek",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-500">const</span>{" "}
              <span className="text-white">contact</span>{" "}
              <span className="text-blue-500">=</span>{" "}
              <span className="text-yellow-400">{"{"}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Let's build something amazing together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Get In Touch
                </h3>
                <p className="text-gray-400 mb-6">
                  I'm currently available for freelance work and full-time
                  opportunities. If you have a project that you want to get
                  started or think you need my help, feel free to reach out!
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <span className="text-3xl text-blue-400">{info.icon}</span>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-medium hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-4xl ${social.color} transition-colors duration-300`}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center"
                  >
                    {status}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/30"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Closing Bracket */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-yellow-400">{"}"}</span>
              <span className="text-gray-400">;</span>
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
