import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Screenshot {
  src: string;
  caption: string;
}

interface ProjectModalProps {
  project:
    | {
        title: string;
        tech: string;
        image: string;
        description: string;
        screenshots: Screenshot[];
        github?: string;
        demo?: string;
      }
    | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setSelectedImage(0);
  }, [project]);

  const screenshots: Screenshot[] = project?.screenshots ?? [];
  const selectedScreenshot: Screenshot =
    screenshots[selectedImage] ?? {
      src: project?.image ?? "",
      caption: project?.description ?? "",
    };

  const showControls = screenshots.length > 1;

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="
              fixed inset-0
              bg-black/70 dark:bg-white
              z-50
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="
              fixed
              top-1/2 left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-50

              bg-white dark:bg-slate-900
              rounded-2xl
              w-[95%]
              max-w-5xl
              max-h-[90vh]
              overflow-y-auto
              p-6
            "
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
          >
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                text-xl
              "
            >
              <FaTimes />
            </button>

            <h2 className="text-3xl font-bold mb-2 text-black dark:text-white">
              {project.title}
            </h2>

            <p className="text-blue-600 mb-6">
              {project.tech}
            </p>

            {/* Main Screenshot */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
              <img
                src={selectedScreenshot.src}
                alt={selectedScreenshot.caption || project.title}
                className="
                  w-full
                  h-full
                  object-contain
                  p-4
                "
              />

              {showControls && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="
                      absolute left-4 top-1/2 -translate-y-1/2
                      rounded-full
                      bg-black/50 text-white
                      p-3
                      shadow-lg
                      hover:bg-black/70
                    "
                    aria-label="Previous screenshot"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="
                      absolute right-4 top-1/2 -translate-y-1/2
                      rounded-full
                      bg-black/50 text-white
                      p-3
                      shadow-lg
                      hover:bg-black/70
                    "
                    aria-label="Next screenshot"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              {selectedScreenshot.caption}
            </p>

            {/* Screenshot Gallery */}
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={
                    selectedImage === index
                      ? "ring-2 ring-blue-600 rounded-lg"
                      : "rounded-lg"
                  }
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.caption || `${project.title} screenshot ${index + 1}`}
                    className="
                      w-32
                      h-20
                      object-cover
                      rounded-lg
                      cursor-pointer
                    "
                  />
                </button>
              ))}
            </div>

            <p className="mt-6 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            

            <div className="flex gap-4 mt-6">
            {project.github && (
                <a
                href={project.github}
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

            {project.demo && (
                <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    bg-blue-600
                    text-white
                    px-4 py-2
                    rounded-lg
                "
                >
                Live Demo
                </a>
            )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}