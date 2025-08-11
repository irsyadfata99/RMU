"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import FrontHeader from "../../components/Navbar";
import FrontFooter from "../../components/Footer";

interface BeritaItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

const BeritaDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [berita, setBerita] = useState<BeritaItem | null>(null);
  const [relatedBerita, setRelatedBerita] = useState<BeritaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data - Replace with API call
  const mockBerita: BeritaItem[] = [
    {
      id: 1,
      title: "Program Beasiswa RMU Tahun 2024 Dibuka untuk 1000 Siswa Berprestasi",
      excerpt: "Reksa Mahardhika Unggul membuka program beasiswa untuk siswa kurang mampu namun berprestasi di seluruh Indonesia.",
      content: `
        <div class="prose max-w-none">
          <p>Reksa Mahardhika Unggul (RMU) dengan bangga mengumumkan pembukaan program beasiswa tahun 2024 yang akan memberikan kesempatan kepada 1000 siswa berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan mereka ke jenjang yang lebih tinggi.</p>
          
          <h3>Kriteria Penerima Beasiswa</h3>
          <p>Program beasiswa ini ditujukan untuk siswa-siswi yang memenuhi kriteria sebagai berikut:</p>
          <ul>
            <li>Siswa SMA/SMK kelas 12 atau lulusan tahun 2023-2024</li>
            <li>Memiliki prestasi akademik dengan rata-rata nilai minimal 8.0</li>
            <li>Berasal dari keluarga dengan penghasilan maksimal Rp 3.000.000 per bulan</li>
            <li>Aktif dalam kegiatan sosial atau organisasi di sekolah</li>
            <li>Memiliki motivasi tinggi untuk mengembangkan diri</li>
          </ul>
          
          <h3>Fasilitas yang Diberikan</h3>
          <p>Penerima beasiswa akan mendapatkan fasilitas lengkap meliputi:</p>
          <ul>
            <li>Biaya kuliah penuh selama 4 tahun</li>
            <li>Uang saku bulanan Rp 1.500.000</li>
            <li>Tunjangan buku dan alat tulis</li>
            <li>Program mentoring dan pengembangan karakter</li>
            <li>Kesempatan magang di perusahaan partner</li>
          </ul>
          
          <h3>Cara Pendaftaran</h3>
          <p>Pendaftaran dapat dilakukan melalui website resmi RMU dengan mengupload dokumen yang diperlukan:</p>
          <ol>
            <li>Formulir pendaftaran yang telah diisi lengkap</li>
            <li>Fotokopi rapor semester 1-5</li>
            <li>Surat keterangan penghasilan orang tua</li>
            <li>Surat rekomendasi dari sekolah</li>
            <li>Essay motivasi maksimal 500 kata</li>
          </ol>
          
          <p>Pendaftaran dibuka mulai tanggal 15 Januari 2024 dan ditutup pada 15 Maret 2024. Jangan lewatkan kesempatan emas ini untuk meraih masa depan yang lebih cerah!</p>
        </div>
      `,
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop",
      author: "Tim Humas RMU",
      publishedAt: "2024-01-15",
      category: "Pendidikan",
      readTime: 5,
      tags: ["Beasiswa", "Pendidikan", "Siswa"],
      featured: true,
    },
    {
      id: 2,
      title: "Bantuan Sosial untuk Korban Bencana Alam di Jawa Barat",
      excerpt: "Tim relawan RMU menyalurkan bantuan kepada masyarakat terdampak banjir di wilayah Jawa Barat.",
      content: `
        <div class="prose max-w-none">
          <p>Tim relawan Reksa Mahardhika Unggul (RMU) bergerak cepat untuk memberikan bantuan kepada masyarakat yang terdampak banjir di beberapa wilayah Jawa Barat. Bencana yang terjadi akibat curah hujan tinggi ini telah menyebabkan ribuan keluarga kehilangan tempat tinggal dan harta benda.</p>
          
          <h3>Bantuan yang Disalurkan</h3>
          <p>RMU telah menyalurkan berbagai jenis bantuan meliputi:</p>
          <ul>
            <li>Paket sembako untuk 500 keluarga</li>
            <li>Air bersih dan obat-obatan</li>
            <li>Perlengkapan bayi dan anak-anak</li>
            <li>Tenda darurat dan selimut</li>
            <li>Bantuan tunai untuk kebutuhan mendesak</li>
          </ul>
          
          <h3>Koordinasi dengan Pemerintah Daerah</h3>
          <p>Tim RMU bekerja sama dengan Pemerintah Daerah Jawa Barat dan BNPB untuk memastikan bantuan tersalur dengan tepat sasaran dan efektif.</p>
          
          <p>Masyarakat yang ingin ikut berpartisipasi dalam program bantuan ini dapat menghubungi kantor RMU atau melalui website resmi kami.</p>
        </div>
      `,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop",
      author: "Divisi Sosial",
      publishedAt: "2024-01-12",
      category: "Sosial",
      readTime: 4,
      tags: ["Bantuan", "Bencana", "Sosial"],
      featured: false,
    },
    // Add more mock data as needed
  ];

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        setIsLoading(true);

        // TODO: Replace with actual API call
        // const response = await fetch(`/api/berita/${params.id}`);
        // const data = await response.json();

        // Mock API call simulation
        setTimeout(() => {
          const foundBerita = mockBerita.find((item) => item.id === parseInt(params.id as string));

          if (foundBerita) {
            setBerita(foundBerita);

            // Get related articles (same category, excluding current article)
            const related = mockBerita.filter((item) => item.category === foundBerita.category && item.id !== foundBerita.id).slice(0, 3);
            setRelatedBerita(related);
          } else {
            setError("Berita tidak ditemukan");
          }

          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching berita:", error);
        setError("Gagal memuat berita");
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchBerita();
    }
  }, [params.id]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      Pendidikan: "bg-blue-100 text-blue-700",
      Sosial: "bg-red-100 text-red-700",
      Ekonomi: "bg-green-100 text-green-700",
      Kesehatan: "bg-teal-100 text-teal-700",
      "Seni Budaya": "bg-purple-100 text-purple-700",
      Kepemudaan: "bg-orange-100 text-orange-700",
    };
    return colorMap[category] || "bg-gray-100 text-gray-700";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <FrontHeader />
        <div className="flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat berita...</p>
          </div>
        </div>
        <FrontFooter />
      </div>
    );
  }

  if (error || !berita) {
    return (
      <div className="min-h-screen flex flex-col">
        <FrontHeader />
        <div className="flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{error || "Berita tidak ditemukan"}</h3>
            <Link href="/berita/berita-terbaru" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Kembali ke halaman berita
            </Link>
          </div>
        </div>
        <FrontFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <FrontHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/berita/berita-terbaru" className="hover:text-blue-600">
              Berita
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Detail</span>
          </nav>

          {/* Article Header */}
          <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96">
              <img src={berita.image} alt={berita.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className={`absolute top-6 left-6 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(berita.category)}`}>{berita.category}</div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{berita.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{formatDate(berita.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{berita.readTime} menit baca</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{berita.title}</h1>

              {/* Excerpt */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4">{berita.excerpt}</p>

              {/* Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: berita.content }} />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-500 mr-2">Tags:</span>
                {berita.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedBerita.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Berita Terkait</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBerita.map((item) => (
                  <Link href={`/berita/${item.id}`} key={item.id}>
                    <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative h-40 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>{item.category}</div>
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-gray-500 mb-2">{formatDate(item.publishedAt)}</div>
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{item.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link href="/berita/berita-terbaru" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Halaman Berita
            </Link>
          </div>
        </div>
      </main>

      <FrontFooter />
    </div>
  );
};

export default BeritaDetailPage;
