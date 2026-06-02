import { FaDownload } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="
                py-20 px-4
                bg-gray-50
                dark:bg-slate-900
                text-black
                dark:text-white"
        >
            <div className="max-w-5xl mx-auto">

                <h2 className="text-4xl font-bold mb-6">
                    Contact
                </h2>

                <p className="text-gray-700 dark:text-gray-300">
                    eric.john.pena@gmail.com
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                    +63 947 430 0125
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                    Cavite, Philippines
                </p>
<div className="mt-6">
                <a
                    href="/resume/Eric_John_Pena_Resume.pdf"
                    download
                    className="
                    inline-flex
                    items-center
                    gap-2
                    bg-blue-600
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-blue-700
                    transition
                    "
                >
                    <FaDownload />
                    Download Resume
                </a>
                </div>
            </div>
            
        </section>
    )
}