import { motion } from "framer-motion";
import coffeeVideo from "../img/ha-1.mp4";

export default function FranchiseCTA() {
  return (
    <section className="relative w-full h-[75vh] flex items-center overflow-hidden">

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

      {/* OVERLAY SAME AS HERO */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0b08]/90 via-[#1a120b]/70 to-[#0f0b08]/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#f8efe5]">
            Own a{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#f1d77a] bg-clip-text text-transparent">
              Cafe Brewfield
            </span>{" "}
            Franchise
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[#d9c7b8] text-lg leading-relaxed">
            Be a part of a fast-growing Italian Tea & Coffee House brand
            in Delhi NCR and build a premium café experience in your city.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-8">

            {/* APPLY */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#D4AF37] to-[#b8962e] text-[#1a120b] px-7 py-3 rounded-full font-semibold shadow-xl transition duration-300"
            >
              Apply Now
            </motion.button>

            {/* BROCHURE */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#D4AF37] text-[#f5d67a] px-7 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#1a120b] transition duration-300"
            >
              Download Brochure
            </motion.button>

          </div>

        </motion.div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0f0b08] to-transparent"></div>

    </section>
  );
}