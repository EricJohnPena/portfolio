export default function Hero() {
    return (
        <section className="min-h-screen
                flex items-center justify-center
                bg-white dark:bg-slate-950
                text-black dark:text-white">
            <div className="text-center">

                <h1 className="text-6xl font-bold">
                    Eric John A. Peña
                </h1>

                <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
                    Aspiring Software Engineer
                </p>

                <p className="mt-4 max-w-xl mx-auto text-gray-700 dark:text-gray-300">
                    Building modern web applications,
                    mobile apps, and software solutions.
                </p>

                <div className="mt-8 flex gap-4 justify-center">

                    <a
                        href="#projects"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        className="border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                    >
                        Resume
                    </a>

                </div>
            </div>
        </section>
    )
}