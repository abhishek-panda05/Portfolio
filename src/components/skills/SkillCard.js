import { motion } from "framer-motion";

const SkillCard = ({ category, categoryIndex, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="text-2xl sm:text-3xl">{category.icon}</span>
        <h3 className="text-lg sm:text-xl font-bold text-white">
          {category.title}
        </h3>
      </div>

      {/* Skills List */}
      <div className="space-y-3 sm:space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <div className="flex justify-between mb-1 sm:mb-2">
              <span className="text-gray-300 font-medium text-sm sm:text-base">
                {skill.name}
              </span>
              <span className="text-blue-400 font-semibold text-sm sm:text-base">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{
                  duration: 1,
                  delay: categoryIndex * 0.2 + skillIndex * 0.1,
                }}
                className={`h-full bg-linear-to-r ${skill.color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
