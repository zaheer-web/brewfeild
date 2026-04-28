export default function WhyFranchise() {
  const data = [
    {
      title: "Strong Brand Identity",
      value: "₹15–25 Lakhs",
      icon: "☕",
    },
    {
      title: "High Growth Potential in NCR",
      value: "300–800 sq.ft.",
      icon: "📈",
    },
    {
      title: "Premium Customer Segment",
      value: "₹12–18 Months",
      icon: "👥",
    },
    {
      title: "Complete Business Support",
      value: "End-to-End Assistance",
      icon: "🤝",
    },
  ];

  return (
    <section className="relative bg-black py-[110px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-[38px] font-serif text-white mb-[60px]">
          Why Choose <span className="text-[#C8A96A]">Cafe Brewfield?</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-[25px]">

          {data.map((item, i) => (
            <div
              key={i}
              className="p-[32px] bg-[rgba(15,10,8,0.95)] border border-[#C8A96A]/20 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#C8A96A] hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >

              {/* ICON */}
              <div className="text-[#C8A96A] text-[28px] mb-[15px]">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-white text-[16px] mb-[10px]">
                {item.title}
              </h3>

              {/* VALUE */}
              <p className="text-[#C8A96A] text-[15px] font-medium">
                {item.value}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 80px 30px;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 60px 20px;
          }
        }
      `}</style>

    </section>
  );
}