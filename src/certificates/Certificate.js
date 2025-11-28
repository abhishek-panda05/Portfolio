import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
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

  const certificates = [
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "IIIT Hyderabad",
      date: "April 2025",
      description:
        "A graduate-level certification focusing on key social media security challenges, including privacy-preserving mechanisms, threat modeling, secure system design, and real-world attack analysis in online platforms.",
      skills: [
        "Social Media Security",
        "Threat Modeling",
        "Privacy-Preserving Systems",
        "Secure System Design",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuZIE0sBW1TumDoQRDx0tahiqdv7y7DUzKg&s",
      credentialUrl: "/assets/Social.pdf",
      verifyUrl:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS149S53750000809183327",
    },
    {
      title:
        "Oracle Cloud Infrastructure 2025 — Certified Data Science Professional",
      issuer: "Oracle",
      date: "2025",
      description:
        "Industry-recognized certification validating proficiency in data science workflows on Oracle Cloud Infrastructure (OCI), including data ingestion, feature engineering, model training, deployment, and cloud-based AI/ML solution design.",
      skills: [
        "OCI Data Science",
        "Machine Learning",
        "Cloud AI/ML Deployment",
        "Feature Engineering",
        "Model Deployment",
      ],
      image:
        "https://www.netsapiens.com/wp-content/uploads/2024/08/Oracle-Logo-1995-Present.png",
      credentialUrl: "/assets/DataScience.pdf",
      verifyUrl:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=BA12709850022630D9B9E34786B6C1B8D39CB48CEBDDA338F6236FF7A0A2FB48",
    },
    {
      title:
        "Oracle Cloud Infrastructure 2025 — Certified Generative AI Professional",
      issuer: "Oracle",
      date: "2025",
      description:
        "Industry certification validating expertise in generative AI on Oracle Cloud Infrastructure (OCI), covering LLM integration, vector search, prompt engineering, model service deployment, security-aware AI application design, and building intelligent, scalable GenAI-powered solutions.",
      skills: [
        "Generative AI",
        "LLM Integration",
        "Vector Search & Embeddings",
        "Prompt Engineering",
        "Cloud AI Deployment",
        "OCI AI Services",
      ],
      image:
        "https://www.netsapiens.com/wp-content/uploads/2024/08/Oracle-Logo-1995-Present.png",
      credentialUrl: "/assets/GenAI.pdf",
      verifyUrl:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7C6EE8C80426058E8D306065C660D3A4A30B97ECA555BCDA9A272AE5B9943A20",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 — Certified DevOps Professional",
      issuer: "Oracle",
      date: "2025",
      description:
        "Industry-recognized certification validating proficiency in DevOps practices on Oracle Cloud Infrastructure (OCI), including CI/CD pipeline implementation, infrastructure automation, container orchestration, monitoring, and cloud deployment strategies.",
      skills: [
        "OCI DevOps",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Container Orchestration",
        "Cloud Deployment",
        "Monitoring & Logging",
      ],
      image:
        "https://www.netsapiens.com/wp-content/uploads/2024/08/Oracle-Logo-1995-Present.png",
      credentialUrl: "/assets/DevOps.pdf",
      verifyUrl:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=BA12709850022630D9B9E34786B6C1B82A715E533ABFA245A27615688CDBEF66",
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      date: "2025",
      description:
        "Successfully completed an academic certification covering fundamental machine learning concepts including supervised and unsupervised learning, model evaluation, regression, classification, overfitting prevention, optimization techniques, and foundational mathematical principles behind ML models.",
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Model Evaluation",
        "Regression & Classification",
        "Optimization Techniques",
        "Foundations of Machine Learning",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuZIE0sBW1TumDoQRDx0tahiqdv7y7DUzKg&s",
      credentialUrl: "/assets/ML.pdf",
      verifyUrl:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS79S24750015104482571",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "August 2023",
      description:
        "Certification validating hands-on experience in building mobile-first, responsive, and accessible web interfaces. Covers modern layout techniques (Flexbox, Grid), responsive media queries, accessible semantic HTML, contrast-aware design, and WCAG-aligned accessibility best practices to deliver inclusive and device-adaptive user experiences.",
      skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
      image:
        "https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15..v1627670281.png",
      credentialUrl: "/assets/FreeCodeCamp.pdf",
      verifyUrl:
        "https://www.freecodecamp.org/certification/abhishek-panda/responsive-web-design",
    },
  ];

  return (
    <section id="certificates" className="min-h-screen bg-black py-20 px-6">
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
              <span className="text-white">certificates</span>{" "}
              <span className="text-blue-500">=</span>{" "}
              <span className="text-yellow-400">{"["}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Professional certifications and achievements
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={index}
                certificate={certificate}
                index={index}
              />
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

export default Certificates;
