import { motion } from "framer-motion";

const FrontAbout = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section id="tentang-kami" className="bg-white dark:bg-gray-900 p-10 sm:p-20 text-center scroll-mt-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeLeft}>
      <h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-[#00B5AD]">Tentang Kami</h2>
      <h3 className="text-lg sm:text-2xl font-semibold mb-6 text-[#00B5AD]">Dedikasi Kami untuk Pendidikan Berkualitas dan Generasi Tangguh</h3>
      <p className="max-w-6xl mx-auto text-base sm:text-lg leading-relaxed">
        Di <strong>Velocitron</strong>, kepedulian kami terhadap masa depan bangsa melampaui sekadar pengajaran coding. Kami berdedikasi penuh pada pengembangan teknologi di bidang pendidikan, meyakini bahwa akses dan kualitas pembelajaran
        digital adalah kunci untuk menciptakan generasi yang tangguh dan adaptif. Kami secara aktif berupaya mengatasi tantangan serius seperti <i>stunting</i> dengan mempromosikan pemikiran kritis dan problem-solving yang juga relevan
        untuk pola hidup sehat, <i>brain rot</i> akibat paparan digital yang berlebihan, serta memperbaiki <i>attention span</i> anak-anak melalui metode coding yang interaktif dan terarah. Kami tidak hanya mengajar kode; kami membentuk
        pola pikir yang inovatif, disiplin, dan mampu memecahkan masalah kompleks, memastikan anak-anak tumbuh menjadi individu yang siap menghadapi era digital dengan kemampuan optimal dan kesehatan mental yang prima.
      </p>
    </motion.section>
  );
};

export default FrontAbout;
