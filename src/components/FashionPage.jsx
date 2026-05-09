import { Heart, Shield, Truck } from "lucide-react";
import F1 from "../assets/image1.png";
import { useState, useEffect } from "react";

const FashionPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    Days: 2,
    Hours: 12,
    Minutes: 45,
    Seconds: 18,
  });

  useEffect(() => {
    const toTotalSeconds = (t) =>
      t.Days * 86400 + t.Hours * 3600 + t.Minutes * 60 + t.Seconds;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const total = toTotalSeconds(prev);

        if (total <= 0) {
          clearInterval(timer);
          return { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
        }

        const next = total - 1;

        return {
          Days: Math.floor(next / 86400),
          Hours: Math.floor((next % 86400) / 3600),
          Minutes: Math.floor((next % 3600) / 60),
          Seconds: Math.floor(next % 60),
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white">

      {/* 🌑 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900" />

      {/* glow effects */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-zinc-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* TAG */}
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-400">
              Limited Time Offer
            </p>

            {/* TITLE */}
            <h1 className="mt-4 text-4xl md:text-6xl font-light leading-tight tracking-wide">
              Premium{" "}
              <span className="text-zinc-400">Luxury Purfume</span>{" "}
              Collection
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-zinc-400 leading-relaxed text-sm md:text-base max-w-xl">
              Discover exclusive premium timepieces with up to 30% discount.
              Crafted with precision, elegance and timeless identity.
            </p>

            {/* COUNTDOWN */}
            <div className="mt-10 grid grid-cols-4 gap-3 max-w-md">

              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="bg-white/5 border border-white/10 rounded-2xl py-4 text-center backdrop-blur-xl hover:bg-white/10 transition"
                >
                  <div className="text-xl font-semibold tracking-wider">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-1">
                    {unit}
                  </div>
                </div>
              ))}

            </div>

            {/* FEATURES */}
            <div className="mt-10 flex flex-wrap gap-5">

              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Truck size={18} />
                Free Shipping
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Shield size={18} />
                2-Year Warranty
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Heart size={18} />
                30-Day Returns
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center">

            {/* IMAGE CARD */}
            <div className="relative w-full max-w-md rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.8)] group">

              <img
                src={F1}
                alt="watch"
                className="w-full h-[520px] object-cover scale-105 group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* PRICE TAG */}
              <div className="absolute bottom-6 left-6 bg-black/60 border border-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl">

                <p className="text-xs text-zinc-400 line-through">
                  $899.99
                </p>

                <p className="text-lg font-semibold">
                  $432.43
                </p>

                <p className="text-[10px] tracking-[0.3em] text-green-400 uppercase mt-1">
                  Save 30%
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FashionPage;