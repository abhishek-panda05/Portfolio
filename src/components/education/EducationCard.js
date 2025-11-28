import { motion } from "framer-motion";

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

      {/* Card */}
      <div
        className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 ${
          index % 2 === 0
            ? "mr-auto ml-0 md:mr-[calc(50%+2rem)]"
            : "ml-auto mr-0 md:ml-[calc(50%+2rem)]"
        } md:w-[calc(50%-2rem)] w-full`}
      >
        {/* Year Badge */}
        <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-4">
          {education.year}
        </div>

        {/* Degree */}
        <h3 className="text-2xl font-bold text-white mb-2">
          {education.degree}
        </h3>

        {/* Institution */}
        <h4 className="text-lg text-blue-400 font-semibold mb-2">
          {education.institution}
        </h4>

        {/* Location */}
        <p className="text-gray-400 mb-3 flex items-center gap-2">
          <span>📍</span>
          {education.location}
        </p>

        {/* Grade/Score */}
        {education.grade && (
          <div className="mb-4">
            <span className="text-gray-300 font-medium">Grade: </span>
            <span className="text-blue-400 font-bold">{education.grade}</span>
          </div>
        )}

        {/* Description */}
        {education.description && (
          <p className="text-gray-400 mb-4">{education.description}</p>
        )}

        {/* Achievements/Highlights */}
        {education.highlights && education.highlights.length > 0 && (
          <div className="space-y-2">
            <p className="text-gray-300 font-semibold mb-2">Highlights:</p>
            <ul className="space-y-1">
              {education.highlights.map((highlight, idx) => (
                <li key={idx} className="text-gray-400 flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EducationCard;
