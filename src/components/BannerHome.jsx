import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import video from "../assets/purfume.mp4";

const BannerHome = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <div className="relative w-full h-[94vh] overflow-hidden text-white">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* VIDEO */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* DARK OVERLAY (IMPORTANT FOR READABILITY) */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* CONTENT */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">

        <div className="text-center max-w-3xl">

          {/* SMALL TAG */}
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-zinc-300">
            Luxury Perfume Collection
          </p>

          {/* MAIN HEADING */}
          <h1 className="mt-6 text-4xl md:text-6xl font-light tracking-[0.3em] leading-tight">
            Timeless <span className="text-zinc-300">Elegance</span>
          </h1>

          {/* SUB TEXT */}
          <p className="mt-6 text-sm md:text-base text-zinc-300 leading-relaxed">
            Discover exclusive fragrances crafted for identity, luxury and presence.
            Designed to leave a lasting impression.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            <button className="h-11 px-8 rounded-full bg-white text-black text-xs tracking-[0.3em] uppercase hover:bg-zinc-300 transition">
              Explore Collection
            </button>

            <button className="h-11 px-8 rounded-full border border-white/30 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition">
              View Story
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BannerHome;