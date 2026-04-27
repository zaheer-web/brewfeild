import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b12]">
            Find Us On{" "}
            <span className="text-[#5a3b2e]">Map</span>
          </h2>

          <p className="text-[#5c4638] mt-3">
            Visit our cafe locations across Delhi NCR
          </p>

          <div className="w-20 h-[2px] bg-[#5a3b2e] mx-auto mt-4"></div>
        </motion.div>

        {/* MAP CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-[#d6c3b3]"
        >

          {/* MAP */}
          <iframe
            title="Cafe Locations"
            src="https://www.google.com/maps?q=Delhi,India&output=embed"
            className="w-full h-[350px] md:h-[450px] border-0"
            loading="lazy"
          ></iframe>

          {/* OVERLAY INFO */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#5a3b2e]" />
            <span className="text-[#2d1b12] text-sm font-medium">
              Delhi NCR Locations
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}