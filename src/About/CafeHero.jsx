import { motion } from "framer-motion";
import coffeeVideo from "../img/ha-1.mp4";

export default function CafeHero() {
  return (
    <section className="h-screen relative flex items-center overflow-hidden">

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

      {/* FALLBACK IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600"
        alt="cafe"
        className="absolute inset-0 w-full h-full object-cover opacity-0"
      />

      {/* PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0b08]/90 via-[#1a120b]/70 to-[#0f0b08]/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-[#f8efe5]"
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#f1d77a] bg-clip-text text-transparent">
              Cafe Brewfield
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-[#e6c27a] text-lg md:text-xl italic"
          >
            Crafting Elegance in Every Cup
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-[#d9c7b8] text-lg md:text-xl leading-relaxed"
          >
            Be a part of a fast growing Italian Tea & Coffee House brand in Delhi NCR
          </motion.p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#D4AF37] to-[#b8962e] text-[#1a120b] px-8 py-3 rounded-full font-semibold shadow-xl transition duration-300"
            >
              Explore Franchise
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#D4AF37] text-[#f5d67a] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#1a120b] transition duration-300"
            >
              Contact Us
            </motion.button>

          </div>

        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0b08] to-transparent"></div>

    </section>
  );
}