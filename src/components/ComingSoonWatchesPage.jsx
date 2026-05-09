import React from "react";
import { comingSoonStyles } from "../assets/dummyStyles";

import CS1 from "../assets/image1.png";
import CS2 from "../assets/image1.png";
import CS3 from "../assets/image1.png";
import CS4 from "../assets/image1.png";
import CS5 from "../assets/image1.png";

const watches = [
  { id: 1, name: "Norqain Independence", price: 619000, imgUrl: CS1 },
  { id: 2, name: "Zenith Chronomaster", price: 1069200, imgUrl: CS2 },
  { id: 3, name: "Jacob & Co. Epic X", price: 3100000, imgUrl: CS3 },
  { id: 4, name: "Bvlgari Octo", price: 2450000, imgUrl: CS4 },
  { id: 5, name: "Louis Erard Excellence", price: 3300000, imgUrl: CS5 },
  { id: 1, name: "Norqain Independence", price: 619000, imgUrl: CS1 },
  { id: 2, name: "Zenith Chronomaster", price: 1069200, imgUrl: CS2 },
  { id: 3, name: "Jacob & Co. Epic X", price: 3100000, imgUrl: CS3 },
  { id: 4, name: "Bvlgari Octo", price: 2450000, imgUrl: CS4 },
  { id: 5, name: "Louis Erard Excellence", price: 3300000, imgUrl: CS5 },
  
];

const formatINR = comingSoonStyles.formatINR;

const ComingSoonWatchesPage = () => {
  return (
    <section className="relative w-full text-white overflow-hidden">

      {/* 🌌 UNIQUE LUXURY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900" />

      {/* GOLD LIGHT EFFECT */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-zinc-500/10 blur-[140px] rounded-full" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">

          <div>
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.25em]">
              New <span className="text-zinc-400">Arrivals</span>
            </h2>
            <p className="text-zinc-500 mt-3 tracking-[0.3em] uppercase text-xs">
              Coming Soon Luxury Purfumes
            </p>
          </div>

          <a
            href="/watches"
            className="mt-6 md:mt-0 text-xs tracking-[0.4em] uppercase border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            View All
          </a>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {watches.map((w) => (
            <div
              key={w.id}
              className="group relative rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] hover:scale-[1.03] transition-all duration-500"
            >

              {/* IMAGE AREA */}
              <div className="h-[320px] flex items-center justify-center p-4">
                <img
                  src={w.imgUrl}
                  alt={w.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* SHADOW OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

              {/* TEXT */}
              <div className="absolute bottom-0 w-full p-5">
                <h3 className="text-sm md:text-base font-medium tracking-wide">
                  {w.name}
                </h3>

                <p className="text-zinc-400 text-xs mt-1">
                  {formatINR(w.price)}
                </p>
              </div>

              {/* HOVER EFFECT LAYER */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-5">

                <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-400">
                  Luxury Watch
                </p>

                <h4 className="text-lg font-semibold mt-2">
                  {w.name}
                </h4>

                <button className="mt-4 h-10 rounded-full border border-white/20 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition">
                  Explore
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ComingSoonWatchesPage;