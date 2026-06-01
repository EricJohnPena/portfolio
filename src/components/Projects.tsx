const projects = [
{
title: "Banking Web App",
tech: "Spring Boot, PostgreSQL",
description: "Online banking system."
},
{
title: "POS System",
tech: "PHP, MySQL",
description: "Mini Donuts POS."
},
{
title: "Lexia: Vocabulary Learning App",
tech: "Unity, Firebase",
description: "Educational game."
}
]

export default function Projects() {
return (
<section id="projects" className="py-20 px-4 bg-white dark:bg-slate-950 text-black dark:text-white">

<div className="max-w-5xl mx-auto">

<h2 className="text-4xl font-bold mb-8">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-6">

{projects.map(project => (
<div
key={project.title}
className="border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 rounded-xl p-6 shadow"
>
<h3 className="text-2xl font-bold">
{project.title}
</h3>

<p className="text-blue-600 dark:text-blue-400">
{project.tech}
</p>

<p className="mt-3 text-gray-700 dark:text-gray-300">
{project.description}
</p>
</div>
))}

</div>
</div>
</section>
)
}