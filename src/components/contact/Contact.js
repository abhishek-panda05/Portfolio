import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

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
  const [isLoading, setIsLoading] = useState(false);

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  // On Change Handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serviceID || !templateID || !publicKey) {
      console.error("⛔ Missing EmailJS Environment Variables!");
      setStatus("error");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Abhishek Panda",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsLoading(false);
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setIsLoading(false);
        setTimeout(() => setStatus(""), 5000);
      });
  };

  // Contact Information
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
          {/* Title */}
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

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Get In Touch</h3>
              <p className="text-gray-400">
                I'm available for freelance work and full-time opportunities.
                Feel free to reach out!
              </p>

              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <span className="text-3xl">{info.icon}</span>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-medium hover:text-blue-400"
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

              {/* Socials */}
              <h4 className="text-xl font-bold text-white">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-4xl ${s.color}`}
                    title={s.name}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 space-y-6"
              >
                {/* Name */}
                <div>
                  <label className="text-gray-300 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-300 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-gray-300 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-300 font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center"
                  >
                    ✅ Message sent successfully!
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center"
                  >
                    ❌ Failed to send message. Try again later.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-colors duration-300 shadow-lg ${
                    isLoading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 shadow-blue-500/30"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
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
