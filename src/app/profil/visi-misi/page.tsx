import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TelkomVisiMisiPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Visi, Misi & Purpose Telkom Indonesia</h1>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Visi, Misi, dan Purpose PT Telkom Indonesia (Persero) Tbk merupakan fondasi strategis yang mengarahkan seluruh aktivitas perusahaan dalam mencapai tujuan jangka panjang sebagai perusahaan telekomunikasi digital terdepan di
              kawasan Asia Tenggara.
            </p>

            <p>
              Sebagai perusahaan BUMN strategis, Telkom Indonesia memiliki tanggung jawab besar dalam membangun infrastruktur digital nasional yang menghubungkan seluruh wilayah Indonesia. Visi dan misi perusahaan dirancang untuk mendukung
              transformasi digital Indonesia dan berkontribusi pada kemajuan bangsa melalui inovasi teknologi telekomunikasi.
            </p>

            <p>
              Purpose perusahaan mencerminkan komitmen Telkom Indonesia untuk tidak hanya mencari keuntungan, tetapi juga memberikan dampak positif bagi masyarakat, bangsa, dan negara. Hal ini sejalan dengan Sustainable Development Goals
              (SDGs) dan visi Indonesia untuk menjadi negara maju di tahun 2045.
            </p>

            <p>
              Melalui implementasi visi dan misi yang konsisten, Telkom Indonesia terus bertransformasi menjadi digital champion yang mampu bersaing di tingkat regional dan global, sambil tetap mengutamakan kepentingan nasional dan
              kesejahteraan rakyat Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Purpose - Tujuan Keberadaan</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Purpose Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">Memajukan Bangsa</div>
                    <div className="text-sm opacity-75">Through Digital Innovation</div>
                  </div>
                </div>
                {/* Indonesia Map Outline */}
                <div className="absolute bottom-4 right-4 w-16 h-10 border-2 border-white border-opacity-40 rounded-sm"></div>
                <div className="absolute top-4 left-4 w-2 h-2 bg-emerald-300 bg-opacity-80 rounded-full"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white bg-opacity-60 rounded-full"></div>
              </div>
            </div>

            {/* Right Column - Purpose Content */}
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h3 className="font-bold text-green-900 text-lg mb-3">Purpose</h3>
                <p className="text-green-800 leading-relaxed font-medium">
                  "Memajukan bangsa melalui inovasi digital telekomunikasi untuk kehidupan yang lebih baik bagi seluruh rakyat Indonesia, sejalan dengan tujuan pembangunan berkelanjutan."
                </p>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">Purpose ini mencerminkan komitmen Telkom Indonesia untuk berkontribusi pada kemajuan bangsa melalui penyediaan solusi digital yang inovatif dan berkelanjutan.</p>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold">🇮🇩</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">Bangsa</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold">💡</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">Inovasi</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600 font-bold">🌱</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">Berkelanjutan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visi - Vision Statement</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Vision Content */}
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-blue-900 text-lg mb-3">Visi 2030</h3>
                <p className="text-blue-800 leading-relaxed font-medium text-lg">"Menjadi perusahaan digital telco utama di kawasan Asia Tenggara"</p>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">Visi ini menunjukkan ambisi Telkom Indonesia untuk menjadi pemimpin dalam industri telekomunikasi digital tidak hanya di Indonesia, tetapi juga di seluruh kawasan Asia Tenggara.</p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-sm">
                      <strong>Digital Leadership:</strong> Memimpin transformasi digital di kawasan
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-sm">
                      <strong>Regional Expansion:</strong> Memperluas jangkauan ke Asia Tenggara
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-sm">
                      <strong>Technology Excellence:</strong> Unggul dalam inovasi teknologi telco
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Vision Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 20 12 16.77 5.82 20 7 13.87 2 9l6.91-.74L12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">Digital Champion</div>
                    <div className="text-sm opacity-75">Southeast Asia</div>
                  </div>
                </div>
                {/* ASEAN representation */}
                <div className="absolute bottom-4 left-4 flex space-x-1">
                  <div className="w-2 h-2 bg-cyan-300 bg-opacity-80 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-300 bg-opacity-80 rounded-full"></div>
                  <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full"></div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border border-white border-opacity-40 rounded-full flex items-center justify-center">
                  <div className="text-xs font-bold">2030</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Misi - Mission Statement</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Mission Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 bg-gradient-to-br from-purple-800 via-purple-600 to-pink-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">Strategic Mission</div>
                    <div className="text-sm opacity-75">Three Pillars</div>
                  </div>
                </div>
                {/* Mission elements */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-pink-300 bg-opacity-60 rounded transform rotate-45"></div>
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-300 bg-opacity-80 rounded-full"></div>
                <div className="absolute top-1/2 right-4 w-2 h-2 bg-white bg-opacity-70 rounded-full"></div>
              </div>
            </div>

            {/* Right Column - Mission Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Misi Telkom Indonesia terdiri dari tiga pilar utama yang saling mendukung untuk mencapai visi perusahaan sebagai digital telco utama di Asia Tenggara.</p>

              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-purple-900 mb-2">Misi 1: Transformasi Digital</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">Mempercepat transformasi digital masyarakat, pemerintahan dan dunia usaha melalui inovasi model bisnis dan teknologi digital.</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Misi 2: Excellent Experience</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Menyelenggarakan layanan excellent experience kepada pelanggan melalui jaringan telekomunikasi berkualitas tinggi berbasis teknologi terdepan yang mengutamakan keamanan dan kemudahan.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-green-900 mb-2">Misi 3: Digital Business Model</h3>
                  <p className="text-green-800 text-sm leading-relaxed">Mengembangkan model bisnis digital yang berkelanjutan dengan mengoptimalkan penggunaan big data, artificial intelligence dan platform digital.</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">01</div>
                  <div className="text-xs text-gray-600">Transformasi</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">02</div>
                  <div className="text-xs text-gray-600">Excellence</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">03</div>
                  <div className="text-xs text-gray-600">Sustainability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Implementation Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementasi Strategis</h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Implementasi visi dan misi Telkom Indonesia dilakukan melalui roadmap strategis yang komprehensif dengan fokus pada pengembangan ekosistem digital yang terintegrasi. Perusahaan menerapkan pendekatan customer-centric dan
              technology-driven dalam setiap inisiatif bisnis.
            </p>

            <p>
              Pencapaian visi dan misi didukung oleh investasi berkelanjutan dalam infrastruktur digital, pengembangan SDM yang kompeten, serta kemitraan strategis dengan berbagai pihak baik dalam negeri maupun internasional untuk
              mempercepat transformasi digital Indonesia.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Strategic Planning</h3>
                <p className="text-sm text-gray-600">Roadmap jangka panjang dengan milestone yang terukur</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-sm text-gray-600">Standar kualitas tinggi dalam setiap layanan</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Vision</h3>
                <p className="text-sm text-gray-600">Perspektif regional dan internasional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TelkomVisiMisiPage;
