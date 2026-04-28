export default function FranchiseCTA() {
  return (
    <section className="relative bg-[#1a120c] py-[30px] px-[60px] overflow-hidden">

      {/* TEXTURE / GRADIENT */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.4),transparent,rgba(0,0,0,0.4))]" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-[20px]">

        {/* LEFT TEXT */}
        <h3 className="text-white font-serif text-[20px] md:text-[24px]">
          Own a <span className="text-[#C8A96A]">Cafe Brewfield</span> Franchise
        </h3>

        {/* CENTER BUTTON */}
        <a
          href="/franchise"
          className="border border-[#C8A96A] text-[#C8A96A] px-[28px] py-[10px] text-[12px] tracking-[2px] uppercase transition hover:bg-[#C8A96A] hover:text-black hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]"
        >
          Apply Now
        </a>

        {/* RIGHT SOCIAL */}
        <div className="flex gap-[12px]">

          {["f", "t", "ig", "yt"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="w-[36px] h-[36px] flex items-center justify-center border border-[#C8A96A]/30 text-white/70 text-[12px] rounded-full transition hover:text-[#C8A96A] hover:border-[#C8A96A] hover:-translate-y-[2px]"
            >
              {item}
            </a>
          ))}

        </div>

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 25px 30px;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 20px;
            text-align: center;
          }

          div.relative {
            flex-direction: column;
          }
        }
      `}</style>

    </section>
  );
}