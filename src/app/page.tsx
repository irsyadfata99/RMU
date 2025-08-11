"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrontHeader from "./components/Navbar"; // Assuming Navbar.tsx exists
import Hero from "./components/Hero";
import Card from "./components/Card";
import FoundationDivisionsSection from "./components/Divisions";
import FrontFooter from "./components/Footer"; // Assuming Footer.tsx exists
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Import Variants type

const Slider = dynamic(() => import("react-slick"), { ssr: false });

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
      <FoundationDivisionsSection />
      <FrontFooter />
    </div>
  );
}
