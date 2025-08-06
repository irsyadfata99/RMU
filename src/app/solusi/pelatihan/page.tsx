import React from "react";
import FrontHeader from "../../components/Navbar";
import FrontFooter from "../../components/Footer";

const PelatihanPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FrontHeader />

      {/* Header Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Program Pelatihan dan Pengembangan</h1>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Program pelatihan kami dirancang untuk mengembangkan kompetensi dan keterampilan profesional yang dibutuhkan di era digital. Dengan pendekatan pembelajaran yang komprehensif dan praktis, kami berkomitmen untuk menciptakan SDM
              unggul yang siap menghadapi tantangan masa depan.
            </p>

            <p>
              Sebagai lembaga pengembangan SDM terdepan, kami menyediakan berbagai program pelatihan yang disesuaikan dengan kebutuhan industri dan perkembangan teknologi terkini. Setiap program dirancang dengan metode pembelajaran yang
              interaktif dan aplikatif untuk memastikan peserta mendapatkan pengalaman belajar yang optimal.
            </p>

            <p>
              Dengan dukungan instruktur berpengalaman dan fasilitas pembelajaran modern, kami menghadirkan program pelatihan berkualitas tinggi yang mencakup berbagai bidang seperti teknologi informasi, manajemen, leadership, dan soft
              skills. Tim kami terdiri dari praktisi dan akademisi yang memiliki keahlian mendalam di bidangnya masing-masing.
            </p>

            <p>
              Melalui pendekatan pembelajaran yang berpusat pada peserta dan berorientasi pada hasil, kami memastikan setiap program pelatihan memberikan dampak nyata bagi pengembangan karier dan peningkatan kinerja peserta. Metodologi
              pembelajaran kami menggabungkan teori, praktik, studi kasus, dan simulasi untuk memberikan pengalaman belajar yang menyeluruh.
            </p>

            <p>
              Dengan visi menjadi "Excellence Training Provider", kami berkomitmen untuk terus berinovasi dalam menyajikan program pelatihan yang relevan, efektif, dan memberikan nilai tambah bagi individu maupun organisasi dalam mencapai
              tujuan strategis mereka di era transformasi digital.
            </p>
          </div>
        </div>
      </div>

      {/* Training Categories Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kategori Program Pelatihan</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <div className="text-blue-600 text-2xl mb-3">💻</div>
              <h3 className="font-bold text-gray-900 mb-2">Teknologi & Digital</h3>
              <p className="text-gray-700 text-sm">Program pelatihan IT, programming, data science, cybersecurity, dan transformasi digital.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <div className="text-green-600 text-2xl mb-3">👥</div>
              <h3 className="font-bold text-gray-900 mb-2">Leadership & Management</h3>
              <p className="text-gray-700 text-sm">Pelatihan kepemimpinan, manajemen strategis, dan pengembangan organisasi.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <div className="text-purple-600 text-2xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Professional Skills</h3>
              <p className="text-gray-700 text-sm">Soft skills, komunikasi, presentasi, dan keterampilan profesional lainnya.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Pelatihan Yang Kami Tawarkan */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Pelatihan Yang Kami Tawarkan</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Program List */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Kami menyediakan berbagai program pelatihan yang dirancang khusus untuk memenuhi kebutuhan pengembangan kompetensi di era digital.</p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Digital Marketing & Social Media</h3>
                  <p className="text-gray-600 text-sm">Strategi pemasaran digital, content creation, dan optimasi media sosial untuk bisnis</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Data Analytics & Visualization</h3>
                  <p className="text-gray-600 text-sm">Analisis data, business intelligence, dan visualisasi data menggunakan tools terkini</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Project Management Professional</h3>
                  <p className="text-gray-600 text-sm">Metodologi manajemen proyek, tools planning, dan sertifikasi PMP</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Public Speaking & Presentation</h3>
                  <p className="text-gray-600 text-sm">Teknik presentasi efektif, komunikasi publik, dan storytelling profesional</p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Financial Planning & Investment</h3>
                  <p className="text-gray-600 text-sm">Perencanaan keuangan personal, investasi, dan wealth management</p>
                </div>
              </div>
            </div>

            {/* Right Column - Training Features */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">Keunggulan Program Kami</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Instruktur berpengalaman dari industri</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Sertifikat yang diakui industri</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Pembelajaran praktikal hands-on</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Fasilitas dan tools modern</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Konsultasi lanjutan post-training</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Networking dengan sesama profesional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimoni Section */}
      <div className="bg-white px-6 py-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Testimoni Peserta</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimoni 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">A</div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">Andi Prasetyo</h3>
                  <p className="text-sm text-gray-600">Digital Marketing Manager, PT Teknologi Maju</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "Program Digital Marketing yang saya ikuti sangat praktis dan langsung bisa diterapkan di pekerjaan. Revenue digital marketing perusahaan meningkat 40% setelah 3 bulan menerapkan strategi dari pelatihan ini. Instrukturnya
                sangat berpengalaman dan materinya up-to-date."
              </p>
            </div>

            {/* Testimoni 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">S</div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">Sari Indrawati</h3>
                  <p className="text-sm text-gray-600">Senior Business Analyst, Bank Mandiri</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "Data Analytics program membuka wawasan baru untuk karier saya. Sekarang saya lebih percaya diri dalam menganalisis big data dan membuat dashboard yang insightful. Tools yang diajarkan sangat relevan dengan kebutuhan
                industri perbankan."
              </p>
            </div>

            {/* Testimoni 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">R</div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">Rahmat Hidayat</h3>
                  <p className="text-sm text-gray-600">Project Manager, Garuda Indonesia</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "Project Management training memberikan framework yang jelas untuk mengelola proyek kompleks. Metodologi yang diajarkan sangat applicable dan networking dengan peserta lain sangat bermanfaat untuk pertukaran best practice."
              </p>
            </div>

            {/* Testimoni 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">Maya Sari</h3>
                  <p className="text-sm text-gray-600">HR Director, PT Jaya Abadi</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "Public Speaking program benar-benar mengubah confidence saya dalam presentasi dan meeting. Teknik storytelling yang diajarkan membuat presentasi saya lebih engaging dan persuasif. Highly recommended untuk professional yang
                ingin advance di kariernya."
              </p>
            </div>
          </div>
        </div>
      </div>

      <FrontFooter />
    </div>
  );
};

export default PelatihanPage;
