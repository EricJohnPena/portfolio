export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
                <h1 className="font-bold text-xl">
                    Eric Peña
                </h1>

                <ul className="flex gap-6">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}