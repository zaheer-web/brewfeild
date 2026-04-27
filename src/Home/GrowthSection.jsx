import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function GrowthSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-[#e8d8c3] overflow-hidden">

      {/* SOFT BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d8c3] via-[#e2cfb6] to-[#e8d8c3]"></div>

      {/* SUBTLE BLOBS */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-[#cbb8a6] blur-3xl rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#cbb8a6] blur-3xl rounded-full opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-[#2d1b12] leading-tight"
        >
          Growing Across{" "}
          <span className="bg-gradient-to-r from-[#5a3b2e] to-[#2d1b12] bg-clip-text text-transparent">
            Delhi NCR
          </span>
        </motion.h2>

        {/* LINE */}
        <div className="w-24 h-[2px] bg-[#5a3b2e] mx-auto mt-6"></div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-8 text-[#5c4638] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Currently present in Ghaziabad & Delhi, Cafe Brewfield is rapidly 
          expanding across prime locations in NCR with a strong vision 
          to become a recognizable premium cafe brand.
        </motion.p>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto"
        >
          {[
            { value: "10+", label: "Locations" },
            { value: "5+", label: "Cities" },
            { value: "2K+", label: "Customers" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#f5efe7] rounded-xl py-4 shadow-sm border border-[#d6c3b3]"
            >
              <h3 className="text-2xl font-bold text-[#2d1b12]">
                {item.value}
              </h3>
              <p className="text-sm text-[#7a6252] mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <div className="bg-[#f5efe7] border border-[#d6c3b3] rounded-2xl p-8 shadow-lg max-w-xl mx-auto">

            <p className="text-[#5c4638] mb-6">
              Join our growing network and become a part of Brewfield’s premium journey.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-[#2d1b12] text-[#f8efe5] px-8 py-3 rounded-full font-semibold hover:bg-[#5a3b2e] transition duration-300 hover:scale-105"
            >
              Become a Franchise Partner →
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}