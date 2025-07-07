const FrontFeature = () => {
  const features = [
    {
      icon: "🧠",
      title: "Mendorong Inovasi Pendidikan IT untuk Indonesia",
      description:
        "Velocitron Edutech hadir dengan misi besar untuk memajukan pendidikan di bidang teknologi informasi di seluruh pelosok Indonesia. Kami percaya setiap individu, dari anak-anak hingga institusi pendidikan, berhak mendapatkan akses ke pembelajaran dan solusi IT berkualitas tinggi yang relevan dengan perkembangan zaman, agar mampu berinovasi dan berkontribusi untuk bangsa.",
    },
    {
      icon: "💻",
      title: "Solusi Holistik dan Terjangkau untuk Era Digital",
      description:
        "Kami menyediakan beragam program pendidikan IT inovatif, mulai dari kelas hobi yang menarik seperti desain 3D, pengembangan game, hingga drone, yang dirancang untuk membangun kreativitas dan kemampuan adaptif. Selain itu, kami juga menawarkan solusi SaaS ERP yang efisien dan terjangkau bagi sekolah, menegaskan komitmen kami pada ketersediaan pendidikan IT bagi seluruh lapisan masyarakat Indonesia.",
    },
    {
      icon: "🎯",
      title: "Membangun Masa Depan IT Bersama Masyarakat",
      description:
        "Velocitron Edutech berdedikasi penuh untuk menciptakan ekosistem pendidikan IT yang inklusif dan berkelanjutan di Indonesia, memastikan bahwa kualitas bukan lagi batasan harga. Melalui kurikulum yang terus berkembang dan teknologi yang mendukung, kami berkomitmen mencetak generasi unggul yang siap berinovasi dan bersaing di kancah global, demi masa depan bangsa yang lebih cerah.",
    },
    {
      icon: "🌱",
      title: "Kesehatan Mental & Kemandirian Kognitif",
      description:
        "Kami mengintegrasikan pembelajaran coding yang terarah untuk mengatasi brain rot dan memperbaiki attention span anak di era digital. Anak-anak didorong mandiri menciptakan game atau program, membangun rasa percaya diri, dan mengembangkan pola pikir positif yang esensial untuk kesejahteraan mental dan fisik optimal, demi masa depan Indonesia yang lebih cerah.",
    },
    {
      icon: "🚀",
      title: "Siap Hadapi Masa Depan",
      description:
        "Velocitron Edutech mempersiapkan anak-anak Indonesia menjadi individu yang tangguh dan siap menghadapi masa depan yang terus berubah. Tim kurikulum kami memastikan materi selalu terupdate dan tepat sasaran, sehingga pembelajaran yang diberikan relevan dengan dinamika teknologi terkini dan kebutuhan dunia nyata, mencetak generasi adaptif yang mampu bersaing global.",
    },
    {
      icon: "⚡",
      title: "Belajar Sambil Berkreasi",
      description:
        "Kami menyajikan pengalaman belajar yang sangat engaging dan menyenangkan melalui teknologi terdepan. Melalui pendekatan Project-Based Learning, anak-anak terlibat aktif dalam menciptakan dan berinovasi, bukan hanya menerima informasi, menjadikan proses belajar lebih menarik, berkesan, dan menghasilkan karya nyata yang dapat mereka banggakan, sebagai bukti nyata kontribusi kami untuk pendidikan IT Indonesia.",
    },
  ];

  return (
    <section id="feature" className="bg-white dark:bg-gray-800 p-10 sm:p-20 scroll-mt-20 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-[#00B5AD] animate-slide-up">Bukti Komitmen Kami</h2>
        <h3 className="text-lg sm:text-2xl font-semibold mb-6 text-[#00B5AD] animate-slide-up-delay">Dedikasi Kami untuk Pendidikan Berkualitas dan Generasi Tangguh</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group hover:scale-105 animate-card-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-[#00B5AD] transition-colors duration-300">{feature.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">{feature.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }

        .animate-slide-up-delay {
          animation: slideUp 0.6s ease-out 0.2s both;
        }

        .animate-card-up {
          animation: cardUp 0.6s ease-out both;
        }

        .animate-slide-up-final {
          animation: slideUp 0.6s ease-out 0.8s both;
        }
      `}</style>
    </section>
  );
};

export default FrontFeature;
