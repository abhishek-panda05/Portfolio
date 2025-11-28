import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-500">const</span>{" "}
              <span className="text-white">aboutMe</span>{" "}
              <span className="text-blue-500">=</span>{" "}
              <span className="text-yellow-400">{"() => {"}</span>
            </h2>
          </motion.div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Avatar */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="relative overflow-hidden rounded-2xl border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                {/* Placeholder for image - replace with actual image */}
                <div className="aspect-square bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <span className="text-blue-500 font-mono">return</span> (
                </p>

                <div className="pl-8 space-y-4">
                  <div className="pl-8 space-y-4">
                    <p className="text-base md:text-lg">
                      I am a{" "}
                      <span className="text-white font-semibold">
                        Computer Science & Engineering student
                      </span>{" "}
                      with a strong interest in
                      <span className="text-blue-400">
                        {" "}
                        Full-Stack Development
                      </span>{" "}
                      and{" "}
                      <span className="text-yellow-300">
                        Data Structures & Algorithms
                      </span>
                      .
                    </p>

                    <p className="text-base md:text-lg">
                      I have solved{" "}
                      <span className="text-white font-semibold">
                        700+ algorithmic problems
                      </span>{" "}
                      on platforms such as
                      <span className="text-blue-400"> LeetCode</span> and{" "}
                      <span className="text-green-400">GeeksforGeeks</span>,
                      focusing on writing
                      <span className="text-white font-medium">
                        {" "}
                        optimized and scalable code
                      </span>
                      .
                    </p>

                    <p className="text-base md:text-lg">
                      My current learning path includes advanced DSA concepts
                      such as
                      <span className="text-purple-400">
                        {" "}
                        Dynamic Programming
                      </span>
                      , <span className="text-blue-400">Graphs</span>,
                      <span className="text-green-400"> Heaps</span>,{" "}
                      <span className="text-yellow-300">Two Pointers</span> and
                      <span className="text-orange-300">
                        {" "}
                        Sliding Window techniques
                      </span>
                      , with a consistent problem-solving practice.
                    </p>

                    <p className="text-base md:text-lg">
                      I build{" "}
                      <span className="text-white font-medium">
                        interactive and responsive user interfaces
                      </span>{" "}
                      using modern frontend tools like
                      <span className="text-blue-400"> React</span>,{" "}
                      <span className="text-green-400">JavaScript</span>, and
                      <span className="text-cyan-400"> Tailwind CSS</span>
                    </p>

                    <p className="text-base md:text-lg">
                      I enjoy transforming ideas into structured, user-centric
                      digital solutions while continuously expanding my skill
                      set to keep pace with emerging technologies.
                    </p>
                  </div>
                </div>

                <p className="text-lg">
                  <span className="text-blue-500 font-mono">)</span>;
                </p>
              </div>

              {/* Stats/Highlights */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800"
              >
                {[
                  { number: "2+", label: "Years Experience" },
                  { number: "5+", label: "Projects Built" },
                  { number: "∞", label: "Coffee Consumed" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group cursor-default"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-500 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Closing brace */}
          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-yellow-400">{"}"}</span>
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
