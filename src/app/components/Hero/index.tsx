"use client";

import { useState, useEffect } from "react";

const MinimalHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for the slider - you can replace these with your actual images
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=center",
      title: "Community Empowerment",
      description:
        "Building sustainable solutions that empower communities worldwide",
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&crop=center",
      title: "Education Access",
      description:
        "Providing educational opportunities to underserved populations",
    },
    {
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&crop=center",
      title: "Healthcare Innovation",
      description: "Innovative healthcare solutions for remote communities",
    },
    {
      url: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=600&h=400&fit=crop&crop=center",
      title: "Environmental Impact",
      description: "Sustainable practices protecting our planet's future",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Auto-advance slider
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-60 transition-all duration-1000 ease-out"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rotate-45 transition-all duration-1000 ease-out delay-300"></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-300 rounded-full opacity-30"></div>

      <div className="relative z-10 min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div>
                <div className="inline-block px-4 py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-full mb-6 hover:bg-gray-100 transition-colors duration-300">
                  Foundation • Est. 2022
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-none mb-6">
                  Reksa
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    Mahardhika
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-8 rounded-full"></div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Perkumpulan Kesejahteraan Sosial Reksa Mahardhika Utama.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                  Explore Our Work
                </button>
                <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"></button>
              </div>

              {/* Minimal Stats */}
              <div className="flex space-x-12 pt-8 border-t border-gray-100">
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    1,500+
                  </div>
                  <div className="text-sm text-gray-500">Active Members</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    20+
                  </div>
                  <div className="text-sm text-gray-500">Active Programs</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    2022
                  </div>
                  <div className="text-sm text-gray-500">Founded</div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Slider */}
            <div
              className={`relative transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Image Slider Container */}
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group relative">
                  {/* Slider Images */}
                  <div className="relative w-full h-full">
                    {sliderImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Slide Content */}
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-xl font-semibold mb-2">
                            {image.title}
                          </h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-white w-6"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Additional floating elements */}
                <div className="absolute top-8 -left-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute -top-2 right-12 w-8 h-8 bg-gradient-to-br from-purple-200 to-pink-200 rotate-45 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-400">
        <span className="text-xs font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-10px) translateX(5px);
          }
          66% {
            transform: translateY(5px) translateX(-5px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default MinimalHeroSection;
