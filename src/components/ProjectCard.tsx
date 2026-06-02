import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  image: string;
  onClick: () => void;
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  tech,
  description,
  image,
  onClick,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <motion.div
    onClick={onClick}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        group
        bg-white dark:bg-slate-800
        border border-gray-200 dark:border-slate-700
        rounded-2xl
        p-6
        shadow-lg
        hover:shadow-2xl
        transition-all
        relative
        overflow-hidden
      "
    >
      {/* Animated top bar */}
      <motion.div
        className="
          absolute top-0 left-0
          h-1 w-full
          bg-blue-600
          origin-left
        "
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="overflow-hidden rounded-xl mb-5">
  <motion.img
    src={image}
    alt={title}
    className="
      w-full
      h-52
      object-cover
    "
    whileHover={{
      scale: 1.08,
    }}
    transition={{
      duration: 0.4,
    }}
  />
</div>

      <h3 className="text-2xl text-black dark:text-white font-bold mb-2">
        {title}
      </h3>

      <p className="text-blue-600 mb-4">
        {tech}
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>

      {(github || demo) && (
        <div className="flex gap-3 mt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                rounded-lg
                bg-blue-600
                text-white
                hover:bg-blue-700
              "
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                rounded-lg
                border border-black dark:border-white
                text-black dark:text-white
                hover:bg-gray-100
                dark:hover:bg-slate-700
              "
            >
              Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}