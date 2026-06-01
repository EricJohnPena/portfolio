export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="text-center">

                <h1 className="text-6xl font-bold">
                    Eric John A. Peña
                </h1>

                <p className="text-xl text-gray-600 mt-4">
                    Aspiring Software Engineer
                </p>

                <p className="mt-4 max-w-xl mx-auto">
                    Building modern web applications,
                    mobile apps, and software solutions.
                </p>

                <div className="mt-8 flex gap-4 justify-center">

                    <a
                        href="#projects"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                    >
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        className="border px-6 py-3 rounded-lg"
                    >
                        Resume
                    </a>

                </div>
            </div>
        </section>
    )
}