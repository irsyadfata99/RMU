import { useState, useEffect } from "react";
import Image from "next/image";
const FrontHeader = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) {
            setMobileMenuOpen(false);
        }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) =>
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")!;
            if (targetId && targetId !== "#") {
            const targetElement = document.querySelector(targetId);
            targetElement?.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
            }
        })
        );
    }, []);

    return(
        <div>
            <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-30">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between" role="banner">
                <div className="flex items-center -space-x-10">
                <Image
                    src="/velocitron.png"
                    alt="Velocitron Logo"
                    width={150}
                    height={50}
                    priority
                    className="object-contain"
                />
                <span className="text-xl font-bold text-[#00B5AD] select-none">
                    Velocitron
                </span>
                </div>


                <nav className="hidden md:block">
                <ul className="flex items-center space-x-8 font-medium">
                    <li>
                    <a href="#tentang-kami" className="hover:text-[#00B5AD] transition-colors duration-300">
                        Tentang Kami
                    </a>
                    </li>

                    {/* Dropdown menu */}
                    <li className="relative group">
                    <button className="flex items-center hover:text-[#00B5AD] transition-colors duration-300">
                        Menu
                        <svg
                        className="ml-1 w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        >
                        <path d="M5.25 7.5L10 12.5L14.75 7.5H5.25Z" />
                        </svg>
                    </button>

                    {/* Dropdown content */}
                    <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
                        <li>
                        <a
                            href="#program"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                            Program 1
                        </a>
                        </li>
                        <li>
                        <a
                            href="#program2"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                            Program 2
                        </a>
                        </li>
                        <li>
                        <a
                            href="#program3"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                            Program 3
                        </a>
                        </li>
                    </ul>
                    </li>

                    <li>
                    <a href="#harga" className="hover:text-[#00B5AD] transition-colors duration-300">
                        Harga
                    </a>
                    </li>

                    <li>
                    <a href="#kontak-kami" className="hover:text-[#00B5AD] transition-colors duration-300">
                        Kontak Kami
                    </a>
                    </li>
                </ul>
                </nav>

                <button
                className="md:hidden flex items-center focus:outline-none"
                aria-label="Toggle menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                <svg
                    className="w-6 h-6 text-gray-700 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
                </button>
                </div>
            </header>

            <nav
                className={`md:hidden fixed top-20 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-20 ${
                mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <ul className="flex flex-col space-y-1 px-4 py-4 font-medium">
                <li>
                    <a
                    href="#tentang-kami"
                    className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                    Tentang Kami
                    </a>
                </li>

                <li>
                    <details className="group">
                    <summary className="flex justify-between items-center px-3 py-2 cursor-pointer rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                        Menu
                        <svg
                        className="w-4 h-4 ml-2 transition-transform group-open:rotate-180 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        >
                        <path d="M5.25 7.5L10 12.5L14.75 7.5H5.25Z" />
                        </svg>
                    </summary>
                    <ul className="pl-5 mt-2 space-y-1">
                        <li>
                        <a
                            href="#program"
                            className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Program 1
                        </a>
                        </li>
                        <li>
                        <a
                            href="#program2"
                            className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Program 2
                        </a>
                        </li>
                        <li>
                        <a
                            href="#program3"
                            className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Program 3
                        </a>
                        </li>
                    </ul>
                    </details>
                </li>

                <li>
                    <a
                    href="#harga"
                    className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                    Harga
                    </a>
                </li>

                <li>
                    <a
                    href="#kontak-kami"
                    className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                    Kontak Kami
                    </a>
                </li>
                </ul>
            </nav>
        </div>

    );
}

export default FrontHeader