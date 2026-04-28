const delights = [
  {
    name: "Tiramisu",
    desc: "Classic Italian dessert made with layers of mascarpone and espresso soaked ladyfingers.",
    price: "₹210",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
  },
  {
    name: "Croissant",
    desc: "Buttery, flaky croissant, perfect with your coffee.",
    price: "₹130",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },
  {
    name: "Cannoli",
    desc: "Crispy pastry filled with sweet ricotta cream.",
    price: "₹140",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
  {
    name: "Belgian Waffles",
    desc: "Golden waffles topped with syrup and fresh fruits.",
    price: "₹220",
    img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
  },
  {
    name: "Cheesecake",
    desc: "Rich and creamy cheesecake with a hint of vanilla.",
    price: "₹230",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
  {
    name: "Panini",
    desc: "Grilled Italian sandwich with fresh ingredients.",
    price: "₹240",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
];

export default function ItalianDelights() {
  return (
    <section className="bg-black py-[100px] px-[60px]">

      <div className="max-w-[1100px] mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-[34px] font-serif text-white mb-[10px]">
          Italian <span className="text-[#C8A96A]">Delights</span>
        </h2>

        <p className="text-center text-white/60 mb-[50px]">
          Authentic Italian treats to complement your coffee.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-[30px]">

          {delights.map((item, i) => (
            <div
              key={i}
              className="flex gap-[18px] border-b border-[#C8A96A]/10 pb-[20px]"
            >

              {/* IMAGE */}
              <img
                src={item.img}
                className="w-[90px] h-[90px] object-cover rounded"
              />

              {/* CONTENT */}
              <div className="flex-1">

                <div className="flex justify-between items-center">
                  <h3 className="text-white text-[17px]">
                    {item.name}
                  </h3>

                  <span className="text-[#C8A96A] text-[14px]">
                    {item.price}
                  </span>
                </div>

                <p className="text-white/60 text-[13px] mt-[4px] leading-[1.6]">
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