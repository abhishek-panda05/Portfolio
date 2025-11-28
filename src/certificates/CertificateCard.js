import { motion } from "framer-motion";

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
    >
      {/* Certificate Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-60"></div>

        {/* Badge/Logo Overlay */}
        {certificate.badge && (
          <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg">
            <span className="text-2xl">{certificate.badge}</span>
          </div>
        )}
      </div>

      {/* Certificate Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {certificate.title}
        </h3>

        <p className="text-blue-400 font-semibold mb-2">{certificate.issuer}</p>

        <p className="text-gray-400 text-sm mb-4">Issued: {certificate.date}</p>

        {certificate.description && (
          <p className="text-gray-400 mb-4 text-sm">
            {certificate.description}
          </p>
        )}

        {/* Skills/Technologies */}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {certificate.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Certificate Links */}
        <div className="flex gap-4">
          {certificate.credentialUrl && (
            <motion.a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium text-center hover:bg-blue-600 transition-colors duration-300 text-sm"
            >
              View Certificate
            </motion.a>
          )}

          {certificate.verifyUrl && (
            <motion.a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium text-center hover:bg-gray-700 transition-colors duration-300 border border-gray-700 text-sm"
            >
              Verify
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
