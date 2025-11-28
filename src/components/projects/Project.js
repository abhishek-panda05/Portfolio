import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
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
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      title: "Train Delay Forecasting System",
      description:
        "A machine learning–driven system for predicting real-time train delays based on historical scheduling data, operational patterns, and external factors. Includes data preprocessing, predictive modeling, and interactive analytics for better decision-making.",
      image: "/assets/Train.webp",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Matplotlib",
        "Machine Learning",
      ],
      githubLink: "https://github.com/abhishek-panda05/Train-Delay-Prediction",
    },
    {
      title: "Freelancer Earnings Dashboard",
      description:
        "A data analytics dashboard built in Excel to track freelancer income trends, automate data shaping using Power Query, and generate business insights through pivot-based reporting and dynamic visualizations.",
      image: "/assets/Freelancer.webp",
      technologies: ["Excel", "Power Query", "Power Pivot", "Data Analytics"],
      githubLink: "https://github.com/abhishek-panda05/Freelancer-Dashboard",
    },
    {
      title: "Disk Scheduling Algorithms Visualizer",
      description:
        "A web-based educational simulator for visualizing and analyzing classic Operating Systems disk scheduling algorithms including FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK. Provides real-time seek time computation, algorithm simulation, and performance comparison.",
      image: "/assets/DiskScheduler.webp",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Operating Systems",
        "Algorithm Simulation",
      ],
      liveLink: "https://disk-scheduler.netlify.app",
      githubLink: "https://github.com/abhishek-panda05/OS_Project",
    },
    {
      title: "JUGAAD — AI Chatbot",
      description:
        "An AI-powered conversational assistant built to provide real-time responses with focus on natural language understanding and engaging interaction. Designed using Large Language Model integration to support smart, accurate, and context-aware conversations.",
      image: "/assets/JUGAAD.webp",
      technologies: ["Python", "Flask", "Gemini API", "HTML", "CSS"],
      liveLink: "https://jugaad-ai-chatbot.onrender.com/",
      githubLink: "https://github.com/abhishek-panda05/JUGAAD-AI-Chatbot",
    },
    {
      title: "E Commerce Website",
      description:
        "Under Development: A full-featured e-commerce web application with user authentication, product listings, shopping cart functionality, and secure payment processing. Built using modern web technologies to provide a seamless shopping experience.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/yourusername/project",
    },
    {
      title: "Chat Application",
      description:
        "Under Development: A real-time chat application enabling users to communicate instantly through text messages. Features include user authentication, chat rooms, and message history, built with a focus on performance and scalability.",
      image:
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      githubLink: "https://github.com/yourusername/project",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
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
              <span className="text-white">projects</span>{" "}
              <span className="text-blue-500">=</span>{" "}
              <span className="text-yellow-400">{"["}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Some of my recent work and side projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Closing Bracket */}
          <motion.div variants={itemVariants} className="text-center">
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

export default Projects;
