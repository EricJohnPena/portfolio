import { FaDownload } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="min-h-screen
                flex items-center justify-center
                bg-white dark:bg-slate-950
                text-black dark:text-white">
            <div className="text-center">

                <h1
  className="
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    font-bold
  "
>
                    Eric John Peña
                </h1>

                <p className="text-base text-gray-700 dark:text-gray-300 px-6 text-base
    md:text-lg
    max-w-2xl
    mx-auto mt-4">
                    Aspiring Software Engineer
                </p>

                <p className="mt-4 text-gray-700 dark:text-gray-300 px-6
    text-base
    md:text-lg
    max-w-2xl
    mx-auto">
                    Building modern web applications,
                    mobile apps, and software solutions.
                </p>

                <div className="mt-8
    flex
    flex-col
    sm:flex-row
    gap-4
    justify-center">

                    <a
                        href="#projects"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        View Projects
                    </a>
                    
                    <a
                        href={`${import.meta.env.BASE_URL}resume/Eric_John_Pena_Resume.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        bg-blue-600
                        text-white
                        px-6 py-3
                        rounded-lg
                        "
                    >
                        View Resume
                    </a>

                    <a
                    href={`${import.meta.env.BASE_URL}resume/Eric_John_Pena_Resume.pdf`}
                    download
                    className="
                        border
                        border-gray-300
                        dark:border-gray-600
                        px-6 py-3
                        rounded-lg
                        hover:bg-gray-100
                        dark:hover:bg-slate-800
                        transition
                        flex items-center gap-2
                    "
                    >
                    <FaDownload />
                    Resume
                    </a>

                </div>
            </div>
        </section>
    )
}