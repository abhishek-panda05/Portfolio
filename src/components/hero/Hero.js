import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const quotes = [
    "Code is poetry written in logic.",
    "Building the future, one line at a time.",
    "Turning coffee into code since 2020.",
    "Debug the world, one bug at a time.",
    "Making the web a better place.",
    "Clean code, clean mind.",
  ];

  // Typewriter effect for quotes
  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentQuote.length) {
          setDisplayedText(currentQuote.slice(0, displayedText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentQuote.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentQuoteIndex]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const codeLines = [
    { color: "text-purple-400", text: "#include <bits/stdc++.h>", delay: 0.1 },
    {
      color: "text-blue-400",
      text: "using namespace",
      extra: " std;",
      delay: 0.2,
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20 px-6"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
      ></motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Main Title - Your Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-8 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Hi, I'm Abhishek Panda
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-12"
        >
          Aspiring Software Developer & Tech Enthusiast
        </motion.p>

        {/* C++ Style Function with Dynamic Quotes */}
        <motion.div
          variants={itemVariants}
          className="font-mono text-left max-w-3xl mx-auto mb-12 bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800"
        >
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.5 }}
              className="mb-1"
            >
              <span className={line.color}>{line.text}</span>
              {line.extra && (
                <span className="text-gray-400">{line.extra}</span>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4"
          >
            <span className="text-blue-400">int</span>{" "}
            <span className="text-yellow-400">main</span>
            <span className="text-gray-400">{"() {"}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pl-8 mt-2 min-h-4"
          >
            <span className="text-gray-400">cout &lt;&lt; </span>
            <span className="text-green-400">
              "{displayedText}"
              <span className={showCursor ? "opacity-100" : "opacity-0"}>
                |
              </span>
            </span>
            <span className="text-gray-400">;</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="pl-8"
          >
            <span className="text-purple-400">return</span>
            <span className="text-gray-400"> 0;</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-gray-400">{"}"}</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/50"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center mt-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className={`text-3xl ${social.color} transition-colors duration-300`}
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
