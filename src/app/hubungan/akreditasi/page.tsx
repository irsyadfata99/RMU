"use client";

import FrontHeader from "../../components/Navbar"; // Assuming Navbar.tsx exists
import FrontFooter from "../../components/Footer"; // Assuming Footer.tsx exists

export default function Home() {
  return (
    <div className="bg-white text-gray-700 dark:text-gray-300 min-h-screen">
      <FrontHeader />
      <h1>Akreditasi pages</h1>
      <FrontFooter />
    </div>
  );
}
