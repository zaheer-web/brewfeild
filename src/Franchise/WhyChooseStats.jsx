import { motion } from "framer-motion";
import { FaCoffee, FaChartLine, FaUsers, FaHandshake } from "react-icons/fa";

const data = [
  {
    icon: <FaCoffee />,
    title: "Strong Brand Identity",
    value: "₹15–25 Lakhs",
  },
  {
    icon: <FaChartLine />,
    title: "High Growth Potential in NCR",
    value: "300–800 sq.ft.",
  },
  {
    icon: <FaUsers />,
    title: "Premium Customer Segment",
    value: "₹12–18 Months",
  },
  {
    icon: <FaHandshake />,
    title: "Complete Business Support",
    value: "Realtor + Operations",
  },
];

export default function WhyChooseStats() {
  return (
    <section className="bg-[#e8d8c3] py-24">
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
            <span className="text-[#5a3b2e]">Cafe Brewfield?</span>
          </h2>

          <div className="w-24 h-[2px] bg-[#5a3b2e] mx-auto mt-4"></div>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-[#f5efe7] rounded-xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
            >
              {/* ICON */}
              <div className="text-3xl text-[#5a3b2e] mb-4 flex justify-center">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[#2d1b12] font-semibold text-sm">
                {item.title}
              </h3>

              {/* VALUE */}
              <p className="mt-3 text-lg font-bold text-[#5c4638]">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}