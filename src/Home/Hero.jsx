
import bg from '../img/ha-1.mp4'
export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-[#F5EDE3] font-sans">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <source src={bg} type="video/mp4" />
      </video>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-[rgba(10,6,4,0.65)] z-[1]" />

      {/* ✨ GRADIENT GLOW */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_60%_40%,rgba(200,169,106,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(59,42,38,0.5)_0%,transparent_50%)]" />

      {/* 🔵 RINGS */}
      <div className="absolute w-[600px] h-[600px] border border-[rgba(200,169,106,0.12)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ringPulse_8s_ease-in-out_infinite]" />
      <div className="absolute w-[900px] h-[900px] border border-[rgba(200,169,106,0.12)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ringPulse_8s_ease-in-out_infinite] delay-[1.5s]" />
      <div className="absolute w-[1200px] h-[1200px] border border-[rgba(200,169,106,0.12)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ringPulse_8s_ease-in-out_infinite] delay-[3s]" />

      {/* ☕ STEAM */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[300px] pointer-events-none z-[2]">
        <div className="absolute bottom-0 left-[80px] w-[4px] h-[80px] bg-white/10 rounded-full animate-[steamRise_4s_ease-in_infinite]" />
        <div className="absolute bottom-0 left-[100px] w-[6px] h-[120px] bg-white/10 rounded-full animate-[steamRise_4s_ease-in_infinite] delay-[0.8s]" />
        <div className="absolute bottom-0 left-[120px] w-[4px] h-[90px] bg-white/10 rounded-full animate-[steamRise_4s_ease-in_infinite] delay-[1.6s]" />
        <div className="absolute bottom-0 left-[90px] w-[5px] h-[100px] bg-white/10 rounded-full animate-[steamRise_4s_ease-in_infinite] delay-[2.4s]" />
      </div>

      {/* 📝 CONTENT */}
      <div className="relative z-[3] text-center max-w-[900px] px-6 animate-[fadeUp_1.4s_ease]">

        <span className="text-[11px] tracking-[5px] uppercase text-[#C8A96A] mb-7 block opacity-0 animate-[fadeUp_1s_ease_0.3s_forwards]">
          Est. Milano · Delhi NCR · Dubai
        </span>

        <h1 className="font-serif text-[clamp(52px,8vw,96px)] font-light leading-[1.05] text-[#FDFAF7] mb-7 opacity-0 animate-[fadeUp_1s_ease_0.6s_forwards]">
          Crafting <em className="text-[#C8A96A] not-italic">Elegance</em>
          <br /> in Every Cup
        </h1>

        <p className="text-[16px] text-[#F5EDE3]/60 tracking-[1px] mb-12 opacity-0 animate-[fadeUp_1s_ease_0.9s_forwards]">
          Italian coffee heritage meets modern luxury — an experience
          <br />
          curated for those who demand the extraordinary.
        </p>

        <div className="flex gap-5 justify-center flex-wrap opacity-0 animate-[fadeUp_1s_ease_1.2s_forwards]">

          {/* PRIMARY */}
          <a
            href="#franchise"
            className="bg-[#C8A96A] text-[#0E0A08] px-10 py-4 text-[11px] tracking-[3px] uppercase relative overflow-hidden group"
          >
            Explore Franchise
            <span className="absolute inset-0 bg-white/20 -translate-x-full skew-x-[-10deg] group-hover:translate-x-full transition duration-500"></span>
          </a>

          {/* OUTLINE */}
          <a
            href="#experience"
            className="border border-white/30 text-[#F5EDE3] px-10 py-4 text-[11px] tracking-[3px] uppercase hover:border-[#C8A96A] hover:text-[#C8A96A] transition"
          >
            Visit Our Café
          </a>

        </div>
      </div>

      {/* 🔻 SCROLL */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-[fadeUp_1s_ease_1.8s_forwards]">
        <span className="text-[10px] tracking-[3px] uppercase">Scroll</span>
        <div className="w-[1px] h-[60px] bg-gradient-to-b from-transparent via-[#C8A96A] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
      </div>

      {/* 🎬 KEYFRAMES */}
      <style jsx>{`
        @keyframes ringPulse {
          0%,100% { opacity:0.3; transform:translate(-50%,-50%) scale(1); }
          50% { opacity:0.08; transform:translate(-50%,-50%) scale(1.03); }
        }

        @keyframes steamRise {
          0% { transform:translateY(0) scaleX(1); opacity:0; }
          20% { opacity:0.6; }
          80% { opacity:0.2; }
          100% { transform:translateY(-200px) scaleX(3); opacity:0; }
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(40px); }
          to { opacity:1; transform:translateY(0); }
        }

        @keyframes scrollPulse {
          0%,100% { opacity:0.3; transform:scaleY(0.8); }
          50% { opacity:1; transform:scaleY(1); }
        }
      `}</style>

    </section>
  );
}