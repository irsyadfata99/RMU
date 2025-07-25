"use client";

import { useState, useEffect } from "react";

interface Slide {
  id: number;
  title: string;
  description: string;
  stats: string;
  color: "blue" | "purple" | "red";
  image: "towers" | "cables" | "datacenters";
}

const TelkomSlideCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides: Slide[] = [
    {
      id: 0,
      title: "Membangun 41,000+ Tower",
      description: "Telkom membangun infrastruktur tower telekomunikasi yang tersebar di seluruh nusantara untuk menjangkau daerah terpencil dan memberikan akses komunikasi yang merata.",
      stats: "41,000+ Tower",
      color: "blue",
      image: "towers",
    },
    {
      id: 1,
      title: "Memasang 170,000+ km Kabel Optik",
      description: "Jaringan fiber optik Telkom membentang dari Sabang hingga Merauke, menghubungkan seluruh Indonesia dengan teknologi komunikasi tercepat dan terdepan.",
      stats: "170,000+ km",
      color: "purple",
      image: "cables",
    },
    {
      id: 2,
      title: "Mendirikan 30+ Global Data Center",
      description: "Telkom menghadirkan fasilitas Data Center andal guna mendukung perkembangan bisnis pelanggan dari skala mikro menuju menengah hingga lebih besar lagi.",
      stats: "30+ Data Centers",
      color: "red",
      image: "datacenters",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Auto slide every 4 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    console.log(`Slide ${index} clicked:`, slides[index].title);
  };

  const getColorClasses = (color: "blue" | "purple" | "red", isActive: boolean = false) => {
    const colors = {
      blue: {
        text: isActive ? "text-blue-600" : "text-gray-500",
        bg: isActive ? "bg-blue-600" : "bg-gray-400",
        border: isActive ? "border-blue-600" : "border-transparent",
        hover: "group-hover:text-blue-600",
      },
      purple: {
        text: isActive ? "text-purple-600" : "text-gray-500",
        bg: isActive ? "bg-purple-600" : "bg-gray-400",
        border: isActive ? "border-purple-600" : "border-transparent",
        hover: "group-hover:text-purple-600",
      },
      red: {
        text: isActive ? "text-red-600" : "text-gray-500",
        bg: isActive ? "bg-red-600" : "bg-gray-400",
        border: isActive ? "border-red-600" : "border-transparent",
        hover: "group-hover:text-red-600",
      },
    };
    return colors[color];
  };

  const renderSlideImage = (imageType: "towers" | "cables" | "datacenters", isActive: boolean) => {
    const baseClasses = "transition-all duration-700";
    const activeClasses = isActive ? "opacity-100 scale-100" : "opacity-40 scale-95";

    switch (imageType) {
      case "towers":
        return (
          <div className={`${baseClasses} ${activeClasses}`}>
            {/* Network Tower Visualization */}
            <div className="flex justify-around items-end mb-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  {/* Tower Icon */}
                  <div className="w-8 h-8 mb-2">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600">
                      <path fill="currentColor" d="M12 2L8 6v3h1v11h6V9h1V6l-4-4zm0 2.83L13.17 6H10.83L12 4.83zM10 8h4v1h-4V8zm4 2v9h-4v-9h4z" />
                    </svg>
                    {/* Signal waves */}
                    <div className="absolute -top-2 -left-2 w-12 h-12">
                      {[...Array(2)].map((_, j) => (
                        <div
                          key={j}
                          className="absolute inset-0 border-2 border-blue-600 rounded-full opacity-20 animate-ping"
                          style={{
                            animationDelay: `${j * 0.8}s`,
                            animationDuration: "2s",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Tower base */}
                  <div className="bg-gradient-to-t from-gray-500 to-gray-400 rounded-sm" style={{ width: "12px", height: `${20 + i * 8}px` }} />
                </div>
              ))}
            </div>
          </div>
        );

      case "cables":
        return (
          <div className={`${baseClasses} ${activeClasses}`}>
            {/* Fiber Optic Network */}
            <div className="relative h-40">
              <svg className="w-full h-full" viewBox="0 0 400 160">
                {/* Network nodes */}
                {[...Array(8)].map((_, i) => (
                  <circle key={i} cx={50 + i * 45} cy={80} r="6" fill="rgb(147,51,234)" className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}

                {/* Connecting cables */}
                {[...Array(4)].map((_, i) => (
                  <path
                    key={i}
                    d={`M0,${60 + i * 15} Q100,${70 + i * 10} 200,${60 + i * 15} T400,${60 + i * 15}`}
                    fill="none"
                    stroke="rgba(147,51,234,0.6)"
                    strokeWidth="3"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                ))}

                {/* Data flow animation */}
                {[...Array(4)].map((_, i) => (
                  <circle key={i} r="4" fill="rgb(147,51,234)" className="opacity-80">
                    <animateMotion dur="4s" repeatCount="indefinite" path={`M0,${65 + i * 15} Q100,${75 + i * 10} 200,${65 + i * 15} T400,${65 + i * 15}`} begin={`${i * 1}s`} />
                  </circle>
                ))}
              </svg>
            </div>
          </div>
        );

      case "datacenters":
        return (
          <div className={`${baseClasses} ${activeClasses}`}>
            {/* Data Center Buildings */}
            <div className="flex justify-center items-end space-x-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="relative bg-gradient-to-t from-gray-500 to-gray-400 rounded-t-sm shadow-lg"
                  style={{
                    width: "45px",
                    height: `${80 + i * 25}px`,
                  }}
                >
                  {/* Building windows */}
                  <div className="absolute inset-2 space-y-2">
                    {[...Array(Math.floor((80 + i * 25) / 15))].map((_, j) => (
                      <div key={j} className="flex space-x-1 justify-center">
                        <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-60 animate-pulse" />
                        <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }} />
                        <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: "1s" }} />
                      </div>
                    ))}
                  </div>

                  {/* Server indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50">
      <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Sliding Images */}
            <div className="relative flex-1 flex justify-center">
              <div className="relative h-64 w-full flex items-center justify-center">
                {slides.map((slide) => (
                  <div key={slide.id} className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${currentSlide === slide.id ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                    {renderSlideImage(slide.image, currentSlide === slide.id)}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">Telkom untuk Indonesia</h1>
                <p className="text-gray-600 text-lg leading-relaxed">Telkom telah berkontribusi membangun masa depan bangsa dengan mendirikan jaringan digital terbaik dari Sabang sampai Merauke untuk mewujudkan kedaulatan Indonesia.</p>
              </div>

              {/* Sliding Content */}
              <div className="space-y-6">
                {slides.map((slide, index) => {
                  const isActive = currentSlide === index;
                  const colors = getColorClasses(slide.color, isActive);

                  return (
                    <div
                      key={slide.id}
                      className={`flex items-center space-x-4 transition-all duration-500 w-full text-left group cursor-pointer hover:bg-gray-50 p-4 rounded-xl ${isActive ? "opacity-100 bg-gray-50 border-l-4" : "opacity-60"} ${
                        colors.border
                      }`}
                      onClick={() => handleSlideClick(index)}
                    >
                      <div className={`w-2 h-12 rounded-full transition-colors duration-300 ${colors.bg} group-hover:bg-${slide.color}-600`}></div>
                      <div className="flex-1">
                        <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${colors.text} ${colors.hover}`}>{slide.title}</div>
                        {isActive && <p className="text-gray-600 group-hover:text-gray-700 text-sm leading-relaxed transition-all duration-300 animate-fade-in">{slide.description}</p>}
                      </div>
                      <div className={`transition-opacity duration-300 ${isActive || "group-hover:opacity-100 opacity-0"}`}>
                        <svg className={`w-5 h-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-3 justify-center lg:justify-start">
                {slides.map((_, index) => (
                  <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-gray-800 scale-125" : "bg-gray-400 hover:bg-gray-600"}`} onClick={() => handleSlideClick(index)} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TelkomSlideCard;
