import { FaMoneyBillWave, FaChalkboardTeacher, FaMapMarkerAlt, FaClock, FaCode } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi"
import { motion } from "framer-motion";

const FrontPrice = () => {
    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const scaleUp = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };
    return(
        <motion.section
                id="harga"
                className="p-10 sm:p-20 bg-gray-50 dark:bg-gray-800 scroll-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeRight}
            >
        <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-12 text-[#00B5AD]">
            Daftar Harga
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={scaleUp}
                >
            <div className="flex items-center gap-3 mb-4">
                <HiOutlineUsers className="text-[#00B5AD] text-2xl" />
                <h3 className="text-xl font-semibold">Ekstrakurikuler Coding</h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li className="flex items-center gap-2">
                <FaClock className="text-[#00B5AD]" />
                10x Pertemuan (1x/minggu), 60 menit per sesi
                </li>
                <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#00B5AD]" />
                Di sekolah masing-masing (SD - SMA)
                </li>
                <li className="flex items-center gap-2">
                <FaChalkboardTeacher className="text-[#00B5AD]" />
                Minimal 5 orang ekstrakurikuler dapat dilaksanakan
                </li>
                <li className="flex items-center gap-2">
                <FaCode className="text-[#00B5AD]" />
                Bahasa yang diajarkan: Scratch, HTML, CSS, JavaScript, PHP(Laravel), Java
                </li>
                <li className="flex items-center gap-2">
                <FaMoneyBillWave className="text-[#00B5AD]" />
                <span className="text-lg font-medium text-[#00B5AD]">RP. 330.000 - 500.000 / bulan</span>
                </li>
            </ul>
            <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00B5AD] hover:bg-[#00948e] text-white px-4 py-2 rounded-lg transition"
            >
                Hubungi Kami
            </a>
            </motion.div>

            {/* Les Privat Coding */}
            <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={scaleUp}
                >
            <div className="flex items-center gap-3 mb-4">
                <FaChalkboardTeacher className="text-[#00B5AD] text-2xl" />
                <h3 className="text-xl font-semibold">Les Privat Coding</h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li className="flex items-center gap-2">
                <FaClock className="text-[#00B5AD]" />
                Fleksibel (by request), 60 - 90 menit per sesi
                </li>
                <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#00B5AD]" />
                Online (Zoom / Gmeet) atau datang ke rumah
                </li>
                <li className="flex items-center gap-2">
                <FaChalkboardTeacher className="text-[#00B5AD]" />
                1-on-1 Coaching (siswa bebas tanya)
                </li>
                <li className="flex items-center gap-2">
                <FaCode className="text-[#00B5AD]" />
                Bahasa yang diajarkan: Scratch, HTML, CSS, JavaScript, PHP(Laravel), Java
                </li>
                <li className="flex items-center gap-2">
                <FaMoneyBillWave className="text-[#00B5AD]" />
                <span className="text-lg font-medium text-[#00B5AD]">Rp100.000 - 150.000 / sesi</span>
                </li>
            </ul>
            <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00B5AD] hover:bg-[#00948e] text-white px-4 py-2 rounded-lg transition"
            >
                Hubungi Kami
            </a>
            </motion.div>

        </div>
        </motion.section>
    )
}

export default FrontPrice