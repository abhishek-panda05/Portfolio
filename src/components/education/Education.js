import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      year: "2023 - 2027",
      grade: "9.2 CGPA",
      description:
        "Focused on software development, data structures, algorithms, machine learning, and web technologies.",
      highlights: [
        "Completed major project on Machine Learning based Train Delay Prediction",
        "Participated hackathons and coding competitions",
        "Relevant Coursework: DSA, DBMS, OS, Computer Networks, AI/ML",
      ],
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "St. Arnold's School",
      location: "Rourkela, Odisha",
      year: "2021 - 2023",
      grade: "95.4%",
      description: "Science stream with Physics, Chemistry, and Mathematics.",
      highlights: [
        "Secured distinction in Mathematics and Computer Science",
        "Participated in science exhibitions and tech fests",
      ],
    },
    {
      degree: "Secondary Education (10th)",
      institution: "St. Arnold's School",
      location: "Rourkela, Odisha",
      year: "2019 - 2021",
      grade: "95.3%",
      highlights: [
        "School topper in Science and Mathematics",
        "Awarded for academic excellence",
      ],
    },
  ];

  return (
    <section id="education" className="min-h-screen bg-black py-20 px-6">
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
              <span className="text-white">education</span>{" "}
              <span className="text-blue-500">=</span>{" "}
              <span className="text-yellow-400">{"["}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              My academic journey and qualifications
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800"></div>

            {/* Education Cards */}
            <div className="space-y-12">
              {educationData.map((education, index) => (
                <EducationCard
                  key={index}
                  education={education}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Closing Bracket */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
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

export default Education;
