import { motion } from "framer-motion";

export default function ExperienceBanner() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600')",
        }}
      ></motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight"
        >
          Delivering Experiences,
          <br />
          Not Just Coffee
        </motion.h2>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
    </section>
  );
}