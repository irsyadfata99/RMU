"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrontHeader from "./components/front/header";
import FrontHome from "./components/front/home";
import FrontAbout from "./components/front/about";
import FrontPrice from "./components/front/price";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 min-h-screen">
      <FrontHeader/>
      <FrontHome/>
      <FrontAbout/>
      <FrontPrice/>

      <section
        id="kontak-kami"
        className="bg-white dark:bg-gray-900 p-10 sm:p-20 text-center scroll-mt-20"
      >
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-[#00B5AD]">
          Kontak Kami
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Email: info@velocitron.com <br />
          Telepon: +62 812-3456-7890 <br />
          Alamat: Jl. Contoh No. 123, Jakarta, Indonesia
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 Velocitron. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#tentang-kami" className="hover:underline">
            Tentang Kami
          </a>
          <a href="#harga" className="hover:underline">
            Harga
          </a>
          <a href="mailto:info@velocitron.com" className="hover:underline">
            Hubungi Kami
          </a>
        </div>
      </footer>
    </div>
  );
}
