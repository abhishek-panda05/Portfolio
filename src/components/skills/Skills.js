import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "CSS", level: 90, color: "from-blue-400 to-blue-600" },
        {
          name: "JavaScript",
          level: 85,
          color: "from-yellow-400 to-yellow-600",
        },
        { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", level: 88, color: "from-cyan-400 to-cyan-600" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 82, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", level: 78, color: "from-green-500 to-green-700" },
        {
          name: "REST APIs",
          level: 87,
          color: "from-purple-400 to-purple-600",
        },
        { name: "JWT/Auth", level: 80, color: "from-blue-500 to-blue-700" },
      ],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 92, color: "from-gray-700 to-black" },
        {
          name: "Jupyter Notebook",
          level: 85,
          color: "from-blue-400 to-blue-600",
        },
        { name: "Linux", level: 80, color: "from-gray-600 to-gray-900" },
        { name: "VS Code", level: 96, color: "from-blue-500 to-blue-700" },
        {
          name: "Webpack/Parcel",
          level: 80,
          color: "from-purple-500 to-purple-700",
        },
      ],
    },
    {
      title: "Languages",
      icon: "🧠",
      skills: [
        { name: "C++", level: 95, color: "from-blue-500 to-blue-700" },
        { name: "Java", level: 60, color: "from-red-500 to-red-700" },
        { name: "Python", level: 80, color: "from-yellow-500 to-yellow-700" },
        {
          name: "JavaScript",
          level: 75,
          color: "from-yellow-400 to-yellow-600",
        },
      ],
    },
    {
      title: "Data Science and ML",
      icon: "📊",
      skills: [
        {
          name: "Jupyter Notebook",
          level: 85,
          color: "from-orange-400 to-orange-600",
        },
        {
          name: "Power BI",
          level: 90,
          color: "from-yellow-400 to-orange-600",
        },
        {
          name: "Statistics/ML",
          level: 75,
          color: "from-purple-400 to-purple-600",
        },
        { name: "NumPy/Pandas", level: 80, color: "from-blue-400 to-blue-600" },
        {
          name: "Data Visualization",
          level: 85,
          color: "from-cyan-400 to-cyan-600",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-black py-20 px-6">
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
              <span className="text-white">skills</span>{" "}
              <span className="text-blue-500">=</span>{" "}
              <span className="text-yellow-400">{"["}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Technical skills and tooling expertise
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.slice(0, -2).map((category, i) => (
              <SkillCard
                key={i}
                category={category}
                categoryIndex={i}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Last 2 centered */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 justify-center mt-8">
            {skillCategories.slice(-2).map((category, i) => (
              <SkillCard
                key={i}
                category={category}
                categoryIndex={skillCategories.length - 2 + i}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Closing Bracket */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-yellow-400">{"]"}</span>
              <span className="text-gray-400">;</span>
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
