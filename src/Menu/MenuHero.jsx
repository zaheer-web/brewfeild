import { motion } from "framer-motion";
import coffeeVideo from "../img/ha-1.mp4";

export default function MenuHero() {
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
            Our{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#f1d77a] bg-clip-text text-transparent">
              Menu
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-5 text-[#e6c27a] text-lg md:text-xl italic">
            Handcrafted Italian Coffees, Teas, and Delights
          </p>

          {/* DECORATIVE LINE (UPGRADED) */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mt-6"></div>

        </motion.div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0f0b08] to-transparent"></div>

    </section>
  );
}