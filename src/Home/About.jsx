export default function About() {
  return (
    <section className="relative bg-black py-[120px] px-[60px]">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(200,169,106,0.08),transparent_40%)]" />

      <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">

        {/* ===== LEFT VISUAL ===== */}
        <div className="relative h-[550px]">

          {/* YEAR */}
          <div className="absolute top-[5%] left-[5%] text-[80px] text-[#C8A96A] opacity-[0.06]">
            1924
          </div>

          {/* MAIN IMAGE */}
          <div className="absolute w-[75%] h-[80%] top-[10%] right-0 overflow-hidden border border-[rgba(200,169,106,0.3)] group">
            <img
              src="/image.png"
              className="w-full h-full object-cover brightness-[0.8] transition duration-700 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* ACCENT IMAGE */}
          <div className="absolute w-[45%] h-[50%] bottom-0 left-0 overflow-hidden border border-[#C8A96A] group">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              className="w-full h-full object-cover brightness-[0.8] transition duration-700 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* BADGE */}
          <div className="absolute bottom-[15%] right-[-20px] w-[110px] h-[110px] rounded-full bg-[#C8A96A] text-black flex flex-col items-center justify-center shadow-[0_0_40px_rgba(200,169,106,0.4)]">
            <span className="text-[28px] font-bold">100</span>
            <span className="text-[10px] uppercase text-center leading-tight">
              Year<br />Heritage
            </span>
          </div>

        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div>

          <span className="text-[#C8A96A] tracking-[2px] text-[12px] uppercase">
            Our Heritage
          </span>

          <h2 className="text-[44px] text-white mt-[15px] font-serif leading-tight">
            Born from Italian<br />
            <em className="text-[#C8A96A] not-italic">Tradition</em>
          </h2>

          {/* GOLD DIVIDER */}
          <div className="w-[60px] h-[2px] bg-[#C8A96A] my-[20px]" />

          <p className="text-white/70 leading-[1.7] mb-[15px]">
            Brewfield Cafe was conceived with a singular obsession: to bring the soul of an authentic Italian caffè to the streets of Delhi NCR.
          </p>

          <p className="text-white/70 leading-[1.7] mb-[15px]">
            From our single-origin Arabica blends to our hand-trained baristas — this is not just coffee, this is heritage.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-[30px] mt-[40px]">

            <div>
              <div className="text-[38px] text-[#C8A96A]">12+</div>
              <div className="text-[11px] text-white/50 tracking-[2px]">
                Premium Blends
              </div>
            </div>

            <div>
              <div className="text-[38px] text-[#C8A96A]">5★</div>
              <div className="text-[11px] text-white/50 tracking-[2px]">
                Experience
              </div>
            </div>

            <div>
              <div className="text-[38px] text-[#C8A96A]">3</div>
              <div className="text-[11px] text-white/50 tracking-[2px]">
                Cities
              </div>
            </div>

            <div>
              <div className="text-[38px] text-[#C8A96A]">₹Cr+</div>
              <div className="text-[11px] text-white/50 tracking-[2px]">
                ROI
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 80px 30px;
          }
        }

        @media (max-width: 500px) {
          section {
            padding: 60px 20px;
          }
        }
      `}</style>

    </section>
  );
}