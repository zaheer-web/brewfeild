import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function LocationsSection() {
  return (
    <section className="bg-[#f5efe7] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#3e2c23] font-semibold">
            Our Locations
          </h2>

          <div className="w-24 h-[2px] bg-[#c8a97e] mx-auto mt-4"></div>
        </motion.div>

        {/* LOCATIONS GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* GHAZIABAD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-[#c8a97e]" />
              <h3 className="text-xl font-semibold text-[#3e2c23]">
                Ghaziabad
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Shop No. 5, RDC Main Road, Raj Nagar District Center,
              Ghaziabad, Uttar Pradesh - 201002
            </p>
          </motion.div>

          {/* DELHI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-[#c8a97e]" />
              <h3 className="text-xl font-semibold text-[#3e2c23]">
                Delhi
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              M-Block Market, Greater Kailash II,
              New Delhi, Delhi - 110048
            </p>
          </motion.div>

        </div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700"
        >
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#c8a97e]" />
            <span>info@cafebrewfield.com</span>
          </div>

          <div className="hidden md:block w-[1px] h-5 bg-gray-300"></div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-[#c8a97e]" />
            <span>+91 9876543210</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}