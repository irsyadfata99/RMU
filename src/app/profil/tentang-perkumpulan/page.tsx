import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TelkomAboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Sekilas tentang Telkom Indonesia</h1>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>PT Telkom Indonesia (Persero) Tbk adalah perusahaan telekomunikasi terbesar dan terdepan di Indonesia yang menyediakan layanan telekomunikasi dan teknologi informasi terpadu.</p>

            <p>
              Telkom Indonesia berperan sebagai penyedia layanan telekomunikasi yang menghubungkan seluruh wilayah Indonesia dari Sabang hingga Merauke. Sebagai BUMN strategis, Telkom memiliki komitmen untuk membangun infrastruktur digital
              yang menghubungkan seluruh pelosok negeri guna mendukung program pemerintah dalam mewujudkan Indonesia Digital.
            </p>

            <p>
              Dengan menghadirkan layanan terbaik melalui inovasi teknologi terdepan, Telkom Indonesia terus bertransformasi menjadi perusahaan digital yang mengutamakan customer experience. Telkom juga berkomitmen untuk memberikan nilai
              tambah kepada seluruh stakeholder melalui pengembangan talenta digital yang kompeten dan profesional.
            </p>

            <p>
              Perjalanan transformasi digital Telkom Indonesia didukung oleh ekosistem bisnis yang terintegrasi mulai dari layanan connectivity, digital platform, hingga digital services. Melalui pendekatan customer-centric dan
              technology-driven, Telkom Indonesia siap menjadi digital champion yang berkontribusi dalam memajukan ekonomi digital Indonesia.
            </p>

            <p>
              Dengan visi menjadi "Digital Champion", Telkom Indonesia berkomitmen untuk terus berinovasi dalam memberikan solusi digital terpadu yang dapat meningkatkan kualitas hidup masyarakat Indonesia dan mendukung pertumbuhan ekonomi
              nasional melalui transformasi digital yang berkelanjutan.
            </p>
          </div>
        </div>
      </div>

      {/* Values and Company Culture Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nilai dan Kultur Perusahaan</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Values List */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Nilai-nilai perusahaan sebagai budaya kerja Telkom yang dijadikan landasan bagi seluruh insan Telkom dalam menjalankan aktivitas korporasi sehari-hari.</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">• Trust</h3>
                  <p className="text-gray-600 text-sm ml-4">Membangun rasa saling percaya</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Kompeten</h3>
                  <p className="text-gray-600 text-sm ml-4">Terus belajar dan mengembangkan kapabilitas</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Harmonis</h3>
                  <p className="text-gray-600 text-sm ml-4">Saling peduli dan menghargai perbedaan</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Loyal</h3>
                  <p className="text-gray-600 text-sm ml-4">Berdedikasi dan mengutamakan kepentingan bangsa dan negara</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Adaptif</h3>
                  <p className="text-gray-600 text-sm ml-4">Terus berinovasi dan antusias dalam menghadapi tantangan untuk mejadi yang terdepan</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Kolaboratif</h3>
                  <p className="text-gray-600 text-sm ml-4">Membangun kerja sama yang sinergis</p>
                </div>
              </div>
            </div>

            {/* Right Column - AKHLAK Logo */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">
                  <span className="text-blue-800">AKHL</span>
                  <span className="text-blue-400">AK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visi & Misi</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Futuristic Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-8 border-b-white ml-1"></div>
                    </div>
                    <div className="text-4xl mb-2">↗</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
                {/* Tech circles/dots pattern */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-white bg-opacity-40 rounded-full"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white bg-opacity-60 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-white bg-opacity-30 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-300 bg-opacity-60 rounded-full"></div>
              </div>
            </div>

            {/* Right Column - Vision & Mission Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Visi dan misi sebagai arah strategis Telkom yang menjadi panduan bagi seluruh insan Telkom dalam menjalankan aktivitas korporasi sehari-hari. Telkom berkomitmen menjadi perusahaan Visi dan Misi Telkom.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Purpose</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Memajukan bangsa melalui inovasi digital telekomunikasi untuk kehidupan yang lebih baik bagi seluruh rakyat Indonesia, sejalan dengan tujuan pembangunan berkelanjutan.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Menjadi perusahaan digital telco utama di kawasan Asia Tenggara.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Mission</h3>
                  <div className="text-gray-700 text-sm leading-relaxed space-y-1">
                    <p>1. Mempercepat transformasi digital masyarakat, pemerintahan dan dunia usaha melalui inovasi model bisnis dan teknologi digital.</p>
                    <p>2. Menyelenggarakan layanan excellent experience kepada pelanggan melalui jaringan telekomunikasi berkualitas tinggi berbasis teknologi terdepan yang mengutamakan keamanan dan kemudahan.</p>
                    <p>3. Mengembangkan model bisnis digital yang berkelanjutan dengan mengoptimalkan penggunaan big data, artificial intelligence dan platform digital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TelkomAboutPage;
