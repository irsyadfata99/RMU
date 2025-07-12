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
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        )!;
        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId);
          targetElement?.scrollIntoView({ behavior: "smooth" });
          setMobileMenuOpen(false);
        }
      })
    );
  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 header-responsive shadow-md z-30">
        <div
          className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
          role="banner"
        >
          <div className="flex items-center -space-x-10">
            <Image
              src="/profile-2.png"
              alt="Velocitron Logo"
              width={150}
              height={50}
              priority
              className="object-contain"
            />
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 font-medium">
              <li>
                <a
                  href="#tentang-kami"
                  className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
                >
                  Tentang Kami
                </a>
              </li>

              <li>
                <a
                  href="#feature"
                  className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
                >
                  Feature
                </a>
              </li>

              <li>
                <a
                  href="#product"
                  className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
                >
                  Product
                </a>
              </li>

              <li>
                <a
                  href="#client-kami"
                  className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
                >
                  Client kami
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
                >
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
              className="w-6 h-6 text-[#3d4a98] hover:text-[#d6dadd]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      <nav
        className={`md:hidden fixed top-20 left-0 right-0 bg-[var(--color5)] text-[#3d4a98] hover:text-[#d6dadd] border-t border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-20 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col space-y-1 px-4 py-4 font-medium">
          <li>
            <a
              href="#tentang-kami"
              className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
            >
              Tentang Kami
            </a>
          </li>

          <li>
            <a
              href="#product"
              className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
            >
              Product
            </a>
          </li>

          <li>
            <a
              href="#harga"
              className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
            >
              Harga
            </a>
          </li>

          <li>
            <a
              href="#testimoni"
              className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
            >
              Testimoni
            </a>
          </li>

          <li>
            <a
              href="#client"
              className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
            >
              Client kami
            </a>
          </li>

          <li>
            <a
              href="#kontak-kami"
              className="text-[#3d4a98] hover:text-[#d6dadd] transition-colors duration-300"
            >
              Kontak Kami
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FrontHeader;
