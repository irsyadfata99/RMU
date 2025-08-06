import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TelkomADARTPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Anggaran Dasar & Anggaran Rumah Tangga</h1>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Anggaran Dasar dan Anggaran Rumah Tangga (AD-ART) PT Telkom Indonesia (Persero) Tbk merupakan dokumen fundamental yang mengatur tata kelola perusahaan, struktur organisasi, dan mekanisme pengambilan keputusan dalam menjalankan
              kegiatan operasional perusahaan.
            </p>

            <p>
              AD-ART Telkom Indonesia disusun berdasarkan ketentuan peraturan perundang-undangan yang berlaku, termasuk Undang-Undang Nomor 40 Tahun 2007 tentang Perseroan Terbatas, Undang-Undang Nomor 19 Tahun 2003 tentang BUMN, serta
              peraturan Otoritas Jasa Keuangan dan Bursa Efek Indonesia sebagai perusahaan publik yang tercatat di bursa.
            </p>

            <p>
              Sebagai landasan hukum internal perusahaan, AD-ART mengatur berbagai aspek penting seperti maksud dan tujuan perusahaan, modal dasar dan saham, struktur organ perusahaan, tata cara penyelenggaraan Rapat Umum Pemegang Saham
              (RUPS), serta mekanisme pengawasan dan pengendalian internal yang mendukung prinsip tata kelola perusahaan yang baik.
            </p>

            <p>
              Implementasi AD-ART dilakukan secara konsisten untuk memastikan transparansi, akuntabilitas, dan kepatuhan terhadap regulasi dalam setiap aspek kegiatan perusahaan. Hal ini sejalan dengan komitmen Telkom Indonesia untuk
              menerapkan praktik Good Corporate Governance (GCG) yang berkualitas tinggi.
            </p>
          </div>
        </div>
      </div>

      {/* Corporate Governance Structure */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Struktur Tata Kelola Perusahaan</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Governance Structure */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Struktur tata kelola perusahaan Telkom Indonesia dirancang untuk memastikan pengawasan yang efektif dan pengambilan keputusan yang tepat sesuai dengan prinsip-prinsip Good Corporate Governance.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">• Rapat Umum Pemegang Saham (RUPS)</h3>
                  <p className="text-gray-600 text-sm ml-4">Organ tertinggi perusahaan yang memiliki wewenang penuh atas perusahaan</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Dewan Komisaris</h3>
                  <p className="text-gray-600 text-sm ml-4">Melakukan pengawasan dan memberikan nasihat kepada Direksi</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Direksi</h3>
                  <p className="text-gray-600 text-sm ml-4">Menjalankan pengurusan perusahaan sesuai dengan maksud dan tujuan perusahaan</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Komite Audit</h3>
                  <p className="text-gray-600 text-sm ml-4">Membantu Dewan Komisaris dalam pengawasan pelaporan keuangan dan audit</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Komite Nominasi & Remunerasi</h3>
                  <p className="text-gray-600 text-sm ml-4">Membantu dalam proses nominasi dan penetapan remunerasi</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">• Satuan Pengawasan Intern</h3>
                  <p className="text-gray-600 text-sm ml-4">Melakukan audit internal dan manajemen risiko</p>
                </div>
              </div>
            </div>

            {/* Right Column - Corporate Structure Visual */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="relative">
                  {/* RUPS */}
                  <div className="w-32 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold mb-4">RUPS</div>

                  {/* Arrow down */}
                  <div className="flex justify-center mb-4">
                    <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-gray-400"></div>
                  </div>

                  {/* Dewan Komisaris and Direksi */}
                  <div className="flex gap-4 mb-4">
                    <div className="w-28 h-14 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xs font-semibold">Dewan Komisaris</div>
                    <div className="w-28 h-14 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xs font-semibold">Direksi</div>
                  </div>

                  {/* Committees */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="w-24 h-12 bg-blue-400 text-white rounded text-xs flex items-center justify-center font-medium">Komite Audit</div>
                    <div className="w-24 h-12 bg-blue-400 text-white rounded text-xs flex items-center justify-center font-medium">Komite N&R</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Provisions Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ketentuan Pokok AD-ART</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Legal Document Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 bg-gradient-to-br from-gray-800 via-gray-700 to-blue-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-sm flex items-center justify-center">
                      <div className="space-y-1">
                        <div className="w-8 h-0.5 bg-white opacity-80"></div>
                        <div className="w-6 h-0.5 bg-white opacity-60"></div>
                        <div className="w-8 h-0.5 bg-white opacity-80"></div>
                        <div className="w-7 h-0.5 bg-white opacity-60"></div>
                        <div className="w-8 h-0.5 bg-white opacity-80"></div>
                      </div>
                    </div>
                    <div className="text-lg font-semibold">AD-ART</div>
                    <div className="text-sm opacity-75">Legal Framework</div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-300 bg-opacity-60 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-white bg-opacity-30 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-blue-200 bg-opacity-80 rounded-full"></div>
              </div>
            </div>

            {/* Right Column - Key Provisions Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">AD-ART Telkom Indonesia mengatur ketentuan-ketentuan pokok yang menjadi pedoman dalam menjalankan kegiatan perusahaan dan memastikan kepatuhan terhadap regulasi yang berlaku.</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Maksud dan Tujuan</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Menyelenggarakan jaringan telekomunikasi dan informatika serta menyediakan jasa telekomunikasi dan informatika dengan mengutamakan kepentingan umum sekaligus memupuk keuntungan berdasarkan prinsip pengelolaan perusahaan
                    yang sehat.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Modal dan Saham</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Mengatur struktur permodalan, jenis saham, hak dan kewajiban pemegang saham, serta mekanisme perubahan modal dasar perusahaan.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Organ Perusahaan</h3>
                  <div className="text-gray-700 text-sm leading-relaxed space-y-1">
                    <p>• Mengatur tugas, wewenang, dan tanggung jawab setiap organ perusahaan</p>
                    <p>• Menetapkan mekanisme pengangkatan dan pemberhentian pengurus</p>
                    <p>• Mengatur tata cara penyelenggaraan rapat dan pengambilan keputusan</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Laporan Tahunan</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Kewajiban penyusunan dan penyampaian laporan tahunan yang memuat pertanggungjawaban pengurus kepada pemegang saham dan stakeholder lainnya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance and Updates Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kepatuhan dan Pemutakhiran</h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              AD-ART Telkom Indonesia secara berkala dikaji dan diperbaharui untuk memastikan kesesuaian dengan perkembangan regulasi dan kebutuhan bisnis perusahaan. Setiap perubahan AD-ART harus mendapat persetujuan dari Rapat Umum
              Pemegang Saham sesuai dengan ketentuan yang berlaku.
            </p>

            <p>
              Perusahaan berkomitmen untuk memastikan seluruh karyawan dan pihak terkait memahami dan mematuhi ketentuan yang tercantum dalam AD-ART. Sosialisasi dan edukasi mengenai AD-ART dilakukan secara berkelanjutan untuk mendukung
              implementasi tata kelola perusahaan yang baik.
            </p>

            <p>
              Monitoring dan evaluasi terhadap implementasi AD-ART dilakukan secara rutin oleh organ pengawasan perusahaan untuk memastikan efektivitas penerapan ketentuan dan identifikasi area yang memerlukan perbaikan atau penyesuaian.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Catatan:</strong> Dokumen AD-ART lengkap dapat diakses melalui website resmi perusahaan atau melalui sistem informasi internal bagi karyawan dan pihak yang berkepentingan.
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

export default TelkomADARTPage;
