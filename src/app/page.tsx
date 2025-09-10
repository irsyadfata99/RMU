"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrontHeader from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import FoundationDivisionsSection from "./components/Divisions";
import FrontFooter from "./components/Footer";
import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
import { Toaster } from "react-hot-toast"; 
import toast from "react-hot-toast";
import { useEffect } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Home() {
  const sliderImages = ["/template-hero.png", "/template-hero-1.png", "/template-hero.png"];

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

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    const success = sessionStorage.getItem("registerSuccess");
    if (success) {
      toast.success("Pendaftaran anggota berhasil!");
      sessionStorage.removeItem("registerSuccess"); 
    }
  }, []);

  return (
    <div className="bg-white text-gray-700 dark:text-gray-300 min-h-screen">
      <Toaster position="top-right" reverseOrder={false} /> 
      <FrontHeader />
      <Hero />
      <Card />
      <FoundationDivisionsSection />
      <FrontFooter />
    </div>
  );
}
