import { useState } from "react";

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
      name: "Americano",
      desc: "Espresso shot with hot water for a smooth brew.",
      price: "₹140",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
  ],

  teas: [
    {
      name: "Green Tea",
      desc: "Refreshing and antioxidant-rich blend.",
      price: "₹110",
      img: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9",
    },
    {
      name: "Masala Chai",
      desc: "Traditional Indian spiced tea.",
      price: "₹90",
      img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
    },
  ],

  delights: [
    {
      name: "Croissant",
      desc: "Flaky buttery French delight.",
      price: "₹180",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    },
    {
      name: "Tiramisu",
      desc: "Classic Italian dessert with coffee flavor.",
      price: "₹250",
      img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState("coffees");

  return (
    <section className="bg-black py-[100px] px-[60px]">

      <div className="max-w-[1100px] mx-auto">

        {/* 🔥 TABS */}
        <div className="flex justify-center mb-[50px] flex-wrap gap-2">
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-[22px] py-[10px] text-[12px] tracking-[2px] uppercase transition
              ${
                active === cat
                  ? "bg-[#C8A96A] text-black"
                  : "border border-[#C8A96A]/30 text-white/70 hover:border-[#C8A96A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <h2 className="text-center text-[32px] font-serif text-white mb-[10px]">
          {active.toUpperCase()}
        </h2>

        <p className="text-center text-white/60 mb-[40px]">
          Our finest selection crafted to perfection.
        </p>

        {/* 🔥 MENU LIST */}
        <div className="space-y-[30px]">

          {menuData[active].map((item, i) => (
            <div
              key={i}
              className="flex gap-[20px] items-start border-b border-[#C8A96A]/10 pb-[20px]"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                className="w-[80px] h-[80px] object-cover rounded"
              />

              {/* TEXT */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-[18px]">
                    {item.name}
                  </h3>
                  <span className="text-[#C8A96A] text-[14px]">
                    {item.price}
                  </span>
                </div>

                <p className="text-white/60 text-[13px] mt-[4px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}