import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Ledge-it: Banking Web App",
    tech: "Spring Boot, PostgreSQL, Thymeleaf",
    description:
      "Secure banking application with authentication, account management, and transaction history.",
    github: "https://github.com/EricJohnPena/banking-app-web",
    demo: "https://github.com/EricJohnPena/banking-app-web",
  },
  {
    title: "Sweet Swirl POS System",
    tech: "PHP, MySQL, Bootstrap",
    description:
      "Point-of-sale system with inventory and sales management.",
      github: "https://github.com/EricJohnPena/pos",
  },
  {
    title: "Vocabulary Learning App",
    tech: "Unity, Firebase",
    description:
      "Lexia: Educational game with word scrambles and student progress tracking.",
      github: "https://github.com/EricJohnPena/Lexia-UI",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-24
        bg-gray-50 dark:bg-slate-900
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            text-4xl font-bold
            text-center
            text-black dark:text-white
            mb-12
          "
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}