import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const FrontHome = () => {
    
  const sliderImages = [
    "/10276.jpg",
    "/asian-boy-typing-laptop-keyboard-classmates-sitting-table-watching-him-doing-task-together.jpg",
    "/close-up-children-using-smart-devices.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
    return(
              <motion.section
        className="relative min-h-[100vh]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <Slider {...settings}>
          {sliderImages.map((src, index) => (
            <div key={index}>
              <div className="relative h-[100vh]">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1000px"
                  priority={index === 0}
                  style={{ objectFit: "cover" }}
                  className="brightness-75"
                />
              </div>
            </div>
          ))}
        </Slider>
       <div className="absolute inset-0 flex items-center justify-center text-center bg-black/50 px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#00B5AD] drop-shadow mb-4">
              Velocitron Edu Tech
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed drop-shadow">
              Les coding menyenangkan dari SD hingga SMA. Metode kami interaktif, kreatif, dan bisa langsung diadakan di sekolahmu!
            </p>
          </div>
        </div>
      </motion.section>
    )
}

export default FrontHome