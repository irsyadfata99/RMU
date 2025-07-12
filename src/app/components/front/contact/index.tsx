import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const contactInfo = [
    {
      id: 1,
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+62 856 916 55307",
      description: "Chat langsung dengan tim kami",
      link: "https://wa.me/6285691655307",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      id: 2,
      icon: FaEnvelope,
      title: "Email",
      value: "velocitronedutech@gmail.com",
      description: "Kirim email untuk informasi lengkap",
      link: "mailto:velocitronedutech@gmail.com",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      id: 3,
      icon: FaMapMarkerAlt,
      title: "Lokasi",
      value: "Bandung, Indonesia",
      description: "Kunjungi kantor kami",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7422594234085!2d107.66223498387589!3d-6.921384149879788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9f3be809775%3A0x1402fa49bfa202ae!2sRuang%20Creative%2099!5e0!3m2!1sen!2sid!4v1752356838783!5m2!1sen!2sid",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
  ];

  const socialMedia = [
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/velocitron_edutech/?hl=en",
      bgColor: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/velocitron-edutech/?viewAsMember=true",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="p-10 sm:p-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header Section */}
      <motion.div className="text-center mb-16" variants={fadeUp}>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Hubungi <span className="text-[#00B5AD]">Kami</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Siap memulai perjalanan coding? Tim kami siap membantu Anda memilih
          program yang tepat
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Form */}
          <motion.div
            className="space-y-8"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={contact.id}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                    variants={scaleUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${contact.bgColor} ${contact.hoverColor} flex items-center justify-center transition-colors duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-[#00B5AD] transition-colors duration-300">
                          {contact.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {contact.value}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Media */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              variants={scaleUp}
            >
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                Ikuti Media Sosial Kami
              </h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full ${social.bgColor} ${social.hoverColor} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Location Map */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Lokasi Kami
            </h3>
            <div className="space-y-6">
              {/* Address Info */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Alamat Kantor
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Perumahan Antapani Town House Blok B 1A
                  <br />
                  Bandung 40291, Indonesia
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7422594234085!2d107.66223498387589!3d-6.921384149879788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9f3be809775%3A0x1402fa49bfa202ae!2sRuang%20Creative%2099!5e0!3m2!1sen!2sid!4v1752356838783!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                <motion.button
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/maps?q=Jl.+Sudirman+No.+123,+Jakarta+Selatan",
                      "_blank"
                    )
                  }
                  className="w-full bg-gradient-to-r from-[#00B5AD] to-[#00948e] text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaMapMarkerAlt className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Buka di Maps</span>
                </motion.button>
              </div>

              {/* Operating Hours */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                  Jam Operasional
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Senin - Jumat
                    </span>
                    <span className="text-gray-800 dark:text-white font-medium">
                      09:00 - 17:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Sabtu
                    </span>
                    <span className="text-gray-800 dark:text-white font-medium">
                      09:00 - 14:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Minggu
                    </span>
                    <span className="text-red-500 font-medium">Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
