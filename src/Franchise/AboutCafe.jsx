import { motion } from "framer-motion";

export default function AboutCafe() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b12]">
            About{" "}
            <span className="text-[#5a3b2e]">Cafe Brewfield</span>
          </h2>

          {/* LINE */}
          <div className="w-20 h-[2px] bg-[#5a3b2e] mt-4 mb-6"></div>

          {/* TEXT */}
          <p className="text-[#5c4638] leading-relaxed text-lg">
            Cafe Brewfield is a premium Italian Tea & Coffee House offering a refined
            café experience. With presence in Ghaziabad and Delhi, we are expanding
            rapidly across NCR with a strong focus on quality, ambiance, and consistency.
          </p>

          <p className="mt-5 text-[#5c4638] leading-relaxed">
            We blend traditional Italian coffee craftsmanship with modern aesthetics,
            creating a space where people can relax, connect, and enjoy every sip.
          </p>

          {/* HIGHLIGHT */}
          <div className="mt-6 border-l-4 border-[#5a3b2e] pl-4">
            <p className="text-[#2d1b12] font-semibold">
              We are not just building cafés — we are building a brand people connect with.
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
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600"
            alt="coffee machine"
            className="rounded-xl shadow-xl w-full h-[350px] md:h-[420px] object-cover"
          />

          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-black/20 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
}