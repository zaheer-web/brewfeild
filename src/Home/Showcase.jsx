export default function Showcase() {
  return (
    <section className="relative bg-black py-[120px] px-[60px]">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.06),transparent_60%)]" />

      {/* HEADER */}
      <div className="relative max-w-[1200px] mx-auto mb-[70px] flex justify-between items-end flex-wrap gap-6">

        <div>
          <span className="text-[#C8A96A] tracking-[2px] text-[12px]">
            Visual Stories
          </span>

          <h2 className="text-[42px] text-white font-serif leading-tight mt-2">
            Where Every Moment<br />
            is <em className="text-[#C8A96A] not-italic">Unforgettable</em>
          </h2>
        </div>

        <a
          href="#locations"
          className="border border-white/30 text-[#F5EDE3] px-[40px] py-[14px] text-[11px] tracking-[3px] uppercase hover:border-[#C8A96A] hover:text-[#C8A96A] transition"
        >
          Visit Us
        </a>

      </div>

      {/* GRID */}
      <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] grid-rows-[auto] lg:grid-rows-[280px_280px] gap-[6px]">

        {/* ITEM 1 (BIG) */}
        <div className="relative overflow-hidden border border-[rgba(200,169,106,0.15)] group lg:row-span-2">

          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.05] transition duration-700 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>
          </div>

          <div className="absolute inset-0 flex items-end p-[30px] bg-gradient-to-t from-black/90 to-black/20 opacity-0 transition duration-400 group-hover:opacity-100">
            <span className="text-[#C8A96A] text-[20px]">
              The Perfect Pour
            </span>
          </div>

        </div>

        {/* ITEM 2 */}
        <div className="relative overflow-hidden border border-[rgba(200,169,106,0.15)] group">

          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.05] transition duration-700 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>
          </div>

          <div className="absolute inset-0 flex items-end p-[30px] bg-gradient-to-t from-black/90 to-black/20 opacity-0 transition duration-400 group-hover:opacity-100">
            <span className="text-[#C8A96A] text-[20px]">
              Latte Art
            </span>
          </div>

        </div>

        {/* ITEM 3 */}
        <div className="relative overflow-hidden border border-[rgba(200,169,106,0.15)] group">

          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.05] transition duration-700 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>
          </div>

          <div className="absolute inset-0 flex items-end p-[30px] bg-gradient-to-t from-black/90 to-black/20 opacity-0 transition duration-400 group-hover:opacity-100">
            <span className="text-[#C8A96A] text-[20px]">
              Single Origin
            </span>
          </div>

        </div>

        {/* ITEM 4 */}
        <div className="relative overflow-hidden border border-[rgba(200,169,106,0.15)] group">

          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814"
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.05] transition duration-700 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>
          </div>

          <div className="absolute inset-0 flex items-end p-[30px] bg-gradient-to-t from-black/90 to-black/20 opacity-0 transition duration-400 group-hover:opacity-100">
            <span className="text-[#C8A96A] text-[20px]">
              Cozy Corners
            </span>
          </div>

        </div>

        {/* ITEM 5 */}
        <div className="relative overflow-hidden border border-[rgba(200,169,106,0.15)] group">

          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.05] transition duration-700 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.08),transparent_50%)]"></div>
          </div>

          <div className="absolute inset-0 flex items-end p-[30px] bg-gradient-to-t from-black/90 to-black/20 opacity-0 transition duration-400 group-hover:opacity-100">
            <span className="text-[#C8A96A] text-[20px]">
              Curated Ambience
            </span>
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

        @media (max-width: 600px) {
          section {
            padding: 60px 20px;
          }
        }
      `}</style>

    </section>
  );
}