import { motion } from "framer-motion";

const items = [
  {
    name: "Tiramisu",
    desc: "Classic Italian dessert made with layers of mascarpone and espresso.",
    price: "₹210",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    name: "Croissant",
    desc: "Buttery, flaky croissant perfect with coffee.",
    price: "₹130",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },
  {
    name: "Cannoli",
    desc: "Crispy pastry filled with sweet ricotta cream.",
    price: "₹140",
    img: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4",
  },
  {
    name: "Belgian Waffles",
    desc: "Golden waffles topped with syrup and fresh fruits.",
    price: "₹220",
    img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
  },
  {
    name: "Cheesecake",
    desc: "Rich and creamy cheesecake with biscuit base.",
    price: "₹230",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
  {
    name: "Panini",
    desc: "Grilled Italian sandwich with fresh ingredients.",
    price: "₹240",
    img: "https://images.unsplash.com/photo-1604908176997-4314b1b8f7e6",
  },
];

export default function ItalianDelights() {
  return (
    <section className="bg-[#e8d8c3] py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b12]">
            Italian{" "}
            <span className="text-[#5a3b2e]">Delights</span>
          </h2>

          <p className="text-[#5c4638] mt-3">
            Authentic Italian treats to complement your coffee
          </p>

          <div className="w-20 h-[2px] bg-[#5a3b2e] mx-auto mt-4"></div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex gap-4 items-start bg-[#f5efe7] p-4 rounded-2xl shadow-md hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition duration-300 border border-[#e0d2c3]"
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`${item.img}?q=80&w=300`}
                  alt=""
                  className="w-28 h-28 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#2d1b12]">
                    {item.name}
                  </h3>

                  <span className="text-[#5a3b2e] font-bold">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm text-[#5c4638] mt-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* LINE */}
                <div className="border-b border-dashed border-[#d6c3b3] mt-3"></div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}