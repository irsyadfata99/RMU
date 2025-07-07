"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrontHeader from "./components/front/header";
import FrontHome from "./components/front/home";
import FrontAbout from "./components/front/about";
import FrontFeature from "./components/front/feature";
import FrontProduct from "./components/front/product";
import FrontClient from "./components/front/client";
import FrontContact from "./components/front/contact";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 min-h-screen">
      <FrontHeader />
      <FrontHome />
      <FrontAbout />
      <FrontFeature />
      <FrontProduct />
      <FrontClient />
      <FrontContact />

      {/* Footer */}
      <footer className="bg-white dark:bg-black p-6 sm:p-10 flex justify-center items-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 Velocitron. All rights reserved.</p>
      </footer>
    </div>
  );
}
