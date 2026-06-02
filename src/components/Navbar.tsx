import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

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
        flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-center justify-between gap-4 w-full md:w-auto">
          <h1 className="font-bold text-xl">
            <a href="#">Eric Peña</a>
          </h1>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <FaBars />
          </button>
        </div>

        <div className={`flex flex-col gap-4 mt-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-6 ${menuOpen ? "block" : "hidden"} md:flex`}>
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="self-start md:self-auto p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  );
}