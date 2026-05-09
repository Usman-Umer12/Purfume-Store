import React from "react";
import image1 from "../assets/image1.png";
import {
    ArrowRight,
    Sparkles,
    Star,
    Waves,
} from "lucide-react";

const Collections = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black text-white">

            {/* 🌑 PREMIUM BACKGROUND */}
            <div className="absolute inset-0bg-gradient-to-br from-black via-zinc-950 to-black" />

            {/* LIGHT GLOW */}
            <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full" />

            {/* WAVE EFFECT */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-10">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[180px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39 56.44C188.4 81.14 64.18 118 0 98.67V0h1200v27.35c-80.89 29.4-177.84 56.86-296.18 49.92-121.57-7.11-196.1-51.6-306.76-56.14-110.66-4.53-181.59 33.58-275.67 35.31z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>

            <div className="relative mt-10 max-w-7xl mx-auto px-6 py-24">

                {/* HEADER */}
                <div className="text-center mb-20">

                    <div className="flex justify-center mb-5">
                        <div className="flex items-center gap-2 px-5 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs tracking-[0.35em] uppercase text-zinc-300">
                            <Sparkles size={14} />
                            Luxury Collection
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light tracking-[0.25em] leading-tight">
                        Timeless <span className="text-zinc-400">Elegance</span>
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto text-zinc-500 text-sm md:text-base leading-relaxed">
                        Discover a refined world of luxury fragrances crafted for identity,
                        sophistication and unforgettable presence.
                    </p>

                </div>

                {/* MAIN SHOWCASE */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* MINI TAG */}
                        <div className="flex items-center gap-3 text-zinc-400 text-xs tracking-[0.35em] uppercase mb-8">
                            <Waves size={16} />
                            Signature Series
                        </div>

                        {/* TITLE */}
                        <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-[0.12em]">
                            Crafted For
                            <br />
                            Modern Luxury
                        </h2>

                        {/* DESC */}
                        <p className="mt-8 text-zinc-500 leading-relaxed max-w-xl">
                            Every fragrance is designed to evoke emotion, confidence and
                            timeless sophistication. A balance of artistry and identity,
                            created for those who appreciate premium elegance.
                        </p>

                        {/* FEATURES */}
                        <div className="mt-10 space-y-5">

                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                                    <Star size={16} />
                                </div>

                                <div>
                                    <h4 className="text-sm tracking-[0.25em] uppercase">
                                        Exclusive Fragrance
                                    </h4>
                                    <p className="text-zinc-500 text-sm mt-1">
                                        Crafted with premium rare ingredients.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                                    <Sparkles size={16} />
                                </div>

                                <div>
                                    <h4 className="text-sm tracking-[0.25em] uppercase">
                                        Luxury Packaging
                                    </h4>
                                    <p className="text-zinc-500 text-sm mt-1">
                                        Minimal premium design with elegant detailing.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* BUTTON */}
                        <div className="mt-12">

                            <button className="group flex items-center gap-3 px-7 h-12 rounded-full bg-white text-black text-xs tracking-[0.3em] uppercase hover:bg-zinc-300 transition">

                                Explore Collection

                                <ArrowRight
                                    size={16}
                                    className="transition group-hover:translate-x-1"
                                />

                            </button>

                        </div>

                    </div>

                    {/* RIGHT IMAGE SIDE */}
                    <div className="relative flex justify-center">

                        {/* GLOW */}
                        <div className="absolute w-[450px] h-[450px] bg-white/10 blur-[120px] rounded-full" />

                        {/* IMAGE CARD */}
                        <div className="relative group">

                            {/* BACK PANEL */}
                            <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl rotate-6 scale-95" />

                            {/* MAIN CARD */}
                            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-black/40 backdrop-blur-xl p-10">

                                <img
                                    src={image1}
                                    alt="Luxury Perfume"
                                    className="w-full max-w-[420px] object-contain transition duration-700 group-hover:scale-105"
                                />

                            </div>

                        </div>

                    </div>



                </div>
                {/* 🔥 LUXURY PRODUCTS SHOWCASE */}
                <div className="relative mt-32">

                    {/* SECTION HEADER */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">

                        <div>
                            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500">
                                Premium Selection
                            </p>

                            <h2 className="mt-4 text-4xl md:text-6xl font-light tracking-[0.15em]">
                                Featured <span className="text-zinc-400">Products</span>
                            </h2>
                        </div>

                        <button className="group flex items-center gap-3 px-7 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">

                            View All

                            <ArrowRight
                                size={16}
                                className="transition group-hover:translate-x-1"
                            />

                        </button>

                    </div>

                    {/* PRODUCTS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {[...Array(16)].map((_, i) => (

                            <div
                                key={i}
                                className="group relative rounded-[34px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl hover:-translate-y-3 transition-all duration-700"
                            >

                                {/* CARD GLOW */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                                {/* IMAGE AREA */}
                                <div className="relative h-[340px] flex items-center justify-center overflow-hidden">

                                    {/* SOFT GLOW */}
                                    <div className="absolute w-[240px] h-[240px] rounded-full bg-white/10 blur-[80px]" />

                                    {/* PRODUCT IMAGE */}
                                    <img
                                        src={image1}
                                        alt="Luxury Perfume"
                                        className="relative z-10 w-[78%] object-contain transition duration-700 group-hover:scale-110 group-hover:rotate-2"
                                    />

                                    {/* FLOATING TAG */}
                                    <div className="absolute top-5 left-5 px-4 h-8 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl flex items-center text-[10px] tracking-[0.3em] uppercase text-zinc-300">
                                        New Drop
                                    </div>

                                </div>

                                {/* PRODUCT INFO */}
                                <div className="relative p-6">

                                    {/* CATEGORY */}
                                    <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500">
                                        Luxury Perfume
                                    </p>

                                    {/* NAME */}
                                    <h3 className="mt-3 text-xl tracking-wide font-light">
                                        Velvet Noir Essence
                                    </h3>

                                    {/* DESC */}
                                    <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                                        Crafted with deep woody accords and refined floral notes for a
                                        timeless signature scent.
                                    </p>

                                    {/* PRICE + BTN */}
                                    <div className="mt-6 flex items-center justify-between">

                                        <div>
                                            <p className="text-zinc-500 text-xs uppercase tracking-[0.25em]">
                                                Price
                                            </p>

                                            <h4 className="mt-1 text-lg font-medium">
                                                $249
                                            </h4>
                                        </div>

                                        {/* BUTTON */}
                                        <button className="group/button w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-white transition-all duration-500">

                                            <ArrowRight
                                                size={16}
                                                className="transition-all duration-500 group-hover/button:text-black group-hover/button:translate-x-0.5"
                                            />

                                        </button>

                                    </div>

                                </div>

                                {/* LIGHT SWEEP EFFECT */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000">

                                    <div className="absolute top-0 left-[-120%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[140%] transition-all duration-1000" />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>


            </div>



        </section>
    );
};

export default Collections;