import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaPaintBrush,
  FaBullhorn,
  FaTruck,
  FaUserTie,
  FaCogs,
} from "react-icons/fa";

const supportData = [
  {
    items: [
      { icon: <FaMapMarkedAlt />, text: "Location selection assistance" },
      { icon: <FaUserTie />, text: "Staff training" },
    ],
  },
  {
    items: [
      { icon: <FaPaintBrush />, text: "Interior & setup guidance" },
      { icon: <FaUserTie />, text: "Staff training" },
    ],
  },
  {
    items: [
      { icon: <FaBullhorn />, text: "Marketing & branding support" },
      { icon: <FaCogs />, text: "Ongoing operational support" },
    ],
  },
  {
    items: [
      { icon: <FaTruck />, text: "Vendor & supply chain" },
      { icon: <FaCogs />, text: "Setup & cost optimization" },
    ],
  },
];

export default function FranchiseSupport() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b12]">
            Complete{" "}
            <span className="text-[#5a3b2e]">Franchise Support</span>
          </h2>

          <div className="w-24 h-[2px] bg-[#5a3b2e] mx-auto mt-4"></div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {supportData.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-6 relative"
            >
              {/* Divider */}
              {index !== 3 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-[1px] bg-[#d6c3b3]"></div>
              )}

              {column.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">

                  {/* ICON */}
                  <div className="text-[#5a3b2e] text-lg">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <p className="text-[#5c4638] text-sm">
                    {item.text}
                  </p>

                </div>
              ))}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}