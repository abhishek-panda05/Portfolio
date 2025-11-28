import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-4">
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium text-center hover:bg-blue-600 transition-colors duration-300"
            >
              Live Demo
            </motion.a>
          )}

          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium text-center hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
