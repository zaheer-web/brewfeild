import { motion } from "framer-motion";
import { FaCoffee, FaCrown } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#e8d8c3] py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b12]">
            Why Choose{" "}
            <span className="text-[#5a3b2e]">Us?</span>
          </h2>

          <div className="w-24 h-[2px] bg-[#5a3b2e] mx-auto mt-4"></div>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CARDS */}
          <div className="space-y-6">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#f5efe7] rounded-xl shadow-md p-6 flex gap-4 hover:shadow-lg transition"
            >
              <FaCoffee className="text-[#5a3b2e] text-2xl mt-1" />

              <div>
                <h3 className="font-semibold text-[#2d1b12]">
                  Premium Italian Blends
                </h3>
                <p className="text-sm text-[#5c4638] mt-2">
                  We use the finest Italian coffee beans to craft the perfect brew every time.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#f5efe7] rounded-xl shadow-md p-6 flex gap-4 hover:shadow-lg transition"
            >
              <FaCrown className="text-[#5a3b2e] text-2xl mt-1" />

              <div>
                <h3 className="font-semibold text-[#2d1b12]">
                  Upscale Ambiance
                </h3>
                <p className="text-sm text-[#5c4638] mt-2">
                  Step into a world of elegance with interiors inspired by Italian cafés.
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800"
              className="rounded-lg h-[200px] w-full object-cover"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800"
              className="rounded-lg h-[200px] w-full object-cover"
              alt=""
            />
          </motion.div>

        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <button className="bg-[#2d1b12] text-[#f8efe5] px-8 py-3 rounded-md shadow-md hover:scale-105 transition">
            View More
          </button>
        </motion.div>

      </div>
    </section>
  );
}