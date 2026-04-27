import { useState } from "react";
import { motion } from "framer-motion";

const menuData = {
  coffees: [
    {
      name: "Espresso",
      desc: "Rich and intense Italian espresso shot.",
      price: "₹120",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    },
    {
      name: "Cafe Latte",
      desc: "Espresso with steamed milk and light foam.",
      price: "₹160",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      name: "Cappuccino",
      desc: "Espresso, steamed milk, and creamy foam.",
      price: "₹170",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      name: "Mocha",
      desc: "Chocolate infused espresso with cream.",
      price: "₹180",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
  ],

  teas: [
    {
      name: "Green Tea",
      desc: "Refreshing and detoxifying tea.",
      price: "₹100",
      img: "https://images.unsplash.com/photo-1518976024611-4888eec6f0f7",
    },
    {
      name: "Masala Tea",
      desc: "Indian spiced milk tea.",
      price: "₹90",
      img: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04",
    },
  ],

  italian: [
    {
      name: "Croissant",
      desc: "Buttery flaky pastry.",
      price: "₹150",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    },
    {
      name: "Pasta",
      desc: "Creamy Italian pasta.",
      price: "₹250",
      img: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    },
  ],

  cold: [
    {
      name: "Cold Coffee",
      desc: "Chilled creamy coffee.",
      price: "₹160",
      img: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    },
    {
      name: "Iced Latte",
      desc: "Cold milk + espresso blend.",
      price: "₹180",
      img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
    },
  ],
};

const tabs = [
  { key: "coffees", label: "Coffees" },
  { key: "teas", label: "Teas" },
  { key: "italian", label: "Italian Delights" },
  { key: "cold", label: "Cold Beverages" },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("coffees");

  return (
    <section className="bg-[#e8d8c3] py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                activeTab === tab.key
                  ? "bg-[#2d1b12] text-[#f8efe5]"
                  : "bg-[#f5efe7] text-[#5a3b2e] border border-[#d6c3b3]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SINGLE CARD */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#f5efe7] rounded-2xl shadow-lg p-6 md:p-8 border border-[#d6c3b3]"
        >

          {menuData[activeTab].map((item, index) => (
            <div key={index} className="flex gap-4 py-4 items-start">

              {/* IMAGE */}
              <img
                src={`${item.img}?q=80&w=200`}
                alt=""
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* CONTENT */}
              <div className="flex-1">

                {/* NAME + PRICE */}
                <div className="flex justify-between items-center">
                  <h3 className="text-[#2d1b12] font-semibold text-base">
                    {item.name}
                  </h3>

                  <span className="text-[#5a3b2e] font-bold text-base">
                    {item.price}
                  </span>
                </div>

                {/* DESC */}
                <p className="text-[#5c4638] text-sm mt-1">
                  {item.desc}
                </p>

                {/* LINE */}
                {index !== menuData[activeTab].length - 1 && (
                  <div className="border-b border-dashed border-[#d6c3b3] mt-3"></div>
                )}

              </div>
            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}