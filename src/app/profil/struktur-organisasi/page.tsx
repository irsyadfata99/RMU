import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TelkomStrukturPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Struktur Organisasi Telkom Indonesia</h1>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Struktur organisasi PT Telkom Indonesia (Persero) Tbk dirancang untuk mendukung implementasi strategi perusahaan dalam mencapai visi menjadi digital telco utama di kawasan Asia Tenggara. Struktur ini mengikuti prinsip-prinsip
              tata kelola perusahaan yang baik (Good Corporate Governance) dengan pemisahan yang jelas antara fungsi pengawasan, pengurusan, dan operasional.
            </p>

            <p>
              Sebagai perusahaan publik dan BUMN, Telkom Indonesia menerapkan struktur organisasi yang memenuhi ketentuan peraturan perundang-undangan, termasuk Undang-Undang Perseroan Terbatas, regulasi Otoritas Jasa Keuangan, dan
              ketentuan Bursa Efek Indonesia. Struktur ini memastikan akuntabilitas, transparansi, dan efektivitas dalam pengambilan keputusan strategis.
            </p>

            <p>
              Organisasi Telkom Indonesia terdiri dari organ perusahaan yang mencakup Rapat Umum Pemegang Saham (RUPS), Dewan Komisaris, Direksi, serta unit-unit kerja operasional yang mendukung pencapaian target bisnis. Setiap organ
              memiliki tugas, wewenang, dan tanggung jawab yang telah ditetapkan dalam Anggaran Dasar dan Anggaran Rumah Tangga perusahaan.
            </p>

            <p>
              Struktur organisasi ini terus dievaluasi dan disesuaikan dengan perkembangan bisnis, perubahan regulasi, dan kebutuhan transformasi digital untuk memastikan Telkom Indonesia tetap agile dan responsif terhadap dinamika industri
              telekomunikasi yang sangat cepat berubah.
            </p>
          </div>
        </div>
      </div>

      {/* Corporate Governance Structure */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Struktur Tata Kelola Perusahaan</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Organizational Chart */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Struktur tata kelola perusahaan yang menggambarkan hierarki dan hubungan antar organ perusahaan sesuai dengan prinsip Good Corporate Governance.</p>

              <div className="bg-gray-50 p-6 rounded-lg">
                {/* RUPS */}
                <div className="text-center mb-6">
                  <div className="w-48 h-16 bg-red-600 text-white rounded-lg flex items-center justify-center mx-auto text-sm font-semibold">Rapat Umum Pemegang Saham (RUPS)</div>
                  <p className="text-xs text-gray-600 mt-2">Organ Tertinggi Perusahaan</p>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center mb-4">
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-gray-400"></div>
                </div>

                {/* Dewan Komisaris */}
                <div className="text-center mb-6">
                  <div className="w-40 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto text-sm font-semibold">Dewan Komisaris</div>
                  <p className="text-xs text-gray-600 mt-2">Fungsi Pengawasan</p>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center mb-4">
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-gray-400"></div>
                </div>

                {/* Direksi */}
                <div className="text-center mb-6">
                  <div className="w-32 h-14 bg-green-600 text-white rounded-lg flex items-center justify-center mx-auto text-sm font-semibold">Direksi</div>
                  <p className="text-xs text-gray-600 mt-2">Fungsi Pengurusan</p>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center mb-4">
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-gray-400"></div>
                </div>

                {/* Unit Kerja */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="w-full h-10 bg-purple-500 text-white rounded text-xs flex items-center justify-center font-medium">Unit Bisnis</div>
                  <div className="w-full h-10 bg-purple-500 text-white rounded text-xs flex items-center justify-center font-medium">Unit Pendukung</div>
                </div>
              </div>
            </div>

            {/* Right Column - Governance Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">Corporate</div>
                    <div className="text-lg font-semibold">Governance</div>
                    <div className="text-sm opacity-75 mt-2">Professional Management</div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-indigo-300 bg-opacity-60 rounded-full"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-blue-200 bg-opacity-80 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-4 h-4 bg-white bg-opacity-30 rounded-sm transform rotate-45"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-indigo-400 bg-opacity-70 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Board of Directors Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Susunan Direksi</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Directors Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">Board of</div>
                    <div className="text-lg font-semibold">Directors</div>
                    <div className="text-sm opacity-75">Executive Leadership</div>
                  </div>
                </div>
                {/* Leadership elements */}
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-emerald-300 border-opacity-60 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-green-300 bg-opacity-70 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-white bg-opacity-80 rounded-full"></div>
              </div>
            </div>

            {/* Right Column - Directors Structure */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Direksi Telkom Indonesia terdiri dari direktur-direktur yang memiliki keahlian dan pengalaman dalam bidang masing-masing untuk memimpin transformasi digital perusahaan.</p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-green-900 mb-2">Direktur Utama</h3>
                  <p className="text-green-800 text-sm">Memimpin dan mengoordinasikan seluruh kegiatan perusahaan</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">D1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Direktur Keuangan</h4>
                      <p className="text-gray-600 text-xs">Mengelola aspek keuangan dan investasi</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xs font-bold">D2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Direktur Network & IT Solution</h4>
                      <p className="text-gray-600 text-xs">Mengembangkan infrastruktur dan solusi IT</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-xs font-bold">D3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Direktur Consumer Service</h4>
                      <p className="text-gray-600 text-xs">Mengelola layanan untuk segmen konsumen</p>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-500">+ Direktur lainnya sesuai kebutuhan bisnis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Units Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Unit Bisnis dan Operasional</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Business Units Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Struktur operasional Telkom Indonesia terdiri dari berbagai unit bisnis dan unit pendukung yang bekerja secara sinergis untuk mencapai target perusahaan.</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Unit Bisnis Utama</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Consumer Business</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Enterprise Business</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Wholesale & International Business</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Digital Business</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Unit Pendukung</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-100 p-2 rounded text-center">Human Capital</div>
                    <div className="bg-gray-100 p-2 rounded text-center">Legal & Compliance</div>
                    <div className="bg-gray-100 p-2 rounded text-center">Risk Management</div>
                    <div className="bg-gray-100 p-2 rounded text-center">Corporate Strategy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Business Structure Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 bg-gradient-to-br from-purple-800 via-purple-600 to-pink-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold">Business</div>
                    <div className="text-lg font-semibold">Structure</div>
                    <div className="text-sm opacity-75">Operational Excellence</div>
                  </div>
                </div>
                {/* Business elements */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-pink-300 bg-opacity-60 rounded transform rotate-45"></div>
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-300 bg-opacity-80 rounded-full"></div>
                <div className="absolute top-1/2 right-4 w-2 h-2 bg-white bg-opacity-70 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-2 bg-white bg-opacity-40 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Structure Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Struktur Regional</h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Untuk mendukung jangkauan layanan di seluruh Indonesia, Telkom Indonesia menerapkan struktur organisasi regional yang terdiri dari berbagai divisi regional (Divre) yang tersebar di seluruh wilayah Indonesia. Setiap divisi
              regional memiliki otonomi operasional untuk memberikan layanan terbaik sesuai dengan karakteristik dan kebutuhan daerah masing-masing.
            </p>

            <p>
              Struktur regional ini memungkinkan Telkom Indonesia untuk lebih responsif terhadap kebutuhan lokal sambil tetap menjaga standar kualitas layanan yang konsisten di tingkat nasional. Koordinasi antara kantor pusat dan divisi
              regional dilakukan melalui sistem pelaporan dan komunikasi yang terintegrasi.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-sm">I</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Sumatera</h3>
                <p className="text-xs text-gray-600 mt-1">Medan, Palembang, Padang</p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-sm">II</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Jawa-Bali</h3>
                <p className="text-xs text-gray-600 mt-1">Jakarta, Bandung, Surabaya</p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-sm">III</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Kalimantan</h3>
                <p className="text-xs text-gray-600 mt-1">Balikpapan, Pontianak</p>
              </div>

              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-bold text-sm">IV</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Indonesia Timur</h3>
                <p className="text-xs text-gray-600 mt-1">Makassar, Denpasar, Jayapura</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">Koordinasi dan Sinergi</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Setiap divisi regional bekerja dalam koordinasi yang erat dengan kantor pusat untuk memastikan implementasi strategi perusahaan yang konsisten dan pencapaian target kinerja yang optimal di seluruh wilayah operasional
                    Telkom Indonesia.
                  </p>
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

export default TelkomStrukturPage;
