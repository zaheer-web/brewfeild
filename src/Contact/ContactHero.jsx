import { motion } from "framer-motion";
import coffeeVideo from "../img/ha-1.mp4";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[65vh] flex items-center overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        src={coffeeVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0b08]/90 via-[#1a120b]/70 to-[#0f0b08]/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8efe5]">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#f1d77a] bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-4 text-[#e6c27a] text-lg italic">
            We're here to help you
          </p>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[#d9c7b8] text-base md:text-lg leading-relaxed">
            Have questions or want to become a franchise partner?  
            Reach out to us and let's build something amazing together.
          </p>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-gradient-to-r from-[#D4AF37] to-[#b8962e] text-[#1a120b] px-7 py-3 rounded-full font-semibold shadow-xl transition duration-300"
          >
            Apply for Franchise
          </motion.button>

        </motion.div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0f0b08] to-transparent"></div>

    </section>
  );
}