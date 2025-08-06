import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TelkomSejarahPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Sejarah Telkom Indonesia</h1>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Sejarah PT Telkom Indonesia (Persero) Tbk dimulai sejak era kolonial Belanda dan telah berkembang menjadi perusahaan telekomunikasi terbesar di Indonesia. Perjalanan panjang Telkom Indonesia mencerminkan evolusi teknologi
              telekomunikasi di Indonesia, dari era telepon kabel hingga era digital saat ini.
            </p>

            <p>
              Sebagai perusahaan yang telah berusia lebih dari satu abad, Telkom Indonesia telah melalui berbagai periode penting dalam sejarah Indonesia, mulai dari masa kolonial, kemerdekaan, pembangunan nasional, hingga era reformasi dan
              transformasi digital. Setiap periode membawa tantangan dan peluang yang membentuk karakter perusahaan hingga saat ini.
            </p>

            <p>
              Transformasi Telkom Indonesia dari perusahaan telekomunikasi tradisional menjadi perusahaan digital modern menunjukkan kemampuan adaptasi dan inovasi yang luar biasa. Perusahaan terus berinovasi dalam menghadapi perkembangan
              teknologi yang sangat cepat, mulai dari teknologi analog, digital, hingga era internet dan revolusi industri 4.0.
            </p>

            <p>
              Hari ini, Telkom Indonesia berdiri sebagai digital champion yang tidak hanya melayani kebutuhan telekomunikasi masyarakat Indonesia, tetapi juga berperan aktif dalam mendukung transformasi digital nasional dan pembangunan
              ekonomi digital Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Early History Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Era Awal (1884-1945)</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Historical Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 bg-gradient-to-br from-amber-800 via-amber-700 to-yellow-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">1884</div>
                    <div className="text-sm opacity-75">Awal Telekomunikasi</div>
                    <div className="text-sm opacity-75">Indonesia</div>
                  </div>
                </div>
                {/* Historical elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-300 bg-opacity-60 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-amber-200 bg-opacity-80 rounded-full"></div>
                <div className="absolute top-1/3 right-4 w-1 h-8 bg-white bg-opacity-40 rounded"></div>
              </div>
            </div>

            {/* Right Column - Early History Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Sejarah telekomunikasi di Indonesia dimulai pada masa kolonial Belanda dengan didirikannya layanan telegraf dan telepon pertama.</p>

              <div className="space-y-4">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-amber-900 mb-2">1884 - Pos, Telegraf dan Telepon (PTT)</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">Pemerintah kolonial Belanda mendirikan layanan pos, telegraf, dan telepon yang dikelola oleh Post, Telegraaf en Telefoon Dienst (PTT).</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 text-xs font-bold">1906</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Layanan Telepon Pertama</h4>
                      <p className="text-gray-600 text-xs">Pembukaan sentral telepon pertama di Jakarta dengan 50 pelanggan</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 text-xs font-bold">1920</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Ekspansi Jaringan</h4>
                      <p className="text-gray-600 text-xs">Perluasan jaringan telepon ke kota-kota besar di Jawa</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 text-xs font-bold">1942</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Masa Pendudukan Jepang</h4>
                      <p className="text-gray-600 text-xs">Pengambilalihan dan pengelolaan sistem telekomunikasi oleh Jepang</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Independence Era Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Era Kemerdekaan dan Pembangunan (1945-1980)</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Independence Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Pasca kemerdekaan Indonesia, pemerintah mengambil alih pengelolaan sistem telekomunikasi dan membangun fondasi telekomunikasi nasional.</p>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-red-900 mb-2">1945 - Pengambilalihan Aset</h3>
                  <p className="text-red-800 text-sm leading-relaxed">Pemerintah Indonesia mengambil alih seluruh aset telekomunikasi dari Jepang dan memulai pembangunan sistem telekomunikasi nasional.</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-blue-900 mb-2">1961 - PN Postel</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">Pembentukan Perusahaan Negara Pos dan Telekomunikasi (PN Postel) sebagai badan usaha yang mengelola layanan pos dan telekomunikasi.</p>
                </div>

                <div className="space-y-2 mt-4">
                  <h4 className="font-semibold text-gray-900 text-sm">Pencapaian Penting:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 1967: Pemisahan unit pos dan telekomunikasi</li>
                    <li>• 1974: Modernisasi sistem switching</li>
                    <li>• 1976: Peluncuran satelit komunikasi Palapa</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Independence Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 bg-gradient-to-br from-red-700 via-red-600 to-red-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">1945-1980</div>
                    <div className="text-sm opacity-75">Pembangunan</div>
                    <div className="text-sm opacity-75">Nasional</div>
                  </div>
                </div>
                {/* Independence elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-white bg-opacity-30 rounded transform rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-red-300 bg-opacity-70 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-white bg-opacity-80 rounded-full"></div>
                <div className="absolute bottom-6 right-6 text-xs opacity-60">🇮🇩</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Era Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Era Modern dan Korporatisasi (1980-2000)</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Modern Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">1980-2000</div>
                    <div className="text-sm opacity-75">Modernisasi</div>
                    <div className="text-sm opacity-75">Korporatisasi</div>
                  </div>
                </div>
                {/* Modern elements */}
                <div className="absolute top-4 left-4 w-6 h-2 bg-emerald-300 bg-opacity-60 rounded"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-300 bg-opacity-80 rounded-full"></div>
                <div className="absolute top-1/2 right-4 w-2 h-6 bg-white bg-opacity-40 rounded"></div>
              </div>
            </div>

            {/* Right Column - Modern Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Era modernisasi dan korporatisasi menandai transformasi fundamental Telkom Indonesia menjadi perusahaan yang lebih efisien dan profesional.</p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-green-900 mb-2">1991 - PT Telkom Indonesia</h3>
                  <p className="text-green-800 text-sm leading-relaxed">Transformasi dari Perum Telkom menjadi PT Telkom Indonesia (Persero) sebagai bagian dari program korporatisasi BUMN.</p>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-100 p-3 rounded-lg text-center">
                      <div className="font-bold text-blue-900 text-sm">1995</div>
                      <div className="text-xs text-blue-700">IPO & Go Public</div>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-lg text-center">
                      <div className="font-bold text-purple-900 text-sm">1996</div>
                      <div className="text-xs text-purple-700">Telkom Flexi</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Inovasi Teknologi:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Digitalisasi jaringan telepon</li>
                      <li>• Peluncuran layanan seluler</li>
                      <li>• Pengembangan infrastruktur fiber optik</li>
                      <li>• Modernisasi sistem billing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Era Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Era Digital dan Transformasi (2000-Sekarang)</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Digital Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Memasuki milenium baru, Telkom Indonesia mengalami transformasi digital yang fundamental untuk menjadi perusahaan telekomunikasi digital terdepan.</p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-blue-900 mb-2">2001-2010: Era Internet</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">Pengembangan layanan internet broadband, launching TelkomSpeedy, dan ekspansi infrastruktur fiber optik nasional.</p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-purple-900 mb-2">2011-2020: Digital Services</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">Transformasi menjadi digital service company dengan launching IndiHome, cloud services, dan digital platform.</p>
                </div>

                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-cyan-900 mb-2">2021-Sekarang: Digital Champion</h3>
                  <p className="text-cyan-800 text-sm leading-relaxed">Fokus pada 5G, IoT, artificial intelligence, dan menjadi digital champion di Asia Tenggara.</p>
                </div>
              </div>
            </div>

            {/* Right Column - Digital Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 bg-gradient-to-br from-blue-900 via-purple-700 to-cyan-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM4 8a1 1 0 011-1h1a1 1 0 010 2H5a1 1 0 01-1-1zm6 0a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">Digital Era</div>
                    <div className="text-sm opacity-75">2000 - Now</div>
                    <div className="text-sm opacity-75">Transformation</div>
                  </div>
                </div>
                {/* Digital elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-300 bg-opacity-80 rounded-full"></div>
                <div className="absolute top-8 left-8 w-1 h-1 bg-blue-200 bg-opacity-90 rounded-full"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-300 bg-opacity-70 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-1 bg-white bg-opacity-60 rounded"></div>
                <div className="absolute bottom-6 right-6 w-2 h-4 bg-cyan-400 bg-opacity-50 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Summary Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Timeline Perjalanan Telkom Indonesia</h2>

          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              Lebih dari 140 tahun perjalanan Telkom Indonesia mencerminkan evolusi teknologi telekomunikasi dan komitmen perusahaan dalam mendukung pembangunan bangsa. Dari era telepon manual hingga era 5G dan artificial intelligence,
              Telkom Indonesia terus beradaptasi dan berinovasi.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1884</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Era PTT Belanda</h3>
                  <p className="text-sm text-gray-600">Dimulainya layanan pos, telegraf, dan telepon di Indonesia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1945</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Kemerdekaan Indonesia</h3>
                  <p className="text-sm text-gray-600">Pengambilalihan aset telekomunikasi oleh pemerintah Indonesia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1961</div>
                <div>
                  <h3 className="font-semibold text-gray-900">PN Postel</h3>
                  <p className="text-sm text-gray-600">Pembentukan Perusahaan Negara Pos dan Telekomunikasi</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1991</div>
                <div>
                  <h3 className="font-semibold text-gray-900">PT Telkom Indonesia</h3>
                  <p className="text-sm text-gray-600">Korporatisasi menjadi perseroan terbatas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1995</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Go Public</h3>
                  <p className="text-sm text-gray-600">Initial Public Offering di Bursa Efek Jakarta dan New York</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2024</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Digital Champion</h3>
                  <p className="text-sm text-gray-600">Transformasi menjadi perusahaan digital telco utama di Asia Tenggara</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <svg className="h-5 w-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-blue-900 text-sm mb-2">Warisan dan Masa Depan</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Perjalanan panjang Telkom Indonesia mencerminkan komitmen yang konsisten dalam melayani bangsa dan berkontribusi pada kemajuan Indonesia. Dengan fondasi yang kuat dari pengalaman lebih dari satu abad, Telkom Indonesia siap
                  menghadapi tantangan masa depan dan terus berinovasi dalam era digital untuk mewujudkan visi menjadi digital champion di kawasan Asia Tenggara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TelkomSejarahPage;
