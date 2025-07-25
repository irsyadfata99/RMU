"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrontHeader from "./components/Navbar"; // Assuming Navbar.tsx exists
import Hero from "./components/Hero";
import Card from "./components/Card";
import FrontFooter from "./components/Footer"; // Assuming Footer.tsx exists
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Import Variants type

const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Mock data for the divisions. You can replace this with data from your backend later.
const divisions = [
  { name: "Divisi Robotika", image: "/template-hero.png" },
  { name: "Divisi AI & Machine Learning", image: "/template-hero.png" },
  { name: "Divisi Web Development", image: "/template-hero.png" },
  { name: "Divisi Mobile Apps", image: "/template-hero.png" },
  { name: "Divisi Game Development", image: "/template-hero.png" },
  { name: "Divisi UI/UX Design", image: "/template-hero.png" },
];

export default function Home() {
  const sliderImages = ["/template-hero.png", "/template-hero-1.png", "/template-hero.png"];

  // Explicitly type the animation variants with the Variants type
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Explicitly type the animation variants with the Variants type
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white text-gray-700 dark:text-gray-300 min-h-screen">
      <FrontHeader />
      <Hero />
      <Card />

      {/* Division card */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3d4a98]">Divisi Kami</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Jelajahi berbagai divisi yang kami tawarkan, masing-masing dengan fokus dan keahlian unik.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={division.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="relative w-full h-56">
                  <Image src={division.image} alt={`Gambar untuk ${division.name}`} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3d4a98]">{division.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FrontFooter />
    </div>
  );
}
