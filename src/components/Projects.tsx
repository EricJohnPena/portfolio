import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    demo: "https://ledge-it.up.railway.app",
  },
  {
    title: "HobbyRepo – Desktop Inventory System",
    tech: "Java 25, JavaFX, FXML, CSS, SQLite",
    description:
      "Modular desktop CRUD application with JavaFX UI, SQLite database integration, and structured MVC architecture. Packaged as a distributable installer.",
    image: getImage("hobby-dashboard.png"),
    screenshots: [
      {
        src: getImage("hobby-dashboard.png"),
        caption: "Main inventory management dashboard.",
      },
    ],
    github: "https://github.com/EricJohnPena/HobbyRepo",
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
 
  
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsPerView = 1;
  const maxSlide = Math.max(0, projects.length - cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  const handleDragEnd = (
    _: any,
    { offset, velocity }: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe > 500) {
      if (offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };
  return (
    <section
      id="projects"
      className="
        py-16
    md:py-24
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
            relative
            mt-8
          "
        >
          {/* Carousel Container */}
          <motion.div
            className="
              overflow-hidden
              rounded-2xl
            "
            drag="x"
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: 0, right: 0 }}
          >
            <motion.div
              className="
                flex
                gap-8
              "
              animate={{ x: -currentSlide * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="
                    min-w-full
                    px-6
                  "
                >
                  <ProjectCard
                    {...project}
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="
              absolute
              left-2 sm:left-0
              top-1/2
              -translate-y-1/2
              sm:-translate-x-14
              rounded-full
              bg-blue-600 text-white
              p-3
              shadow-lg
              hover:bg-blue-700
              transition-colors
              z-10
            "
            aria-label="Previous project"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="
              absolute
              right-2 sm:right-0
              top-1/2
              -translate-y-1/2
              sm:translate-x-14
              rounded-full
              bg-blue-600 text-white
              p-3
              shadow-lg
              hover:bg-blue-700
              transition-colors
              z-10
            "
            aria-label="Next project"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`
                  h-2 rounded-full transition-all
                  ${
                    index === currentSlide
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 dark:bg-gray-600 w-2"
                  }
                `}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
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