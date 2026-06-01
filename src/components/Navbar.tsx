import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="
      fixed top-0 w-full
      bg-white dark:bg-slate-900
      text-black dark:text-white
      shadow
      z-50"
    >
      <div
        className="
        max-w-6xl mx-auto
        px-4 py-4
        flex justify-between items-center"
      >
        <h1 className="font-bold text-xl">
        <a href="#">
          Eric Peña
        </a>
        </h1>

        <div className="flex gap-6 items-center">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>

          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-lg
              hover:bg-gray-200
              dark:hover:bg-slate-700
              transition"
          >
            {theme === "light" ? (
              <FaMoon />
            ) : (
              <FaSun />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}