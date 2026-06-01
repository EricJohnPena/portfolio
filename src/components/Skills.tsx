const skills = [
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MySQL",
    "PHP",
    "Python",
    "Unity",
    "Git"
]

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-20 px-4
  bg-gray-50 dark:bg-slate-900"
        >
            <div className="max-w-5xl mx-auto">

                <h2 className="text-4xl font-bold mb-8">
                    Skills
                </h2>

                <div className="flex flex-wrap gap-4">

                    {skills.map(skill => (
                        <span
                            key={skill}
                            className="px-4 py-2
                            bg-white dark:bg-slate-800
                            text-black dark:text-white
                            rounded
                            shadow"
                        >
                            {skill}
                        </span>
                    ))}

                </div>
            </div>
        </section>
    )
}