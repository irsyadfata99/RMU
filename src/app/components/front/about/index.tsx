import { motion } from "framer-motion";

const FrontAbout = () => {

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  
    return(
    <motion.section
        id="tentang-kami"
        className="bg-white dark:bg-gray-900 p-10 sm:p-20 text-center scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
      >
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-[#00B5AD]">Tentang Kami</h2>
        <p className="max-w-6xl mx-auto text-base sm:text-lg leading-relaxed">
          Velocitron EduTech adalah penyedia jasa les coding yang hadir langsung ke sekolah-sekolah dari tingkat SD hingga SMA. Kami menawarkan program ekstrakurikuler yang menyenangkan dan interaktif untuk mengenalkan logika pemrograman sejak dini. Selain itu, kami juga menyediakan layanan les privat coding yang fleksibel dan dapat disesuaikan dengan kebutuhan siswa secara personal.
        </p>
    </motion.section>
    )
}

export default FrontAbout