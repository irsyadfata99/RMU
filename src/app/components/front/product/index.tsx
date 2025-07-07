import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaBuilding } from "react-icons/fa";

const FrontProduct = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const cardData = [
    {
      id: 1,
      title: "Ekstrakurikuler Coding",
      icon: FaCode, // React Icon component
      features: ["9 Bulan program (36 pertemuan)", "Project based curriculum", "6 hingga 10 siswa per kelas", "Sertifikat dan portfolio"],
      bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      isActive: true,
    },
    {
      id: 2,
      title: "Kelas Reguler Coding",
      icon: FaGraduationCap, // React Icon component
      features: ["9 Bulan program (36 pertemuan)", "Online atau offline class", "maximal 6 siswa per kelas", "Sertifikat dan portfolio"],
      bgImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      isActive: false,
    },
    {
      id: 3,
      title: "ERP untuk sekolah",
      icon: FaBuilding, // React Icon component
      features: ["Program subscribe per tahun", "SPMB online", "Rapor digital", "Sistem pembayaran online"],
      bgImage: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      isActive: false,
    },
  ];

  return (
    <motion.section id="product" className="p-10 sm:p-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 scroll-mt-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      {/* Header Section */}
      <motion.div className="text-center mb-16" variants={fadeUp}>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Produk <span className="text-[#00B5AD]">Unggulan Kami</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Pilih program yang sesuai dengan kebutuhan anda</p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cardData.map((card, index) => {
          const IconComponent = card.icon; // Get the icon component

          return (
            <motion.div
              key={card.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group ${card.isActive ? "transform scale-105 ring-4 ring-[#00B5AD] ring-opacity-50" : "hover:scale-105"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleUp}
              transition={{ delay: index * 0.1 }}
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: card.bgImage,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-800 p-8 h-full flex flex-col">
                {/* Icon Circle */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg p-3" style={{ background: card.bgImage }}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">{card.title}</h3>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#00B5AD] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    card.isActive ? "bg-[#00B5AD] text-white hover:bg-[#00948e] shadow-lg hover:shadow-xl" : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                >
                  {card.isActive ? "Pelajari lebih lanjut" : "Program akan segera hadir"}
                </button>

                {/* Active Badge */}
                {card.isActive && <div className="absolute top-4 right-4 bg-[#00B5AD] text-white px-3 py-1 rounded-full text-xs font-semibold">Populer</div>}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div className="text-center mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Tidak yakin paket mana yang tepat untuk Anda?</p>
        <button className="bg-gradient-to-r from-[#00B5AD] to-[#00948e] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" onClick={() => window.open("https://wa.me/6281234567890", "_blank")}>
          Konsultasi Gratis
        </button>
      </motion.div>
    </motion.section>
  );
};

export default FrontProduct;
