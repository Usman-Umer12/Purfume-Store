import React, { useRef } from "react";
import T1 from "../assets/image1.png";
import T2 from "../assets/image1.png";
import T3 from "../assets/image1.png";
import T4 from "../assets/image1.png";

const cards = [
  {
    id: 1,
    title: "Elegance and Precision — Asha K.",
    meta: "July 5, 2025",
    excerpt:
      "A crystal watch that catches light beautifully. Perfect for both gala nights and daily wear.",
    img: T1,
  },
  {
    id: 2,
    title: "Built Like a Tank — Rohit S.",
    meta: "June 26, 2025",
    excerpt:
      "Shock resistant, durable and made for extreme use. Truly a daily beast watch.",
    img: T2,
  },
  {
    id: 3,
    title: "Sleek & Subtle — Priya M.",
    meta: "May 15, 2025",
    excerpt:
      "Minimal design with premium finish. Perfect for office and casual wear.",
    img: T3,
  },
  {
    id: 4,
    title: "A Time Capsule — Arjun D.",
    meta: "May 2, 2025",
    excerpt:
      "Vintage inspired design with modern engineering. A true collector piece.",
    img: T4,
  },
];

const TestimonialsPage = () => {
  const scroller = useRef(null);

  return (
    <section className="relative w-full overflow-hidden text-white">

      {/* 🌑 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900" />

      {/* SOFT LIGHT GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.35em] uppercase">
            Purfume Journal
          </h2>
          <p className="text-zinc-500 mt-4 text-sm tracking-[0.25em]">
            Stories of craftsmanship & timeless design
          </p>
        </div>

        {/* SCROLLER */}
        <div
          ref={scroller}
          className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-2 pb-10"
        >

          {cards.map((c) => (
            <article
              key={c.id}
              className="min-w-[320px] md:min-w-[420px] group relative rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="h-[320px] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6">

                <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400">
                  {c.meta}
                </p>

                <h3 className="text-lg md:text-xl font-medium mt-2 leading-snug">
                  {c.title}
                </h3>

                <p className="text-zinc-400 text-sm mt-3 line-clamp-3">
                  {c.excerpt}
                </p>

              </div>

              {/* HOVER LAYER */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">

                <button className="w-full h-11 rounded-full border border-white/20 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition">
                  Read Story
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>

      {/* hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </section>
  );
};

export default TestimonialsPage;