"use client";

import { useState, useEffect } from "react";

interface HistoryEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  isActive?: boolean;
}

const TelkomHistorySection = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false); // Add client-side check

  const historyEvents: HistoryEvent[] = [
    {
      id: 0,
      year: "2014",
      title: "First 4G LTE Service Launched",
      description:
        "Telkom Indonesia melalui Telkomsel meluncurkan layanan mobile 4G LTE pertama di Indonesia untuk menjawab kebutuhan meningkatnya mobile broadband, mengakselerasi pertumbuhan di berbagai sektor, meningkatkan produktivitas masyarakat, mengembangkan gaya hidup digital, dan mendorong transformasi ke arah masyarakat digital yang lebih maju.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: 1,
      year: "2015",
      title: "Digital Transformation Initiative",
      description: "Telkom memulai transformasi digital besar-besaran dengan mengintegrasikan teknologi cloud computing dan big data analytics untuk meningkatkan layanan pelanggan dan efisiensi operasional di seluruh Indonesia.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: 2,
      year: "2016",
      title: "Fiber Optic Network Expansion",
      description: "Ekspansi masif jaringan fiber optik mencapai 50,000 km pertama, menghubungkan kota-kota besar di Indonesia dengan teknologi komunikasi tercepat dan membuka akses internet berkecepatan tinggi.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: 3,
      year: "2017",
      title: "Smart City Solutions Launch",
      description: "Telkom meluncurkan solusi Smart City terintegrasi untuk mendukung pembangunan kota pintar di Indonesia, termasuk sistem manajemen lalu lintas, keamanan publik, dan layanan pemerintahan digital.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: 4,
      year: "2018",
      title: "5G Network Testing",
      description: "Telkom memulai uji coba jaringan 5G pertama di Indonesia di beberapa kota besar, mempersiapkan infrastruktur untuk era Internet of Things (IoT) dan komunikasi masa depan.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: 5,
      year: "2020",
      title: "Pandemic Digital Support",
      description: "Selama pandemi COVID-19, Telkom memperkuat infrastruktur digital untuk mendukung work from home, pembelajaran online, dan digitalisasi UMKM di seluruh Indonesia.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: 6,
      year: "2021",
      title: "Digital Platform Ecosystem",
      description: "Telkom mengembangkan ekosistem platform digital terintegrasi termasuk e-commerce, fintech, dan layanan cloud untuk mendukung transformasi digital nasional Indonesia.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    setIsClient(true); // Set client state
  }, []);

  useEffect(() => {
    // Only start auto-advance on client side
    if (!isClient) return;

    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % historyEvents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [historyEvents.length, isClient]);

  const handleEventClick = (index: number) => {
    setActiveEvent(index);
  };

  const goToPrevious = () => {
    setActiveEvent((prev) => (prev - 1 + historyEvents.length) % historyEvents.length);
  };

  const goToNext = () => {
    setActiveEvent((prev) => (prev + 1) % historyEvents.length);
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Sejarah Telkom Indonesia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sejak awal berdiri, Telkom Indonesia berkomitmen kuat untuk membangun infrastruktur telekomunikasi dan informasi serta dunia digital Indonesia. Berikut adalah tonggak sejarah penting bagaimana Telkom memenuhi komitmennya untuk
            Indonesia dan Dunia.
          </p>
        </div>

        {/* Main Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{historyEvents[activeEvent].title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{historyEvents[activeEvent].description}</p>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-4">
                <button onClick={goToPrevious} className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={goToNext} className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              {historyEvents.map((event, index) => (
                <div key={event.id} className={`absolute inset-0 transition-all duration-700 ${activeEvent === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Year Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-lg font-bold text-gray-900">{event.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-2 mt-6 overflow-x-auto pb-2">
              {historyEvents.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => handleEventClick(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeEvent === index ? "border-blue-500 scale-105 shadow-lg" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2" />
            {/* Only render the progress line on client side to avoid hydration issues with dynamic width */}
            {isClient && <div className="absolute top-1/2 left-0 h-0.5 bg-red-500 transform -translate-y-1/2 transition-all duration-1000" style={{ width: `${((activeEvent + 1) / historyEvents.length) * 100}%` }} />}

            {/* Timeline Points */}
            <div className="flex justify-between items-center">
              {historyEvents.map((event, index) => (
                <button key={event.id} onClick={() => handleEventClick(index)} className="relative group flex flex-col items-center">
                  {/* Timeline Point */}
                  <div
                    className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                      activeEvent === index ? "bg-red-500 border-red-500 scale-125" : activeEvent > index ? "bg-red-500 border-red-500" : "bg-white border-gray-300 group-hover:border-gray-400"
                    }`}
                  />

                  {/* Year Label */}
                  <div className={`mt-4 text-sm font-semibold transition-colors duration-300 ${activeEvent === index ? "text-red-500" : "text-gray-600 group-hover:text-gray-900"}`}>{event.year}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelkomHistorySection;
