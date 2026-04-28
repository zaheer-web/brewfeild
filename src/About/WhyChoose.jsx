export default function WhyChoose() {
  return (
    <section className="relative bg-black py-[120px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-[42px] font-serif text-white mb-[60px]">
          Why <span className="text-[#C8A96A]">Choose Us?</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-[25px] items-stretch">

          {/* CARD 1 */}
          <div className="p-[28px] bg-[rgba(15,10,8,0.9)] border border-[#C8A96A]/20 backdrop-blur-md transition hover:-translate-y-2 hover:border-[#C8A96A] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">

            <div className="text-[#C8A96A] text-[26px] mb-3">☕</div>

            <h3 className="text-white text-[18px] mb-2">
              Premium Italian Blends
            </h3>

            <p className="text-white/60 text-[13px] leading-[1.7]">
              We use the finest Italian coffee beans to craft the perfect brew every time.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-[28px] bg-[rgba(15,10,8,0.9)] border border-[#C8A96A]/20 backdrop-blur-md transition hover:-translate-y-2 hover:border-[#C8A96A] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">

            <div className="text-[#C8A96A] text-[26px] mb-3">✨</div>

            <h3 className="text-white text-[18px] mb-2">
              Upscale Ambiance
            </h3>

            <p className="text-white/60 text-[13px] leading-[1.7]">
              Step into a world of elegance with our carefully designed interiors.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div className="relative overflow-hidden border border-[#C8A96A]/20 group">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.08] brightness-[0.85]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>
          </div>

          {/* IMAGE 2 */}
          <div className="relative overflow-hidden border border-[#C8A96A]/20 group">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.08] brightness-[0.85]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-[50px]">
          <button className="bg-[#C8A96A] text-black px-[40px] py-[14px] text-[13px] tracking-[2px] uppercase transition hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]">
            View More
          </button>
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