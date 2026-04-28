export default function FranchiseSupport() {
  const features = [
    "Location selection assistance",
    "Interior & setup guidance",
    "Marketing & branding support",
    "Vendor & supply chain",
    "Staff training",
    "Ongoing operational support",
  ];

  return (
    <section className="relative bg-black py-[100px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-[34px] font-serif text-white mb-[50px]">
          Complete <span className="text-[#C8A96A]">Franchise Support</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-y-[25px] gap-x-[40px] text-left">

          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-[12px] text-white/70 text-[14px] transition hover:text-[#C8A96A]"
            >
              {/* ICON */}
              <span className="text-[#C8A96A] text-[16px] mt-[2px]">✦</span>

              {/* TEXT */}
              <span>{item}</span>
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