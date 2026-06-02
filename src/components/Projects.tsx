import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projectImages = import.meta.glob(
  "../assets/projects/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default" }
) as Record<string, string>;

const getImage = (name: string) => {
  const key = `../assets/projects/${name}`;
  return projectImages[key];
};


const projects = [
    
  {
    title: "Ledge-it: Banking Web App",
    tech: "Spring Boot, PostgreSQL, Thymeleaf",
    description:
      "Secure banking application with authentication, account management, and transaction history.",
    image: getImage("ledge-it-dashboard.png"),
    screenshots: [
      {
        src: getImage("ledge-it-dashboard.png"),
        caption: "Dashboard view showing account balances and recent transactions.",
      },
    ],
    github: "https://github.com/EricJohnPena/banking-app-web",
    demo: "https://github.com/EricJohnPena/banking-app-web",
  },
  {
    title: "Sweet Swirl POS System",
    tech: "PHP, MySQL, Bootstrap",
    description:
      "Point-of-sale system with inventory and sales management.",
    image: getImage("pos-dashboard.png"),
    screenshots: [
      {
        src: getImage("pos-dashboard.png"),
        caption: "POS dashboard with active sales summary and daily totals.",
      },
      {
        src: getImage("pos-admin.png"),
        caption: "Inventory and admin controls for product management.",
      },
      {
        src: getImage("pos-main.png"),
        caption: "Main checkout screen for quick order entry.",
      },
      {
        src: getImage("pos-sales.png"),
        caption: "Sales history and reporting screen with summary charts.",
      },
    ],
    github: "https://github.com/EricJohnPena/pos",
  },
  {
    title: "Vocabulary Learning App",
    tech: "Unity, MySQL, Python, Render, HTML, CSS, Bootstrap",
    description:
      "Lexia: Educational word games and student progress tracking.",
    image: getImage("lexia-profile.png"),
    screenshots: [
      {
        src: getImage("lexia-profile.png"),
        caption: "Student profile screen with progress tracking.",
      },
      {
        src: getImage("lexia-profile1.png"),
        caption: "Profile overview for learners and achievement badges.",
      },
      {
        src: getImage("lexia-classic.png"),
        caption: "Classic vocabulary practice mode with timed rounds.",
      },
      {
        src: getImage("lexia-crossword.png"),
        caption: "Crossword challenge mode for word-building practice.",
      },
      {
        src: getImage("lexia-jumbled.png"),
        caption: "Jumbled word game for spelling reinforcement.",
      },
      {
        src: getImage("lexia-dashboard.png"),
        caption: "Teacher dashboard with class performance analytics.",
      },
      {
        src: getImage("lexia-analytics.png"),
        caption: "Detailed analytics for learner progress and scores.",
      },
      {
        src: getImage("lexia-student.png"),
        caption: "Student progress panel with completed modules.",
      },
    ],
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
    const [selectedProject, setSelectedProject] =
  useState<any>(null);
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
               onClick={() =>
                setSelectedProject(project)
  }
            />
            
          ))}
          
        </motion.div>
        <ProjectModal
  project={selectedProject}
  isOpen={!!selectedProject}
  onClose={() =>
    setSelectedProject(null)
  }
/>

      </div>
    </section>
  );
}