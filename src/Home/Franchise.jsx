export default function Franchise() {
  return (
    <section className="relative py-[140px] px-[60px] overflow-hidden">

      {/* 🎥 BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/bg.avif')] bg-cover bg-center brightness-[0.6] contrast-[1.1] scale-[1.05]" />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65 z-[1]" />

      {/* ✨ GOLD GRID + GLOW */}
      <div className="absolute inset-0 z-[1] bg-[repeating-linear-gradient(0deg,transparent,transparent_60px,rgba(200,169,106,0.02)_60px,rgba(200,169,106,0.02)_61px),repeating-linear-gradient(90deg,transparent,transparent_60px,rgba(200,169,106,0.02)_60px,rgba(200,169,106,0.02)_61px),radial-gradient(circle_at_top_right,rgba(200,169,106,0.08),transparent_70%)]" />

      {/* CONTENT */}
      <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[100px] items-center">

        {/* LEFT */}
        <div>

          <div className="text-[90px] text-[#C8A96A] opacity-[0.12]">"</div>

          <span className="text-[#C8A96A] tracking-[2px] text-[12px]">
            Franchise Opportunity
          </span>

          <h2 className="text-[clamp(38px,5vw,64px)] text-white font-serif mt-3 leading-tight">
            Own a Piece of<br />
            Italian <em className="text-[#C8A96A] not-italic">Elegance</em>
          </h2>

          <div className="w-[60px] h-[2px] bg-[#C8A96A] my-[20px]" />

          <p className="text-white/70 leading-[1.7] mb-[20px]">
            Brewfield Cafe isn't just a business — it's a legacy investment. We invite discerning entrepreneurs to partner with a brand that has already mastered the art of luxury hospitality in the Indian market.
          </p>

          {/* LIST */}
          <ul className="flex flex-col gap-[18px] my-[36px]">
            {[
              "Exclusive territory rights across Delhi NCR and Tier 1 cities",
              "Complete turnkey setup with Italian interior design standard",
              "Proprietary training programme by certified Italian baristas",
              "Central supply chain for premium ingredients and equipment",
              "Ongoing marketing, digital, and brand support",
              "Proven unit economics with strong repeat customer base",
            ].map((item, i) => (
              <li key={i} className="flex gap-[16px] text-[14px] text-white/75">
                <span className="text-[#C8A96A]">—</span>
                {item}
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <a
            href="mailto:franchise@brewfieldcafe.com"
            className="bg-[#C8A96A] text-black px-[40px] py-[16px] text-[11px] tracking-[3px] uppercase inline-block hover:scale-[1.02] transition"
          >
            Apply for Franchise →
          </a>

        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">

          {/* CARD */}
          {[
            {
              title: "Exclusive Zones",
              desc: "Protected territory of 2–5km radius in premium micro-markets. No cannibalisation, ever.",
            },
            {
              title: "Fast Launch",
              desc: "From agreement to opening in 45–60 days. Our team handles everything end to end.",
            },
            {
              title: "Transparent P&L",
              desc: "Monthly reporting dashboard, real-time sales tracking, and quarterly business reviews.",
            },
            {
              title: "Brand Power",
              desc: "Leverage a category-defining brand with national PR and a loyal premium customer base.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-[36px_28px] border border-[rgba(200,169,106,0.25)] bg-[rgba(10,8,6,0.75)] backdrop-blur-md transition duration-300 hover:border-[#C8A96A] hover:-translate-y-[6px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="text-[#C8A96A] text-[20px] mb-[10px]">
                {card.title}
              </div>
              <p className="text-white/65 text-[13px]">{card.desc}</p>
            </div>
          ))}

          {/* FEATURED */}
          <div className="md:col-span-2 p-[36px_28px] border border-[rgba(200,169,106,0.25)] bg-[linear-gradient(135deg,rgba(200,169,106,0.2),rgba(0,0,0,0.8))] flex gap-[20px] items-center">

            <div className="w-[250px] h-[80px] rounded-full border-2 border-[#C8A96A] flex flex-col items-center justify-center">
              <span className="text-[#C8A96A] text-[30px]">28%</span>
              <span className="text-white text-[10px] uppercase">
                Avg ROI
              </span>
            </div>

            <div>
              <div className="text-[#C8A96A] text-[22px] mb-[10px]">
                Investment Overview
              </div>
              <p className="text-white/65 text-[13px]">
                Starting investment from ₹25–50 Lakhs with projected break-even at 18–24 months. Multiple revenue streams including dine-in, takeaway, events, and retail merchandise.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 80px 20px;
          }
        }
      `}</style>

    </section>
  );
}