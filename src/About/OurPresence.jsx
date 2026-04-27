import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function OurPresence() {
  return (
    <section className="relative w-full py-24 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600')",
        }}
      ></div>

      {/* DARK OVERLAY (slightly stronger) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Our{" "}
            <span className="text-[#f1d77a]">
              Presence
            </span>
          </h2>

          {/* SUBTEXT */}
          <p className="text-xl mt-3 text-[#f5d67a] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Expanding Across Delhi NCR
          </p>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[#f8efe5] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] max-w-md leading-relaxed">
            With our roots in Ghaziabad and Delhi, Cafe Brewfield is expanding
            to multiple prime locations across NCR.
          </p>

          {/* ICON */}
          <div className="flex items-center gap-4 mt-8">
            <div className="bg-[#D4AF37] p-3 rounded-full shadow-lg">
              <FaMapMarkerAlt className="text-black text-xl" />
            </div>

            <p className="text-sm text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              And More Locations Coming
            </p>
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1600"
            alt="coffee meeting"
            className="rounded-xl shadow-xl w-full h-[350px] md:h-[420px] object-cover"
          />

          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-black/20 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
}