import img from "../img/bg.avif"; // 👈 apni image

export default function AboutStory() {
  return (
    <section className="relative bg-black py-[120px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,106,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-[70px] items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-[42px] font-serif text-white mb-[10px]">
            Our <span className="text-[#C8A96A]">Story</span>
          </h2>

          <div className="w-[60px] h-[2px] bg-[#C8A96A] mb-[25px]"></div>

          <p className="text-white/70 leading-[1.8] mb-[25px]">
            Founded to bring the rich cafe culture of Italy to the heart of Delhi NCR,
            <span className="text-[#C8A96A]"> Cafe Brewfield</span> is more than just a coffee shop.
            We blend traditional Italian coffee-making craftsmanship with a luxurious,
            modern ambiance to create a space where every visit becomes a memorable experience.
          </p>

          {/* ICON FEATURES */}
          <div className="grid grid-cols-3 gap-[25px] border-y border-[#C8A96A]/20 py-[25px] mb-[25px]">

            <div className="text-center">
              <div className="text-[#C8A96A] text-[22px] mb-2">☕</div>
              <p className="text-white/60 text-[12px]">
                Authentic Italian Blends
              </p>
            </div>

            <div className="text-center">
              <div className="text-[#C8A96A] text-[22px] mb-2">🏛</div>
              <p className="text-white/60 text-[12px]">
                Elegant Ambience
              </p>
            </div>

            <div className="text-center">
              <div className="text-[#C8A96A] text-[22px] mb-2">✨</div>
              <p className="text-white/60 text-[12px]">
                Premium Experience
              </p>
            </div>

          </div>

          <p className="text-white/70 leading-[1.8]">
            We blend the premium spirit with amazing taste and deliver excellence
            where every cup is crafted to perfection. From sourcing the finest beans
            to creating a warm and inviting environment, Brewfield brings a timeless
            European coffee experience to modern India.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="overflow-hidden border border-[#C8A96A]/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
            <img
              src={img}
              alt="coffee"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.08] brightness-[0.85]"
            />

            {/* GOLD LIGHT OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>
          </div>

          {/* CAPTION */}
          <p className="text-white/60 text-[13px] mt-[16px] leading-[1.7]">
            Cafe Brewfield is a unique space crafted for those who appreciate the
            finer things in life. Inspired by Italian heritage and modern luxury,
            we offer an experience that goes beyond just coffee.
          </p>

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