import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import brands from "../assets/CategoriesHomedata";

const CategoriesHome = () => {
  const [hover, setHover] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const premiumProducts = brands.slice(0, 4);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      }
    );
  }, []);

  const handleHover = (i, enter) => {
    gsap.to(cardsRef.current[i], {
      y: enter ? -18 : 0,
      rotateX: enter ? 6 : 0,
      scale: enter ? 1.05 : 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section ref={sectionRef} className="w-full bg-black text-white overflow-hidden">

      {/* MARQUEE */}
      <div className="w-full h-10 bg-zinc-950 border-y border-white/10 flex items-center overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-xs tracking-[0.15em] uppercase text-zinc-400">
          ✦ Luxury Perfume ✦ Velvet Noir ✦ Royal Essence ✦ Premium Fragrance ✦ Exclusive Scents ✦
           ✦ Luxury Perfume ✦ Velvet Noir ✦ Royal Essence ✦ Premium Fragrance ✦ Exclusive Scents ✦

        </div>
      </div>

      {/* TITLE */}
      <div className="text-center mt-16 mb-12">
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em]">
          Premium <span className="text-zinc-500">Fragrance</span>
        </h1>
        <p className="text-zinc-500 mt-4 text-sm md:text-base">
          Luxury crafted scents for identity and presence
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {premiumProducts.map((item, i) => (
            <Link
              key={item.id}
              to={item.link}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={() => {
                setHover(item.id);
                handleHover(i, true);
              }}
              onMouseLeave={() => {
                setHover(null);
                handleHover(i, false);
              }}
              className="group perspective"
            >

              {/* CARD */}
              <div className="relative h-[300px] rounded-[42px] overflow-hidden border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black shadow-[0_40px_120px_rgba(0,0,0,0.85)] transition-all duration-500">

                {/* IMAGE (FULL LUXURY FOCUS) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[95%] h-[85%] object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-0 w-full p-7">
                  <p className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase">
                    Luxury Perfume
                  </p>

                  <h2 className="text-white text-2xl font-medium mt-2 tracking-wide">
                    {item.name}
                  </h2>
                </div>

                {/* HOVER PANEL */}
                <div
                  className={`absolute inset-0 bg-black/90 flex flex-col justify-end p-7 transition-opacity duration-500 ${
                    hover === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-zinc-400 text-[10px] tracking-[0.5em] uppercase">
                    Explore Collection
                  </p>

                  <h3 className="text-white text-3xl font-semibold mt-2">
                    {item.name}
                  </h3>

                  <button className="mt-6 h-11 px-6 rounded-full border border-white/20 bg-white/10 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition">
                    View Product
                  </button>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>

      {/* MARQUEE ANIMATION */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default CategoriesHome;