import { motion } from "framer-motion";
import { FaCoffee, FaLandmark, FaMugHot } from "react-icons/fa";

export default function OurStory() {
  return (
    <section className="bg-[#e8d8c3] py-24">
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
            Our{" "}
            <span className="text-[#5a3b2e]">
              Story
            </span>
          </h2>

          {/* LINE */}
          <div className="w-20 h-[2px] bg-[#5a3b2e] mt-4 mb-6"></div>

          {/* TEXT */}
          <p className="text-[#5c4638] leading-relaxed text-lg">
            Founded to bring the rich café culture of Italy to the heart of Delhi NCR,
            Cafe Brewfield is more than just a coffee shop. We blend traditional
            Italian craftsmanship with a luxurious, modern ambiance.
          </p>

          {/* ICON FEATURES */}
          <div className="grid grid-cols-3 gap-6 mt-10 text-center">

            <div className="flex flex-col items-center">
              <FaCoffee className="text-2xl text-[#5a3b2e]" />
              <p className="mt-2 text-sm text-[#2d1b12]">
                Authentic Italian Blends
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaLandmark className="text-2xl text-[#5a3b2e]" />
              <p className="mt-2 text-sm text-[#2d1b12]">
                Elegant Ambiance
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaMugHot className="text-2xl text-[#5a3b2e]" />
              <p className="mt-2 text-sm text-[#2d1b12]">
                Premium Experience
              </p>
            </div>

          </div>

          {/* EXTRA TEXT */}
          <p className="text-[#7a6252] mt-8 text-sm leading-relaxed">
            We blend passion with premium quality beans and handcrafted recipes.
            Our space is designed to offer a relaxing yet refined environment.
          </p>

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
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600"
            alt="coffee"
            className="rounded-xl shadow-xl w-full h-[400px] object-cover"
          />

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-black/20 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
}