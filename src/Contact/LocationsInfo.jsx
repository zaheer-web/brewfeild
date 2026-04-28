export default function LocationsInfo() {
  return (
    <section className="relative bg-black py-[90px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-[32px] font-serif text-white mb-[50px]">
          Our <span className="text-[#C8A96A]">Locations</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-[40px] mb-[40px]">

          {/* GHAZIABAD */}
          <div className="border-r md:border-r border-[#C8A96A]/20 pr-0 md:pr-[30px]">

            <h3 className="text-white text-[18px] mb-[10px]">
              Ghaziabad
            </h3>

            <p className="text-white/60 text-[13px] leading-[1.7]">
              Shop No. 5, RDC Main Road, Raj Nagar District Center,
              Ghaziabad Uttar Pradesh, 201002
            </p>

          </div>

          {/* DELHI */}
          <div className="pl-0 md:pl-[30px]">

            <h3 className="text-white text-[18px] mb-[10px]">
              Delhi
            </h3>

            <p className="text-white/60 text-[13px] leading-[1.7]">
              M-Block Market, Greater Kailash II,
              New Delhi, Delhi 110048
            </p>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C8A96A]/40 to-transparent mb-[25px]" />

        {/* CONTACT INFO */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] text-white/70 text-[14px]">

          <div className="flex items-center gap-[8px]">
            <span className="text-[#C8A96A]">✉</span>
            info@cafebrewfield.com
          </div>

          <div className="flex items-center gap-[8px]">
            <span className="text-[#C8A96A]">📞</span>
            +91 9876543210
          </div>

        </div>

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 70px 30px;
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